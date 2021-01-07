<template>
    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div class="card">
        <img class="w-100" src="@/assets/img/pepperoni-pizza.png" :alt="dish.heading">
        <div class="card-body px-4 pt-3">
          <h5 class="card-title">{{ dish.name }}</h5>
          <p class="card-text">{{ dish.ingredients.map(x => x.name).join(", ") }}</p>
        </div>
        <div class="card-footer px-4 pt-3 text-right">
            <div class="h4">alates {{ Number(dish.price).toFixed(2) }}€</div>
            <b-btn class="px-4" v-b-modal.modal-1 @click="$emit('fire-modal', dish)">Vali</b-btn>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "MenuDish",
  props: {
    dish: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 320px;
  text-align: left;
  margin: 0 auto 60px;
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
</style>
