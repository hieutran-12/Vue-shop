<script>

</script>
<template>
    <div class="container">
        <div class="New-Arrivals"></div>
        <div class="Best-Sellers"></div>
        <div class="Hots-Deals"></div>
        <div class="Popular-Products"></div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    gap: 20px;
}
.New-Arrivals{
    width: 20vw;
    height: 50vh;
    background-image: url("@/assets/Featured Categories/img-x-1-1.png");
    background-size: cover
}
.Hots-Deals{
   width: 20vw;
   height: 50vh;
    background-image: url("@/assets/Featured Categories/img-x-2-1.png");
    background-size: cover;
}
.Best-Sellers{
   width: 20vw;
   height: 50vh;
    background-image: url("@/assets/Featured Categories/img-x-3-1.png");
    background-size: cover;
}
.Popular-Products{
   width: 20vw;
   height: 50vh;
    background-image: url("@/assets/Featured Categories/img-x-4-1.png");
    background-size: cover;
}
</style>