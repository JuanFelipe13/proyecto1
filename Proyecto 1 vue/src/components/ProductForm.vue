<template>
  <div>
    <h2>Agregar Producto</h2>
    <form @submit.prevent="addProduct">
      <label>Nombre:</label>
      <input type="text" v-model="name">
      <label>Precio:</label>
      <input type="number" v-model.number="price">
      <button type="submit">Agregar Producto</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      price: ''
    };
  },
  methods: {
    async addProduct() {
      try {
        await axios.post('/products', { name: this.name, price: this.price });
        this.name = '';
        this.price = '';      
        this.$emit('productAdded');
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>


