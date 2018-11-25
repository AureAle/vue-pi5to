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
		<td>{{data.name}}</td>
		<td>{{data.career}}</td>
		<td>{{data.email}}</td>
		<td>{{data.user}}</td>
		<td>{{data.cuenta}}</td>
		<td>{{data.type}}</td>   
	</tr>

</table>
</section>
</template>

<script>
export default{

	data() {
        return{
            users:[]
        }            
    },
    methods: {
    getUsers(){
        axios({ /*dice un error que axios no está declarado, ésta no funciona la de usuarios sí*/
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

