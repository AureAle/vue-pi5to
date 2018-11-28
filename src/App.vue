<template>


    <div id="app">
   
    
    <nav id="nav">
      <div id="name" v-if="user && user.tipo=='bibliotecario'" >S G R D</div>
      <div id="name" v-else >Sistema Gestor de Repositorios Digitales</div>
      <div id="text">
       <li><router-link v-if="user && user.tipo=='bibliotecario'"  to="/">Log Out</router-link></li>        
       <li><router-link  to="/">Log In</router-link></li>
       <li><router-link v-if="user == null" to="/usuarios">Registrarse</router-link></li>
       <li><router-link v-if="user && user.tipo=='bibliotecario'" to="/recursos">Recursos</router-link></li>
       <li><router-link v-if="user" to="/buscar">Buscar</router-link></li>
       <li><router-link v-if="user && user.tipo == 'bibliotecario'" to="/verUsuarios">Ver Usuarios</router-link></li>
       <li><router-link v-if="user && user.tipo == 'bibliotecario'" to="/verRecursos">Ver recursos</router-link></li>
       <li><router-link v-if="user && user.tipo == 'bibliotecario'" to="/verRepos">Ver repositorios</router-link></li>
      </div>
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

#text a{
  line-height: 42px;  
  position: relative;
  top: 50%;
 
}
#text li{
  display:inline;

}
#text a{
      margin: 0px;
    padding: 10px;
}
#text li a:hover {
 background-color: #f3cdf3;
 margin-top: -2;
 padding-bottom: 12px;
 }
/*#nav a:hover, .active>a{
    background: #f3cdf3;
}*/
#name{
  float: left;
  font-size: 30px;
  font-weight: bold;
  color: white;
  font-family: Arial;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
  #nav {
    height: 40px;
    padding: 30px;
    background-color: #c4c4fa;
    a {
      text-decoration: none;
      float: right;
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
      &.router-link-exact-active {        
        border:none;
      }
    }

  }

  nav a {
    margin: auto 1rem;
  }
  input {
    margin: 1rem;
    padding: .5rem;
    margin: .5rem 0;
    border: none;
    
      &:focus, &:hover {
        outline: none;
        border-width: 0;
        border-style: none;
        border-color: inherit;
        border-image: none;
        border-bottom: 0.1rem solid #8989f8;
      }
    }
    button {
      font-family: Arial;
      font-size: 20px;
      color:black;
      margin: 1rem;
      padding: 1rem;
      border-radius: 12px;
      background-color: #adadfc;
      border-width: 0.1rem;
      border-style: double;      
      padding: 16px 73px;
      &:focus, &:hover {
        outline: none;
        background:  #8d8dfa;
      }
    }
</style>
