<template>
  <div class="slider-container">
    <Splide
      :options="{
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        arrows: true,
        pagination: false,
        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          480: { perPage: 1 },
        },
      }"
      aria-label="Product Carousel"
    >
      <SplideSlide
        v-for="product in filteredProducts"
        :key="product.id"
        @mouseenter="hoveredProductId = product.id"
        @mouseleave="hoveredProductId = null"
      >
        <div class="image-wrapper">
          <img
            :src="
              hoveredProductId === product.id
                ? product.hoverImage
                : product.image
            "
            class="product-img"
            alt="Product Image"
          />
        </div>
        <div class="product-name">{{ product.name }}</div>
      </SplideSlide>
    </Splide>
  </div>
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

const activeCollection = ref<"summer" | "winter" | "all">("all"); // Hiển thị cả 5 ảnh
const hoveredProductId = ref<number | null>(null);

const products = ref<Product[]>([
  {
    id: 1,
    name: "Urbane Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-1.1-1.jpg", import.meta.url)
      .href,
    hoverImage: new URL(
      "@/assets/Product1/home-shop-1.2-1.jpg",
      import.meta.url
    ).href,
    currentPrice: 16.83,
    originalPrice: 18.85,
    onSale: true,
    collection: "summer",
  },
  {
    id: 2,
    name: "Satin Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-2.1-1.jpg", import.meta.url)
      .href,
    hoverImage: new URL(
      "@/assets/Product1/home-shop-2.2-1.jpg",
      import.meta.url
    ).href,
    currentPrice: 20.78,
    onSale: true,
    collection: "summer",
  },
  {
    id: 3,
    name: "Flossy Classic Dress",
    image: new URL("@/assets/Product1/home-shop-3.1-1.jpg", import.meta.url)
      .href,
    hoverImage: new URL(
      "@/assets/Product1/home-shop-3.2-1.jpg",
      import.meta.url
    ).href,
    currentPrice: 34.65,
    originalPrice: 42.17,
    onSale: true,
    collection: "summer",
  },
  {
    id: 4,
    name: "Swag Long Dress",
    image: new URL("@/assets/Product1/home-shop-4.1-1.jpg", import.meta.url)
      .href,
    hoverImage: new URL(
      "@/assets/Product1/home-shop-4.2-1.jpg",
      import.meta.url
    ).href,
    currentPrice: 22.77,
    originalPrice: 28.8,
    onSale: true,
    collection: "summer",
  },
  {
    id: 5,
    name: "Winter Coat Dress",
    image: new URL("@/assets/Product1/home-shop-5.1-1.jpg", import.meta.url)
      .href,
    hoverImage: new URL(
      "@/assets/Product1/home-shop-5.2-1.jpg",
      import.meta.url
    ).href,
    currentPrice: 45.99,
    originalPrice: 52.0,
    onSale: true,
    collection: "winter",
  },
]);

const filteredProducts = computed(() =>
  activeCollection.value === "all"
    ? products.value
    : products.value.filter((p) => p.collection === activeCollection.value)
);
</script>

<style scoped>
.slider-container {
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 12px;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.splide__slide:hover .product-img {
  transform: scale(1.05);
  filter: brightness(0.9);
}

.product-name {
  text-align: center;
  font-weight: 500;
  margin-top: 0.5rem;
  font-size: 1rem;
}
</style>
