<template>
  <div id="offers">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
          <div class="card">
            <img class="card-img-top" src="@/assets/img/kaks-pepperonit.jpg" alt="kaks-pepperonit">
            <div class="card-body">
              <h5 class="card-title">Kaks pepperonit</h5>
              <p class="card-text">Kõige populaarsem pitsa Pepperoni — allahindlusega!
                Tellides 2 suurt Pepperoni pitsat säästad 20% — kahe pitsa hind vaid 20,80€ (tavahind on 26€).
                Kasutage promokoodi <b style="color: darkred">D300</b>.</p>
            </div>
            <div class="card-footer">
              <b-btn>Kasuta promokood</b-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offers",
  created() {
    if (!this.$store.getters.isAuthorized) {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
#offers {
  width: 80%;
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
}
.card {
  width: 100%;
  margin-bottom: 60px;
  border: none;
  box-shadow: 3px 3px 6px black;
}
.card-title, .card-body {
  text-align: left;
}
.card-title {
  padding-bottom: 20px;
}
</style>