<template>
  <div id="repeat">
    <b-row align-v="center" class="px-2">
      <b-col id="first-six" cols="6">
        <img class="mr-3" height="80px" src="@/assets/img/pepperoni-pizza.png" alt="pepperoni pizza">
        <div id="dish-info" class="mb-2">
          <h4>{{ item.header }}</h4>
          <p id="small">{{ item.info }}</p>
        </div>
      </b-col>
      <b-col class="d-flex justify-content-end" cols="6">
        <div>
          <div id="quantity">
            <b-btn variant="transparent" @click="amount">-</b-btn>
            <p class="item-counter">{{ item.amount }}</p>
            <b-btn variant="transparent" @click="item.amount += 1">+</b-btn>
          </div>
          <div class="item-price">{{ totalPrice }}€</div>
        </div>
        <b-btn class="ml-3" variant="danger" @click="$emit('remove-item', item.id)">
          <b-icon icon="trash-fill"></b-icon>
        </b-btn>
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
  },
  computed: {
    totalPrice: function () {
      return Number(this.item.price * this.item.amount).toFixed(2);
    },
  },
  methods: {
    amount: function () {
      this.item.amount--
      if (this.item.amount <= 0) {
        this.$emit('remove-item', this.item.id)
      }
      return this.item.amount
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
p {
  font-size: 1rem;
  margin-bottom: 0;
}
.item-counter {
  font-size: 1.5rem;
  width: 40px;
  text-align: center;
}
#small {
  font-size: 0.8rem;
}
#repeat {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  padding-bottom: 15px;
}
#repeat:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
#first-six {
  display: inline-flex;
}
.item-price {
  text-align: right;
  align-content: end;
  vertical-align: text-bottom;
  margin-top: 8px;
  line-height: 1.5rem;
  font-size: 1.5rem;
}
#quantity {
  display: inline-flex;
  border: 1px solid #878787;
  border-radius: 8px;
}
#dish-info {
  align-self: flex-end;
}
</style>
