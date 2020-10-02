<template>
  <div id="contact">
    <div class="container px-0">
      <div class="row mt-5">
        <b-icon class="mr-3 mt-1 h3" icon="map"></b-icon>
        <h2>Aadress:</h2>
      </div>
      <div class="main-body">
        <hr class="my-0 mb-3">
        <div class="h6">Mere puiestee 4, 10111 Tallinn</div>
      </div>
      <div class="row mt-5">
        <b-icon class="mr-3 mt-1 h3" icon="telephone"></b-icon>
        <h2>Telefon:</h2>
      </div>
      <div class="main-body">
        <hr class="my-0 mb-3">
        <div class="h6">+3728898888</div>
      </div>
      <div class="row mt-5">
        <b-icon class="mr-3 mt-1 h3" icon="at"></b-icon>
        <h2>Email:</h2>
      </div>
      <div class="main-body">
        <hr class="my-0 mb-3">
        <div class="h6">bigbobby@restaurant.com</div>
      </div>
      <div class="row mt-5">
        <b-icon class="mr-3 mt-1 h3" icon="door-open"></b-icon>
        <h2>Tööaeg:</h2>
      </div>
      <div class="main-body">
        <hr class="my-0 mb-3">
        <div class="h6">
          <table>
            <tr>
              <th>E-N:</th>
              <td>09:00 — 23:00</td>
            </tr>
            <tr>
              <th>R:</th>
              <td>09:00 — 00:00</td>
            </tr>
            <tr>
              <th>L:</th>
              <td>10:00 — 00:00</td>
            </tr>
            <tr>
              <th>P:</th>
              <td>10:00 — 23:00</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row mt-5">
        <b-icon class="mr-3 mt-1 h3" icon="exclamation-triangle"></b-icon>
        <h2>Tähtis:</h2>
      </div>
      <div class="main-body">
        <hr class="my-0 mb-3">
        <div class="text h6">
          Iga tellimus sisaldub salfrätikud ja söögiristad vastavalt valitud inimeste arvule.
        </div>
        <div class="text h6">
          Kojuvedamise hind linna piires on 5€.<br>
          Meie toimetame teile tellimust kohale linna piires 30 - 60 minutiga sõltuvalt tellimuse keerukusest ja
          köögi töökoormusest.
        </div>
        <div class="text h6">
          Alates 35€ kohaletoimetamine on <b style="color: darkred">TASUTA!</b>
        </div>
        <div class="text h6">
          Kui soovite tellida väljapoole Tallinna linna, siis meie eeltoodud telefonil saate täpsustada teenuse
          maksumuse ning kohaletoimetamise aja.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Contacts"
}
</script>

<style scoped>
#contact {
  width: 80%;
  margin: 80px auto;
  font-family: 'Grandstander', cursive;
}
hr {
  margin-left: -15px !important;
  margin-right: -15px !important;
}
.h6 {
  text-align: left;
}
table th {
  font-weight: normal;
  padding-right: 30px;
}
table th, td {
  padding-bottom: 10px;
}
.text {
  padding-bottom: 15px;
  line-height: 1.3;
  width: 95%;
}
.text:last-child {
  padding-bottom: 0;
}
.main-body {
  width: 75%;
}
</style>
