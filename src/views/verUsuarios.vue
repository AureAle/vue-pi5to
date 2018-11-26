<template>
<section>
    <h1>Usuarios</h1>
    <button type="submit" @click.prevent="getUsers">Mostrar</button>

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
export default{

	data() {
        return{
            users:[]
        }            
    },
    methods: {
    getUsers(){
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

