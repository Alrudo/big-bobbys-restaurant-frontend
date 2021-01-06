<template>
<div id="order-page-wrapper" class="container">
  <form @submit.prevent="validateForm">
    <div class="row">
      <div class="col-lg-8">
        <h3 class="mb-4 font-weight-bolder">Tellimuse esitamine</h3>
        <div>
          <div v-if="orderForm.deliveryType ==='withCourier'">
            <h5 class="mb-1 font-weight-bolder">Sihtkoha aadress</h5>
            <div class="form-row mb-3">
              <div class="col-md-4 mb-3">
                <input v-model.trim="orderForm.address.street"
                       type="text"
                       class="form-control req"
                       :class="this.$v.orderForm.address.street.$error ? 'is-invalid' : ''"
                       id="streetInput"
                       placeholder="Tänav*">
                <p v-if="this.$v.orderForm.address.street.$dirty && !this.$v.orderForm.address.street.requiredIfCourier" class="error-msg">Peab olema täidetud!</p>
                <p v-if="this.$v.orderForm.address.street.$dirty && !this.$v.orderForm.address.street.minLength" class="error-msg">Peab olema rohkem kui 3 sümbolit!</p>
              </div>
              <div class="col-md-4 mb-3">
                <input v-model.trim="orderForm.address.house"
                       type="text"
                       class="form-control req"
                       :class="this.$v.orderForm.address.house.$error ? 'is-invalid' : ''"
                       id="houseNumberInput"
                       placeholder="Maja nr*">
                <p v-if="this.$v.orderForm.address.house.$dirty && !this.$v.orderForm.address.house.requiredIfCourier" class="error-msg">Peab olema täidetud!</p>
              </div>
              <div class="col-md-4">
                <input v-model.trim="orderForm.address.apartment" type="text" class="form-control" id="apartmentNumberInput" placeholder="Korter">
              </div>
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Sinu andmed</h5>
          <div class="form-row mb-3">
            <div class="col-md-6">
              <input v-model.trim="orderForm.personalData.name"
                     type="text"
                     class="form-control req"
                     :class="this.$v.orderForm.personalData.name.$error ? 'is-invalid' : ''"
                     id="nameInput"
                     placeholder="Eesnimi*">
              <p v-if="this.$v.orderForm.personalData.name.$dirty && !this.$v.orderForm.personalData.name.required" class="error-msg">Peab olema täidetud!</p>
            </div>
            <div class="col-md-6">
              <input v-model.trim="orderForm.personalData.surname"
                     type="text"
                     class="form-control req"
                     :class="this.$v.orderForm.personalData.surname.$error ? 'is-invalid' : ''"
                     id="surnameInput"
                     placeholder="Perekonnanimi*">
              <p v-if="this.$v.orderForm.personalData.surname.$dirty && !this.$v.orderForm.personalData.surname.required" class="error-msg">Peab olema täidetud!</p>
            </div>
          </div>
          <div class="form-row mb-3">
            <div class="col-md-6">
              <input v-model.trim="orderForm.personalData.phone"
                     type="text"
                     class="form-control req"
                     :class="this.$v.orderForm.personalData.phone.$error ? 'is-invalid' : ''"
                     id="phoneNumberInput"
                     placeholder="Telefoni nr*">
              <p v-if="this.$v.orderForm.personalData.phone.$dirty && !this.$v.orderForm.personalData.phone.required" class="error-msg">Peab olema täidetud!</p>
            </div>
            <div class="col-md-6">
              <input v-model.trim="orderForm.personalData.email"
                     type="text"
                     class="form-control req"
                     :class="this.$v.orderForm.personalData.email.$error ? 'is-invalid' : ''"
                     id="emailInput"
                     placeholder="E-posti aadress*">
              <p v-if="this.$v.orderForm.personalData.email.$dirty && !this.$v.orderForm.personalData.email.required" class="error-msg">Peab olema täidetud!</p>
              <p v-if="this.$v.orderForm.personalData.email.$dirty && !this.$v.orderForm.personalData.email.email" class="error-msg">Peab olema valiidne email!</p>
            </div>
          </div>
          <div class="form-row mb-3">
            <div class="col-md-6">
              <input v-model.trim="orderForm.personalData.company" type="text" class="form-control" id="companyNameInput" placeholder="Firma nimi">
            </div>
          </div>
          <div class="form-row mb-3">
            <div class="col-md-6 mb-3">
              <input class="form-check-input ml-1" type="checkbox" value="" id="receiveEmailsInput">
              <label class="form-check-label ml-4" for="receiveEmailsInput">Soovin liituda BigBobby.deathcry.ru lehega</label>
            </div>
            <div class="col-md-6 mb-3">
              <input v-model="orderForm.termsOfUse"
                     class="form-check-input ml-1"
                     type="checkbox"
                     id="agreeToTerms">
              <label class="form-check-label ml-4" for="agreeToTerms">Olen nõus kasutustingimusega<span style="color:red">*</span></label>
              <p v-if="this.$v.orderForm.termsOfUse.$dirty && !this.$v.orderForm.termsOfUse.checked" class="error-msg">Peab olema aktsepteeritud!</p>
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Lisakommentaarid</h5>
          <div class="form-row mb-3">
            <div class="col-md-12">
              <input v-model.trim="orderForm.comment" class="form-control" type="text" id="additionalComments" placeholder="Lisakomentaarid" maxlength="50">
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Tellimuse täitmise aeg</h5>
          <div class="form-row mb-3">
            <div class="col-md-6 mb-3">
              <vue-timepicker v-model="orderForm.deliveryTime" hide-disabled-items :minute-interval="30" :hour-range="[[9, 23]]" close-on-complete></vue-timepicker>
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Vali makseviis</h5>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="form-check form-check-inline">
                    <label class="form-check-label mr-3">
                      <input class="form-check-input" v-model="orderForm.payment.type" type="radio" value="bankLink" name="paymentType" id="bank-link-payment" checked required> Pangalinkiga
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card" :style="{backgroundColor: bgColor()}">
                <div class="card-body">
                  <div class="form-check form-check-inline">
                    <label class="form-check-label mr-3">
                      <input class="form-check-input"
                             v-model="orderForm.payment.type"
                             :disabled="orderForm.deliveryType === 'selfService'"
                             type="radio"
                             value="toCourier"
                             name="paymentType"
                             id="to-courier-payment"> Kullerile
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input" v-model="orderForm.payment.type" type="radio" value="creditCard" name="paymentType" id="credit-card-payment"> Krediitkaardiga
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderForm.payment.type==='bankLink'">
            <h5 class="mb-1 font-weight-bolder">Vali pank</h5>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.bankLink"
                               name="bankPaymentWith"
                               value="Swedbank"
                               id="swedBank"
                               required checked> Swedbank
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.bankLink"
                               name="bankPaymentWith"
                               value="Seb"
                               id="sebBank"> SEB
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.bankLink"
                               name="bankPaymentWith"
                               value="Lhv"
                               id="lhvBank"> LHV
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.bankLink"
                               name="bankPaymentWith"
                               value="Luminor"
                               id="luminorBank"> Luminor Nordea
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.bankLink"
                               name="bankPaymentWith"
                               value="Coop"
                               id="coopBank"> COOP Pank
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="orderForm.payment.type==='toCourier'">
            <h5 class="mb-1 font-weight-bolder">Vali tüüp</h5>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.toCourier"
                               name="paymentToCourierWith"
                               id="card-to-courier"
                               value="withCard"
                               required checked> Kaardiga
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input"
                               type="radio"
                               v-model="orderForm.payment.toCourier"
                               name="paymentToCourierWith"
                               value="withCash"
                               id="cash-to-courier"> Sularahas
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card sticky-top">
          <div class="card-header bg-white">
            <h3 class="m-0 p-0 font-weight-bolder">Sinu ostukorv</h3>
          </div>
          <div id="order-storage-body" class="card-body">
            <div id="ordered-items-storage">
              <OrderItem
                  v-for="(dish, n) in shoppingCartItems" :key="n"
                  :dish="dish"
              />
            </div>
            <div class="row">
              <div class="col-xl-8 col-lg-12">
                <div class="form-check-inline mt-2">
                  <label class="form-check-label">
                    <input class="form-check-input"
                           v-model="orderForm.deliveryType"
                           value="withCourier"
                           type="radio"
                           name="deliveryMethod"
                           id="with-courier"
                           required checked> Kulleriga
                  </label>
                </div>
              </div>
              <div class="col-xl-4 col-lg-12">
                <p class="mt-s">{{ deliveryPrice.toFixed(2) }}€</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-8 col-lg-12">
                <div class="form-check-inline">
                  <label class="form-check-label">
                    <input class="form-check-input"
                           v-model="orderForm.deliveryType"
                           value="selfService"
                           type="radio"
                           name="deliveryMethod"
                           id="self-service"> Tulen ise järgi
                  </label>
                </div>
              </div>
              <div class="col-xl-4 col-lg-12">
                <p>0.00€</p>
              </div>
            </div>
          </div>
          <div class="card-footer bg-white">
            <div class="row">
              <div class="col-xl-8 col-lg-12">
                <p>Toidu väärtus:</p>
              </div>
              <div class="col-xl-4 col-lg-12">
                <p>{{ orderPrice.toFixed(2) }}€</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-8 col-lg-12">
                <p>Transport:</p>
              </div>
              <div class="col-xl-4 col-lg-12">
                <p>{{ deliveryPrice.toFixed(2) }}€</p>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-xl-8 col-lg-12">
                <p class="font-weight-bolder">Maksmisele kuulub:</p>
              </div>
              <div class="col-xl-4 col-lg-12">
                <p class="font-weight-bolder">{{ totalPrice.toFixed(2) }}€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <b-btn class="px-5" type="submit">Soorita ost</b-btn>
    </div>
    <div class="d-flex justify-content-center">
      <p v-if="this.$v.orderForm.$dirty && this.$v.orderForm.$error" class="error-msg mt-3">Vorm on täidetud valesti!</p>
    </div>
  </form>
</div>
</template>

<script>
import OrderItem from "./OrderItem";
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import  { validationMixin } from 'vuelidate'
import { required, minLength, email, requiredUnless} from 'vuelidate/lib/validators'

const requiredIfCourier = requiredUnless(function () {return this.isRequired})

export default {
  name: "Order",
  mixins: [validationMixin],
  validations: {
    orderForm: {
      address: {
        street: {requiredIfCourier, minLength: minLength(3)},
        house: {requiredIfCourier},
      },
      personalData: {
        name: {required},
        surname: {required},
        phone: {required},
        email: {required, email},
      },
      termsOfUse: {checked: value => value === true}
    }
  },
  data: function () {
    return {
      shoppingCartItems: [],
      orderForm: {
        deliveryType: 'withCourier',
        address: {
          street: '',
          house: '',
          apartment: ''
        },
        personalData: {
          name: '',
          surname: '',
          phone: '',
          email: '',
          company: ''
        },
        comment: '',
        termsOfUse: false,
        deliveryTime: '',
        payment: {
          type: 'bankLink',
          bankLink: 'Swedbank',
          toCourier: 'withCard'
        }
      }
    }
  },
  components: {
    OrderItem,
    VueTimepicker
  },
  computed: {
    deliveryPrice: function () {
      if (this.orderPrice >= 35) {
        return 0
      }
      return 5
    },
    orderPrice: function () {
      let price = 0
      for (let item of this.shoppingCartItems) {
        price += Number(item['price']) * item['amount']
      }
      return price
    },
    totalPrice: function () {
      let price = this.orderPrice
      if (this.orderForm.deliveryType !== 'selfService') {
        price += this.deliveryPrice
      }
      return price
    },
    isRequired: function () {
      return this.orderForm.deliveryType !== 'withCourier';
    },
  },
  created() {
    this.shoppingCartItems = this.$store.getters.getShoppingCart
  },
  methods: {
    bgColor() {
      if (this.orderForm.deliveryType === 'withCourier') {
        return 'white'
      }
      if (this.orderForm.payment.type === 'toCourier') {
        this.orderForm.payment.type = 'bankLink'
      }
      return 'rgba(186,186,186,0.3)'
    },
    validateForm() {
      this.$v.orderForm.$touch()
      if (!this.$v.orderForm.$error) {
        console.log("Validation success.")
      }
    }
  }
}
</script>
<style scoped>
#order-page-wrapper {
  width: 80%;
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
  text-align: left;
}
p {
  margin-bottom: 0;
}
.sticky-top {
  margin-top: 30px !important;
}
#order-storage-body {
  padding-top: 12px;
  padding-bottom: 12px;
}
.error-msg {
  color: red;
  font-size: 0.8rem;
}
.req::placeholder {
  color: #c30e0e;
}
.mt-s {
  margin-top: 10px;
}
</style>