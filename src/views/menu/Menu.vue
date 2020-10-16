<template>
  <div id="menu">
    <MenuDropdown
        heading="Food"
        :dishes="menuItems"
        @fire-modal="fireModal"
    />

    <b-modal
        id="modal-1"
        size="lg"
        content-class="shadow"
        centered
        hide-footer
        hide-header
        v-if="modal.item !== null"
        @hide="hideModal"
        @show="stopTimeouts"
    >
      <div class="row">
        <div class="col-6">
          <img class="my-2" src="@/assets/img/pepperoni-pizza.png" alt="pepperoni pizza">
        </div>
        <div class="col-6">
            <b-btn variant="secondary" @click="hideModal" class="shadow-none" size="sm" id="topRightCorner"><b-icon class="mt-1" icon="x-circle-fill"></b-icon></b-btn>
          <b-row>
            <div class="h2">{{ modal.item.name }}</div>
          </b-row>
          <b-row>
            <p>{{modal.item.ingredients.map(x => x.name).join(", ") }}</p>
          </b-row>
          <b-row>
            <p>Allergens: {{ getAllergens }}</p>
          </b-row>
          <b-row>
            <p>Weight: {{ countWeight }}g</p>
          </b-row>
          <b-row>
            <div id="size">
              <b-btn class="shadow-none" :variant="variant.buttons.left.variant" @click="activate(variant.buttons.left)" id="left-size">
                väike
              </b-btn>
              <b-btn class="shadow-none" :variant="variant.buttons.medium.variant" @click="activate(variant.buttons.medium)" id="middle">
                keskmine
              </b-btn>
              <b-btn class="shadow-none" :variant="variant.buttons.right.variant" @click="activate(variant.buttons.right)" id="right-size">
                suur
              </b-btn>
            </div>
            <b-btn id="bottom-content">Lisa ostukorvi hinnaga {{ countPrice }}€</b-btn>
          </b-row>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import MenuDropdown from "@/views/menu/MenuCollapse";
import KitchenApi from "@/KitchenApi";

export default {
  name: "Menu",
  data: function () {
    return {
      menuItems: [],
      modal: {
        item: null
      },
      variant: {
        buttons: {
          left: {variant:'secondary'},
          medium: {variant: 'transparent'},
          right: {variant: 'transparent'}
        }
      },
      timeout: null
    }
  },
  components: {
    MenuDropdown
  },
  methods: {
    fireModal(dish) {
      this.modal.item = dish
    },
    activate(btn) {
      this.variant.buttons.left.variant = 'transparent';
      this.variant.buttons.medium.variant = 'transparent';
      this.variant.buttons.right.variant = 'transparent';
      btn.variant = 'secondary'
    },
    hideModal() {
      this.timeout = setTimeout(this.resetVariants, 200)
      this.$bvModal.hide('modal-1')
    },
    resetVariants() {
        this.variant.buttons.left.variant = 'secondary';
        this.variant.buttons.medium.variant = 'transparent';
        this.variant.buttons.right.variant = 'transparent';
        console.log(this.variant)
    },
    stopTimeouts() {
      clearTimeout(this.timeout)
    }
  },
  computed: {
    countPrice: function () {
      let price = Number(this.modal.item.price)
      if (this.variant.buttons.medium.variant === 'secondary') {
        price += 2.1
      } else if (this.variant.buttons.right.variant === 'secondary') {
        price += 4.20
      }
      return Number(price).toFixed(2);
    },
    countWeight: function () {
      let weight = this.modal.item.weight * 1000
      if (this.variant.buttons.medium.variant === 'secondary') {
        weight += 100
      } else if (this.variant.buttons.right.variant === 'secondary') {
        weight += 200
      }
      return weight
    },
    getAllergens: function () {
      let allergens = Array.from(
          new Set(this.modal.item.ingredients.map(x => x.allergens).join(" ").split(" "))
      ).filter(it => it !== "")
      if (allergens.length > 0) {
        return allergens.join(", ")
      }
      return "None"
    }
  },
  created() {
    KitchenApi.getMenu().then((resp) => {
      this.menuItems = resp.data
    }).catch(() => {
      this.$bvModal.msgBoxOk("Failed to retrieve data", {
        title: 'Data error'
      })
    })
  }
}
</script>

<style>
#menu {
  width: 80%;
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
}
h2 {
  padding-bottom: 15px;
}
#modal-1 .modal-content{
  background-color: #f3e2cc;
  font-family: 'Grandstander', cursive;
  padding: 25px;
  color: #2c3e50;
  border-radius: 12px;
}

#bottom-content {
  position: absolute;
  bottom: 15px;
  left: 0;
}
#size {
  display: inline-flex;
  border: 1px solid #878787;
  border-radius: 8px;
}
#left-size {
  border-radius: 8px 0 0 8px;
  border-right: 1px solid #878787
}
#right-size {
  border-radius: 0 8px 8px 0;
  border-left: 1px solid #878787
}
#middle {
  border-radius: 0;
}
#topRightCorner {
  position:absolute;
  top: 0;
  right: 0;
}
</style>
