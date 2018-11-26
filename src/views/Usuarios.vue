<template>
  <section>
    <div v-if="usuarios">
      <p>Usuarios registrados: <strong>{{usuarios.length}}</strong></p>
      <div v-for="user in usuarios" :key="user.id">
        <p>Cuenta: {{user.cuenta}}</p>
        <p>Nombre: {{user.nombre}}</p>
        <router-link v-bind:to="'/usuarios/'+user.cuenta"> Profile </router-link>
        <hr>
      </div>
      <br>
      <hr>
      <br>
    </div>
    <form action="#" method="post">
      <label for="name">Nombre:</label>
      <input type="text" name="name" v-model="name" >
      <br>
      <label for="name">Carrera:</label>
      <input type="text" name="career" v-model="career" >
      <br>
      <label for="name">E-mail:</label>
      <input type="text" name="email" v-model="email" >
      <br>
      <label for="name">Usuario:</label>
      <input type="text" name="user" v-model="user" >
      <br>
      <label for="name">Contraseña:</label>
      <input type="password" name="password" v-model="password" >
      <br>
      <label for="name">Cuenta:</label>
      <input type="number" name="cuenta" v-model="cuenta" >
      <br>
      <label for="name">Tipo:</label>
      <input type="text" name="type" v-model="type" >
      <br>
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
import axios from "axios";

export default {
  name: "usuarios",
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
      usuarios: null
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "https://java-rest-server.herokuapp.com/usuarios/",
      headers: { "content-type": "application/json" }
    }).then(response => {
      this.usuarios = response.data;
    });
  },
  methods: {
    sendData() {
      console.log("here");
      axios({
        method: "POST",
        url: "https://java-rest-server.herokuapp.com/usuarios/",
        data: {
          name: this.name,
          career: this.career,
          email: this.email,
          user: this.user,
          password: this.password,
          cuenta: this.cuenta,
          type: this.typel
        },
        headers: { "content-type": "application/json" }
      }).then(
        result => {
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
        error => {
          this.error = true;
        }
      );
    }
  }
};
</script>

<style>
</style>
