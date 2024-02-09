<template>
  <div id="app">
    <ProductList @productAdded="fetchProducts" />
    <ProductForm @productAdded="fetchProducts" />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';

export default {
  components: {
    ProductList,
    ProductForm
  },
  methods: {
    fetchProducts() {
      this.$refs.productList.fetchProducts();
    }
  }
}
</script>
