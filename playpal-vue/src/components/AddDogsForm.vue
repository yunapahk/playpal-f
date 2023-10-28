<template>
    <div class="form-container">
      <h2>Add Your Pal!</h2>
      <form @submit.prevent="submitForm" class="form-column">
        <input class="form-input" v-model="formData.name" placeholder="name" />
        <input class="form-input" v-model="formData.breed" placeholder="breed" />
        <input class="form-input" v-model.number="formData.age" placeholder="age" />
        <input class="form-input" v-model="formData.image" placeholder="image" />
        <input class="form-input" v-model="formData.size" placeholder="size" />
        <input class="form-input" v-model="formData.activityLevel" placeholder="activity level" />
        <button type="submit" class="form-button">Add Pal</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        formData: {
          name: "",
          breed: "",
          age: null,
          image: "",
          size: "",
          activityLevel: ""
        }
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await api.addDog(this.formData); 
          if (response.data) {
            this.$emit('dogAdded', response.data); 
            this.formData = {
              name: "",
              breed: "",
              age: null,
              image: "",
              size: "",
              activityLevel: ""
            };
          }
        } catch (error) {
          console.error("Failed to add dog:", error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  