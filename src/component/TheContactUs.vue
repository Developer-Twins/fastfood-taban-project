<template>
  <base-popup
    :boolean-popup="$store.state.popupContactUs"
    name-popup="popupContactUs"
  >
    <div class="concat contact-about">
      <div class="concat__address contact-about__address">
        تهران میدان آزادی بزرگراه جناه..
      </div>
      <div class="concat__call contact-about__call">..552100</div>
    </div>
    <img
      class="contact-us__img"
      src="../../public/images/img3/Ice-Water.png"
      alt=""
    />
    <div class="contact__icons">
      <i class="fab fa-telegram"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-whatsapp"></i>
    </div>
  </base-popup>
</template>

<script>
export default {};
</script>

<style></style>
