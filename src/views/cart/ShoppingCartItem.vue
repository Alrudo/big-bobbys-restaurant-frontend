<template>
  <div id="repeat" v-if="item.amount > 0">
    <b-row align-v="center">
      <b-col cols="1">
        <img height="80px" src="@/assets/img/pepperoni-pizza.png" alt="pepperoni pizza">
      </b-col>
      <b-col cols="3">
        <div>
          <h4>{{ item.header }}</h4>
          <p id="small">{{ item.info }}</p>
        </div>
      </b-col>
      <b-col cols="2" offset-md="1">
        <b-row align-v="center">
          <b-col style="text-align: start">
            <b-btn @click="item.amount -= 1">-</b-btn>
          </b-col>
          <b-col style="text-align: center">
            <p class="big">{{ item.amount }}</p>
          </b-col>
          <b-col style="text-align: end">
            <b-btn @click="item.amount += 1">+</b-btn>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="1" offset-md="1">
        <p class="big">{{ Number(item.amount * item.price).toFixed(2) }}€</p>
      </b-col>
      <b-col cols="1" offset-md="2" style="text-align: end">
        <b-btn size="lg" @click="item.amount = 0"><b-icon icon="trash"></b-icon></b-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
name: "ShoppingCartItem",
  data: function () {
    return {}
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h2 {
  padding-bottom: 60px;
}
h4 {
  padding-bottom: 5px;
}
#small {
  font-size: 0.7rem;
}
p {
  font-size: 1rem;
  margin-bottom: 0;
}
.big {
  font-size: 1.5rem;
}
#repeat {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  padding-bottom: 15px;
}
#repeat:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>