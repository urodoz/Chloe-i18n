Chloe-i18n
==========

Plugin i18n for Chloe framework (https://github.com/PureBilling/Chloe)

Extends the text component to support translations. The translations are synchronized through Chloe.Model.BaseModel data binding and adds translation library support on chloe tools

Installation as Javascript plugin
---------------------------------

To install the library to use it as a javascript plugin , you can use the bower installation :

```
bower install chloe-i18n
```

Installing the Typescript sources
---------------------------------

To install the typescript sources, clone this github repository. You should download the dependencies after
the clone of the repository

```
git clone https://github.com/urodoz/Chloe-i18n.git ChloeI18n
cd ChloeI18n
bower install
npm install
```

You can compile with the default grunt task

```
grunt
```

How to add i18n to your chloe application
-----------------------------------------

You should load your translations on the i18n library on chloe application. For example:

```js
chloe.get("libraries").get("i18n").addTranslations("en",
    {
        "menu.label1": "First Menu",
        "menu.label2": "Second Menu"
    }
);
chloe.get("libraries").get("i18n").addTranslations("es",
    {
        "menu.label1": "Primer Menu",
        "menu.label2": "Segundo Menu"
    }
);
```

Once the translations are loaded on the application, you can setup the application locale as follows:

```
chloe.get("libraries").get("i18n").setLocale("en");
```

Now all your text components will accept i18n tokens, to bind the model of your components to your
translations. All chloe tokens follow the next structure <%urodoz:i18n:{translationKey}%> . Example of token :

```js
{
    "xtype": "menu-item",
    "text": "<%urodoz:i18n:menu.label1%>",
    "icon": "files-o",
    "listeners": {
        "click": function(elem) {

        }
    }
}
```

The text will be binded to the value of the locale of the application. You can change the locale in live
on the application, and all your i18n text tags will change according the locale selected of the application.
