<template>
  <div class="container">
    <div class="row mt-5">
      <h2>{{ dropdown.heading }}</h2>
      <div class="ml-3 h2">
        <b-icon icon="chevron-up" v-if="dropdown.state" @click="dropdown.state=false"></b-icon>
        <b-icon icon="chevron-down" v-if="!dropdown.state" @click="dropdown.state=true"></b-icon>
      </div>
    </div>
    <hr class="my-0 mb-3">
    <b-collapse id="collapse-1" v-model="dropdown.state" class="mt-3">
      <div class="row">
        <MenuDish
            v-for="dish in dropdown.pos" :key="dish.heading"
            v-bind:dish="dish"
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
  components: {
    MenuDish,
    BIcon
  },
  props: {
    dropdown: {
      type: Object,
      required: true
    }
  },
  methods: {
    fireModal(id) {
      this.$emit('fire-modal', this.dropdown.pos.filter(it => it.id === id)[0])
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