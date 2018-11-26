<template>
  <section class="profile">
    <h1>Nombre: {{user.nombre}}</h1>
    <h3>Cuenta: {{user.cuenta}}</h3>
    <h5>Tipo: {{user.tipo}}</h5>
  </section>

</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style>
</style>
