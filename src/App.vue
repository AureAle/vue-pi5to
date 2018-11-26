<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Login</router-link>
      <router-link v-if="user == null" to="/usuarios">Registrarse</router-link>
      <router-link v-if="user" to="/recursos">Recursos</router-link>
      <router-link v-if="user" to="/buscar">Buscar</router-link>
      <router-link v-if="user && user.tipo == 'bibliotecario'" to="/verUsuarios">Ver Usuarios</router-link>
      <router-link v-if="user && user.tipo == 'bibliotecario'" to="/verRecursos">Ver recursos</router-link>
      <router-link v-if="user && user.tipo == 'bibliotecario'" to="/verRepos">Ver repositorios</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'root',
  data() {
    return {};
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  nav a {
    margin: auto 1rem;
  }
  input {
    margin: 1rem;
      border-width: 0;
      border-style: none;
      border-color: inherit;
      border-image: none;
      border-bottom: 0.1rem solid #2c3e50;
      &:focus, &:hover {
        outline: none;
        border-width: 0;
        border-style: none;
        border-color: inherit;
        border-image: none;
        border-bottom: 0.1rem solid #42b983;
      }
    }
    button {
      margin: 1rem;
      padding: 1rem;
      background-color: inherit;
      border-width: 0.1rem;
      border-style: double;
      border-color: #2c3e50;
      border-image: inherit;
      &:focus, &:hover {
        outline: none;
        border-color: #42b983;
      }
    }
</style>
