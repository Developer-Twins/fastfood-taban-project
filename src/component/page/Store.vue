<template>
  <div class="invoice">
    <div class="img1-invoice">
      <img
        src="../../../public/images/img3/Decorative-Line-Black-Free-Download-PNG.png"
        alt=""
      />
    </div>
    <div class="img3-invoice">
      <img src="../../../public/images/img3/Stain-Splatter-PNG.png" />
    </div>
    <header class="header-invoice">
      <h2 class="header-invoice__name header-invoice__child">
        صورت حساب :
        <span>
          {{ $store.state.authModule.userGender }}
          {{ $store.state.authModule.userName }}
        </span>
      </h2>
      <h2 class="header-invoice__date header-invoice__child">
        شماره همراه : <span>{{ $store.state.authModule.userNumber }}</span>
      </h2>
      <h2 class="header-invoice__address header-invoice__child">
        آدرس : <span>{{ $store.state.authModule.userAddress }}</span>
      </h2>
    </header>

    <main class="main-invoice" v-if="deksTop">
      <transition mode="out-in">
        <div class="empty" v-if="$store.state.myStore.length === 0">
          <img
            class="empty__img"
            src="../../../public/images/img3/Decorative-Line-Black.png"
            alt=""
          />
          <p class="empty__parag">
            سبد خرید شما خالی است جهت سفارش
            <router-link to="/menu" class="empty__link">کلیک کنید</router-link>
          </p>
        </div>

        <div class="main-invoice-title" v-else>
          <h2>عنوان</h2>
          <h2>تعداد</h2>
          <h2>مبلغ (تومان)</h2>
          <h2>مجموع مبلغ</h2>
        </div>
      </transition>
      <transition-group name="group">
        <div
          class="main-invoice-product"
          v-for="(card, index) in $store.state.myStore"
          :key="card.name"
        >
          <h2 class="main-invoice-product__name">{{ card.name }}</h2>
          <h2 class="main-invoice-product__quantity">
            <span class="icon-box" @click="increaseQuantity(card)"
              ><i class="fas fa-plus"></i
            ></span>

            <span>{{ card.quantity }}</span>
            <span class="icon-box" @click="decreaseQuantity(card)"
              ><i class="fas fa-minus"></i
            ></span>
          </h2>
          <h2 class="main-invoice-product__price">{{ card.price }}</h2>
          <h2 class="main-invoice-product__total-price">{{ card.subTotal }}</h2>
          <div class="main-invoice-product__trash">
            <span class="icon-box" @click="removeCard(index)">
              <i class="fas fa-trash-alt"></i>
            </span>
          </div>
        </div>
      </transition-group>
    </main>

    <main class="main-invoice" v-else>
      <transition mode="out-in">
        <div class="empty" v-if="$store.state.myStore.length === 0">
          <img
            class="empty__img"
            src="../../../public/images/img3/Decorative-Line-Black.png"
            alt=""
          />
          <p class="empty__parag">
            سبد خرید شما خالی است جهت سفارش
            <router-link to="/menu" class="empty__link">کلیک کنید</router-link>
          </p>
        </div>
        <div v-else>
          <transition-group name="group">
            <div
              class="main-invoice-container2"
              v-for="(card, index) in $store.state.myStore"
              :key="card.name"
            >
              <div class="main-invoice-title main-invoice-title2">
                <h2>عنوان</h2>
                <h2>تعداد</h2>
                <h2>مبلغ (تومان)</h2>
                <h2>مجموع مبلغ</h2>
              </div>

              <div class="main-invoice-product main-invoice-product2">
                <h2
                  class="main-invoice-product__name main-invoice-product__name2"
                >
                  {{ card.name }}
                </h2>
                <h2
                  class="main-invoice-product__quantity main-invoice-product__quantity2"
                >
                  <span class="icon-box" @click="increaseQuantity(card)"
                    ><i class="fas fa-plus"></i
                  ></span>

                  <span>{{ card.quantity }}</span>
                  <span class="icon-box" @click="decreaseQuantity(card)"
                    ><i class="fas fa-minus"></i
                  ></span>
                </h2>
                <h2
                  class="main-invoice-product__price main-invoice-product__price2"
                >
                  {{ card.price }}
                </h2>
                <h2
                  class="main-invoice-product__total-price main-invoice-product__total-price2"
                >
                  {{ card.subTotal }}
                </h2>
                <div
                  class="main-invoice-product__trash main-invoice-product__trash2"
                >
                  <span class="icon-box" @click="removeCard(index)"
                    ><i class="fas fa-trash-alt"></i
                  ></span>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </transition>
    </main>
    <transition>
      <footer class="footer-invoice" v-if="$store.state.myStore.length !== 0">
        <div class="side-footer right-side-footer">
          <div class="total-price">
            جمع کل :<span>{{ totalPrice }}</span> تومان
          </div>
          <button class="bass-btn">پرداخت و سفارش</button>
        </div>
        <div class="side-footer left-side-footer">
          <p class="parag-footer">
            با سپاس از خرید شما مشتری گرامی
          </p>
          <button class="bass-btn card-delete-all" @click="removeAllCard">
            حذف همه
          </button>
        </div>
        <div class="img2-invoice">
          <img
            src="../../../public/images/img2/Smoke-Effect-PNG-File.png"
            alt=""
          />
        </div>
      </footer>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deksTop: true,
      veiwportWidth: window.addEventListener("resize", () => {
        if (window.innerWidth < 800) {
          this.deksTop = false;
        } else {
          this.deksTop = true;
        }
      }),
    };
  },
  methods: {
    upadates() {
      this.$store.commit("updatetotalQuantity");
      this.$store.commit("updatetotalPrice");
      this.$store.getters.updateLocalStorage;
    },
    removeCard(index) {
      let myStore = this.$store.state.myStore;
      myStore.splice(index, 1);
      this.upadates();
    },
    increaseQuantity(card) {
      card.quantity++;
      card.subTotal = card.quantity * card.price.toEnglishDigit();
      this.upadates();
    },
    decreaseQuantity(card) {
      if (!(card.quantity < 2)) {
        card.quantity--;
        card.subTotal = card.quantity * card.price.toEnglishDigit();
        this.upadates();
      }
    },
    removeAllCard() {
      this.$store.state.myStore.length = 0;
      this.upadates();
    },
  },
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice;
    },
  },
  mounted() {
    this.upadates();
  },
  created() {
    if (window.innerWidth < 800) {
      this.deksTop = false;
    } else {
      this.deksTop = true;
    }
  },
};
</script>

<style></style>
