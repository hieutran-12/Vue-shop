<script lang="ts" setup>
// Không cần gì thêm nếu không có logic
import HoverMenu from './HoverMenu.vue'
</script>
<template>
  <v-app-bar color="white" dark height="64" >
    <v-spacer></v-spacer>
    <router-link to ='/'>
    <HoverMenu title="Home" class="menu-btn">
      <v-list class="d-flex flex-row">
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>
        <v-list-item >
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>  
        <v-list-item >
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>  
        <v-list-item >
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>                           
      </v-list>
    </HoverMenu>
    </router-link>
        <HoverMenu title="Shop" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>
    <HoverMenu title="About" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>
        <HoverMenu title="Blogs" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>
    <HoverMenu title="Page" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>
    <v-spacer></v-spacer>
    <v-toolbar-title style="text-align: center;">My website</v-toolbar-title>
    <v-spacer></v-spacer>
    <HoverMenu title="USD, $" icon="mdi-chevron-down" class="menu-btn">
      <v-list>
        <v-list-item>
          <v-list-item-title>USD</v-list-item-title>
          <v-list-item-title>VND</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>
    <!-- Icon tìm kiếm -->
    <v-btn icon>
      <v-icon href="">mdi-magnify</v-icon>
    </v-btn>

    <!-- Wishlist -->
    <v-btn text class="text-black">Wishlist</v-btn>

    <!-- My Account -->
    <v-btn text class="text-black">My Account</v-btn>

    <!-- Giỏ hàng -->
    <v-btn icon>
      <v-icon>mdi-shopping-outline</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar> 
</template>
<style>
.v-app-bar {
  position: static !important;
}
</style>


