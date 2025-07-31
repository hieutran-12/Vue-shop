<template>
  <div class="product-detail-container">
    <div v-if="product" class="product-detail">
      <div class="breadcrumb">
        <span>Home</span> / <span>Shop</span> /
        <span>{{ product.collection }}</span> /
        <span class="current">{{ product.name }}</span>
      </div>

      <div class="product-content">
        <div class="product-gallery">
          <div class="main-image">
            <img
              :src="product.image"
              alt="Product Image"
              class="product-image"
            />
            <div class="image-overlay">
              <button class="zoom-btn">🔍</button>
            </div>
          </div>
          <div class="thumbnail-images">
            <img :src="product.image" alt="Thumb 1" class="thumb active" />
            <img :src="product.image" alt="Thumb 2" class="thumb" />
            <img :src="product.image" alt="Thumb 3" class="thumb" />
            <img :src="product.image" alt="Thumb 4" class="thumb" />
          </div>
        </div>

        <div class="product-info">
          <div class="product-header">
            <span class="product-sku"
              >SKU: PD{{ product.id.toString().padStart(3, "0") }}</span
            >
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span class="review-count">(24 reviews)</span>
            </div>
          </div>

          <h1 class="product-title">{{ product.name }}</h1>

          <div class="price-section">
            <div class="price-row">
              <span class="current-price">${{ product.currentPrice }}</span>
              <span v-if="product.originalPrice" class="original-price"
                >${{ product.originalPrice }}</span
              >
              <span v-if="product.originalPrice" class="discount-badge">
                -{{
                  Math.round(
                    (1 - product.currentPrice / product.originalPrice) * 100
                  )
                }}%
              </span>
            </div>
            <p class="price-note">
              Tax included. Shipping calculated at checkout.
            </p>
          </div>

          <div class="product-options">
            <div class="option-group">
              <label>Size</label>
              <div class="size-options">
                <button class="size-btn">XS</button>
                <button class="size-btn active">S</button>
                <button class="size-btn">M</button>
                <button class="size-btn">L</button>
                <button class="size-btn">XL</button>
              </div>
            </div>

            <div class="option-group">
              <label>Color</label>
              <div class="color-options">
                <button
                  class="color-btn active"
                  style="background: #8b4513"
                ></button>
                <button class="color-btn" style="background: #2f4f4f"></button>
                <button class="color-btn" style="background: #8fbc8f"></button>
                <button class="color-btn" style="background: #d2b48c"></button>
              </div>
            </div>

            <div class="option-group">
              <label>Quantity</label>
              <div class="quantity-selector">
                <button class="qty-btn">−</button>
                <input type="number" value="1" min="1" class="qty-input" />
                <button class="qty-btn">+</button>
              </div>
            </div>
          </div>

          <div class="product-actions">
            <button class="add-to-cart-btn">ADD TO CART</button>
            <button class="buy-now-btn">BUY NOW</button>
            <div class="secondary-actions">
              <button class="wishlist-btn">♡ Add to Wishlist</button>
              <button class="compare-btn">⚖ Compare</button>
            </div>
          </div>

          <div class="product-features">
            <div class="feature-item">
              <span class="feature-icon">🚚</span>
              <div>
                <strong>Free Shipping</strong>
                <p>On orders over $50</p>
              </div>
            </div>
            <div class="feature-item">
              <span class="feature-icon">↩️</span>
              <div>
                <strong>Easy Returns</strong>
                <p>30-day return policy</p>
              </div>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🛡️</span>
              <div>
                <strong>Secure Payment</strong>
                <p>SSL encrypted checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-details-tabs">
        <div class="tabs-header">
          <button class="tab-btn active">Description</button>
          <button class="tab-btn">Size Guide</button>
          <button class="tab-btn">Reviews (24)</button>
          <button class="tab-btn">Shipping</button>
        </div>
        <div class="tab-content">
          <div class="description-content">
            <h3>Product Description</h3>
            <p>
              This elegant {{ product.name.toLowerCase() }} from our
              {{ product.collection }} collection combines timeless style with
              modern comfort. Crafted from premium materials, it features:
            </p>
            <ul>
              <li>High-quality fabric blend for comfort and durability</li>
              <li>Flattering silhouette that suits various body types</li>
              <li>
                Versatile design perfect for both casual and formal occasions
              </li>
              <li>Easy care instructions - machine washable</li>
              <li>Available in multiple sizes and colors</li>
            </ul>
            <p>
              <strong>Material:</strong> 70% Cotton, 25% Polyester, 5% Elastane
            </p>
            <p>
              <strong>Care Instructions:</strong> Machine wash cold, tumble dry
              low, iron on low heat
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted, nextTick } from "vue";

const route = useRoute();
const product = ref<any>(null);

const productList = [
  // giống danh sách trong Product.vue
  {
    id: 1,
    name: "Urbane Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-1.1-1.jpg", import.meta.url)
      .href,
    currentPrice: 16.83,
    originalPrice: 18.85,
    collection: "summer",
  },
  {
    id: 2,
    name: "Satin Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-2.1-1.jpg", import.meta.url)
      .href,
    currentPrice: 20.78,
    collection: "summer",
  },
  {
    id: 3,
    name: "Urbane Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-1.1-1.jpg", import.meta.url)
      .href,
    currentPrice: 16.83,
    originalPrice: 18.85,
    collection: "summer",
  },
  {
    id: 4,
    name: "Urbane Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-1.1-1.jpg", import.meta.url)
      .href,
    currentPrice: 16.83,
    originalPrice: 18.85,
    collection: "summer",
  },
  {
    id: 5,
    name: "Urbane Sleeveless Dress",
    image: new URL("@/assets/Product1/home-shop-1.1-1.jpg", import.meta.url)
      .href,
    currentPrice: 16.83,
    originalPrice: 18.85,
    collection: "summer",
  },
  // ... các sản phẩm khác
];

onMounted(async () => {
  const id = Number((route.params as { id: string }).id);
  product.value = productList.find((p) => p.id === id);

  // Scroll to top when component mounts
  await nextTick();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped>
.product-detail-container {
  min-height: 100vh;
  background: white;
  padding: 20px 0 60px 0;
}

.product-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 30px;
}

.breadcrumb {
  font-size: 13px;
  color: #999;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.breadcrumb .current {
  color: #6b7c3e;
  font-weight: 500;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 60px;
  align-items: start;
}

.product-gallery {
  position: relative;
}

.main-image {
  position: relative;
  margin-bottom: 15px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image:hover .image-overlay {
  opacity: 1;
}

.zoom-btn {
  background: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.thumbnail-images {
  display: flex;
  gap: 10px;
}

.thumb {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.thumb.active {
  border-color: #6b7c3e;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.product-sku {
  color: #999;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stars {
  color: #ffd700;
  font-size: 14px;
}

.review-count {
  color: #666;
  font-size: 12px;
}

.product-title {
  font-size: 32px;
  font-weight: 300;
  color: #333;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.price-section {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 5px;
}

.current-price {
  font-size: 28px;
  font-weight: 600;
  color: #6b7c3e;
}

.original-price {
  font-size: 20px;
  color: #999;
  text-decoration: line-through;
}

.discount-badge {
  background: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.price-note {
  font-size: 12px;
  color: #666;
  margin: 0;
}

.product-options {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.option-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.size-options {
  display: flex;
  gap: 8px;
}

.size-btn {
  border: 1px solid #ddd;
  background: white;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 40px;
}

.size-btn:hover,
.size-btn.active {
  border-color: #6b7c3e;
  background: #6b7c3e;
  color: white;
}

.color-options {
  display: flex;
  gap: 8px;
}

.color-btn {
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.color-btn.active {
  border-color: #6b7c3e;
}

.quantity-selector {
  display: flex;
  align-items: center;
  width: fit-content;
  border: 1px solid #ddd;
}

.qty-btn {
  background: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

.qty-btn:hover {
  background: #f5f5f5;
}

.qty-input {
  border: none;
  width: 50px;
  text-align: center;
  padding: 8px 4px;
  font-size: 14px;
}

.product-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.add-to-cart-btn,
.buy-now-btn {
  padding: 15px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn {
  background: #6b7c3e;
  color: white;
}

.add-to-cart-btn:hover {
  background: #5a6835;
  transform: translateY(-1px);
}

.buy-now-btn {
  background: #333;
  color: white;
}

.buy-now-btn:hover {
  background: #222;
  transform: translateY(-1px);
}

.secondary-actions {
  display: flex;
  gap: 20px;
}

.wishlist-btn,
.compare-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 13px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}

.wishlist-btn:hover,
.compare-btn:hover {
  color: #6b7c3e;
}

.product-features {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0;
  border-top: 1px solid #f0f0f0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-icon {
  font-size: 20px;
}

.feature-item strong {
  font-size: 13px;
  color: #333;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.feature-item p {
  font-size: 12px;
  color: #666;
  margin: 2px 0 0 0;
}

.product-details-tabs {
  border-top: 1px solid #f0f0f0;
  padding-top: 40px;
}

.tabs-header {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.tab-btn {
  background: none;
  border: none;
  padding: 10px 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: #666;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.tab-btn.active {
  color: #6b7c3e;
  border-bottom-color: #6b7c3e;
}

.description-content h3 {
  font-size: 18px;
  font-weight: 400;
  color: #333;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.description-content p {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
}

.description-content ul {
  margin: 15px 0;
  padding-left: 20px;
}

.description-content li {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .product-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .product-detail {
    padding: 0 20px;
  }

  .product-title {
    font-size: 24px;
  }

  .tabs-header {
    flex-wrap: wrap;
    gap: 15px;
  }
}
</style>
