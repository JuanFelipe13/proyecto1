<template>
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      <li v-for="product in products" :key="product._id">
        {{ product.name }} - ${{ product.price }}
        <button @click="deleteProduct(product._id)">Eliminar</button>
        
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('/products');
        this.products = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`/products/${id}`);
        this.fetchProducts();
      } catch (error) {
        console.error(error);
      }
    },
    
  }
}
</script>
