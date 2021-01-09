<template>
  <div id="profile">
    <div class="container">
      <h3 class="font-weight-bolder mb-2">Personaalsed andmed</h3>
      <h5 class="font-weight-bolder">Minu andmed</h5>
      <form @submit.prevent="validateForm">
        <div class="form-row mb-3">
          <div class="col-md-6">
            <input v-model="form.name" type="text" class="form-control" placeholder="Eesnimi">
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col-md-6">
            <input v-model="form.surname" type="text" class="form-control" placeholder="Perekonnanimi">
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col-md-6">
            <input v-model="form.email"
                   :class="this.$v.form.email.$error ? 'is-invalid' : ''"
                   type="text"
                   class="form-control"
                   placeholder="E-posti aadress">
            <p v-if="this.$v.form.email.$dirty && !this.$v.form.email.required" class="error-msg">Peab olema täidetud!</p>
            <p v-if="this.$v.form.email.$dirty && !this.$v.form.email.email" class="error-msg">Peab olema valiidne email!</p>
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col-md-6">
            <input v-model="form.mobile" type="text" class="form-control" placeholder="Mobiil">
          </div>
        </div>
        <div class="form-row mb-4">
          <div class="col-md-6">
            <input v-model="form.companyName" type="text" class="form-control" placeholder="Firma nimi">
          </div>
        </div>
        <h5 class="font-weight-bolder mb-2">Sihtkoha aadressit</h5>
        <div class="form-row mb-3">
          <div class="col-md-6">
            <input v-model="form.street" type="text" class="form-control" placeholder="Tänav">
            <p v-if="this.$v.form.street.$dirty && !this.$v.form.street.minLength" class="error-msg">Peab olema rohkem kui 2 sümbolit!</p>
          </div>
        </div>
        <div class="form-row mb-3">
          <div class="col-md-3">
            <input v-model="form.house" type="text" class="form-control" placeholder="Maja nr">
          </div>
          <div class="col-md-3">
            <input v-model="form.apartment" type="text" class="form-control" placeholder="Korteri nr">
          </div>
        </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-md-2 justify-content-center">
            <b-btn class="px-5" type="submit">Salvesta</b-btn>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: "Profile",
  validations: {
    form: {
      email: { required, email },
      street: {minLength: minLength(3)}
    }
  },
  data: function () {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        mobile: '',
        companyName: '',
        street: '',
        house: '',
        apartment: '',
      },
    }
  },
  methods: {
    validateForm: function () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        console.log("Validation success.")
      }
    }
  },
  created() {
    this.form.name = this.$store.getters.getFirstname
    this.form.email = this.$store.getters.getEmail
  }
}
</script>

<style scoped>
#profile {
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
.error-msg {
  color: red;
}
p {
  margin-bottom: 0;
}
</style>