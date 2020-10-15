<template>
    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div class="card">
        <img class="card-img-top" src="@/assets/img/pepperoni-pizza.png" :alt="dish.heading">
        <div class="card-body">
          <h5 class="card-title">{{ dish.name }}</h5>
          <p class="card-text">{{ dish.ingredients.map(x => x.name ).join(", ") }}</p>
        </div>
        <div id="footer" class="card-footer">
          <h5 class="card-title mt-2 ml-1">alates {{dish.price}}€</h5>
          <b-btn id="choose-btn" class="mb-2 mr-3" v-b-modal.modal-1 @click="$emit('fire-modal', dish)">Vali</b-btn>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name: "MenuItem",
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
#footer {
  justify-content: space-between;
  display: flex;
}
#choose-btn {
  align-self: end;
  width: 30%;
}
</style>
