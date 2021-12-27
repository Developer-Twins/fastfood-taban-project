<template>
  <section class="sec-property">
    <div class="property-list">
      <div class="property-item" v-for="item in propertyList" :key="item.img">
        <figure class="property-item__image">
          <img :src="require('../../public/images/property/' + item.img)" />
        </figure>
        <div class="property-item__text">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="property-item__text">
          <p>
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      propertyList: [
        {
          img: "property-1.png",
          title: "سرآشپزهای اصلی",
          text: "ما از بهترین و حرفه ای ترین آشپزها بهره می بریم.",
        },
        {
          img: "property-3.png",
          title: "به موقع",
          text: "در کمترین و سریع ترین زمان ممکن سفارش شما را آماده می کنیم",
        },
        {
          img: "property-2.png",
          title: "طعم ویژه غذا",
          text: "تجربه یک لذت تکرار نشدنی را با ما تجربه کنید",
        },
      ],
    };
  },
  mounted() {
    let vh=(window.innerHeight * 3.7) / 5
    let items=document.querySelectorAll('.property-item')
    window.addEventListener('scroll',()=>{
      items.forEach(item=>{
        let topOfItem=item.getBoundingClientRect().top
        if(topOfItem<vh){
          item.classList.add('active')
        }
      })
    })
  },
};
</script>

<style></style>
