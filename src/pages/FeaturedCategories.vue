<template>
  <div class="container">
    <div class="feature-box New-Arrivals position-relative">
      <h1 class="feature-title">New Arrivals</h1>
      <div class="overlay position-absolute top-0 bottom-0 right-0 left-0"></div>
    </div>
    <div class="feature-box Best-Sellers">
      <h1 class="feature-title">Best Sellers</h1>
      <div class="overlay position-absolute top-0 bottom-0 right-0 left-0"></div>
    </div>
    <div class="feature-box Hots-Deals">
      <h1 class="feature-title">Hots Deals</h1>
      <div class="overlay position-absolute top-0 bottom-0 right-0 left-0"></div>
    </div>
    <div class="feature-box Popular-Products">
      <h1 class="feature-title">Popular Products</h1>
      <div class="overlay position-absolute top-0 bottom-0 right-0 left-0"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 25px;
  justify-content: center;
  padding: 50px;
}

.feature-box {
  width: 20vw;
  height: 70vh;
  position: relative;
  overflow: hidden;
}

.feature-box::before {
  content: "";
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;
  z-index: 0;
}

.New-Arrivals::before {
  background-image: url("@/assets/Featured Categories/img-x-1-1.png");
}
.Best-Sellers::before {
  background-image: url("@/assets/Featured Categories/img-x-3-1.png");
}
.Hots-Deals::before {
  background-image: url("@/assets/Featured Categories/img-x-2-1.png");
}
.Popular-Products::before {
  background-image: url("@/assets/Featured Categories/img-x-4-1.png");
}

.feature-box:hover::before {
  transform: scale(1.1) rotate(5deg);
}
.feature-title {
  position: relative;
  background: linear-gradient(to right, rgba(86, 94, 65, 1), rgba(255, 255, 255, 0));
  color: azure;
  padding: 10px;
}

.overlay {
    transition: all 0.25s ease;
    opacity: 0;
}
.overlay:hover {
    background: linear-gradient(to top, rgba(86, 94, 65, 0.7), rgba(255, 255, 255, 0));
    opacity: 1;
}
</style>