<template>
  <div class="main">
    <div>open console</div>

    <div class="form">
      <input type="text" v-model="restoName" placeholder="resto" />
      <input type="date" v-model="dateInput" />
      <input type="text" v-model="cashierName" placeholder="cashier" />
      <div v-for="(item, index) in items" :key="index">
        <input type="text" v-model="item.item" placeholder="item name" />
        <input type="text" v-model="item.price" placeholder="price" />
      </div>

      <button @click="add()">add</button>
      <button @click="reset()">reset</button>
      <button @click="submit()">submit</button>

      <div>
        <div>{{ restoName }}</div>
        <div>Tanggal {{ dateInput.toString() }}</div>
        <div>Nama Kasir {{ cashierName }}</div>
        <div>============================</div>
        <div>
          <div v-for="(item, index) in items" :key="index">
            <div>{{ item.item }}</div>
            <hr />
            <div>Rp. {{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "story",
  props: {
    msg: String,
  },
  data() {
    return {
      restoName: "",
      dateInput: new Date(),
      cashierName: "",
      items: [
        {
          item: "",
          price: 0,
        },
      ],
    };
  },

  mounted() {
    alert("not working yet");
  },
  methods: {
    submit() {},
    add() {
      if (this.items.length <= 10) {
        this.items.push({
          item: "",
          price: 0,
        });
      } else {
        alert("max 10");
      }
    },
    reset() {
      this.restoName = "";
      this.dateInput = new Date();
      this.cashierName = "";
      this.items = [
        {
          item: "",
          price: 0,
        },
      ];
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

.form {
  display: flex;
  flex-direction: column;
}

.form input {
  margin-bottom: 10px;
}

.form div {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
