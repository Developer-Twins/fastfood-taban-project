<template>
  <section class="section-form">&nbsp;
    <div class="form">
      <div class="book-form">
        <div class="container-form">
          <transition name="form" mode="out-in">
            <keep-alive>
              <component :is="$store.state.formType"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
      <div class="book-imgs">
        <div class="book-imgs__group book-imgs__group1">
          <div class="book-imgs__img1 book-imgs__img">
            <img src="../../../public/images/img5/img-17.jpeg" />
          </div>
        </div>
        <h1 class="book-imgs__title">
          <span>{{ getFormTitle }}</span> در رستوران تابان
        </h1>
        <div class="book-imgs__group book-imgs__group2">
          <div class="book-imgs__img2 book-imgs__img">
            <img src="../../../public/images/img5/img-20.jpeg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SignUp from "../SignUp.vue";
import LogIn from "../LogIn.vue";

export default {
  components: {
    SignUp,
    LogIn,
  },
  computed: {
    getFormTitle() {
      return this.$store.getters.getFormTitle;
    },
  },
};
</script>

<style></style>
