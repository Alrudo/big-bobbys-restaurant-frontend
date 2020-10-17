import axios from 'axios'

export default {
  url: 'https://bigbobbyapi.deathcry.ru',
  getMenu () {
    return axios.get(this.url + '/menu')
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
