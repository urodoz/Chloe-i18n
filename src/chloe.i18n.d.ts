/// <reference path="../../Chloe/Compilation/chloe.min.d.ts" />
declare module Urodoz.i18n {
    class Plugin extends Chloe.Base.AbstractBasePlugin {
        public tokenSubscribers(): any[];
        public componentLibraries(): any;
        public mapping(): any;
    }
}
declare module Urodoz.i18n.Subscriber {
    class i18nSubscriber extends Chloe.Base.Base implements Chloe.Base.Subscribers.UpdaterSubscriberInterface {
        public update(data: any): any;
    }
}
declare module Urodoz.i18n.Libraries {
    class TranslationsCollection extends Chloe.Base.Base {
        public locale: string;
        public addTranslation(translationKey: string, translation: string): void;
    }
}
declare module Urodoz.i18n.Libraries {
    class TranslationsLibrary {
        public translationCollections: any;
        public addTranslation(locale: string, translationKey: string, translation: string): void;
    }
}
