/// <reference path="pluginReferences.ts" />

module Urodoz.i18n {

    /**
     * @class Urodoz.i18n.Plugin
     * @extends Chloe.Base.AbstractBasePlugin
     */
    export class Plugin extends Chloe.Base.AbstractBasePlugin {

        /**
         * @inheritdoc
         */
        tokenSubscribers():any[] {
            return [
                new Urodoz.i18n.Subscriber.i18nSubscriber()
            ];
        }

        /**
         * @inheritdoc
         */
        componentLibraries():any {
            var i18nLibrary = new Urodoz.i18n.Libraries.TranslationsLibrary();
            i18nLibrary.initModel();

            return {
                "i18n": i18nLibrary
            };
        }

        /**
         * @inheritdoc
         */
        mapping():any {
            return {

            };
        }

    }

}