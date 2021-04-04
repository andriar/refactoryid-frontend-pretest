<template>
  <div class="main">
    <div class="btn-group">
      <button @click="noPhoneNumber()">FUNGSI 1</button>
      <button @click="haveArticle()">FUNGSI 2</button>
      <button @click="hasAnnisName()">FUNGSI 3</button>
      <button @click="haveArticle2020()">FUNGSI 4</button>
      <button @click="wasBorn1986()">FUNGSI 5</button>
      <button @click="articleHasTipsOnTitle()">FUNGSI 6</button>
      <button @click="articlePublishedBeforeAug2019()">FUNGSI 7</button>
      <button @click="resetData()">RESET DATA</button>
    </div>

    <div class="big-title">{{ title }}</div>
    <div class="wrapper" v-if="items.length > 0">
      <div v-for="item in items" :key="item.username" class="card">
        <div class="body-card">
          <div class="title">Username</div>
          <div class="name">
            {{ item.profile.full_name }} {{ "(@" + item.username + ")" }}
          </div>

          <div class="wrapper-card">
            <div>
              <div class="title">birthday</div>
              <div class="birthday">{{ item.profile.birthday }}</div>
            </div>
            <div>
              <div class="title">Phones</div>
              <div class="phone" v-if="item.profile.phones.length > 0">
                {{ item.profile.phones.toString() }}
              </div>
              <div class="phone" v-else>no phone number</div>
            </div>
          </div>

          <div class="wrapper-card2">
            <div>
              <div class="article-title">Ariticle</div>
              <div v-if="item['articles:'].length > 0">
                <div
                  v-for="(article, index) in item['articles:']"
                  :key="index"
                  class="article"
                >
                  <div>
                    <div class="title">Title</div>
                    <div>{{ article.title }}</div>
                  </div>
                  <div>
                    <div class="title">Published at</div>
                    <div>
                      {{ new Date(article.published_at).toLocaleDateString() }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                no article
              </div>
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
  name: "Json2",
  props: {
    msg: String,
  },
  data() {
    return {
      title: "",
      items: [
        {
          id: 323,
          username: "rinood30",
          profile: {
            full_name: "Shabrina Fauzan",
            birthday: "1988-10-30",
            phones: ["08133473821", "082539163912"],
          },
          "articles:": [
            {
              id: 3,
              title: "Tips Berbagi Makanan",
              published_at: "2019-01-03T16:00:00",
            },
            {
              id: 7,
              title: "Cara Membakar Ikan",
              published_at: "2019-01-07T14:00:00",
            },
          ],
        },
        {
          id: 201,
          username: "norisa",
          profile: {
            full_name: "Noor Annisa",
            birthday: "1986-08-14",
            phones: [],
          },
          "articles:": [
            {
              id: 82,
              title: "Cara Membuat Kue Kering",
              published_at: "2019-10-08T11:00:00",
            },
            {
              id: 91,
              title: "Cara Membuat Brownies",
              published_at: "2019-11-11T13:00:00",
            },
            {
              id: 31,
              title: "Cara Membuat Brownies",
              published_at: "2019-11-11T13:00:00",
            },
          ],
        },
        {
          id: 42,
          username: "karina",
          profile: {
            full_name: "Karina Triandini",
            birthday: "1986-04-14",
            phones: ["06133929341"],
          },
          "articles:": [],
        },
        {
          id: 201,
          username: "icha",
          profile: {
            full_name: "Annisa Rachmawaty",
            birthday: "1987-12-30",
            phones: [],
          },
          "articles:": [
            {
              id: 39,
              title: "Tips Berbelanja Bulan Tua",
              published_at: "2019-04-06T07:00:00",
            },
            {
              id: 43,
              title: "Cara Memilih Permainan di Steam",
              published_at: "2019-06-11T05:00:00",
            },
            {
              id: 58,
              title: "Cara Membuat Brownies",
              published_at: "2019-09-12T04:00:00",
            },
          ],
        },
      ],
    };
  },

  mounted() {
    this.resetData();
  },
  methods: {
    setData(data) {
      this.$store.dispatch("setDatas", data);
    },

    noPhoneNumber() {
      this.resetData();

      this.title = "No Phone Number";
      const filter = this.items.filter((el) => el.profile.phones.length === 0);

      this.items = filter;
    },
    haveArticle() {
      this.resetData();

      this.title = "Has Article";
      const filter = this.items.filter((el) => el["articles:"].length);

      this.items = filter;
    },
    hasAnnisName() {
      this.resetData();

      this.title = "Has Annis Name";
      const filter = this.items.filter((el) => {
        return el.profile.full_name.toLowerCase().search("annis") >= 0;
      });

      this.items = filter;
    },
    haveArticle2020() {
      this.resetData();

      this.title = "Has Article on 2020";
      const filter = this.items.filter((el) => {
        const filterYear = el["articles:"].filter((el2) => {
          const date = new Date(el2.published_at);
          return date.getFullYear() === "2020";
        });

        return filterYear.length > 0;
      });

      this.items = filter;
    },
    wasBorn1986() {
      this.resetData();

      this.title = "Was Born on 1986";
      const filter = this.items.filter((el) => {
        const birthday = new Date(el.profile.birthday);
        return birthday.getFullYear() === 1986;
      });
      this.items = filter;
    },
    articleHasTipsOnTitle() {
      this.resetData();

      this.title = "Article has tips on title";

      var reduced = this.items.reduce(function(filtered, el) {
        const filterTitle = el["articles:"].filter((el2) => {
          return el2.title.toLowerCase().search("tips") >= 0;
        });

        if (filterTitle.length > 0) {
          var someNewValue = { ...el, "articles:": filterTitle };
          filtered.push(someNewValue);
        }
        return filtered;
      }, []);

      this.items = reduced;
    },
    articlePublishedBeforeAug2019() {
      this.resetData();

      this.title = "Article has published before Aug 2019";

      var reduced = this.items.reduce(function(filtered, el) {
        const filterTitle = el["articles:"].filter((el2) => {
          const date = new Date(el2.published_at);
          const date2 = new Date("01/08/2019");

          return date < date2;
        });

        if (filterTitle.length > 0) {
          var someNewValue = { ...el, "articles:": filterTitle };
          filtered.push(someNewValue);
        }
        return filtered;
      }, []);

      this.items = reduced;
    },
    resetData() {
      this.title = "all data";
      this.items = [
        {
          id: 323,
          username: "rinood30",
          profile: {
            full_name: "Shabrina Fauzan",
            birthday: "1988-10-30",
            phones: ["08133473821", "082539163912"],
          },
          "articles:": [
            {
              id: 3,
              title: "Tips Berbagi Makanan",
              published_at: "2019-01-03T16:00:00",
            },
            {
              id: 7,
              title: "Cara Membakar Ikan",
              published_at: "2019-01-07T14:00:00",
            },
          ],
        },
        {
          id: 201,
          username: "norisa",
          profile: {
            full_name: "Noor Annisa",
            birthday: "1986-08-14",
            phones: [],
          },
          "articles:": [
            {
              id: 82,
              title: "Cara Membuat Kue Kering",
              published_at: "2019-10-08T11:00:00",
            },
            {
              id: 91,
              title: "Cara Membuat Brownies",
              published_at: "2019-11-11T13:00:00",
            },
            {
              id: 31,
              title: "Cara Membuat Brownies",
              published_at: "2019-11-11T13:00:00",
            },
          ],
        },
        {
          id: 42,
          username: "karina",
          profile: {
            full_name: "Karina Triandini",
            birthday: "1986-04-14",
            phones: ["06133929341"],
          },
          "articles:": [],
        },
        {
          id: 201,
          username: "icha",
          profile: {
            full_name: "Annisa Rachmawaty",
            birthday: "1987-12-30",
            phones: [],
          },
          "articles:": [
            {
              id: 39,
              title: "Tips Berbelanja Bulan Tua",
              published_at: "2019-04-06T07:00:00",
            },
            {
              id: 43,
              title: "Cara Memilih Permainan di Steam",
              published_at: "2019-06-11T05:00:00",
            },
            {
              id: 58,
              title: "Cara Membuat Brownies",
              published_at: "2019-09-12T04:00:00",
            },
          ],
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

.article {
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid;
}

.article div {
  flex: 50%;
}

.btn-group button {
  margin: 5px;
}
</style>
