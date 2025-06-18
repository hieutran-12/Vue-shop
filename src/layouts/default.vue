<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue'
import AppFooter from '@/components/AppFooter.vue';
import Button from '@/components/Button.vue'
</script>
<template>
  <v-app>
    <div class="marquee-bar">
      <div class="marquee-text">
        <span v-for="i in 15" :key="i">
          🚚 Miễn phí vận chuyển toàn quốc cho đơn hàng từ 499K! &nbsp;&nbsp;&nbsp; 
          🎁 Ưu đãi độc quyền: Mua 2 tặng 1 - Duy nhất hôm nay! &nbsp;&nbsp;&nbsp;
          🔥 Flash Sale đến 70% cho hàng ngàn sản phẩm hot! &nbsp;&nbsp;&nbsp;
          💳 Thanh toán dễ dàng, hoàn tiền nếu không hài lòng 100%! &nbsp;&nbsp;&nbsp;
        </span>
      </div>
    </div>
    <Navbar />
    <v-main style="margin-top: 50px ;">
      <router-view />
    </v-main>
    <Button />
    <AppFooter />
  </v-app>


</template>

<style scoped>
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
  position: fixed;       
  top: 0;                
  left: 0;
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
</style>
