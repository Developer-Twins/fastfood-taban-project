<template>
  <!-- <div
    class="loader"
    v-if="condition"
  >
    <img src="../../public/loader/Disk-1s-200px.gif" alt="" />
  </div> -->
  <div class="spinner" v-if="condition">
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["condition"],
};
</script>

<style></style>
