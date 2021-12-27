<template>
  <div class="main-slider">
    <div class="slider">
      <div class="slides">
        <div class="slides__slide" style="left: 0">
          <img src="../../public/images/img2/pexels-rajesh-tp-1600727.jpg" />
        </div>
        <div class="slides__slide" style="left: 0">
          <img src="../../public/images/img2/pexels-robin-stickel-70497.jpg" />
        </div>
        <div class="slides__slide" style="left: 0">
          <img
            src="../../public/images/img2/pexels-polina-tankilevitch-4109234.jpg"
          />
        </div>
        <div class="slides__slide" style="left: 0">
          <img src="../../public/images/img2/mae-mu-I7A_pHLcQK8-unsplash.jpg" />
        </div>
      </div>
      <div>
        <button type="button" class="slider__btn slider__btn-previous">
          <i class="fa fa-arrow-circle-left"></i>
        </button>
        <button type="button" class="slider__btn slider__btn-next">
          <i class="fa fa-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const slides = document.querySelector(".slides");
    const next = document.querySelector(".slider__btn-next");
    const previous = document.querySelector(".slider__btn-previous");

    const timeout = 4000;
    const speed = 15;

    let allSlides;
    let lastSlide;
    let nextTimeout;
    let animating = false;

    nextTimeout = setTimeout(nextSlide, timeout);

    function nextSlide() {
      allSlides = document.querySelectorAll(".slides__slide");
      lastSlide = allSlides[allSlides.length - 1];
      requestAnimationFrame(moveRight);
      animating = true;
    }

    function moveRight() {
      let imageWidth = window.innerWidth * 0.7;

      const left = parseInt(lastSlide.style.left);
      lastSlide.style.left = left + speed + "px";
      if (left < imageWidth) {
        requestAnimationFrame(moveRight);
      } else {
        slides.insertBefore(lastSlide, slides.firstElementChild);
        lastSlide.style.left = "0";
        nextTimeout = setTimeout(nextSlide, timeout);
        animating = false;
      }
    }

    next.addEventListener("click", function() {
      if (!animating) {
        clearTimeout(nextTimeout);
        nextSlide();
      }
    });

    previous.addEventListener("click", function() {
      if (!animating) {
        clearTimeout(nextTimeout);
        previousSlide();
      }
    });

    function previousSlide() {
      let imageWidth = window.innerWidth * 0.7;
      slides.firstElementChild.style.left = imageWidth + "px";
      slides.appendChild(slides.firstElementChild);
      allSlides = document.querySelectorAll(".slides__slide");
      lastSlide = allSlides[allSlides.length - 1];
      requestAnimationFrame(moveLeft);
      animating = true;
    }

    function moveLeft() {
      const left = parseInt(lastSlide.style.left);
      lastSlide.style.left = left - speed + "px";
      if (left > speed) {
        requestAnimationFrame(moveLeft);
      } else {
        nextTimeout = setTimeout(nextSlide, timeout);
        animating = false;
      }
    }
  },
};
</script>

<style></style>
