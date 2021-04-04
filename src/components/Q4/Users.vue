<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div class="wrapper">
      <div v-for="user in users" :key="user.name" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div>
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div>
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { mapState } from "vuex";
// import { INCREMENT } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
      })
      .catch(() => (this.loading = false));
  },
  methods: {
    setData(data) {
      this.$store.dispatch("setDatas", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
  font-family: "Lato", sans-serif;
  height: 100vh;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  margin: 10px 5px 10px 5px;
  border-radius: 8px;
  flex: 45%;
}

.body-card {
  padding: 25px;
}

.title {
  font-size: 12px;
  color: #e0e0e0;
  margin-bottom: 5px;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.wrapper-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px 0px 0px;
}

.email,
.phone,
.website {
  font-size: 16px;
}

.website {
  color: #aed581;
  font-weight: 600;
}
</style>
