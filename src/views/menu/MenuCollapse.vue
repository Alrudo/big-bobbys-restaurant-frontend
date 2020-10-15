<template>
  <div class="container">
    <div class="row mt-5">
      <h2>{{ heading }}</h2>
      <div class="ml-3 h2">
        <b-icon icon="chevron-up" v-if="dropdownState" @click="dropdownState=false"></b-icon>
        <b-icon icon="chevron-down" v-if="!dropdownState" @click="dropdownState=true"></b-icon>
      </div>
    </div>
    <hr class="my-0 mb-3">
    <b-collapse id="collapse-1" v-model="dropdownState" class="mt-3">
      <div class="row">
        <MenuDish
            v-for="dish in dishes" :key="dish.name"
            :dish="dish"
            @fire-modal="fireModal"
        />
      </div>
    </b-collapse>
  </div>
</template>

<script>
import MenuDish from "@/views/menu/MenuDish";
import {BIcon} from "bootstrap-vue";

export default {
  name: "MenuDropdown",
  data: function () {
    return {
      dropdownState: true
    }
  },
  components: {
    MenuDish,
    BIcon
  },
  props: {
    heading: {
      type: String,
      required: true
    },
    dishes: {
      type: Array,
      required: true
    }
  },
  methods: {
    fireModal(dish) {
      this.$emit('fire-modal', dish)
    }
  }
}
</script>

<style scoped>
hr {
  margin-right: -15px !important;
  margin-left: -15px !important;
}
</style>
