<template>
  <div>
    <!-- swiper-card code using vue-tinder -->
    <div class="swiper-container">
      <vue-tinder v-model="dogs">
        <template #default="{ item }">
          <div class="card">
            <h4>{{ item.age }} Years Old</h4>
            <h4 id="dogBreed">{{ item.breed }}</h4>
            <h3>{{ item.name }}</h3>
            <img :src="item.image" :alt="item.name" />
          </div>
        </template>
      </vue-tinder>
    </div>

    <!-- Display individual dog -->
    <div class="dog-details" v-for="dog in dogs" :key="dog._id">
      <h1>{{ dog.name }}</h1>
      <h2>{{ dog.breed }}</h2>
      <h4>{{ dog.age }} Years Old</h4>
      <h4>{{ dog.size }}</h4>
      <h4>Activity Level: {{ dog.activityLevel }}</h4>
      <img :src="dog.image" :alt="dog.name" />

      <!-- Update and Delete forms for each dog -->
      <div class="updateContainer">
        <h2>Update {{ dog.name }}</h2>
        <form :action="`/update/${dog._id}`" method="POST">
          <input type="submit" :value="'Update ' + dog.name" />
        </form>
        
        <form :action="`/delete/${dog._id}`" method="POST">
          <button type="submit">Delete {{ dog.name }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueTinder from 'vue-tinder';

export default {
  components: {
    VueTinder,
  },
  data() {
    return {
      dogs: [],
      lastDirection: null,
    };
  }
};
</script>

<style scoped>
.swiper-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 550px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.card h3, .card h4 {
  margin: 10px 0;
}

.card img {
  max-width: 100%;
  border-radius: 8px;
}

.dog-details {
  border: 1px solid #e1e1e1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  background-color: #f9f9f9;
}

.dog-details h1, .dog-details h2 {
  margin-bottom: 10px;
}

.dog-details img {
  max-width: 100%;
  border-radius: 8px;
}
</style>
