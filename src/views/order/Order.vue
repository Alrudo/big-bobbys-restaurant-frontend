<template>
<div id="order-page-wrapper" class="container">
  <div class="row">
    <div class="col-lg-8">
      <h3 class="mb-4 font-weight-bolder">Tellimuse esitamine</h3>
      <div>
        <form>
          <div v-if="deliveryType==='withCourier'">
            <h5 class="mb-1 font-weight-bolder">Sihtkoha aadress</h5>
            <div class="form-row mb-3">
              <div class="col-md-4 mb-3">
                <input v-model="orderForm.address.street" type="text" class="form-control required" id="streetInput" placeholder="Tänav" required>
                <div class="invalid-feedback">Peab olema täidetud.</div>
              </div>
              <div class="col-md-4 mb-3">
                <input v-model="orderForm.address.house" type="text" class="form-control" id="houseNumberInput" placeholder="Maja nr" required>
                <div class="invalid-feedback">Peab olema täidetud.</div>
              </div>
              <div class="col-md-4">
                <input v-model="orderForm.address.apartment" type="text" class="form-control" id="apartmentNumberInput" placeholder="Korter">
              </div>
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Sinu andmed</h5>
          <div class="form-row mb-3">
            <div class="col-md-6">
              <input type="text" class="form-control" id="nameInput" placeholder="Eesnimi" required>
              <div class="invalid-feedback">Peab olema täidetud.</div>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="surnameInput" placeholder="Perekonnanimi" required>
              <div class="invalid-feedback">Peab olema täidetud.</div>
            </div>
          </div>
          <div class="form-row mb-3">
            <div class="col-md-6">
              <input type="text" class="form-control" id="phoneNumberInput" placeholder="Telefoni nr" required>
              <div class="invalid-feedback">Peab olema täidetud.</div>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="emailInput" placeholder="E-posti aadress" required>
              <div class="invalid-feedback">Peab olema täidetud.</div>
            </div>
          </div>
          <div class="form-row mb-3">
            <div class="col-md-6">
              <input type="text" class="form-control" id="companyNameInput" placeholder="Firma nimi">
            </div>
          </div>
          <div class="form-row mb-3">
            <div class="col-md-6 mb-3">
              <input class="form-check-input ml-1" type="checkbox" value="" id="receiveEmailsInput">
              <label class="form-check-label ml-4" for="receiveEmailsInput">Soovin liituda BigBobby.deathcry.ru lehega</label>
            </div>
            <div class="col-md-6 mb-3">
              <input class="form-check-input ml-1" type="checkbox" value="" id="agreeToTerms" required>
              <label class="form-check-label ml-4" for="agreeToTerms">Olen nõus kasutustingimusega</label>
              <div class="invalid-tooltip">Peab olema täidetud.</div>
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Lisakommentaarid</h5>
          <div class="form-row mb-3">
            <div class="col-md-12">
              <input class="form-control" type="text" id="additionalComments" placeholder="Lisakomentaarid">
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Tellimuse täitmise aeg</h5>
          <div class="form-row mb-3">
            <div class="col-md-6 mb-3">
              <input class="form-control" type="time" id="deliveryTimestampInput">
            </div>
          </div>
          <h5 class="mb-1 font-weight-bolder">Vali makseviis</h5>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="form-check form-check-inline">
                    <label class="form-check-label mr-3">
                      <input class="form-check-input" v-model="paymentType" type="radio" value="bankLink" name="paymentType" id="bank-link-payment" checked required> Pangalinkiga
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
                             v-model="paymentType"
                             :disabled="deliveryType === 'selfService'"
                             type="radio" value="toCourier"
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
                      <input class="form-check-input" v-model="paymentType" type="radio" value="creditCard" name="paymentType" id="credit-card-payment"> Krediitkaardiga
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---------------------------------------------- PAYMENT ADDITIONAL INFO ACCORDING TO SELECTED PAYMENT TYPE ------------------------------------------------------->
          <div v-if="paymentType==='bankLink'">
            <h5 class="mb-1 font-weight-bolder">Vali pank</h5>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="bankPaymentWith" id="swedBank" required checked> Swedbank
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
                        <input class="form-check-input" type="radio" name="bankPaymentWith" id="sebBank"> SEB
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
                        <input class="form-check-input" type="radio" name="bankPaymentWith" id="lhvBank"> LHV
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
                        <input class="form-check-input" type="radio" name="bankPaymentWith" id="luminorBank"> Luminor Nordea
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
                        <input class="form-check-input" type="radio" name="bankPaymentWith" id="coopBank"> COOP Pank
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="paymentType==='toCourier'">
            <h5 class="mb-1 font-weight-bolder">Vali tüüp</h5>
            <div class="form-row">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="form-check form-check-inline">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="paymentToCourierWith" id="card-to-courier" required checked> Kaardiga
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
                        <input class="form-check-input" type="radio" name="paymentToCourierWith" id="cash-to-courier"> Sularahas
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
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
          <div class="form-check-inline mt-2">
            <label class="form-check-label">
              Kulleriga <input class="form-check-input" v-model="deliveryType" value="withCourier" type="radio" name="deliveryMethod" id="with-courier" required checked>
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              Tulen ise järgi <input class="form-check-input" v-model="deliveryType" value="selfService" type="radio" name="deliveryMethod" id="self-service">
            </label>
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
          <div class="row">
            <div class="col-xl-8 col-lg-12">
              <p class="font-weight-bolder">Maksmisele kuulub:</p>
            </div>
            <div class="col-xl-4 col-lg-12">
              <p class="font-weight-bolder">{{ (Number(deliveryPrice) + Number(orderPrice)).toFixed(2) }}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <b-btn class="px-5">Soorita ost</b-btn>
  </div>
</div>
</template>

<script>
import OrderItem from "./OrderItem";

export default {
  name: "Order",
  data: function () {
    return {
      paymentType: "bankLink",
      deliveryType: "withCourier",
      shoppingCartItems: [],
      orderForm: {
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
        deliveryTime: '',
        payment: {
          type: '',
          method: ''
        }
      }
    }
  },
  components: {
    OrderItem
  },
  computed: {
    deliveryPrice: function () {
      if (this.deliveryType === 'selfService' || this.orderPrice >= 35) {
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
    }
  },
  created() {
    this.shoppingCartItems = this.$store.getters.getShoppingCart
  },
  methods: {
    bgColor() {
      if (this.deliveryType === 'withCourier') {
        return 'white'
      }
      if (this.paymentType === 'toCourier') {
        this.paymentType = 'bankLink'
      }
      return 'rgba(186,186,186,0.3)'
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
  margin-top: 30px;
}
#order-storage-body {
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>