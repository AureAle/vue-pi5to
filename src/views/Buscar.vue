<template>
  <section>
    <form action="#" method="post">
      <select name="campo" id="campo" v-model="campo">
        <option value></option>
        <option value="categoria">categoria</option>
        <option value="formato">formato</option>
        <option value="nombre">nombre</option>
        <option value="autor">autor</option>
        <option value="edición">edición</option>
        <option value="etiquetas">etiquetas</option>
        <option value="descripcion">descripcion</option>
      </select>
      <input type="text" name="valor" id="valor" v-model="valor">
      <br>
      <button type="submit" @click.prevent="sendData">Buscar por</button>
    </form>
    <br>
    <div v-if="success">
      <h1>Recursos encontrados</h1>
      <div v-for="recurso in arrBusqueda" :key="recurso.id">
        <p>Titulo: {{recurso.nombre}}</p>
        <p>Autor: {{recurso.autor}}</p>
        <p>Categoria: {{recurso.categoria}}</p>
        <p>Formato: {{recurso.formato}}</p>
        <p>Consultas: {{recurso.numConsultas}}</p>
        <p>Likes: {{recurso.numLikes}}</p>
        <hr>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'buscarPor',
  data() {
    return {
      campo: null,
      valor: null,
      success: false,
      error: false,
    };
  },
  computed: {
    ...mapState(['arrBusqueda'])
  },
  methods: {
    ...mapMutations(['updateBusqueda']),
    sendData() {
      let obj={};
      obj[this.campo] = this.valor;
      console.log(obj);
      axios({
        method: 'POST',
        url: 'https://java-rest-server.herokuapp.com/recursos/find',
        data: obj,
        headers: { 'content-type': 'application/json' },
      }).then(
        (response) => {
          this.success = true;
          this.updateBusqueda(response.data);
        },
        (error) => {
          this.error = true;
        },
      );
    },
  },
};
</script>
<style>
</style>
