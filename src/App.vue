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
};
</script>
<style lang="scss">
@import "../public/Sass/index";
</style>
