<template>
  <div id="register" class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-white">
            <h4 class="mt-2">Registreerimine</h4>
          </div>
          <div class="card-body">
            <b-form @submit.prevent="validateRegisterForm">
              <b-form-group class="mb-3" label="Eesnimi:" label-for="name-register">
                <b-form-input id="name-register"
                              v-model="registerForm.name"
                              :class="this.$v.registerForm.name.$error ? 'is-invalid' : ''"
                              type="text"
                              placeholder="Eesnimi...">
                </b-form-input>
                <p v-if="this.$v.registerForm.name.$dirty && !this.$v.registerForm.name.required" class="error-msg">Peab olema täidetud!</p>
              </b-form-group>
              <b-form-group label="E-posti aadress:" label-for="email-register">
                <b-form-input id="email-register"
                              v-model="registerForm.email"
                              :class="this.$v.registerForm.email.$error ? 'is-invalid' : ''"
                              type="text"
                              placeholder="E-post...">
                </b-form-input>
                <p v-if="this.$v.registerForm.email.$dirty && !this.$v.registerForm.email.required" class="error-msg">Peab olema täidetud!</p>
                <p v-if="this.$v.registerForm.email.$dirty && !this.$v.registerForm.email.email" class="error-msg">Peab olema valiidne email!</p>
              </b-form-group>
              <b-form-group class="mb-3" label="Salasõna:" label-for="password-register">
                <b-form-input id="password-register"
                              v-model="registerForm.password"
                              :class="this.$v.registerForm.password.$error ? 'is-invalid' : ''"
                              type="password"
                              placeholder="Salasõna...">
                </b-form-input>
                <p v-if="this.$v.registerForm.password.$dirty && !this.$v.registerForm.password.required" class="error-msg">Peab olema täidetud!</p>
                <p v-if="this.$v.registerForm.password.$dirty && !this.$v.registerForm.password.minLength" class="error-msg">Peab olema rohkem kui 5 sümbolid!</p>
              </b-form-group>
              <b-form-group class="mb-3" label="Salasõna uuesti:" label-for="password-re-register">
                <b-form-input id="password-re-register"
                              v-model="registerForm.rePassword"
                              :class="this.$v.registerForm.rePassword.$error ? 'is-invalid' : ''"
                              type="password"
                              placeholder="Salasõna...">
                </b-form-input>
                <p v-if="this.$v.registerForm.rePassword.$dirty && !this.$v.registerForm.rePassword.required" class="error-msg">Peab olema täidetud!</p>
                <p v-if="this.$v.registerForm.rePassword.$dirty && !this.$v.registerForm.rePassword.sameAsPassword && this.$v.registerForm.rePassword.required" class="error-msg">Salasõnad ei ole võrdsed!</p>
              </b-form-group>
              <div class="d-flex justify-content-center">
                <b-btn class="d-block" type="submit">Registreeri</b-btn>
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
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: "Register",
  validations: {
    registerForm: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      rePassword: { required, sameAsPassword: sameAs('password') }
    }
  },
  data: function() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    validateRegisterForm: function () {
      this.$v.registerForm.$touch()
      if (!this.$v.registerForm.$error) {
        console.log("Validation success.")
      }
    }
  }
}
</script>

<style scoped>
#register {
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