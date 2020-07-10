<template>
  <section class="details-container">
    <h2>Details Page</h2>
    <div class="card-main">
      <div>
        <span>First Name:</span>
        {{details.firstName}}
      </div>
      <div>
        <span>Last Name:</span>
        {{details.lastName}}
      </div>
      <div>
        <span>Phone Number:</span>
        {{details.phoneNumber}}
      </div>
      <div>
        <span>Email:</span>
        {{details.email}}
      </div>
      <div>
        <span>Height:</span>
        {{details.height}}
      </div>
      <div>
        <span>Weight:</span>
        {{details.weight}}
      </div>
      <div>
        <span>Description:</span>
        {{details.description}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.details = this.$store.getters.details;
  }
};
</script>

<style scoped>
body {
  background-color: #3f507e;
  color: #eee;
}
.details-container {
  height: 100vh;
  text-align: center;
  background-image: url("../assets/imgs/sea.jpg");
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: center;
  background-size: cover;
}
h2 {
  font-size: 50px;
  margin-top: 0;
  padding-top: 70px;
  padding-bottom: 30px;
  text-shadow: 0 0 5px black;
  font-family: Roboto_Slab, serif;
}
.card-main {
  border: 2px solid black;
  padding: 30px 0px;
  width: 600px;
  margin: 0 auto;
  text-align: start;
  padding-left: 25px;
  box-sizing: border-box;
  background-color: #f6f9ff;
  color: black;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 2px 6px 17px black;
}
.card-main:hover {
  box-shadow: 0 0 12px 0px black;
  transform: scale(1.3);
}
.card-main > * {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
}
span {
  font-weight: 700;
  font-size: 18px;
  margin-right: 5px;
}
@media (max-width: 840px) {
  .card-main {
    max-width: 80%;
  }
  .card-main > * {
    font-size: 14px;
  }
  span {
    font-size: 16px;
  }
  h2 {
    font-size: 40px;
    margin-top: 0;
    padding-top: 50px;
    padding-bottom: 0;
  }
  .card-main:hover {
    transform: scale(1);
  }
}
</style>