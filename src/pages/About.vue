<script setup lang="ts">
const slides = [
  {
    image: new URL('@/assets/Home-2-slider-1.webp', import.meta.url).href,
    tag: 'Unique Collection',
    title: `TRENDING<br> FASHION`,
    description: 'Ante metus dictum at tempor commodo...'
  },
  {
    image: new URL('@/assets/Home-2-slider-2.webp', import.meta.url).href,
    tag: 'New Lookbook',
    title: 'SUMMER VIBES',
    description: 'Vestibulum ante ipsum primis in faucibus...'
  },
  {
    image: new URL('@/assets/Home-2-slider-3.webp', import.meta.url).href,
    tag: 'Hot Deals',
    title: 'LIMITED OFFER',
    description: 'Mauris rhoncus aenean vel elit scelerisque...'
  }
]
</script>
<template>
  <v-carousel
    height="1000"
    hide-delimiter-background
    show-arrows
    cycle
    interval="5000"
  >
    <template v-slot:prev="{ props }">
      <v-btn icon @click="props.onClick">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </template>

    <template v-slot:next="{ props }">
      <v-btn icon @click="props.onClick">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </template>

    <!-- Mỗi banner là 1 slide -->
    <v-carousel-item v-for="(item, index) in slides" :key="index">
      <div class="bander">
        <div class="bander-left">
          <img :src="item.image" alt="Trending Fashion" />
        </div>

        <div class="bander-right">
          <span class="collection">{{ item.tag }}</span>
          <h1 v-html="item.title"></h1> 
          <p class="description">{{ item.description }}</p>
          <div class="hero-buttons">
            <v-btn class="frist-btn">Shop Now</v-btn>
            <v-btn class="frist-btn2">New Arrivals</v-btn>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>



<style scoped>
.bander {
  display: flex;
  gap: 30px;
  padding: 20px 60px;
  align-items: stretch;
  height: 100%;
  margin-top: -120px;
}

.bander-left {
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
}

.bander-left img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.bander-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  color: #556b2f;
}

.bander-right h1 {
  font-size: 50px;
  line-height: 1.2;
  letter-spacing: 15px;
  margin-top: 10px;
  font-family: 'Lato', sans-serif;
}

.hero-buttons {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}

.frist-btn {
  color: #565E41;
  background-color: #d9ddcf;
}

.frist-btn2 {
  color: #FFFFFF;
  background-color: #565E41;
}
</style>
