<template>
<section>
    <form action="#" method="post">
        <label for="name">Número de cuenta:</label>
        <input type="text" name="cuenta" v-model="cuenta" >
        <br>
        <label for="name">Contraseña:</label>
        <input type="password" name="password" v-model="password" >
        <br>
        <button type="submit" @click.prevent="sendData">Entrar</button>
    </form>
    <div v-if="success">
        <p>Bienvenido {{user.nombre}}</p>
        <router-link v-bind:to="'/usuarios/'+user.cuenta"> Profile </router-link>
    </div>
</section>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      cuenta: null,
      password: null,
      success: false,
      error: false
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapMutations(["updateUser"]),
    sendData() {
      axios({
        method: "POST",
        url: "https://java-rest-server.herokuapp.com/usuarios/login/",
        data: {
          cuenta: this.cuenta,
          password: this.password
        },
        headers: { "content-type": "application/json" }
      }).then(
        response => {
          if (response.data.id > 0) {
            this.success = true;
            this.cuenta = null;
            this.password = null;
            this.updateUser(response.data);
          }
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



