<script setup lang="ts">
import About from "@/components/home/About.vue";
import FeaturedCategories from "@/components/home/FeaturedCategories.vue";
import DeliveryAndReturnPolicy from "@/components/home/DeliveryAndReturnPolicy.vue";
import About2 from "@/components/home/About2.vue";
import Product from "@/components/home/Product.vue";
import paralax from "@/components/home/paralax.vue";
import FeedBack from "@/components/home/FeedBack.vue";
import ImageUpDown from "@/components/home/ImageUpDown.vue";
import HoverImage from "@/components/home/HoverImage.vue";
import SliderProduct from "@/components/home/SliderProduct.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
  router.replace("/Login");
});
</script>

<template>
  <About />
  <FeaturedCategories />
  <About2 />
  <Product />
  <DeliveryAndReturnPolicy />
  <paralax />
  <ImageUpDown />
  <FeedBack />
  <SliderProduct />
  <HoverImage />
</template>
