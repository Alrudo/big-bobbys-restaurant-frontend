<template>
  <div id="menu">
    <MenuDropdown
        heading="Food"
        :dishes="menuItems"
        @fire-modal="fireModal"
    />

    <b-modal id="modal-1" size="lg" content-class="shadow"  centered hide-footer hide-header v-if="modal.item !== null">
      <div class="row">
        <div class="col-6">
          <img class="my-2" src="@/assets/img/pepperoni-pizza.png" alt="pepperoni pizza">
        </div>
        <div class="col-6">
          <b-row>
            <div class="h2">{{ modal.item.name }}</div>
          </b-row>
          <b-row>
            <p>{{ modal.item.ingredients.map(x => x.name).join(", ") }}</p>
          </b-row>
          <b-row>
            <p>Weight: {{ modal.item.weight*1000 }}g</p>
          </b-row>
          <b-row>
            <div id="size">
              <b-btn :variant="variant.buttons.left.variant" @click="activate(variant.buttons.left)" id="left-size">
                väike
              </b-btn>
              <b-btn :variant="variant.buttons.medium.variant" @click="activate(variant.buttons.medium)" id="middle">
                keskmine
              </b-btn>
              <b-btn :variant="variant.buttons.right.variant" @click="activate(variant.buttons.right)" id="right-size">
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
// import KitchenApi from '@/KitchenApi'
import MenuDropdown from "@/views/menu/MenuCollapse";
import KitchenApi from "@/KitchenApi";

export default {
  name: "Menu",
  data: function () {
    return {
      menuItems: [],
      menu_items: [
        {
          id: 0,
          heading: "Pitsad",
          state: true,
          pos: [
            {
              id: 0,
              heading: "Pepperoni",
              ingredients: "Mozzarella juust, pizza-kaste, pepperoni vorst",
              price: "9.30"
            }, {
              id: 1,
              heading: "Carbonara",
              ingredients: "Juustukaste, küüslauk, mozzarella juust, punane sibul, riivitud parmesani juust, cheddar" +
                  " juust, peekon, oregano, kirsstomatid",
              price: "9.30"
            }, {
              id: 2,
              heading: "Spicy",
              ingredients: "Chilli kaste, jalapeno, jahimehe vorstikesed, pepperoni, pizza-kaste, mozzarella juust",
              price: "8.30"
            }, {
              id: 4,
              heading: "Pizza-kook",
              ingredients: "Ananassid, pohlad, kondenspiim",
              price: "7.30"
            }
          ]
        },
        {
          id: 1,
          heading: "Pearoad",
          state: true,
          pos: [
            {
              id: 0,
              heading: "Double Pepperoni",
              ingredients: "Mozzarella juust, pizza-kaste, pepperoni vorst",
              price: "9.30"
            }
          ]
        }
      ],
      modal: {
        item: null
      },
      variant: {
        buttons: {
          left: {variant:'secondary'},
          medium: {variant: 'transparent'},
          right: {variant: 'transparent'}
        }
      }
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
    }
  },
  computed: {
    countPrice: function () {
      let price = Number(this.modal.item.price)
      if (this.variant.buttons.medium.variant === 'secondary') {
        price += 2.1
        console.log(price)
      } else if (this.variant.buttons.right.variant === 'secondary') {
        price += 4.20
        console.log(price)
      }
      return Number(price).toFixed(2);
    }
  },
  created() {
    KitchenApi.getMenu().then((resp) => {
      this.menuItems = resp.data
      console.log(this.menuItems)
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
#modal-1 {
  font-family: 'Grandstander', cursive;
}
#modal-1 .modal-content{
  background-color: #f3e2cc; font-family: 'Grandstander', cursive; padding: 25px; color: #2c3e50; border-radius: 12px
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
</style>
