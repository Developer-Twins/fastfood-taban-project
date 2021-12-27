<template>
  <section class="sec-point">
    <div class="point">
      <div :class="['point-container-image',{'active':showImage}]" ref="image">
        <figure class="point-image">
          <img src="../../public/images/point/chef.png" alt="chef" />
        </figure>
      </div>
      <div :class="['point-container-text',{'active':showText}]" ref="text">
        <div class="point-text">
          <div class="point-text__title">
            <h2>
              برخی از عواملی که رستوران تابان را شایسته انتخاب شما عزیزان کرده
              است :
            </h2>
          </div>
          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>
              استفاده از گوشت تازه گوسفندی در کشتارگاه‌های مورد تایید وزارت
              بهداشت در استان تهران
            </p>
          </div>
          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>
              استفاده از مرغ کشتار روز در بسته‌بندی‌های مورد تایید وزارت بهداشت
            </p>
          </div>

          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>استفاده از برنج درجه یک 100% ایرانی</p>
          </div>
          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>حضور پرسنل در کلاس‌های بهداشت محیط</p>
          </div>
          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>طبخ سرخ‌کردنی‌ها فقط با روغن تازه</p>
          </div>
          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>
              استفاده از سبزیجات، فرنگی‌جات و سیفی‌جات به‌ صورت روزانه و ضدعفونی
              اصولی
            </p>
          </div>

          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>همکاری با لابراتوارهای تست مواد غذایی به‌ صورت ماهیانه</p>
          </div>
          <div class="point-text__parag">
            <i class="fas fa-check"></i>
            <p>استفاده از ظروف آلومینیوم</p>
          </div>
          <div class="point-text__btn">
            <router-link to="/menu" class="bass-btn"
              >همین حالا سفارش بده</router-link
            >
          </div>
        </div>
      </div>
      <div class="point-background">
        <img src="../../public/images/point/point-patern.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      showImage:false,
      showText:false
    }
  },
  mounted(){
    let vh=(window.innerHeight * 3) / 5
    window.addEventListener('scroll',()=>{
      let topOfImage=this.$refs.image.getBoundingClientRect().top
      let topOfText=this.$refs.text.getBoundingClientRect().top

      if(topOfImage<vh){
        this.showImage=true
      }
      if(topOfText<vh){
        this.showText=true
      }
    })
  }
};
</script>

<style></style>
