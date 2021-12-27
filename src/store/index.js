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
              price: "۲۰۰۰۰",
            },
            {
              image: "2cd43b_088cd3570604469c9a32fd0651cac073_mv2.png",
              name: "مرغ سوخاری",
              price: "۳۳۰۰۰",
            },
            {
              image: "Junk-Food-Hamburger-PNG-Download-Image.png",
              name: "ساندویچ مرغ",
              price: "۳۰۰۰۰",
            },
            {
              image: "Fries-PNG-HD-Quality.png",

              name: "سیب زمینی سرخ کرده",
              price: "۶۰۰۰",
            },
            {
              image: "580b57fcd9996e24bc43c1b2.png",
              name: "هات داگ",
              price: "۲۲۰۰۰",
            },
            {
              image: "58727f9ef3a71010b5e8ef05.png",
              name: "سمبوسه",
              price: "۴۰۰۰",
            },
            {
              image: "Cheese-Lasagna-PNG-High-Quality-Image.png",
              name: "لازانیا",
              price: "۲۰۰۰۰",
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
              price: "۵۰۰۰",
            },
            {
              image: "5b4324ccc051e602a568ccb6.png",
              name: "زیتون",
              price: "۶۰۰۰",
            },
            {
              image: "580b57fbd9996e24bc43c10f.png",
              name: "نوشابه قوطی",
              price: "۵۵۰۰",
            },
            {
              image: "Coca-Coal-Soda-PNG.png",
              name: "نوشابه قوطی",
              price: "۵۵۰۰",
            },
            {
              image: "Sauce-Bottle-PNG-Free-Download.png",
              name: "سس",
              price: "۸۵۰۰",
            },
            {
              image: "Water-Bottle-PNG-Picture.png",
              name: "آب معدنی(کوچک)",
              price: "۳۰۰۰",
            },
            {
              image: "Water-Bottle.png",
              name: "آب معدنی(بزرگ)",
              price: "۵۰۰۰",
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
