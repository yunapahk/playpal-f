<template>
  <div>
    <!-- Dog List -->
    <div v-for="dog in dogs" :key="dog._id" class="dog">
      <router-link :to="`/${dog._id}`">
        <h1>{{ dog.name }}</h1>
      </router-link>
      <img :src="dog.image" :alt="dog.name" />
      <h3>{{ dog.breed }}</h3>
      <h3>{{ dog.age }}</h3>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    dogs: [],
    lastDirection: null
  };
},
methods: {
  swiped(direction, dogName) {
    console.log("removing: " + dogName);
    this.lastDirection = direction;
  },
  outOfFrame(dogName) {
    console.log(dogName + " left the screen!");
  }
}
};
</script>

<style scoped>
</style>
