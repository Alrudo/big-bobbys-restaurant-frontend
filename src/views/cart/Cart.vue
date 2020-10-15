<template>
  <div id="cart">
    <b-container>
      <h2>Ostukorv</h2>
      <div v-if="items.length===0">
        <h5>Ostukorv on tühi, lisa midagi menüüst!</h5>
      </div>
      <div class="main-body">
        <div>
          <ShoppingCartItem
              v-for="(item, n) in items" :key="n"
              v-bind:item="item"
              @remove-item="removeItem"
          />
        </div>
        <h2 id="end-sum">Kokku: {{ Number(totalPrice).toFixed(2) }}€</h2>
        <b-row class="text-center">
          <b-col>
            <b-btn size="lg" router-link to="/menu">Menu</b-btn>
          </b-col>
          <b-col>
            <b-btn size="lg">Proceed</b-btn>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>

import ShoppingCartItem from "@/views/cart/ShoppingCartItem";

export default {
  name: "Order",
  components: {ShoppingCartItem},
  data: function () {
    return {
      items: [
        {id: 0, amount: 1, price: 8.50, header: "Pepperoni", info: "Väike 25 cm, traditsiooniline taigen"},
        {id: 1, amount: 2, price: 10.10, header: "Pepperoni", info: "Väike 25 cm, traditsiooniline taigen"}
      ]
    }
  },
  computed: {
    totalPrice: function () {
      let totalPrice = 0;
      for (const item of this.items) {
        totalPrice += item.price * item.amount
      }
      return Number(totalPrice).toFixed(2);
    }
  },
  methods: {
    removeItem(id) {
      this.items = this.items.filter(it => it.id !== id)
    }
  }
}
</script>

<style scoped>
#cart {
  width: 100%;
  margin: 80px 0;
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
