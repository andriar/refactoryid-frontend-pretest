<template>
  <div class="main">
    <nav>
      <div class="logo">Logo</div>
      <div class="container-user">
        <img src="../../assets/photo.png" alt="photo user" />
        <div class="username">samsul arifin</div>
        <img src="../../assets/ic24-settings.png" alt="setting" />
      </div>
    </nav>

    <div class="container-body">
      <div class="body-left">
        <div class="bl-card">
          <div>
            <img src="../../assets/to-do-list-1.png" alt="todo list" />
          </div>
          <div>
            <div class="hello">Hallo, Sam!</div>
            <div class="today-task">
              You have 2 tasks left for today, Already completed Task today?
            </div>
          </div>
        </div>

        <calendar active="4" />
      </div>
      <div class="body-right">
        <div class="title">Task For Today</div>
        <div class="btn-group">
          <button class="btn-create" @click="modal = true">
            <img src="../../assets/plus.png" alt="plus-icon" />
            <div>
              Create New
            </div>
          </button>
          <button class="btn-search">
            <div>Cari</div>
            <img src="../../assets/search_24px.png" alt="search-icon" />
          </button>
        </div>

        <div class="container-tasks">
          <div v-for="(task, index) in tasks" :key="index" class="card-task">
            <div class="container-card-title">
              <div class="card-title">{{ task.title }}</div>
              <div class="label-complete" v-if="task.status">
                <img src="../../assets/check.svg" alt="check" />
                Complete
              </div>
              <div class="label-incomplete" v-else>
                <img src="../../assets/check-disable.svg" alt="check-disable" />
                Set as Complete
              </div>
            </div>

            <div class="container-card-body">
              <div>
                <div v-for="(detail, index) in task.tasks" :key="index">
                  {{ index + 1 + ". " + detail }}
                </div>
              </div>
              <div>
                <button>
                  <img src="../../assets/pencil.png" alt="pencil-icon" />
                </button>

                <button>
                  <img src="../../assets/delete.png" alt="delete-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-if="modal">
      <div class="modal-content">
        <div class="modal-title">New Task</div>
        <div class="form-modal">
          <div class="title-input my-15">Title</div>
          <div class="my-15">
            <input type="text" placeholder="Fill title" />
          </div>

          <div class="title-input my-15">Description</div>
          <div class="my-15">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Fill description"
            ></textarea>
          </div>

          <div class="title-input my-15">Choose Date</div>
          <div class="modal-calendar my-15">
            <calendar />
          </div>

          <div class="modal-footer">
            <button class="btn-cancel" @click="modal = false">Cancel</button>
            <button class="btn-submit" @click="modal = false">
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from "../calendar/calendar";

export default {
  name: "simpleApp5",
  props: {
    msg: String,
  },
  components: {
    calendar,
  },
  data() {
    return {
      tasks: [
        {
          title: "Daily Stand up",
          status: 1,
          tasks: [
            "Dont forget prepare your report and any blocker in Front end.",
            "Telling Project Manager for new assignment.",
          ],
        },

        {
          title: "Meeting With Client A",
          status: 0,
          tasks: ["Lorem ipsum dolor si amet", "Lorem ipsum dolor si amet"],
        },
        {
          title: "Meeting With Client B",
          status: 0,
          tasks: ["Lorem ipsum dolor si amet", "Lorem ipsum dolor si amet"],
        },
      ],
      modal: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  font-family: "Roboto", sans-serif;
  height: 100vh;
}

nav {
  background-color: #0442d0;
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav div {
  padding-left: 44px;
  padding-right: 44px;
}

.logo {
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  flex: 70%;
}

.container-user {
  display: flex;
  align-items: center;
  flex: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.username {
  font-size: 22px;
  font-weight: 700;
  line-height: 25.78px;
  color: #ffffff;
}

.container-body {
  display: flex;
  flex-direction: row;
}

.body-left {
  flex: 30%;
  display: flex;
  flex-direction: column;
  padding: 50px 30px 30px 50px;
  gap: 8%;
}

.bl-card {
  padding: 24px;
  background-color: #0442d0;
  border-radius: 20px;
  display: flex;
  gap: 8%;
}

.bl-card div:nth-child(2) {
  display: flex;
  flex-direction: column;
}

.hello {
  font-size: 22px;
  font-weight: 900;
  color: #fabe2c;
}

.today-task {
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
}

.body-right {
  flex: 70%;
  padding: 50px 30px 30px 50px;
  border-left: solid 1px#EEF3FD;
  display: flex;
  flex-direction: column;
}

.title {
  color: #525c77;
  font-size: 35px;
  font-weight: 700;
}

.btn-group {
  display: flex;
  flex-direction: row;
  gap: 2%;
  margin-top: 54px;
}

.btn-create,
.btn-search {
  border-radius: 15px;
  height: 43px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  cursor: pointer;
  align-items: center;
  display: flex;
}

.btn-create {
  background-color: #0442d0;
  border: none;
  color: white;
  flex: 20%;
  justify-content: center;
}

.btn-search {
  width: 100%;
  border: solid 1px #0442d0;
  color: #0442d0;
  display: flex;
  justify-content: center;
  position: relative;
}

.btn-search img {
  position: absolute;
  right: 15px;
}

.btn-create div:nth-child(2) {
  margin-left: 5px;
}

.container-tasks {
  display: flex;
  flex-direction: column;
}

.card-task {
  border-radius: 15px;
  background-color: #ffffff;
  padding: 27px;
  margin: 20px 0px 20px 0px;
}

.container-card-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1%;
}

.card-title {
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #525c77;
}

.label-complete {
  background-color: #feeaeb;
  color: #fb3453;
  border-radius: 5px;
  padding: 7px;

  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;

  display: flex;
  align-items: center;
  gap: 3%;
}

.label-incomplete {
  background-color: #f2f4f8;
  color: #d3d5db;
  border-radius: 5px;
  padding: 7px;

  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
}

.container-card-body {
  margin-top: 23px;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #525c77;

  display: flex;
  flex-direction: row;
}

.container-card-body div:nth-child(1) {
  flex: 90%;
}

.container-card-body div:nth-child(2) {
  flex: 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10%;
}

.container-card-body div:nth-child(2) button {
  border: none;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-content {
  background-color: #fbfcff;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 668px;

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 45px;
}

.modal-content .modal-title {
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  color: #525c77;
}

.modal-calendar {
  width: 393px;
  border: #cfdefc solid 1px;
  border-radius: 10px;
}

.form-modal .my-15 {
  margin: 15px 0px 15px 0px;
  display: flex;
}

.form-modal .title-input {
  font-size: 25px;
  font-style: normal;
  font-weight: 700;

  color: #525c77;
}

.my-15 input,
textarea {
  padding: 21px 27px 21px 27px;
  display: block;
  width: 100%;
  border-radius: 10px;
  border: solid #cfdefc 1px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  gap: 5%;
}

.btn-submit {
  border-radius: 15px;
  height: 43px;
  cursor: pointer;
  align-items: center;
  background-color: #0442d0;
  border: none;
  color: white;
}

.btn-cancel {
  border: none;

  color: #0442d0;
  background-color: transparent;
}

.btn-submit,
.btn-cancel {
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  cursor: pointer;
  padding: 0px 15px 0px 15px;
}
</style>
