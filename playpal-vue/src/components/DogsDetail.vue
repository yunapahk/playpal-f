<template>
    <div>
      <h1>{{ dog.name }}</h1>
      <img :src="dog.image" :alt="dog.name" />
      <h3>{{ dog.breed }}</h3>
      <h3>{{ dog.age }} Years Old</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dog: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>

  </style>
  