<template>
  <div id="cart">
    <div class="container">
      <h2>Ostukorv</h2>
      <div v-if="amount <= 0">
        <h5>Ostukorv on tühi, lisa midagi menüüst!</h5>
      </div>
      <div class="main-body">
        <div>
          <div id="repeat" v-if="amount > 0">
            <b-row align-v="center">
              <b-col cols="1">
                <img height="80px" src="@/assets/img/pepperoni-pizza.png" alt="pepperoni pizza">
              </b-col>
              <b-col cols="3">
                <div>
                  <h4>Pepperoni</h4>
                  <p id="small">Väike 25 cm, traditsiooniline taigen</p>
                </div>
              </b-col>
              <b-col cols="2" offset-md="1">
                <b-row align-v="center">
                  <b-col style="text-align: start">
                    <b-btn @click="amount -= 1">-</b-btn>
                  </b-col>
                  <b-col style="text-align: center">
                    <p class="big">{{ amount }}</p>
                  </b-col>
                  <b-col style="text-align: end">
                    <b-btn @click="amount += 1">+</b-btn>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="1" offset-md="1">
                <p class="big">{{ Number(amount * price).toFixed(2) }}€</p>
              </b-col>
              <b-col cols="1" offset-md="2" style="text-align: end">
                <b-btn size="lg" @click="amount = 0"><b-icon icon="trash"></b-icon></b-btn>
              </b-col>
            </b-row>
          </div>
        </div>
        <h2 id="end-sum">Kokku: {{ Number(amount * price).toFixed(2) }}€</h2>
        <b-row style="text-align: center">
          <b-col>
            <b-btn size="lg" router-link to="/menu">Menu</b-btn>
          </b-col>
          <b-col>
            <b-btn size="lg">Proceed</b-btn>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: "Order",
  data: function () {
    return {
      amount: 1,
      price: 8.50
    }
  }
}
</script>

<style scoped>
#cart {
  width: 80%;
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
}
h2 {
  padding-bottom: 60px;
}
.main-body {
  text-align: left;
}
h4 {
  padding-bottom: 5px;
}
#small {
  font-size: 0.7rem;
}
#repeat {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  padding-bottom: 15px;
}
p {
  font-size: 1rem;
  margin-bottom: 0;
}
#repeat:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.big {
  font-size: 1.5rem;
}
#end-sum {
  text-align: end;
  padding-top: 60px;
  padding-right: 100px;
}
</style>