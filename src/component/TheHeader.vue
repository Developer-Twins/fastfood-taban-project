<template>
  <header class="home-header">
    <div class="header">
      <div class="header__icons">
        <i class="fab fa-telegram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-whatsapp"></i>
      </div>
      <div class="header__img">
        <img
          id="pictur1"
          class="header__pictur1"
          src="images/img1/Plates-Free-PNG-Image.png"
          alt="load picture"
        />
        <img
          class="header__pictur2"
          src="images/img1/Pepperoni-Dominos-Pizza.png"
          alt="load picture"
        />
      </div>
      <div class="header__content">
        <h1 class="header__caption">به فست فودی تابان خوش آمدید</h1>
        <p class="header__describe">{{ text }}</p>
        <p class="header__footer">پذیرای حضور گرمتان هستیم</p>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      textAnimate:null,
      text: "",
      sentence : ' غذایی لذیذ و با کیفیتی عالی و خدماتی بی نظیر',
      index:0
    };
  },
  methods: {
    write() {
      this.index++;
      this.text = this.sentence.trim().slice(0, this.index);
      if (this.index > this.text.length) {
        clearInterval(this.textAnimate);
      }
    },
  },
  created() {
    this.textAnimate=setInterval(this.write,80)
  },
};
</script>

<style></style>
