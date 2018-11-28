<template>
    <section>
        <h1>Recursos</h1>
    <button type="submit" @click.prevent="getRecursos">Mostrar</button>

<table id="recursos" border="1">
<thead>
	<th>Likes</th>
	<th>Consultas</th>
	<th>Categoría</th>
	<th>Formato</th>
	<th>Nombre</th>
	<th>Autor</th>
	<th>Edición</th>
	<th>Etiquetas</th>
	<th>Descripción</th>
	<th>Comentarios</th>

</thead>
	<tr v-for="data in recursos" :key="data.id" >
		<td>{{data.numLikes}}</td>
		<td>{{data.numConsultas}}</td>
		<td>{{data.categoria}}</td>
		<td>{{data.formato}}</td>
		<td>{{data.nombre}}</td>
		<td>{{data.autor}}</td>
		<td>{{data.edicion}}</td>
		<td>{{data.etiquetas}}</td>
		<td>{{data.descripcion}}</td>
		<td>{{data.comentarios}}</td>
	</tr>
</table>
</section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      recursos: [],
    };
  },
  methods: {
    getRecursos() {
      axios({
        method: 'GET',
        url: 'https://java-rest-server.herokuapp.com/recursos/',
        data: {},
        headers: { 'content-type': 'application/json' },
      }).then(
        (result) => {
          this.recursos = result.data;
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
 #recursos{
   border-collapse: collapse;
    width: 100%;
 }

 #recursos td, #recursos th {
    border: 1px solid #ddd;
    padding: 8px;
}
#recursos tr:nth-child(even){
  background-color: #f2f2f2;
}
#recursos tr:hover {
  background-color: #ddd;
}
#recursos th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #c4c4fa;
    color: white;
}
</style>

