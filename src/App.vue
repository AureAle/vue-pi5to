<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/javaApp">Java App</router-link> |
      <router-link to="/usuarios">Usuarios</router-link> |
      <router-link to="/login">Log In</router-link> |
      <router-link to="/recursos">Recursos</router-link> |
      <router-link to="/comentarios">Comentarios</router-link> |
      <router-link to="/consultas">Consultas</router-link> |
      <router-link to="/verUsuarios">Ver Usuarios</router-link> |
      <router-link to="/verRecursos">Ver recursos</router-link> |
      <router-link to="/verRepos">Ver repositorios</router-link> |
      
    </div>
    <router-view/>
  </div>
</template>

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
</style>
