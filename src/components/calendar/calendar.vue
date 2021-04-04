<template>
  <div>
    <div class="calendar-card">
      <div class="month-container">
        <div>
          <div class="calendar-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            Agustus 2020
          </div>
        </div>
        <div>
          <button>
            <img
              src="../../assets/arrow_backward_ios_24px.png"
              alt="backward-icon"
            />
          </button>
          <button>
            <img
              src="../../assets/arrow_forward_ios_24px.png"
              alt="forward-icon"
            />
          </button>
        </div>
      </div>

      <div class="days-container">
        <div v-for="day in days" :key="day">
          {{ day }}
        </div>
      </div>

      <div class="date-container">
        <div v-for="i in 30" :key="i">
          <div :class="i == active && 'active-date'">
            {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: {
    active: String,
  },
  data() {
    return {
      days: ["Sun", "Mon", "Thu", "Wed", "Thru", "Fri", "Sat"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calendar-card {
  background-color: #ffffff;
  border-radius: 31px;
  padding: 20px;
}

.month-container {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #525c77;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.month-container div:nth-child(1) {
  display: flex;
  flex-direction: row;
  gap: 5%;
  flex: 20%;
  align-items: center;
}

.calendar-icon {
  max-width: 20px;
}

.month-container div:nth-child(2) button {
  border: none;
  background-color: #ffffff;
  cursor: pointer;
}

.days-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  margin: 30px 0px 30px 0px;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #525c77;
}

.days-container div {
  flex: 13%;
}

.date-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: baseline;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #525c77;
}

.date-container div {
  flex: 14%;
  flex-grow: unset;
  margin-bottom: 10px;
}

.date-container div div {
  width: 18px;
  height: 18px;
  text-align: center;
  padding: 2px;
}

.active-date {
  background-color: blue;
  color: #ffffff;
  border-radius: 15px;
}
</style>
