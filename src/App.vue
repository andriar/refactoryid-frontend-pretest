<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
      rel="stylesheet"
    />

    <nav>
      <button v-for="i in 5" :key="i" @click="button = i">SOAL {{ i }}</button>
    </nav>

    <story v-if="button === 1" />
    <json-2 v-if="button === 2" />
    <json-3 v-if="button === 3" />
    <Users msg="User List" v-if="button === 4" />
    <simple-app-5 v-if="button === 5" />
  </div>
</template>

<script>
import Story from "./components/Q1/story.vue";
import Users from "./components/Q4/Users.vue";
import Json2 from "./components/Q2/Json2.vue";
import Json3 from "./components/Q3/Json3.vue";
import simpleApp5 from "./components/Q5/simpleApp5.vue";

export default {
  name: "App",
  components: {
    Story,
    Users,
    Json2,
    Json3,
    simpleApp5,
  },
  data() {
    return {
      button: 1,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f7fa;
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 5%;
  margin-bottom: 10px;
  background-color: white;
}
</style>
