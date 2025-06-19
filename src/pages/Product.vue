<template>
  <div class="slider-wrapper">
    <!-- Nút trái -->
    <button class="arrow-btn" @click="scrollLeft">◀</button>

    <!-- Dãy ảnh nằm ngang -->
    <div class="image-track" ref="track">
      <div class="image-box">
        <v-img src="@/assets/Product1/home-shop-1.1-1.jpg" width="20vw" cover ></v-img>
      </div>
      <div class="image-box">
        <v-img src="@/assets/Product1/home-shop-2.1-1.jpg" width="20vw" cover ></v-img>
      </div>
      <div class="image-box">
        <v-img src="@/assets/Product1/home-shop-3.1-1.jpg" width="20vw" cover ></v-img>
      </div>
      <div class="image-box">
        <v-img src="@/assets/Product1/home-shop-4.1-1.jpg" width="20vw" cover ></v-img>
      </div>
      <div class="image-box">
        <v-img src="@/assets/Product1/home-shop-5.1-1.jpg" width="20vw" cover ></v-img>
      </div>
    </div>

    <!-- Nút phải -->
    <button class="arrow-btn" @click="scrollRight">▶</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const track = ref(null)
const currentIndex = ref(0)

const totalImages = 5
const imagesPerPage = 4

function scrollRight() {
  const container = track.value
  const itemWidth = container.querySelector('.image-box').offsetWidth + 12
  const maxIndex = totalImages - imagesPerPage

  if (currentIndex.value < maxIndex) {
    currentIndex.value++
    container.scrollTo({
      left: currentIndex.value * itemWidth,
      behavior: 'smooth',
    })
  }
}

function scrollLeft() {
  const container = track.value
  const itemWidth = container.querySelector('.image-box').offsetWidth + 12

  if (currentIndex.value > 0) {
    currentIndex.value--
    container.scrollTo({
      left: currentIndex.value * itemWidth,
      behavior: 'smooth',
    })
  }
}

</script>

<style scoped>
.slider-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  overflow: hidden;
  padding: 80px 0 ;
}

.image-track {
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  flex-grow: 1;     
  max-width: 100%;        
}

.image-box {
  flex: 1 0 25%;           
  max-width: 25%;
  margin-right: 12px;
}


.arrow-btn {
  font-size: 20px;
  padding: 8px 12px;
  background-color: #eee;
  border: none;
  cursor: pointer;
}
</style>
