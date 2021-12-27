<template>
  <div
    class="mobile-nav"
    :class="[{ 'open-nav': isNavOpen }, { 'close-nav': !isNavOpen }]"
  >
    <ul class="mobile-nav__list">
      <li class="mobile-nav__title">
        <router-link
          to="/home"
          class="mobile-nav__link"
          @click="mobileNavClose()"
        >
          <i class="fas fa-home"></i> <span>خانه</span>
        </router-link>
      </li>
      <li class="mobile-nav__title">
        <router-link
          to="/menu"
          class="mobile-nav__link"
          @click="
            openPopup({ name: 'popupFetchError', mode: 'open' }),
              mobileNavClose()
          "
        >
          <i class="fas fa-edit"></i> <span>منو</span>
        </router-link>
      </li>
      <li class="mobile-nav__title">
        <a
          class="mobile-nav__link"
          :class="{ 'router-link-active': $store.state.popupContactUs }"
          @click="
            openPopup({ name: 'popupContactUs', mode: 'open' }),
              mobileNavClose()
          "
        >
          <i id="f" class="fas fa-headphones"></i> <span>ارتباط با ما</span>
        </a>
      </li>
      <li class="mobile-nav__title">
        <router-link
          to="/aboutUs"
          class="mobile-nav__link"
          @click="mobileNavClose()"
        >
          <i class="fas fa-book"></i> <span>درباره ما</span>
        </router-link>
      </li>
    </ul>
  </div>
  <nav class="nav">
    <ul class="navigation">
      <div
        class="hamberger"
        @click="mobileNavToggle()"
        :class="{ 'close-nav': isNavOpen }"
      >
        <span class="hamberger__line"></span>
        <span class="hamberger__line"></span>
        <span class="hamberger__line"></span>
      </div>

      <li class="navigation__title dekstop-nav-title">
        <router-link to="/home" class="navigation__link">
          <i class="fas fa-home"></i> <span>خانه</span>
        </router-link>
      </li>
      <li class="navigation__title dekstop-nav-title">
        <router-link
          to="/menu"
          class="navigation__link"
          @click="openPopup({ name: 'popupFetchError', mode: 'open' })"
        >
          <i class="fas fa-edit"></i> <span>منو</span>
        </router-link>
      </li>
      <li class="navigation__title dekstop-nav-title">
        <a
          class="navigation__link"
          :class="{ 'router-link-active': $store.state.popupContactUs }"
          @click="openPopup({ name: 'popupContactUs', mode: 'open' })"
        >
          <i id="f" class="fas fa-headphones"></i> <span>ارتباط با ما</span>
        </a>
      </li>
      <li class="navigation__title dekstop-nav-title">
        <router-link to="/aboutUs" class="navigation__link">
          <i class="fas fa-book"></i> <span>درباره ما</span>
        </router-link>
      </li>

      <li
        class="navigation__form navigation__title"
        v-if="!$store.state.authModule.localStorageToken"
      >
        <router-link to="/form" class="navigation__form-link">
          <div class="sign-up-in">
            <i class="fas fa-user-alt sign-up-in__i"></i>
            <p class="sign-up-in__p">ورود / عضویت</p>
          </div>
        </router-link>
      </li>
      <div class="container__nav" v-else>
        <li class="navigation__form navigation__title " @click="logOut">
          <div class="navigation__logout">
            <div>
              <i class="fas fa-user-alt"></i>خروج /
              {{ $store.state.authModule.userName }}
            </div>
          </div>
        </li>

        <li class="navigation__title">
          <span class="label">{{ totalQuantity }}</span>
          <router-link to="/store" class="navigation__link shopping-basket">
            <i class="fas fa-shopping-basket"></i>
          </router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  watch: {
    "$store.state.authModule.localStorageToken"() {
      this.$store.state.authModule.localStorageToken = localStorage.getItem(
        "userToken"
      );
    },
  },
  computed: {
    totalQuantity() {
      return this.$store.state.totalQuantity;
    },
  },
  methods: {
    mobileNavToggle() {
      this.isNavOpen = !this.isNavOpen;
    },
    mobileNavClose() {
      this.isNavOpen = false;
    },
    logOut() {
      this.$store.commit("deleteUserInfo");
      localStorage.removeItem("userToken");
      this.$store.state.authModule.localStorageToken = localStorage.getItem(
        "userToken"
      );
      this.$router.replace("/home");
    },
    goToBottom() {
      window.scrollTo({ bottom: 0, behavior: "smooth" });
    },
    openPopup(value) {
      if (value.name === "popupContactUs") {
        this.$store.commit("updatePopup", value);
      } else if (
        value.name === "popupFetchError" &&
        this.$store.state.fetchError &&
        !this.$store.state.isLoading
      ) {
        this.$store.commit("updatePopup", value);
      }
    },
  },
};

window.addEventListener("scroll", () => {
  let nav = document.querySelector(".nav");
  if (window.scrollY > 45) {
    nav.classList.add("nav--active");
  } else {
    nav.classList.remove("nav--active");
  }
});
</script>

<style></style>
