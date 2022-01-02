import { createStore } from "vuex";
import validate from "./modules/validationForm/index";
import auth from "./modules/auth/index";

import rootMutations from "./mutations";
import rootGetters from "./getters";
import rootActions from "./actions";

let store = createStore({
  modules: {
    validateModule: validate,
    authModule: auth,
  },
  state() {
    return {
      myStore: localStorage.getItem("listCart")
        ? JSON.parse(localStorage.getItem("listCart"))
        : [],
      totalQuantity: 0,
      totalPrice: 0,
      popupContactUs: false,
      popupFetchError: false,
      formType: "log-in",
      formTitle: "ورود",
      ourMenu: [
        {
          id: "fastFood",
          title: "منوی فست فودها",
          list: [
            {
              image: "Sandwich-Hamburger-PNG-Image.png",
              name: "همبرگر",
              price: "6۰۰۰۰",
            },
            {
              image: "2cd43b_088cd3570604469c9a32fd0651cac073_mv2.png",
              name: "مرغ سوخاری",
              price: "۹۰۰۰۰",
            },
            {
              image: "Junk-Food-Hamburger-PNG-Download-Image.png",
              name: "ساندویچ مرغ",
              price: "۸۰۰۰۰",
            },
            {
              image: "Fries-PNG-HD-Quality.png",

              name: "سیب زمینی سرخ کرده",
              price: "۲۰۰۰۰",
            },
            {
              image: "580b57fcd9996e24bc43c1b2.png",
              name: "هات داگ",
              price: "۷۰۰۰۰",
            },
            {
              image: "58727f9ef3a71010b5e8ef05.png",
              name: "سمبوسه",
              price: "۱۵۰۰۰",
            },
            {
              image: "Cheese-Lasagna-PNG-High-Quality-Image.png",
              name: "لازانیا",
              price: "۶۵۰۰۰",
            },
          ],
        },
        {
          id: "dessert",
          title: "منوی دسرها",
          list: [
            {
              image: "5a2ae9c1db68181c8f184d85.png",
              name: "ماست محلی",
              price: "۱۰۰۰۰",
            },
            {
              image: "5b4324ccc051e602a568ccb6.png",
              name: "زیتون",
              price: "۱۵۰۰۰",
            },
            {
              image: "580b57fbd9996e24bc43c10f.png",
              name: "نوشابه قوطی",
              price: "۱۰۰۰۰",
            },
            {
              image: "Coca-Coal-Soda-PNG.png",
              name: "نوشابه قوطی",
              price: "۱۰۰۰۰",
            },
            {
              image: "Sauce-Bottle-PNG-Free-Download.png",
              name: "سس",
              price: "۱۰۰۰۰",
            },
            {
              image: "Water-Bottle-PNG-Picture.png",
              name: "آب معدنی(کوچک)",
              price: "۵۰۰۰",
            },
            {
              image: "Water-Bottle.png",
              name: "آب معدنی(بزرگ)",
              price: "۱۰۰۰۰",
            },
          ],
        },
      ],
      isLoading: false,
      fetchError: false,
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});
export default store;
