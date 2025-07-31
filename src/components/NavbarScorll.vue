<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

function dangXuat() {
  localStorage.removeItem("user");
  localStorage.removeItem("user_info");
  router.push("/login"); // hoặc '/signin'
}
// Không cần gì thêm nếu không có logic
import HoverMenu from "./HoverMenu.vue";
const ShopPageLayouts = [
  "My Shop",
  "Left Sidebar",
  "Right Sidebar",
  "My Account",
  "My Cart",
  "My Wishlist",
  "Checkout",
];

const ShopListingStyles = [
  "Style - 1 (Default)",
  "Style - 2 (with Shop Icons)",
  "Style - 3 (Fullwidth Quickview)",
  "Style - 4 (Overlay Content)",
  "Style - 5 (With Seperator)",
  "Style - 6 (Shadowed Blocks)",
  "Style - 7 (Centered Shop Icons)",
  "Style - 8 (Simple & Unique)",
  "Style - 9 (Fullwidth Add to Cart)",
];
const ShopSingleLayouts = [
  "Left Sidebar",
  "Right Sidebar",
  "Thumbnails Left",
  "Thumbnails Right",
  "Thumbnails Bottom",
  "Gallery Grid",
  "Sticky Info",
  "Gallery Center",
  "Tabs Style",
];

const ShopSingleStyles = [
  "Toggle Style",
  "Accordion Style",
  "Accordion Bottom Summary",
  "Accordion After Summary",
  "Simple Product",
  "Product Variable",
  "Product Group",
  "Product External/Affiliate",
];
</script>
<template>
  <v-expand-transition>
    <v-app-bar class="narbar" dark height="80">
      <v-spacer></v-spacer>
      <router-link to="/">
        <HoverMenu title="Home" class="menu-btn">
          <v-list class="d-flex flex-row">
            <v-list-item>
              Shop Listing Styles
              <v-list-item-title
                v-for="(title, index) in ShopPageLayouts"
                :key="index"
              >
                {{ title }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              Shop Listing Styles
              <v-list-item-title
                v-for="(title, index) in ShopListingStyles"
                :key="index"
                >{{ title }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              Shop Single Layouts
              <v-list-item-title
                v-for="(title, index) in ShopSingleLayouts"
                :key="index"
                >{{ title }}</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              Shop Single Styles
              <v-list-item-title
                v-for="(title, index) in ShopSingleStyles"
                :key="index"
                >{{ title }}</v-list-item-title
              >
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
      <router-link to="/about">
        <HoverMenu title="About" class="menu-btn" />
      </router-link>

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
          <router-link to="/FAQ"><v-list-item>FAQ</v-list-item></router-link>
          <router-link to="/Map"><v-list-item>Map</v-list-item></router-link>
        </v-list>
      </HoverMenu>
      <v-spacer></v-spacer>
      <v-toolbar-title style="text-align: center; padding-left: 4%"
        >My website</v-toolbar-title
      >
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
      <div class="user-menu">
        <v-menu open-on-hover location="bottom end">
          <template #activator="{ props }">
            <v-avatar v-bind="props" class="cursor-pointer">
              <v-img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXfyEhQhRGvOMPozJ9m2y7T3Xul_CUsIPKQ&s"
                alt="avatar"
              />
            </v-avatar>
          </template>
          <v-list>
            <v-list-item>
              <router-link to="/ChangePassword">
                <v-list-item-title> Sửa tài khoản</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item @click="dangXuat">
              <v-list-item-title>Đăng xuất</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-expand-transition>
</template>
<style>
.narbar {
  position: fixed !important;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 1)
  ) !important;
}
.user-menu {
}
.user-menu {
  position: relative;
}

.user-menu .v-avatar {
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.user-menu .v-avatar:hover {
  border-color: #6b7c3e;
  transform: scale(1.05);
}

.user-menu .v-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  padding: 8px 0;
  min-width: 180px;
}

.user-menu .v-list-item {
  padding: 12px 20px;
  transition: all 0.2s ease;
  border-radius: 0;
}

.user-menu .v-list-item:hover {
  background: #f8f6f3;
}

.user-menu .v-list-item-title {
  font-size: 14px;
  color: #333;
  font-weight: 400;
  transition: color 0.2s ease;
}

.user-menu .v-list-item:hover .v-list-item-title {
  color: #6b7c3e;
}

.router-link .v-list-item-title {
  text-decoration: none !important;
  color: inherit;
  display: block;
  width: 100%;
}

.user-menu .v-list-item[data-logout] {
  border-top: 1px solid #f0f0f0;
  margin-top: 4px;
}

.user-menu .v-list-item[data-logout]:hover {
  background: #fef5f5;
}

.user-menu .v-list-item[data-logout]:hover .v-list-item-title {
  color: #c53030;
}
a,
router-link {
  text-decoration: none !important;
  color: inherit !important;
}
</style>
