<template>
  <v-container fluid class="pa-4 bg-grey-lighten-4">
    <v-row no-gutters>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        :cols="12"
        :sm="getColSize(index)"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        class="transition-col"
      >
        <v-sheet
          elevation="3"
          class="ma-2 overflow-hidden rounded-lg"
          height="300"
        >
          <v-img
            :src="image"
            alt="Gallery Image"
            cover
            height="100%"
            class="transition-img"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref } from 'vue';

const hoveredIndex = ref(null);

const images = [
  {
    src: new URL('@/assets/Product2/scale-image-1.jpg', import.meta.url).href,
    text: 'Mollis aliquam ut porttitor leo non quam lacus suspendisse.',
  },
  {
    src: new URL('@/assets/Product2/scale-image-2.jpg', import.meta.url).href,
    text: 'Augue ut lectus arcu bibendum at varius vel pharetra vel.',
  },
  {
    src: new URL('@/assets/Product2/scale-image-3.jpg', import.meta.url).href,
    text: 'Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.',
  },
];
</script>
<style scoped>
.transition-col {
  transition: all 0.4s ease;
}
.transition-img {
  transition: transform 0.3s ease;
}
.transition-img:hover {
  transform: scale(1.05);
}
</style>