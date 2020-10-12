<template>
  <div id="repeat" v-if="item.amount > 0">
    <b-row align-v="center" class="px-2">
      <b-col cols="6" style="display: inline-flex">
        <img class="mr-3" height="80px" src="@/assets/img/pepperoni-pizza.png" alt="pepperoni pizza">
        <div class="mb-2" style="align-self: flex-end;">
          <h4>{{ item.header }}</h4>
          <p id="small">{{ item.info }}</p>
        </div>
      </b-col>
      <b-col cols="6" style="display: inline-flex; justify-content: right">
        <div style="display: inline-flex; border: 1px solid #878787; border-radius: 8px">
          <b-btn variant="transparent" @click="item.amount -= 1">-</b-btn>
          <p class="item-counter">{{ item.amount }}</p>
          <b-btn variant="transparent" @click="item.amount += 1">+</b-btn>
        </div>
        <div class="mx-2" style="width:100px; text-align: right; font-size: 1.5rem">{{ Number(item.amount * item.price).toFixed(2) }}€</div>
        <b-btn variant="danger" size="sm" @click="item.amount = 0"><b-icon icon="trash"></b-icon></b-btn>
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
  font-size: 0.8rem;
}
p {
  font-size: 1rem;
  margin-bottom: 0;
}
.item-counter {
  font-size: 1.5rem;
  width: 40px;
  text-align: center;
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
