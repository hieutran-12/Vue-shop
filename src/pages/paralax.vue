<template>
    <div class="paralax">
        <div class="content2">
            <v-btn class="btn-luxury">Laxyry</v-btn>
            <h1>Stylish and classy</h1>
            <p>Welcome to the rich neighborhood. Poor people, get out.</p>
        </div>
    </div>
</template>
<style scoped>
.paralax {
  background-image: url("@/assets/10_MYMK.jpeg");
  background-size: cover;
  min-width: 800px;
  min-height: 1000px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-attachment: fixed;
}

.content2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.btn-luxury {
  color: antiquewhite;
  background-color: rgba(86, 94, 65, 1);
  width: 150px;
  height: 80px;
}
.content2 h1{
    font-size: 60px;
}

</style>