import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const TRANSLATIONS_EN = {
 welcome:"Welcome to the tutorial",
 
 
 keyWithCount: "Anne has bought {{count}} book",
 keyWithCount_plural: "Anne has bought {{count}} books"
};
export const TRANSLATIONS_ZH = {
  
  "welcome": "欢迎",
  
  "keyWithCount": "安妮买了 {{count}} 书",
  
  "number_format": "商店里有{{number, ','}}本书",
  "keyWithCount_plural": "安妮买了 {{count}} 图书"
 };

 export const TRANSLATIONS_ES ={
   "welcome": "bienvenida",
  
  "keyWithCount": "Anne ha comprado {{count}} libro",
  "keyWithCount_plural": "Anne ha comprado {{count}} libros",
  
  "number_format": "Hay {{number, ','}} libros en la tienda."
 }



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      es: {
        translation: TRANSLATIONS_ES
      },
     
      en: {
        translation: TRANSLATIONS_EN
      },
      zh: {
        translation: TRANSLATIONS_ZH
      }
    }
  });


export { i18n };