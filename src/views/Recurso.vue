<template>
<section>
    <form action ="#" method="post">
        <label for="name">Categoria:</label>
        <input type="text" name="categoria" v-model="categoria" >
        <br>
        <label for="name">Formato:</label>
        <input type="text" name="formato" v-model="formato" >
        <br>
        <label for="name">Nombre:</label>
        <input type="text" name="nombre" v-model="nombre" >
        <br>
        <label for="name">Autor:</label>
        <input type="text" name="autor" v-model="autor" >
        <br>
        <label for="name">Edición:</label>
        <input type="text" name="edición" v-model="edicion" >
        <br>
        <label for="name">Etiquetas:</label>
        <input type="text" name="etiquetas" v-model="etiquetas" >
        <br>
        <label for="name">Descripción:</label>
        <input type="text" name="descripcion" v-model="descripcion" >
        <br>
        <button type="submit" @click.prevent="sendData">Registrar Recusro</button>
    </form>
    <br>
    <div v-if="success">
      <p>Recurso registrado correctamente!</p>
      <router-link to="/">Home</router-link>
    </div>
</section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'agregarRecurso',
  data() {
    return {
      categoria: null,
      formato: null,
      nombre: null,
      autor: null,
      edicion: null,
      etiquetas: null,
      descripcion: null,
      success: false,
      error: false,
    };
  },
  methods: {
    sendData() {
      console.log('here');
      axios({
        method: 'POST',
        url: 'https://java-rest-server.herokuapp.com/recursos/',
        data: {
          categoria: this.categoria,
          formato: this.formato,
          nombre: this.nombre,
          autor: this.autor,
          edicion: this.edicion,
          etiquetas: this.etiquetas,
          descripcion: this.descripcion,
        },
        headers: { 'content-type': 'application/json' },
      }).then(
        (result) => {
          if (result.data.id > 0) {
            this.success = true;
            this.categoria = null;
            this.formato = null;
            this.nombre = null;
            this.autor = null;
            this.edicion = null;
            this.etiquetas = null;
            this.descripcion = null;
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
<style>
</style>
