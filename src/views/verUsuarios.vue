<template>
<section>
    <h1>Usuarios</h1>
    <button type="submit" @click.prevent="getUsers">Mostrar</button>

<table id="usuarios" border="1">
<thead>
	<th>Nombre</th>
	<th>Carrera</th>
	<th>E-mail</th>
	<th>Usuario</th>
	<th>No. Cuenta</th>
	<th>Tipo</th>
  <th>Editar</th>
  <th>Eliminar</th>
</thead>
<tbody>
	<tr v-for="(data,i) in users" :key="data.id" >
    <div v-if="editUser===data.id" >
      <input v-model="data.nombre"/>
    </div>
    
		<td>{{data.nombre}}</td>
		<td>{{data.carrera}}</td>
		<td>{{data.correo}}</td>
		<td>{{data.usuario}}</td>
		<td>{{data.cuenta}}</td>
		<td>{{data.tipo}}</td>
    <td><button v-on:click="editUser = data.id">Editar</button>
    <button v-on:click="updateUser(data)" v-if="editUser">Guardar</button></td> 
    <td><button v-on:click="deleteUser(data.id, i)">Eliminar</button></td>
    
	</tr>
</tbody>

</table>
</section>
</template>

<script>
import axios from 'axios';

export default{

  data() {
    return {
      editUser:null,
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios({
        method: 'GET',
        url: 'https://java-rest-server.herokuapp.com/usuarios/',
        data: {},
        headers: { 'content-type': 'application/json' },
      }).then(
        (result) => {
          this.users = result.data;
          console.log(result);
        },
        (error) => {
          this.error = true;
        },
      );
    },
    deleteUser(id, i ){
          axios({
            method:"DELETE",
            url: "https://java-rest-server.herokuapp.com/usuarios/" + id,        
          }).then(() => {
            this.users.splice(i,1);
            console.log("eliminado")
          })
      },
      updateUser(data){
        axios({
          method: "PUT",
          url: "https://java-rest-server.herokuapp.com/usuarios/" + data.id,
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" }
        }).then(()=> {
          this.editUser =null;
          console.log(data);
        })
      },
  },
};
</script>
<style scoped>
 #usuarios{
   border-collapse: collapse;
    width: 100%;
 }

 #usuarios td, #usuarios th {
    border: 1px solid #ddd;
    padding: 8px;
}
#usuarios tr:nth-child(even){
  background-color: #f2f2f2;
}
#usuarios tr:hover {
  background-color: #ddd;
}
#usuarios th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #c4c4fa;
    color: white;
}

</style>

