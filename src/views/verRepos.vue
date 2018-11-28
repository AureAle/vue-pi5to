<template>
    <section>
        <h1>Repos</h1>
    <button type="submit" @click.prevent="getRepos">Mostrar</button>

<table id="repos" border="1">
<thead>
	<th>Id</th>
	<th>Nombre</th>
	<th>Descripción</th>
	<th>Etiquetas</th>
	<th>Recursos</th>

</thead>
	<tr v-for="data in repos" :key="data.id" >
		<td>{{data.id}}</td>
		<td>{{data.nombre}}</td>
		<td>{{data.descripcion}}</td>
		<td>{{data.etiquetas}}</td>
		<td>{{data.recursos}}</td>
	</tr>
</table>
</section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      repos: [],
    };
  },
  methods: {
    getRepos() {
      axios({
        method: 'GET',
        url: 'https://java-rest-server.herokuapp.com/repositorios/',
        data: {},
        headers: { 'content-type': 'application/json' },
      }).then(
        (result) => {
          this.repos = result.data;
          console.log(result);
        },
        (error) => {
          this.error = true;
        },
      );
    },
  },
};

</script>
<style scoped>
#repos{
   border-collapse: collapse;
    width: 100%;
 }

 #repos td, #repos th {
    border: 1px solid #ddd;
    padding: 8px;
}
#repos tr:nth-child(even){
  background-color: #f2f2f2;
}
#repos tr:hover {
  background-color: #ddd;
}
#repos th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #c4c4fa;
    color: white;
}
</style>

