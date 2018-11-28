<template>
<section>
  <label id="title">Registra un Recurso</label>
    <form action ="#" method="post">
    <form id="recurso" action="#" method="post">      
        <!--<label for="name">Categoria:</label>-->
        <input type="text" name="categoria" placeholder="Categoría" v-model="categoria" >
        
        <!--<label for="name">Formato:</label>-->
        <input type="text" name="formato" placeholder="Formato" v-model="formato" >
        
        <!--<label for="name">Nombre:</label>-->
        <input type="text" name="nombre" placeholder="Nombre" v-model="nombre" >
        
        <!--<label for="name">Autor:</label>-->
        <input type="text" name="autor" placeholder="Autor" v-model="autor" >
      
        <!--<label for="name">Edición:</label>-->
        <input type="text" name="edición" placeholder="Edición" v-model="edicion" >
        
        <!--<label for="name">Etiquetas:</label>-->
        <input type="text" name="etiquetas" placeholder="Etiquetas" v-model="etiquetas" >
        
        <!--<label for="name">Descripción:</label>-->
        <input type="text" name="descripcion" placeholder="Descripción" v-model="descripcion" >
        
        <button type="submit" @click.prevent="sendData">Registrar Recusro</button>
    </form>
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
<style scoped >
#title{
  font-weight: bold;
  font-family: Arial;
  font-size: 20px;
  color: black;
}
#recurso{
  background-color: #dfd9d9;
  padding: 19px;
  display: flex;
  box-sizing: border-box;
  width: 300px;
  border-radius: 12px;
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
</style>
