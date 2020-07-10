<template>
  <section class="login-container">
    <h1>Login Page</h1>

    <div v-if="firstStep">
      <form>
        <input type="text" placeholder="First Name" v-model="details.firstName" />
        <input type="text" placeholder="Last Name" v-model="details.lastName" />
        <input type="number" placeholder="Phone Number" v-model="details.phoneNumber" />
        <input type="email" placeholder="Email" v-model="details.email" />
      </form>
      <div @click="onFirstSubmit" class="btn">Next Page</div>
    </div>

    <div v-if="!firstStep">
      <form>
        <input type="number" placeholder="Height (Number)" v-model="details.height" />
        <input type="number" placeholder="Weight (Number)" v-model="details.weight" />
        <textarea cols="30" rows="10" placeholder="Description" v-model="details.description"></textarea>
      </form>
      <!-- <div class="secc-btns-main"> -->
      <!-- <div @click="onBackPage" class="back-btn btn">Back Page</div> -->
      <img @click="onBackPage" class="back-btn" src="../assets/icons/back.png" alt="Back" />
      <div @click="onSeccSubmit" class="submit-btn btn">Submit</div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstStep: true,
      details: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        height: "",
        weight: "",
        description: ""
      }
    };
  },
  computed: {
    books() {
      return this.$store.getters.books;
    }
  },
  methods: {
    onFirstSubmit() {
      this.firstStep = false;
    },
    onBackPage() {
      this.firstStep = true;
    },
    onSeccSubmit() {
      this.$store.dispatch({
        type: "addDetails",
        details: this.details
      });

      this.$router.push("/details");
    }
  }
};
</script>
<style>
/* basic: */
body {
  background-color: #3f507e;
  color: #eee;
  margin: 0;
  font-family: Roboto, sans-serif;
}
textarea:focus,
input:focus {
  outline: none;
}

/* fonts: */
@font-face {
  font-family: Roboto;
  src: url("../assets/fonts/Roboto/Roboto-Regular.ttf");
}
@font-face {
  font-family: Roboto_Slab;
  src: url("../assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf");
}
@font-face {
  font-family: Merriweather;
  src: url("../assets/fonts/Merriweather/Merriweather-Regular.ttf");
}
</style>

<style scoped>
.login-container {
  height: 100vh;
  text-align: center;
  background-image: url("../assets/imgs/login.jpg");
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: center;
}
h1 {
  font-size: 50px;
  margin-top: 0;
  padding-top: 110px;
  text-shadow: 0 0 4px black;
  font-family: Roboto_Slab, serif;
}
form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
}
input {
  width: 30%;
  min-width: 260px;
  height: 40px;
  margin: 10px auto;
  border-radius: 10px;
  padding-left: 8px;
  font-size: 20px;
  border: 2px solid #000000e0;
  box-sizing: border-box;
  box-shadow: 0 0 2px 0px black;
  font-family: Merriweather, sans-serif;
}
.secc-btns-main {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
}
.back-btn {
  position: fixed;
  top: 40px;
  left: 40px;
  width: 60px;
  transition: all 0.3s;
}
.back-btn:hover {
  transform: scale(1.1);
  cursor: pointer;
}
textarea {
  resize: none;
  border: 2px solid black;
  width: 60%;
  min-width: 350px;
  height: 140px;
  margin: 10px auto;
  border-radius: 10px;
  padding-left: 8px;
  font-size: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 2px 0px black;
  font-family: Merriweather, sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.submit-btn {
  cursor: pointer;
  border: 2px black solid;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 25px;
  transition: all 0.5s;
  background-color: #3f507e;
  color: lightgoldenrodyellow;
  box-shadow: 0 0 1px 0px black;
}
.btn:hover {
  color: #fff;
  background-color: #4e649e;
}
/* helper: */
.btn {
  cursor: pointer;
  border: 2px black solid;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: 700;
  font-size: 25px;
  transition: all 0.5s;
  background-color: #3f507e;
  color: lightgoldenrodyellow;
  width: fit-content;
  margin: 10px auto;
  box-shadow: 0 0 1px 0px black;
}
@media (max-width: 840px) {
  .back-btn {
    width: 40px;
    top: 20px;
    left: 20px;
  }
  h1 {
    padding-top: 30px;
    font-size: 45px;
  }
  form {
    align-items: flex-start;
    width: 80%;
  }
  input {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
  textarea {
    margin: 0;
    width: 100%;
    min-width: unset;
  }
}
@media (max-width: 580px) {
  .back-btn {
    width: 35px;
    top: 15px;
    left: 15px;
  }
}
</style>