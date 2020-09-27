<template>
  <div id="menu">
    <h1>Menüü</h1>
    <hr class="m-0 p-0 mb-3" style="border: 1px solid black">
    <div class="container">
      <!--
      ################################################
      #                  Magustoidud                 #
      ################################################
      -->
      <div class="row mt-5">
        <h2>Magustoit</h2>
        <div class="ml-3 h2">
          <b-icon icon="chevron-up" v-if="desert" @click="desert=false"></b-icon>
          <b-icon icon="chevron-down" v-if="!desert" @click="desert=true"></b-icon>
        </div>
      </div>
      <hr class="my-0 mb-3">
      <b-collapse id="collapse-1" v-model="desert" class="mt-2">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </b-collapse>

      <!--
      ################################################
      #                   Pearood                    #
      ################################################
      -->
      <div class="row mt-4">
        <h2>Pearood</h2>
        <div class="ml-3 h2">
          <b-icon icon="chevron-up" v-if="main_meal" @click="main_meal=false"></b-icon>
          <b-icon icon="chevron-down" v-if="!main_meal" @click="main_meal=true"></b-icon>
        </div>
      </div>
      <hr class="my-0 mb-3">
      <b-collapse id="collapse-1" v-model="main_meal" class="mt-2">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <b-card>
              <p class="card-text">Collapse contents Here</p>
              <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>Hello!</b-card>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
  name: "Menu",
  data: function () {
    return {
      desert: true,
      main_meal: true
    }
  },
  components: {
    BIcon
  }
}
</script>

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
#menu {
  width: 80%;
  margin: 30px auto;
  font-family: 'Grandstander', cursive;
}
h1 {
  padding-top: 30px;
  text-shadow: 1px 1px 2px black;
  font-size: 3.5rem;
}
hr{
  margin-right: -15px !important;
  margin-left: -15px !important;
}
.pos {
  width: 100%;
  height: 200px;
  background: red;
  padding: 20px;
  margin-bottom: 60px;
}
.pos:nth-of-type(4n+0) {
  margin-right: 0;
}
</style>
