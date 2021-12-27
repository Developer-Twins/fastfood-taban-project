<template>
  <div
    class="contact-background"
    v-if="booleanPopup"
    @click="closePopup({name:namePopup, mode:'close'})"
  ></div>

  <transition name="popup">
    <div class="contact-us" v-if="booleanPopup">
      <div class="contact-us__close" @click="closePopup({name:namePopup , mode:'close'})">
        <i class="fas fa-times"></i>
      </div>
      <slot></slot>
    </div>
  </transition>
  
</template>

<script>
export default {
  props:['booleanPopup','namePopup'],
  methods: {
    closePopup(value) {
      this.$store.commit("updatePopup", value);
    },
  },
};
</script>

<style></style>
