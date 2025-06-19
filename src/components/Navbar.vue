<script lang="ts" setup>
// Không cần gì thêm nếu không có logic
import HoverMenu from './HoverMenu.vue'
</script>
<template>
  <v-app-bar color="white" dark height="64" class="mt-8">
    <v-spacer></v-spacer>
    <HoverMenu title="Home" class="menu-btn">
      <v-list class="d-flex flex-row">
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>
        <v-list-item >
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>  
        <v-list-item >
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>  
        <v-list-item >
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>     
                             
      </v-list>
    </HoverMenu>|
        <HoverMenu title="Shop" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>|
    <HoverMenu title="About" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>|
        <HoverMenu title="Blogs" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>|
    <HoverMenu title="Page" class="menu-btn">
      <v-list>
        <v-list-item>
          Hahaha
          <v-list-item-title>1</v-list-item-title>
          <v-list-item-title>2</v-list-item-title>
          <v-list-item-title>3</v-list-item-title>
          <v-list-item-title>4</v-list-item-title>
          <v-list-item-title>5</v-list-item-title>
          <v-list-item-title>6</v-list-item-title>
          <v-list-item-title>7</v-list-item-title>
          <v-list-item-title>8</v-list-item-title>
        </v-list-item>                        
      </v-list>
    </HoverMenu>|
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



