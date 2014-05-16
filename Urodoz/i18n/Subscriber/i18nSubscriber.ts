/// <reference path="../pluginReferences.ts" />

module Urodoz.i18n.Subscriber {

    declare var chloe:any;

    /**
     * @class Urodoz.i18n.Subscriber.i18nSubscriber
     * @extends Chloe.Base.Base
     * @mixins Chloe.Base.Subscribers.UpdaterSubscriberInterface
     */
    export class i18nSubscriber extends Chloe.Base.Base implements Chloe.Base.Subscribers.UpdaterSubscriberInterface {

         update (data:any):any {

             if(_.isString(data)) {
                 if(/^urodoz\:i18n\:.*$/.test(data)) {

                     //Extracting the localized string and creating the component with binding
                     var localizedIdentifier = data.replace('urodoz:i18n:', '');

                     var seed = chloe.ID();
                     var component = chloe.create({
                         "xtype": "text",
                         "id": seed,
                         "text": chloe.get("libraries")
                             .get("i18n")
                             .currentTranslationSet
                             .get(localizedIdentifier)
                     });

                     //Adding listener
                     chloe.get("libraries")
                         .get("i18n")
                         .currentTranslationSet
                         .on("change:"+localizedIdentifier, function(model, value, options){
                            chloe.getCmp(seed).set("text", value);
                         });

                     return component;
                 }
             }

             return data;
         }
    }

}