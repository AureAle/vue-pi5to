<template>
  <section>
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
      <router-link to="/">Home</router-link>
    </div>
    <button type="submit" @click.prevent="getData">Mostrar</button>
    <!--here si le picas al boton cuando recién carga la pág no hace nada
     pero si le quito el submit y se lo pongo otra vez y la vuelvo a guardar 
     ya salen los usuarios-->
    <table border="1">
<thead>
	<th>Nombre</th>
	<th>Carrera</th>
	<th>E-mail</th>
	<th>Usuario</th>
	<th>No. Cuenta</th>
	<th>Tipo</th>      
</thead>
	<tr v-for="data in users" :key="data.cuenta" > 
		<td>{{data.nombre}}</td>
		<td>{{data.carrera}}</td>
		<td>{{data.correo}}</td>
		<td>{{data.usuario}}</td>
		<td>{{data.cuenta}}</td>
		<td>{{data.tipo}}</td>   
	</tr>

</table>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "usuarios",
  data() {
   users:[]
    return {
      name: null,
      career: null,
      email: null,
      user: null,
      password: null,
      cuenta: null,
      type: null,
      success: false,
      error: false
      
    };
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
    },

    getData(){
      axios({
        method: "GET",
        url: "https://java-rest-server.herokuapp.com/usuarios/",
        data:{},
        headers: { "content-type": "application/json" }
      }).then(
        result => {
          this.users=result.data;
          console.log(result);
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
