<template>
  <footer class="footer-main" id="op">
    <div class="totop" @click="toTop">
      <i class="fas fa-angle-double-up"></i>
    </div>

    <div class="footer-link">
      <router-link to="/menu">منوها</router-link>
      <router-link to="/aboutUs">درباره ما</router-link>
    </div>

    <div class="concat">
      <div class="concat__address">
        تهران میدان آزادی بزرگراه جناه..
      </div>
      <div class="concat__call">..552100</div>
    </div>
    <p class="copy">&copy;All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
