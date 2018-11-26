<template>
<section>
    <form action="#" method="post">
    <label for="name">Usuario:</label>
    <input type="text" name="usuario" v-model="usuario" >
    <br>
    <label for="name">Recurso:</label>
    <input type="text" name="recurso" v-model="recurso" >
    <br>
    <button type="submit" @click.prevent="sendData">Consultar</button>
    </form>
    <br>
    <div v-if="success">
        <p>Succ</p>
        <router-link to="/">Home</router-link>
    </div>

</section>
</template>
<script>
import axios from 'axios';

export default {
  name: 'consultas',
  data() {
    return {
      usuario: null,
      recurso: null,
      success: false,
      error: false,
    };
  },
  methods: {
    sendData() {
      console.log('here');
      axios({
        method: 'POST',
        url: 'https://java-rest-server.herokuapp.com/consultas/',
        data: {
          usuario: this.usuario,
          recurso: this.recurso,
        },
        headers: { 'content-type': 'application/json' },
      }).then(
        (result) => {
          if (result.data.id > 0) {
            this.success = true;
            this.usuario = null;
            this.recurso = null;
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
