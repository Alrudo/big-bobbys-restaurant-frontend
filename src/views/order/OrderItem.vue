<template>
  <div class="row">
    <div class="col-xl-8 col-lg-12"><p>{{ dish['name']}}</p></div>
    <div class="col-xl-4 col-lg-12"><p>{{ (dish['price'] * dish['amount']).toFixed(2) }}€</p></div>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    dish: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 0;
  margin-top: 8px;
}
.row {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 8px;
}
</style>