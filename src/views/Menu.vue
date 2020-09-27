<template>
  <div id="menu">
    <h1>Menüü</h1>
    <hr>
    <section class="d-flex flex-row flex-wrap">
      <article class="pos">
        Pos1
      </article>
      <article class="pos">
        Pos2
      </article>
      <article class="pos">
        pos3
      </article>
      <article class="pos">
        pos4
      </article>
      <article class="pos">
        pos5
      </article>
      <article class="pos">
        pos6
      </article>
      <article class="pos">
        pos7
      </article>
      <article class="pos">
        pos8
      </article>
    </section>
  </div>
</template>

<script>

export default {
  name: "Menu"
}
</script>

<style scoped>
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
hr {
  width: 50%;
  border-color: black;
  border-width: 1.5px;
  padding-bottom: 30px;
}
.pos {
  width: 300px;
  height: 300px;
  background: red;
  margin-right: 20px;
  margin-bottom: 60px;
}
.pos:nth-of-type(4n+0) {
  margin-right: 0;
}
</style>