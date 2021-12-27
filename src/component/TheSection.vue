<template>
  <section class="sec3">
    <div class="sec3-title">
      <h1>چرا فست فودی تابان </h1><span>؟</span>
    </div>
    
    <img
      class="sec3__img1"
      src="../../public/images/img1/Pepperoni-Dominos-Pizza-PNG-Free-Download.png"
      alt="pizza"
      ref="a"
    />

    <p class="sec3__prag1">
      فست فود تابان از سال ۸۰ فعالیت خودش را آغاز کرد و همیشه هدفش در جهت کسب
      رضایت شما مشتریان عزیز بوده است.
    </p>
    <img
      src="../../public/images/img1/Barbecue-Hamburger-PNG.png"
      class="sec3__img2"
    />
    <p class="sec3__prag2">
      شروعی دلنشین با انتخابی هوشمندانه و متاثر از حال و احوالات شما, ما برای
      انتخابی دلپذیر در کنارتان هستیم.
    </p>
    <div class="sec3__bg-video">
      <video class="sec__bg-video-content" src="../../public/video/Flippingchickenongrill.mp4" autoplay loop muted></video>
    </div>
  </section>
</template>

<script>
window.addEventListener("scroll", () => {
  let hwindow = (window.innerHeight * 4) / 5;
  let hwindow2 = (window.innerHeight * 6) / 7;
  let imgs = document.querySelectorAll(".sec3 img");
  let prags = document.querySelectorAll(".sec3 p");
  imgs.forEach((img) => {
    let topImg = img.getBoundingClientRect().top;

    if (topImg < hwindow) {
      img.classList.add("refresh");
    } else {
      img.classList.remove("refresh");
    }
  });

  prags.forEach((prag) => {
    let toppragh = prag.getBoundingClientRect().top;

    if (toppragh < hwindow2) {
      prag.classList.add("come");
    } else {
      prag.classList.remove("come");
    }
  });
});
export default {
};
</script>

<style></style>
