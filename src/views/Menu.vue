<template>
  <div id="menu">
    <div class="container" v-for="(item, n) in menu_items" :key="item.heading-n">
      <div class="row mt-5">
        <h2>{{ item.heading }}</h2>
        <div class="ml-3 h2">
          <b-icon icon="chevron-up" v-if="item.state" @click="item.state=false"></b-icon>
          <b-icon icon="chevron-down" v-if="!item.state" @click="item.state=true"></b-icon>
        </div>
      </div>
      <hr class="my-0 mb-3">
      <b-collapse id="collapse-1" v-model="item.state" class="mt-3">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" v-for="(pos, n) in item.pos" :key="pos.heading-n">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/pepperoni-pizza.png" :alt="pos.heading">
              <div class="card-body">
                <h5 class="card-title">{{ pos.heading }}</h5>
                <p class="card-text">{{ pos.ingredients }}</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-2 ml-1">alates {{pos.price}}€</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Vali</b-btn>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  name: "Menu",
  data: function () {
    return {
      menu_items: {
        item1: {
          heading: "Pitsad",
          state: true,
          pos: [
            {
              heading: "Pepperoni",
              ingredients: "Mozzarella juust, pizza-kaste, pepperoni vorst",
              price: "9.30"
            }, {
              heading: "Carbonara",
              ingredients: "Juustukaste, küüslauk, mozzarella juust, punane sibul, riivitud parmesani juust, cheddar" +
                  " juust, peekon, oregano, kirsstomatid",
              price: "9.30"
            }, {
              heading: "Spicy",
              ingredients: "Chilli kaste, jalapeno, jahimehe vorstikesed, pepperoni, pizza-kaste, mozzarella juust",
              price: "8.30"
            }, {
              heading: "Pizza-kook",
              ingredients: "Ananassid, pohlad, kondenspiim",
              price: "7.30"
            }
          ]
        },
        item2: {
          heading: "Pearoad",
          state: true,
          pos: [
            {
              heading: "Pepperoni",
              ingredients: "Mozzarella juust, pizza-kaste, pepperoni vorst",
              price: "9.30"
            }
          ]
        }
      },
    }
  },
  components: {
    BIcon
  }
}
</script>

<style scoped>
#menu {
  width: 80%;
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
}
hr {
  margin-right: -15px !important;
  margin-left: -15px !important;
}
.card {
  width: 100%;
  text-align: left;
  margin-bottom: 60px;
  border: none;
  background: #f3e2cc;
}
.card-text {
  font-size: small;
}
.card-title {
  font-size: x-large;
}
.card-footer {
  border: none;
  background-color: rgba(0, 0, 0, 0);
}
.card-img-top {
  width: 100%;
  padding: 20px;
}
</style>
