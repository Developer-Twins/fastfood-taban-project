<template>
  <div class="menu">
    <div class="clip-path"></div>
    <div class="bubbly">
      <router-link to="/menu/fastFood" class="bubbly-button"
        >فست فود ها</router-link
      >
      <router-link to="/menu/dessert" class="bubbly-button">دسر ها</router-link>
    </div>
    <the-loader
      :condition="$store.getters.getIsLoading && !$store.getters.getError"
    ></the-loader>
    <base-popup
      :boolean-popup="$store.state.popupFetchError"
      name-popup="popupFetchError"
    >
      <p class="fetch-error">
        اتصال شما به اینترت قطع شده است
      </p>
    </base-popup>
    <router-view></router-view>
  </div>
</template>

<script>
function btn() {
  var animateButton = function(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function() {
      e.target.classList.remove("animate");
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }
}
export default {
  mounted() {
    btn();
    this.$router.push("/menu/fastFood");
  },
  updated() {
    if (this.$route.path == "/menu") {
      this.$router.push("/menu/fastFood");
    }
  },
  methods: {},
};
</script>

<style></style>
