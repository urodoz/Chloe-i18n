/// <reference path="../pluginReferences.ts" />

module Urodoz.i18n.Libraries {

    /**
     * @class Urodoz.i18n.Libraries.TranslationsCollection
     */
    export class TranslationsCollection extends Chloe.Base.Base {

        public locale:string;

        public addTranslation(translationKey:string, translation:string):void {
            this.set(translationKey, translation);
        }

    }

}
