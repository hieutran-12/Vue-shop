<template>
  <section class="special-product py-12 bg-grey-lighten-5">
    <v-container>
      <!-- Header -->
      <v-row>
        <v-col cols="12" class="text-center">
          <p class="text-overline font-weight-bold mb-2 text-grey-darken-1">
            SPECIAL PRODUCTS
          </p>
          <h2 class="text-h4 font-weight-bold mb-8">New Collections</h2>
        </v-col>
      </v-row>

      <!-- Carousel -->
      <Splide
        :options="{
          type: 'loop',
          perPage: 4,
          perMove: 1,
          gap: '1rem',
          pagination: false,
          breakpoints: {
            1280: { perPage: 3 },
            960: { perPage: 2 },
            600: { perPage: 1 }
          }
        }"
        aria-label="Our Products"
        class="cursor-grab custom-splide"
      >
        <SplideSlide v-for="(product, index) in filteredProducts" :key="index">
          <v-card
            class="product-card mx-2"
            elevation="0"
            max-width="400"
            @mouseenter="hoveredProductId = product.id"
            @mouseleave="hoveredProductId = null"
            :class="{ 'hovered-info': hoveredProductId === product.id }"
          >
            <div class="sale-badge" v-if="product.onSale">
              <v-chip color="black" text-color="white" size="large" class="font-weight-bold">Sale</v-chip>
            </div>

            <img
              :src="hoveredProductId === product.id ? product.hoverImage : product.image"
              :alt="product.name"
              height="540px"
              width="417px"
              cover
            >
              <template #placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular color="grey-lighten-4" indeterminate />
                </div>
              </template>

              <!-- Hover nút chọn -->
              <div
                v-if="hoveredProductId === product.id"
                class="select-overlay d-flex align-center justify-center"
              >
                <v-btn variant="text" class="text-decoration-underline font-weight-bold">
                  Select Options <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            <img>

            <v-card-text class="text-center pa-4 transition-border">
              <h3 class="text-h6 font-weight-medium mb-2">{{ product.name }}</h3>
              <div class="price-section">
                <span class="text-body-2 text-grey-darken-1">Starts at</span>
                <span
                  v-if="product.originalPrice"
                  class="text-decoration-line-through text-grey ml-2"
                >
                  € {{ product.originalPrice }}
                </span>
                <span class="font-weight-bold ml-2">€ {{ product.currentPrice }}</span>
              </div>
            </v-card-text>
          </v-card>
        </SplideSlide>
      </Splide>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref, computed } from "vue";
import "@splidejs/vue-splide/css";

interface Product {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  currentPrice: number;
  originalPrice?: number;
  onSale: boolean;
  collection: "summer" | "winter";
}

const activeCollection = ref<"summer" | "winter">("summer");
const hoveredProductId = ref<number | null>(null);

const products = ref<Product[]>([
  {
    id: 1,
    name: "Urbane Sleeveless Dress",
    image: new URL("@/assets/SliderProduct/home-shop-11.1-1.jpg", import.meta.url).href,
    hoverImage: new URL("@/assets/SliderProduct/home-shop-11.2-1.jpg", import.meta.url).href,
    currentPrice: 16.83,
    originalPrice: 18.85,
    onSale: true,
    collection: "summer"
  },
  {
    id: 2,
    name: "Satin Sleeveless Dress",
    image: new URL("@/assets/SliderProduct/home-shop-12.1-1.jpg", import.meta.url).href,
    hoverImage: new URL("@/assets/SliderProduct/home-shop-12.2-1.jpg", import.meta.url).href,
    currentPrice: 20.78,
    onSale: true,
    collection: "summer"
  },
  {
    id: 3,
    name: "Flossy Classic Dress",
    image: new URL("@/assets/SliderProduct/home-shop-13.1-1.jpg", import.meta.url).href,
    hoverImage: new URL("@/assets/SliderProduct/home-shop-13.2-1.jpg", import.meta.url).href,
    currentPrice: 34.65,
    originalPrice: 42.17,
    onSale: true,
    collection: "summer"
  },
  {
    id: 4,
    name: "Swag Long Dress",
    image: new URL("@/assets/SliderProduct/home-shop-14.1-1.jpg", import.meta.url).href,
    hoverImage: new URL("@/assets/SliderProduct/home-shop-14.2-1.jpg", import.meta.url).href,
    currentPrice: 22.77,
    originalPrice: 28.8,
    onSale: true,
    collection: "summer"
  },
  {
    id: 5,
    name: "Winter Coat Dress",
    image: new URL("@/assets/SliderProduct/home-shop-15.1-1.jpg", import.meta.url).href,
    hoverImage: new URL("@/assets/SliderProduct/home-shop-15.2-1.jpg", import.meta.url).href,
    currentPrice: 45.99,
    originalPrice: 52.0,
    onSale: true,
    collection: "winter"
  }
]);

const filteredProducts = computed(() =>
  products.value.filter((product) => product.collection === activeCollection.value)
);
</script>

<style scoped>
.special-product {
  background: linear-gradient(135deg, rgba(248, 248, 248, 0.9) 0%, rgba(240, 240, 240, 0.9) 100%);
}

.custom-splide {
  position: relative;
  padding: 0 48px;
  z-index: 1;
}

.custom-splide >>> .splide__arrow {
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 36px;
  height: 36px;
  top: 50%;
  transform: translateY(-50%);
}

.custom-splide >>> .splide__arrow--prev {
  left: 0;
}

.custom-splide >>> .splide__arrow--next {
  right: 0;
}

.product-card {
  position: relative;
  background: white;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}

.v-img {
  transition: transform 0.3s ease;
}

.product-card:hover .v-img {
  transform: scale(1.02);
}

.sale-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
}

.select-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 3;
}

.price-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.transition-border {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

.hovered-info {
  border: 1px solid #D1C2BB;
}
</style>
