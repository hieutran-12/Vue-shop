<script setup>
import { noop } from 'vuetify/lib/util/helpers.mjs';

const testimonials = [
  {
    avatar: new URL('@/assets/FeedBack/home-testimonial-1.jpg',import.meta.url).href,
    content: 'Dịch vụ tuyệt vời, tôi rất hài lòng!',
    stars: 5,
    name: 'Valeria',
    date: 'Saturday, July 30, 2022',
  },
  {
    avatar: new URL('@/assets/FeedBack/home-testimonial-2.jpg',import.meta.url).href,
    content: 'Sản phẩm tốt, giao hàng nhanh.',
    stars: 4,
    name: 'John',
    date: 'August 2, 2022',
  },
  // ... thêm feedback khác nếu muốn
];
</script>

<template>
    <div class="feedbackpage">
        <v-container class="testimonial-container" fluid>
            <v-carousel
            cycle
            interval="5000"
            hide-delimiters
            show :show-arrows="false"
            height="700"
            >
                <v-carousel-item
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                >
                    <div class="testimonial-card">
                    <v-avatar size="120" class="mb-4">
                        <v-img :src="testimonial.avatar" />
                    </v-avatar>

                    <div class="quote">❝</div>

                    <p class="text">{{ testimonial.content }}</p>

                    <div class="stars">
                        <span v-for="n in testimonial.stars" :key="n">⭐</span>
                    </div>

                    <h3>{{ testimonial.name }}</h3>
                    <p class="date">{{ testimonial.date }}</p>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-container>
        <div class="feedback-right">
            <img src="@/assets/FeedBack/testimonial-image-2.webp" alt="">
        </div>
    </div>
</template>
<style scoped>
.feedbackpage{
    display: flex;
    padding: 150px 40px 0px ;
    gap: 40px;
    margin-top: 40px;
}
.testimonial-container {
  background-color: #5c6444;
  color: white;
  padding: 40px 0;
  position: relative;
}

.testimonial-card {
  text-align: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.quote {
  font-size: 46px;
  margin-bottom: 15px;
}

.text {
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.stars {
  font-size: 26px;
  color: #ffc107;
  margin-bottom: 10px;
}

h3 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 4px;
}

.date {
  font-size: 20px;
  opacity: 0.8;
}
.v-carousel-item{
  padding-top: 150px;
}

</style>
