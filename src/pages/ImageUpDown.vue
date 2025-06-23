<template>
    <div class="container">
        <h1>INSTAGRAM FEEDBACK</h1>
        <div class="title">
            <p>FOLLOW OUR POST</p>
            <h2>Join Instagram</h2>
        </div>
        <div class="images">
            <div class="image">
                <img src="@/assets/UpDown/Home-3-insta-1.webp" alt="">
            </div>
            <div class="image">
                <img src="@/assets/UpDown/Home-3-insta-2.webp" alt="">
            </div>
            <div class="image">
                <img src="@/assets/UpDown/Home-3-insta-3.jpg" alt="">
            </div>
            <div class="image">
                <img src="@/assets/UpDown/Home-3-insta-4.webp" alt="">
            </div>
            <div class="image">
                <img src="@/assets/UpDown/Home-3-insta-5.webp" alt="">
            </div>
            <div class="image">
                <img src="@/assets/UpDown/Home-3-insta-6.webp" alt="">
            </div>

        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 500px;
    padding: 20px;
    position: relative;
    margin-top: 50px;
}
.container h1{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8vw;
    white-space: nowrap;
    font-weight: bold;
    -webkit-text-stroke: 2px  #333;
    color: antiquewhite;
     pointer-events: none;
     mix-blend-mode: multiply;
     font-family: 'Oswald', sans-serif;
    animation: Nhapnhay 3s ease-in-out infinite;
}
@keyframes Nhapnhay{
    0%   { -webkit-text-stroke: 2px #222; }
    50%  { -webkit-text-stroke: 2px #f1edee; }
    100% { -webkit-text-stroke: 2px #222; }
}

.title{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.title h2{
    color: #333;
    font-size: 50px;
    font-family: "Lato",sans-serif;
}
.title p{
    color: #333;
    font-size: 20px;
    font-family: "Work Sans",sans-serif;
}

.images{
    display: flex;
    gap: 30px;

}
.image {
  position: relative;
  height: auto;
  border-radius: 8px;
  animation: UpDown 3s ease-in-out infinite alternate;
}
.image img{
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.image:nth-child(1) {animation-delay: 0s;}
.image:nth-child(2) {animation-delay: 0.25s;}
.image:nth-child(3) {animation-delay: 0.5s;}
.image:nth-child(4) {animation-delay: 0.75s;}
.image:nth-child(5) {animation-delay: 1s;}

@keyframes UpDown{
    0%{transform: translateY(0);}
    50%{transform: translateY(-50px);}
    100%{transform: translateY(0);}
}

.image::before {
  content: '';
  transition: opacity 0.3s ease;

}
.image:hover::before {
    background-image: linear-gradient(rgba(255,255,255,0.5)),url('@/assets/UpDown/instagram.svg');
    background-position: center;
    background-size: 100% auto,25%;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    opacity: 1;
}



</style>