<template>
  <section class="sec-menu">
    <transition name="title">
      <h1 class="sec-menu__title" v-if="isGo">{{ type.title }}</h1>
    </transition>
    <transition name="line">
      <div class="sec-menu__line" v-if="isGo"></div>
    </transition>
    <transition name="cards">
      <div class="container-cards" v-if="isGo">
        <div class="card" v-for="card in type.list" :key="card">
          <div class="art art-top">
            <div class="art__line art-top__line">
              <div v-for="len in 11" :key="len"></div>
            </div>
          </div>
          <div class="card__circle">
            <span class="linear"></span>
            <img
              class="card__image"
              :src="require('../../../public/images/img1/' + card.image)"
            />
          </div>
          <div class="card__name">
            {{ card.name }}
          </div>
          <div class="card__line"></div>
          <div class="card__price">
            {{ card.price }} <span class="card__label">تومان</span>
          </div>
          <div @click="addProduct(card)" class="card__btn bass-btn">سفارش</div>
          <div class="art art-bottom">
            <div class="art__line art-bottom__line">
              <div v-for="len in 11" :key="len"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>

export default {
  data() {
    return {
      type: null,
      isGo: false,
    };
  },
  methods: {
    updateRoute(route) {
      let paramsType = route.params.type;
      this.$store.getters.getOurMenu.forEach((ourMenuType) => {
        if (ourMenuType.id == paramsType) {
          this.isGo = false;
          this.type = ourMenuType;
          // at the first time should pass the ourMenuType to type and then we set isGo to true
          setTimeout(() => {
            this.isGo = true;
          }, 1050);
        }
      });
    },
    addProduct(card) {

      if (!this.$store.getters.getToken) {
        this.$router.push("/form");
      } else {
        let myStore = this.$store.state.myStore;
        let isNotFoundThisCard = myStore.every((item) => {
          return item.name !== card.name;
        });

        if (isNotFoundThisCard) {
          card.quantity = 1;
          card.subTotal = card.quantity * card.price.toEnglishDigit();
          myStore.push(card);
        } else {
          card.quantity++;
          card.subTotal = card.quantity * card.price.toEnglishDigit();
        }
        this.$store.commit("updatetotalQuantity");
        this.$store.commit("updatetotalPrice");
        this.$store.getters.updateLocalStorage;
      }
    },
  },
  created() {
    this.updateRoute(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.updateRoute(newRoute);
    },
    "$store.state.isLoading"() {
      this.updateRoute(this.$route);
    },
  },
};
</script>

<style>
/* enter */
.title-enter-active {
  animation: menu 0.5s ease-out 0.4s backwards;
}
.line-enter-active {
  animation: menu 0.5s ease-out 0.2s backwards;
}
.cards-enter-active {
  animation: menu 0.5s ease-out backwards;
}
/* leave */
.title-leave-active {
  animation: menu 0.5s ease-in reverse;
}
.line-leave-active {
  animation: menu 0.5s ease-in 0.2s reverse;
}
.cards-leave-active {
  animation: menu 0.5s ease-in 0.4s reverse;
}

@keyframes menu {
  from {
    transform: translateY(-40px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
// addToStore(card){ // let
itHasInMyStore=this.$store.state.myStore.some(item=>{ // return item == card //
}) // if(!itHasInMyStore){ // card.quantity=1 //
this.$store.commit('addToStore',card) // } // if(itHasInMyStore){ //
card.quantity+=1 // } // console.log(itHasInMyStore) //
console.log(this.$store.state.myStore) // }
