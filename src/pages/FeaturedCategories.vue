<script>

</script>
<template>
    <div class="container">
        <div class="New-Arrivals">
            <h1 class="feature-title">New Arrivals</h1>
        </div>
        <div class="Best-Sellers">
            <h1 class="feature-title">Best Sellers</h1>
        </div>
        <div class="Hots-Deals">
            <h1 class="feature-title">Hots Deals</h1>
        </div>
        <div class="Popular-Products">
            <h1 class="feature-title">Popular Products</h1>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    gap: 25px;
    justify-content: center;
    padding: 50px
}
.New-Arrivals{
    width: 20vw;
    height: 70vh;
    background-image: url("@/assets/Featured Categories/img-x-1-1.png");
    background-size: cover;
    background-position: center;
    transition: transform 0.4s
}
.Hots-Deals{
   width: 20vw;
   height: 70vh;
    background-image: url("@/assets/Featured Categories/img-x-2-1.png");
    background-size: cover;
    background-position: center;
    transition: transform 0.4s
}
.Best-Sellers{
   width: 20vw;
   height: 70vh;
    background-image: url("@/assets/Featured Categories/img-x-3-1.png");
    background-size: cover;
    background-position: center;
    transition: transform 0.4s
}
.Popular-Products{
   width: 20vw;
   height: 70vh;
    background-image: url("@/assets/Featured Categories/img-x-4-1.png");
    background-size: cover;
    background-position: center;
    transition: transform 0.4s
}
.feature-title{
    background-image: linear-gradient(to right,rgba(86,94,65,1),rgba(255,255,255,0));
    color: azure;
}
.New-Arrivals:hover,
.Best-Sellers:hover,
.Hots-Deals:hover,
.Popular-Products:hover {
  transform: scale(1.05); /* to lên 5% */
  z-index: 2;
}
</style>