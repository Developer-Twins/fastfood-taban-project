<template>
  <nav-part></nav-part>

  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <contact-us> </contact-us>
</template>

<script>
String.prototype.toEnglishDigit = function() {
  var find = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  var replace = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var replaceString = this;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};
export default {
  mounted() {
    this.$store.commit("updatetotalQuantity");
    this.$store.commit("updatetotalPrice");
  },
  // created() {
  //   this.$store.commit("setUserInfo");
  //   this.$store.dispatch("changeLoading", true);
  //   fetch(
  //     "https://restaurant-project-7b45f-default-rtdb.firebaseio.com/data.json",
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify([
  //         {
  //           id: "fastFood",
  //           title: "منوی فست فودها",
  //           list: [
  //             {
  //               image: "Sandwich-Hamburger-PNG-Image.png",
  //               name: "همبرگر",
  //               price: "۲۰۰۰۰",
  //             },
  //             {
  //               image: "2cd43b_088cd3570604469c9a32fd0651cac073_mv2.png",
  //               name: "مرغ سوخاری",
  //               price: "۳۳۰۰۰",
  //             },
  //             {
  //               image: "Junk-Food-Hamburger-PNG-Download-Image.png",
  //               name: "ساندویچ مرغ",
  //               price: "۳۰۰۰۰",
  //             },
  //             {
  //               image: "Fries-PNG-HD-Quality.png",

  //               name: "سیب زمینی سرخ کرده",
  //               price: "۶۰۰۰",
  //             },
  //             {
  //               image: "580b57fcd9996e24bc43c1b2.png",
  //               name: "هات داگ",
  //               price: "۲۲۰۰۰",
  //             },
  //             {
  //               image: "58727f9ef3a71010b5e8ef05.png",
  //               name: "سمبوسه",
  //               price: "۴۰۰۰",
  //             },
  //             {
  //               image: "Cheese-Lasagna-PNG-High-Quality-Image.png",
  //               name: "لازانیا",
  //               price: "۲۰۰۰۰",
  //             },
  //           ],
  //         },
  //         {
  //           id: "dessert",
  //           title: "منوی دسرها",
  //           list: [
  //             {
  //               image: "5a2ae9c1db68181c8f184d85.png",
  //               name: "ماست محلی",
  //               price: "۵۰۰۰",
  //             },
  //             {
  //               image: "5b4324ccc051e602a568ccb6.png",
  //               name: "زیتون",
  //               price: "۶۰۰۰",
  //             },
  //             {
  //               image: "580b57fbd9996e24bc43c10f.png",
  //               name: "نوشابه قوطی",
  //               price: "۵۵۰۰",
  //             },
  //             {
  //               image: "Coca-Coal-Soda-PNG.png",
  //               name: "نوشابه قوطی",
  //               price: "۵۵۰۰",
  //             },
  //             {
  //               image: "Sauce-Bottle-PNG-Free-Download.png",
  //               name: "سس",
  //               price: "۸۵۰۰",
  //             },
  //             {
  //               image: "Water-Bottle-PNG-Picture.png",
  //               name: "آب معدنی(کوچک)",
  //               price: "۳۰۰۰",
  //             },
  //             {
  //               image: "Water-Bottle.png",
  //               name: "آب معدنی(بزرگ)",
  //               price: "۵۰۰۰",
  //             },
  //           ],
  //         },
  //       ]),
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log("menu", data);
  //       this.$store.dispatch("changeLoading", false);
  //       this.$store.state.ourMenu = data;
  //     })
  //     .catch(() => {
  //       this.$store.dispatch("changeError", true);
  //       this.$store.dispatch("changeLoading", false);
  //       if (!this.$store.state.isLoading && this.$store.state.fetchError) {
  //         this.$store.commit("updatePopup", {
  //           name: "popupFetchError",
  //           mode: "open",
  //         });
  //       }
  //     });
  // },
};
</script>
<style lang="scss">
@import "../public/Sass/index";
</style>
