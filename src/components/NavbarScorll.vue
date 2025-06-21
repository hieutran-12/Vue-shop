<script lang="ts" setup>
// Không cần gì thêm nếu không có logic
import HoverMenu from './HoverMenu.vue'
const ShopPageLayouts = [
    "My Shop",
    "Left Sidebar",
    "Right Sidebar",
    "My Account",
    "My Cart",
    "My Wishlist",
    "Checkout"]

const ShopListingStyles = [
    "Style - 1 (Default)",
    "Style - 2 (with Shop Icons)",
    "Style - 3 (Fullwidth Quickview)",
    "Style - 4 (Overlay Content)",
    "Style - 5 (With Seperator)",
    "Style - 6 (Shadowed Blocks)",
    "Style - 7 (Centered Shop Icons)",
    "Style - 8 (Simple & Unique)",
    "Style - 9 (Fullwidth Add to Cart)"
]
const ShopSingleLayouts = [
    "Left Sidebar",
    "Right Sidebar",
    "Thumbnails Left",
    "Thumbnails Right",
    "Thumbnails Bottom",
    "Gallery Grid",
    "Sticky Info",
    "Gallery Center",
    "Tabs Style"
]

const ShopSingleStyles = [
    "Toggle Style",
    "Accordion Style",
    "Accordion Bottom Summary",
    "Accordion After Summary",
    "Simple Product",
    "Product Variable",
    "Product Group",
    "Product External/Affiliate"
]
</script>
<template>
    <v-expand-transition>
        <v-app-bar  class="narbar" dark height="80">
            <v-spacer></v-spacer>
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
                <v-list-item >
                Shop Listing Styles
                <v-list-item-title
                v-for="(title,index) in ShopListingStyles"
                :key="index"
                >{{ title }}</v-list-item-title>
                </v-list-item>  
                <v-list-item >
                Shop Single Layouts
                <v-list-item-title
                v-for="(title,index) in ShopSingleLayouts"
                :key = index
                >{{ title }}</v-list-item-title>
                </v-list-item>  
                <v-list-item >
                Shop Single Styles
                <v-list-item-title
                v-for="(title,index) in ShopSingleStyles"
                :key = index
                >{{ title }}</v-list-item-title>
                </v-list-item>     
                                    
            </v-list>
            </HoverMenu>
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
    </v-expand-transition>
</template>
<style>
.narbar {
    position: fixed !important;
    background: linear-gradient(to top,rgba(255,255,255,0.8),rgba(255,255,255,1)) !important;
    
}
</style>


