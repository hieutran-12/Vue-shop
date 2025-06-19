<template>
    <div class="container1">
        <span class="title">LATEST FASHION</span>
        <div class="content">
            <div class="content1">
                <img src="@/assets/Home2-banner-collection-image.webp" alt="">
            </div>
            
            <div class="content2">
                <span>PRETTY LOOK</span>
                <h1>Modern Dress</h1>
                <p>Scelerisque purus semper eget duis at cras tincidunt lobortis feugiat.
                Mattis enim ut tellus elementum sagittis vitae quis varius quam quisque id aliquam faucibus purus in massa vulputate eU.
                </p>
                <v-btn>Shop new arrivals
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>
<style>
    @keyframes doi-mau {
        0%   { color: black; }
        25%  { color: burlywood; }
        50%  { color: black; }
        100% { color: burlywood; }
    }
    .container1{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-top: 100px;
    }
    .title{
        display: flex;
        justify-content: center;
        animation: doi-mau 4s linear infinite alternate;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
    }

    .content{
        display: flex;
    }
   .content2 {
       display: flex;
       justify-content: center;
       flex-direction: column;
       padding: 0 85px;

    }
    .content2 h1{
        font-family: 'Lato',sans-serif;
        font-size: 50px;
    }
    .content2 span{
        font-family: 'Word Sans',sans-serif;
        font-size: 20px;
    }
    .content2 p{
        font-family: 'Word Sans',sans-serif;
        font-size: 16px;
        padding-bottom: 60px;

    }
</style>