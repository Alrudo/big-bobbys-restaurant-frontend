<template>
  <div id="menu">
    <div class="container">
      <!--
      ################################################
      #                  Sweets                      #
      ################################################
      -->
      <div class="row mt-5">
        <h2>Pitsad</h2>
        <div class="ml-3 h2">
          <b-icon icon="chevron-up" v-if="heading.desert" @click="heading.desert=false"></b-icon>
          <b-icon icon="chevron-down" v-if="!heading.desert" @click="heading.desert=true"></b-icon>
        </div>
      </div>
      <hr class="my-0 mb-3">
      <b-collapse id="collapse-1" v-model="heading.desert" class="mt-3">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" v-for="(x, i) in menuitems.desert" :key="x.heading">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/pepperoni-pizza.png" alt="Pos. picture">
              <div class="card-body">
                <h5 class="card-title">{{ x.heading }} {{ i }}</h5>
                <p class="card-text">{{ x.ingredients }}</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-3 ml-1">alates {{x.price}}€</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Lisa</b-btn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/pepperoni-pizza.png" alt="Pos. picture">
              <div class="card-body">
                <h5 class="card-title">Carbonara</h5>
                <p class="card-text">Juustukaste, küüslauk, mozzarella juust, punane sibul, riivitud parmesani juust,
                  cheddar juust, peekon, oregano, kirsstomatid</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-3 ml-1">alates 9,30 €</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Lisa</b-btn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/no_image.png" alt="Pos. picture">
              <div class="card-body">
                <h5 class="card-title">Pepperoni</h5>
                <p class="card-text">Mozzarella juust, pizza-kaste, pepperoni vorst</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-3 ml-1">alates 9,30 €</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Lisa</b-btn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/no_image.png" alt="Pos. picture">
              <div class="card-body">
                <h5 class="card-title">Vegeterian</h5>
                <p class="card-text">Oregano, mustad oliivid, marineeritud kurgid, šampinjonid, paprika, tomatid,
                  punane sibul, mozzarella juust, pizza-kaste</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-3 ml-1">alates 8,00 €</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Lisa</b-btn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/no_image.png" alt="Pos. picture">
              <div class="card-body">
                <h5 class="card-title">Pepperoni</h5>
                <p class="card-text">Mozzarella juust, pizza-kaste, pepperoni vorst</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-3 ml-1">alates 9,30 €</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Lisa</b-btn>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div class="card">
              <img class="card-img-top" src="@/assets/img/no_image.png" alt="Pos. picture">
              <div class="card-body">
                <h5 class="card-title">Pepperoni</h5>
                <p class="card-text">Mozzarella juust, pizza-kaste, pepperoni vorst</p>
              </div>
              <div class="card-footer" style="justify-content: space-between; display: flex">
                <h5 class="card-title mt-3 ml-1">alates 9,30 €</h5>
                <b-btn class="mb-2 mr-3" style="align-self: end; width: 30%">Lisa</b-btn>
              </div>
            </div>
          </div>
        </div>
      </b-collapse>

      <!--
      ################################################
      #                  Main dishes                 #
      ################################################
      -->
      <div class="row mt-4">
        <h2>Pearood</h2>
        <div class="ml-3 h2">
          <b-icon icon="chevron-up" v-if="heading.main_meal" @click="heading.main_meal=false"></b-icon>
          <b-icon icon="chevron-down" v-if="!heading.main_meal" @click="heading.main_meal=true"></b-icon>
        </div>
      </div>
      <hr class="my-0 mb-3">
      <b-collapse id="collapse-1" v-model="heading.main_meal" class="mt-3">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">

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
      heading: {
        desert: true,
        main_meal: true
      },
      menuitems: {
        desert: [
          {
            heading: "Pepperoni",
            ingredients: "Mozzarella juust, pizza-kaste, pepperoni vorst",
            price: "9.30"
          },{
            heading: "Pepperoni Macaroni",
            ingredients: "Makaronid, pizza-kaste, pepperoni vorst",
            price: "19.30"
          },{
            heading: "Pepperoni hueoni",
            ingredients: "Mozzarella juust, pepperoni vorst",
            price: "29.30"
          },{
            heading: "Pepperoni-oni",
            ingredients: "oni",
            price: "39.30"
          }
        ]
      }
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
  /*background: #f3e2cc;*/
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
