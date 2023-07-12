import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ru: {
        translation: {
         header: {
          part1: "наши магазины",
          part2: "юридичиским лицам",
          part3: "покупка в рассрочку",
          part4: "способы оплаты",
          part5: "Контакт центр",
         },
         catalog: {
          part1: "Каталог",
          part2: "Акции",
          part3: "Кондиционеры",
          part4: "Смартфоны",
          part5: "Холодильники",
          part6: "Пылесосы",
          part7: "Ноутбуки",
          part8: "Телевизоры",
          part9: "Все Катигории"
         },
         navbar: {
          part1: "Все категории",
          part2: "Техника для дома",
          part3: "Офисная техника",
          part4: "Техника для кухни",
          part5: "Посуда для дома",
          part6: "Товары для авто",
          part7: "Климатическая техника",
          part8: "Телевизоры и телекарты",
          part9: " Статус заказа",
          part10: "Вход",
          part11: "Сравнение",
          part12: "Избранное",
          part13: "Корзина"
         },
         CategoryCard: {
          part1: "Популярные категории",
          part2: "КОНДИЦИОНЕРЫ",
          part3: "СМАРТФОНЫ",
          part4: "ПЫЛЕСОСЫ",
          part5: "ПЛАНШЕТЫ",
          part6: "Холодильники",
          part7: "ТЕЛЕВИЗОРЫ",
          part8: "ФЕНЫ",
          part9: "СТИРАЛЬНЫЕ",
          part10: "МАШИНЫ",
         }
        }
      },
      uz: {
        translation: {
          header: {
            part1: "bizning magazinlar",
            part2: "yuridik shaxslar",
            part3: "nasiyaga xarid",
            part4: "tulash usullari",
            part5: "boglanish uchun raqam",
          },
          catalog: {
            part1: "katalog",
            part2: "aksiyalar",
            part3: "sovutgichlar",
            part4: "smartfonlar",
            part5: "muzlatgichlar",
            part6: "changyutgichlar",
            part7: "noutbuklar",
            part8: "televizorlar",
            part9: "barcha kategoriyalar"
           },
           navbar: {
          part1: "barcha kategoriyalar",
          part2: "uy jihozlari",
          part3: "offis texnikasi",
          part4: "oshxona jihozlari",
          part5: "uy idishlari",
          part6: "avto mahsulotlari",
          part7: "iqlim texnikalari",
          part8: "televizor va telekarta",
          part9: "buyurtmalar",
          part10: "kirish",
          part11: "taqqoslash",
          part12: "sevimlilar",
          part13: "savatcha"
           },
           CategoryCard: {
            part1: "",
            part2: "",
            part3: "",
            part4: "",
            part5: "",
            part6: "",
            part7: "",
            part8: "",
            part9: "",
            part10: "",
           }
        }
      }
    }
  });

export default i18n;