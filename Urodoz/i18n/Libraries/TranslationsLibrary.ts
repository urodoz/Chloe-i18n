/// <reference path="../pluginReferences.ts" />

/// <reference path="TranslationsCollection.ts" />

module Urodoz.i18n.Libraries {

    /**
     * @class Urodoz.i18n.Libraries.TranslationsLibrary
     */
    export class TranslationsLibrary {

        public currentTranslationSet:Backbone.Model;

        public translationCollections:any = {};

        public currentLocale:string;

        public initModel():void {
            this.currentTranslationSet = new Backbone.Model();
        }

        /**
         * Adds a translation to the locale given library
         */
        public addTranslation(locale:string, translationKey:string, translation:string):void {
            //Init library model
            if(!_.has(this.translationCollections, locale)) {
                this.translationCollections[locale] = new Urodoz.i18n.Libraries.TranslationsCollection();
            };
            this.translationCollections[locale].addTranslation(translationKey, translation);
        }

        public setLocale(locale:string):void {

            var self:any = this;
            this.currentLocale = locale;

            //Dump the data on the current translations
            var attributesToDump = this.translationCollections[locale].attributes;
            var keys = _.keys(attributesToDump);

            _.each(keys, function(key:string){
                self.currentTranslationSet.set(key, attributesToDump[key]);
            });
        }

        /**
         * Adds an object of translations associative array to the
         * locale selected
         */
        public addTranslations(locale:string, translationObject:any):void {
            var self:any = this;
            var translationKeys:string[] = _.keys(translationObject);
            _.each(translationKeys, function(translationKey:string){
                self.addTranslation(locale, translationKey, translationObject[translationKey]);
            })
        }

    }

}
