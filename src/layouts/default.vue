<script lang="ts" setup>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import NavbarScorll from "@/components/NavbarScorll.vue";
import { ref } from "vue";
const showSticky = ref(false);
let lastScroll = window.scrollY;

const handleScroll = () => {
  const currentScroll = window.scrollY;
  const scrollDiff = currentScroll - lastScroll;

  if (scrollDiff > 5) {
    // Cuộn xuống hơn 5px
    showSticky.value = true;
  } else if (scrollDiff < -5) {
    // Cuộn lên hơn 5px
    showSticky.value = false;
  }

  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <v-app>
    <div class="marquee-bar">
      <div class="marquee-text">
        <span v-for="i in 15" :key="i">
          🚚 Miễn phí vận chuyển toàn quốc cho đơn hàng từ 499K!
          &nbsp;&nbsp;&nbsp; 🎁 Ưu đãi độc quyền: Mua 2 tặng 1 - Duy nhất hôm
          nay! &nbsp;&nbsp;&nbsp; 🔥 Flash Sale đến 70% cho hàng ngàn sản phẩm
          hot! &nbsp;&nbsp;&nbsp; 💳 Thanh toán dễ dàng, hoàn tiền nếu không hài
          lòng 100%! &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
    <NavbarScorll
      v-show="showSticky"
      :class="{ 'navbar-sticky': true, show: showSticky }"
    />
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<style scoped>
.v-main {
  padding: 50px 0 50px;
}
.marquee-bar {
  background-color: #5c6441;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  z-index: 1000;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  padding-left: 100%;
  animation: marquee 150s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.navbar-sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
}
</style>
