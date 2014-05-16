var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Urodoz;
(function (Urodoz) {
    (function (i18n) {
        var Plugin = (function (_super) {
            __extends(Plugin, _super);
            function Plugin() {
                _super.apply(this, arguments);
            }
            Plugin.prototype.tokenSubscribers = function () {
                return [
                    new Urodoz.i18n.Subscriber.i18nSubscriber()
                ];
            };

            Plugin.prototype.componentLibraries = function () {
                return {};
            };

            Plugin.prototype.mapping = function () {
                return {};
            };
            return Plugin;
        })(Chloe.Base.AbstractBasePlugin);
        i18n.Plugin = Plugin;
    })(Urodoz.i18n || (Urodoz.i18n = {}));
    var i18n = Urodoz.i18n;
})(Urodoz || (Urodoz = {}));
var Urodoz;
(function (Urodoz) {
    (function (i18n) {
        (function (Subscriber) {
            var i18nSubscriber = (function (_super) {
                __extends(i18nSubscriber, _super);
                function i18nSubscriber() {
                    _super.apply(this, arguments);
                }
                i18nSubscriber.prototype.update = function (data) {
                    if (_.isString(data)) {
                        if (/^urodoz\:i18n\:$/.test(data)) {
                            var localizedIdentifier = data.replace('urodoz:i18n:', '');

                            return chloe.create({
                                "xtype": "text",
                                "bindings": [
                                    {
                                        "model": ""
                                    }
                                ]
                            });
                        }
                    }

                    return data;
                };
                return i18nSubscriber;
            })(Chloe.Base.Base);
            Subscriber.i18nSubscriber = i18nSubscriber;
        })(i18n.Subscriber || (i18n.Subscriber = {}));
        var Subscriber = i18n.Subscriber;
    })(Urodoz.i18n || (Urodoz.i18n = {}));
    var i18n = Urodoz.i18n;
})(Urodoz || (Urodoz = {}));
var Urodoz;
(function (Urodoz) {
    (function (i18n) {
        (function (Libraries) {
            var TranslationsCollection = (function (_super) {
                __extends(TranslationsCollection, _super);
                function TranslationsCollection() {
                    _super.apply(this, arguments);
                }
                TranslationsCollection.prototype.addTranslation = function (translationKey, translation) {
                    this.set(translationKey, translation);
                };
                return TranslationsCollection;
            })(Chloe.Base.Base);
            Libraries.TranslationsCollection = TranslationsCollection;
        })(i18n.Libraries || (i18n.Libraries = {}));
        var Libraries = i18n.Libraries;
    })(Urodoz.i18n || (Urodoz.i18n = {}));
    var i18n = Urodoz.i18n;
})(Urodoz || (Urodoz = {}));
var Urodoz;
(function (Urodoz) {
    (function (i18n) {
        (function (Libraries) {
            var TranslationsLibrary = (function () {
                function TranslationsLibrary() {
                    this.translationCollections = {};
                }
                TranslationsLibrary.prototype.addTranslation = function (locale, translationKey, translation) {
                    if (!_.has(this.translationCollections, locale)) {
                        this.translationCollections[locale] = new Urodoz.i18n.Libraries.TranslationsCollection();
                    }
                    ;
                    this.translationCollections[locale].addTranslation(translationKey, translation);
                };
                return TranslationsLibrary;
            })();
            Libraries.TranslationsLibrary = TranslationsLibrary;
        })(i18n.Libraries || (i18n.Libraries = {}));
        var Libraries = i18n.Libraries;
    })(Urodoz.i18n || (Urodoz.i18n = {}));
    var i18n = Urodoz.i18n;
})(Urodoz || (Urodoz = {}));
//# sourceMappingURL=chloe.i18n.js.map
