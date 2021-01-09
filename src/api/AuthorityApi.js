import axios from 'axios'

export default {
  url: process.env.VUE_APP_API_BASE,
  basicAuth (email, password) {
    return axios.post(this.url + '/auth', {}, {
      headers: {
        Authorization: "Basic " + window.btoa(`${email}:${password}`)
      }
    })
  },
  registration(firstname, email, password){
    return axios.post(this.url + '/register', {
        firstname, email, password
    })
  }
  // editUserStatus (id, status) {
  //   return axios.put(this.url + '/user/status/' + id, { status }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: store.getters.bearer
  //     }
  //   })
  // },
  // addUser (email, password, roles) {
  //   return axios.post(this.url + '/user', { email, password, roles }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: store.getters.bearer
  //     }
  //   })
  // }
}
