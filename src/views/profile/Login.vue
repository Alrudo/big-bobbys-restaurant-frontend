<template>
  <div id="login" class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-white">
            <h4 class="mt-2">Sisse logimine</h4>
          </div>
          <div class="card-body">
            <b-form @submit.prevent="validateLoginForm">
              <b-form-group label="E-posti aadress:" label-for="email-login">
                <b-form-input id="email-login"
                              v-model="loginForm.email"
                              :class="this.$v.loginForm.email.$error ? 'is-invalid' : ''"
                              type="text"
                              placeholder="E-post...">
                </b-form-input>
                <p v-if="this.$v.loginForm.email.$dirty && !this.$v.loginForm.email.required" class="error-msg">Peab olema täidetud!</p>
                <p v-if="this.$v.loginForm.email.$dirty && !this.$v.loginForm.email.email" class="error-msg">Peab olema valiidne email!</p>
              </b-form-group>
              <b-form-group class="mb-3" label="Salasõna:" label-for="password-login">
                <b-form-input id="password-login"
                              v-model="loginForm.password"
                              :class="this.$v.loginForm.password.$error ? 'is-invalid' : ''"
                              type="password"
                              placeholder="Salasõna...">
                </b-form-input>
                <p v-if="this.$v.loginForm.password.$dirty && !this.$v.loginForm.password.required" class="error-msg">Peab olema täidetud!</p>
                <p v-if="this.$v.loginForm.password.$dirty && !this.$v.loginForm.password.minLength" class="error-msg">Peab olema rohkem kui 5 sümbolid!</p>
              </b-form-group>
              <div class="d-flex justify-content-center">
                <b-btn class="d-block" type="submit">Logi sisse</b-btn>
              </div>
            </b-form>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  validations: {
    loginForm: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  data: function () {
    return {
      loginForm: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    validateLoginForm: function () {
      this.$v.loginForm.$touch()
      if (!this.$v.loginForm.$error) {
        console.log("Validation success.")
      }
    }
  }
}
</script>

<style scoped>
#login {
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