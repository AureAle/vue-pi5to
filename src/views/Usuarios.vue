<template>
  <section>
    <label id="title">Registrarse</label>
    <form id="login" action="#" method="post">
      <input type="text"  name="name" placeholder="Nombre" v-model="name">
      
      <input type="text" name="career" placeholder="Carrera" v-model="career">
      
      <!--<label for="name">E-mail:</label>-->
      <input type="text" name="email" placeholder="E-mail" v-model="email">
      
      <!--<label for="name">Usuario:</label>-->
      <input type="text" name="user" placeholder="Usuario" v-model="user">
      
      <!--<label for="name">Contraseña:</label>-->
      <input type="password" name="password" placeholder="Contraseña" v-model="password">
      
      <!--<label for="name">Número de Cuenta:</label>-->
      <input type="text" name="cuenta" placeholder="Número de cuenta" v-model="cuenta">
      
      <label for="name">Tipo:</label>
      <input type="text" name="type" placeholder="estudiante/bibliotecario" v-model="type">
      
      <button type="submit" @click.prevent="sendData">Registrar</button>
    </form>
    <br>
    <div v-if="success">
      <p>Usuario registrado correctamente!</p>
      <router-link to="/">Login</router-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'usuarios',
  data() {
    return {
      name: null,
      career: null,
      email: null,
      user: null,
      password: null,
      cuenta: null,
      type: null,
      success: false,
      error: false,
      usuarios: null,
    };
  },
  methods: {
    sendData() {
      axios({
        method: 'POST',
        url: 'https://java-rest-server.herokuapp.com/usuarios/',
        data: {
          name: this.name,
          career: this.career,
          email: this.email,
          user: this.user,
          password: this.password,
          cuenta: this.cuenta,
          type: this.type,
        },
        headers: { 'content-type': 'application/json' },
      }).then(
        (result) => {
          if (result.data.id > 0) {
            this.success = true;
            this.name = null;
            this.career = null;
            this.email = null;
            this.user = null;
            this.password = null;
            this.cuenta = null;
            this.type = null;
          }
        },
        (error) => {
          this.error = true;
        },
      );
    },
  },
};
</script>

<style scope >
#title{
  font-weight: bold;
  font-family: Arial;
  font-size: 20px;
  color: black;
}

#login{
    padding: 19px;
    display: flex;
    box-sizing: border-box;
    width: 300px;
    border-radius: 12px;
    background-color: #dfd9d9;
    flex-direction: column;
    margin-top: 1rem;
    align-content: center;
    margin: auto;
    margin-top:20px;
    border: 1px;
    max-width: 450px;
    height: auto;
    padding-bottom: 1rem;
    padding-top: 1rem;
}
section{
  padding-top: 18px;
  font-family: Arial;
  font-size: 16px;
  color: black;
}
</style>
