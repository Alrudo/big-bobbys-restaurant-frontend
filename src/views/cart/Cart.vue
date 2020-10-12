<template>
  <div id="cart">
    <div class="container">
      <h2>Ostukorv</h2>
      <div>
        <h5>Ostukorv on tühi, lisa midagi menüüst!</h5>
      </div>
      <div class="main-body">
        <div>
            <ShoppingCartItem
                v-for="(item, n) in items"
                v-bind:item="item" :key="n"
            />
        </div>
        <h2 id="end-sum">Kokku: {{ totalPrice }}</h2>
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

import ShoppingCartItem from "@/views/cart/ShoppingCartItem";
export default {
name: "Order",
  components: {ShoppingCartItem},
  data: function () {
    return {
      items: [{amount: 1, price: 8.50,  header: "Pepperoni", info: "Väike 25 cm, traditsiooniline taigen"},
        {amount: 2, price: 10.10, header: "Pepperoni", info: "Väike 25 cm, traditsiooniline taigen"}]
    }
  },
  computed: {
    totalPrice: function () {
      let totalPrice = 0;
      for (const item in this.items) {
        totalPrice += item.price + item.amount;
      }
      return Number(totalPrice).toFixed(2);
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
p {
  font-size: 1rem;
  margin-bottom: 0;
}
#end-sum {
  text-align: end;
  padding-top: 60px;
  padding-right: 100px;
}
</style>