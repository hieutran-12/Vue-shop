<template>
  <v-main>
    <v-container fluid class="pa-0">
      <v-row no-gutters class="image-container">
        <v-col 
          v-for="(image, index) in images" 
          :key="index"
          :class="getImageClass(index)"
          class="image-item"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <img :src="image.src" :alt="image.title">
          <div class="image-overlay">
            <div class="image-title">{{ image.title }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'ImageHoverGallery',
  data() {
    return {
      hoveredIndex: null,
      images: [
        {
          src : new URL('@/assets/Product2/scale-image-1.jpg',import.meta.url).href,
          title: 'Thiên Nhiên'
        },
        {
          src : new URL('@/assets/Product2/scale-image-2.jpg',import.meta.url).href,
          title: 'Thành Phố'
        },
        {
          src : new URL('@/assets/Product2/scale-image-3.jpg',import.meta.url).href,
          title: 'Rừng Cây'
        }
      ]
    }
  },
  methods: {
    getImageClass(index) {
      if (this.hoveredIndex === null) {
        return 'normal-width';
      }
      
      if (this.hoveredIndex === index) {
        return 'expanded-width';
      } else {
        return 'compressed-width';
      }
    }
  }
}
</script>

<style scoped>
.image-container {
  height: 60vh;
  overflow: hidden;
}

.image-item {
  transition: flex 0.4s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}



.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.3), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-item:hover .image-overlay {
  opacity: 1;
}

.image-title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  transform: translateY(20px);
  transition: transform 0.3s ease;
}


/* Flex basis cho các trạng thái khác nhau */
.normal-width {
  flex: 0.5;
}

.expanded-width {
  flex: 2;
}

.compressed-width {
  flex: 1.5;
}
</style>