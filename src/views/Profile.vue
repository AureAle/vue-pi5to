<template>
  <section class="profile">
    <h1>Nombre: {{user.nombre}}</h1>
    <h3>Cuenta: {{user.cuenta}}</h3>
    <h5>Tipo: {{user.tipo}}</h5>
    <button @click="logout">Logout</button>
  </section>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'profile',
  data() {
    return {};
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['updateUser']),
    logout() {
      this.updateUser(null);
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style>
</style>
