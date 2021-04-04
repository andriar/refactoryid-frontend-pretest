<template>
  <div class="main">
    <div class="btn-group">
      <button @click="findThingOnMeetingRoom()">FUNGSI 1</button>
      <button @click="findType('electronic')">FUNGSI 2</button>
      <button @click="findType('furniture')">FUNGSI 3</button>
      <button @click="findPurchased()">FUNGSI 4</button>
      <button @click="findBrown()">FUNGSI 5</button>
      <button @click="resetData()">RESET DATA</button>
    </div>

    <div class="big-title">{{ title }}</div>
    <div class="wrapper" v-if="items.length > 0">
      <div v-for="item in items" :key="item.username" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">
            {{ item.name }}
          </div>

          <div class="wrapper-card">
            <div>
              <div class="title">type</div>
              <div class="birthday">{{ item.type }}</div>
            </div>
            <div>
              <div class="title">Tag</div>
              <div class="phone" v-if="item.tags.length > 0">
                {{ item.tags.toString() }}
              </div>
              <div class="phone" v-else>no tags</div>
            </div>
          </div>

          <div class="wrapper-card2">
            <div>
              <div class="article-title">Placement</div>
              <div>{{ item.placement.room_id }} {{ item.placement.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>no data</div>
  </div>
</template>

<script>
export default {
  name: "Json3",
  props: {
    msg: String,
  },
  data() {
    return {
      title: "",
      items: [],
    };
  },

  mounted() {
    this.resetData();
  },
  methods: {
    findThingOnMeetingRoom() {
      this.resetData();
      this.title = "FIND THINGS ON MEETING ROOM";

      const filter = this.items.filter(
        (el) => el.placement.name.toLowerCase() === "meeting room"
      );
      this.items = filter;
    },
    findType(keyword) {
      this.resetData();
      this.title = "FIND " + keyword.toUpperCase();

      const filter = this.items.filter(
        (el) => el.type.toLowerCase() === keyword.toLowerCase()
      );

      this.items = filter;
    },
    findPurchased() {
      this.resetData();
      this.title = "FIND PURCHASED ITEM ON 16 JANUARI 2020";

      const filter = this.items.filter((el) => {
        const date = new Date(el.purchased_at);
        const date2 = new Date("01/16/2020");

        return date == date2;
      });

      this.items = filter;
    },
    findBrown() {
      this.resetData();
      this.title = "FIND BROWN COLOR";

      const filter = this.items.filter((el) =>
        el.tags.find((tag) => tag.toLowerCase() === "brown")
      );

      this.items = filter;
    },
    resetData() {
      this.title = "all data";
      this.items = [
        {
          inventory_id: 9382,
          name: "Brown Chair",
          type: "furniture",
          tags: ["chair", "furniture", "brown"],
          purchased_at: 1579190471,
          placement: {
            room_id: 3,
            name: "Meeting Room",
          },
        },
        {
          inventory_id: 9380,
          name: "Big Desk",
          type: "furniture",
          tags: ["desk", "furniture", "brown"],
          purchased_at: 1579190642,
          placement: {
            room_id: 3,
            name: "Meeting Room",
          },
        },
        {
          inventory_id: 2932,
          name: "LG Monitor 50 inch",
          type: "electronic",
          tags: ["monitor"],
          purchased_at: 1579017842,
          placement: {
            room_id: 3,
            name: "Lavender",
          },
        },
        {
          inventory_id: 232,
          name: "Sharp Pendingin Ruangan 2PK",
          type: "electronic",
          tags: ["ac"],
          purchased_at: 1578931442,
          placement: {
            room_id: 5,
            name: "Dhanapala",
          },
        },
        {
          inventory_id: 9382,
          name: "Alat Makan",
          type: "tableware",
          tags: ["spoon", "fork", "tableware"],
          purchased_at: 1578672242,
          placement: {
            room_id: 10,
            name: "Rajawali",
          },
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

.big-title {
  font-size: 26px;
  margin: 20px 20px 20px 20px;
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

.birthday,
.phone {
  font-size: 16px;
}

.article-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0px 10px 0px;
}
.btn-group button {
  margin: 5px;
}
</style>
