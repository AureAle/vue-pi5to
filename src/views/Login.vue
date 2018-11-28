<template>
  <section>
    <label id="title" for="name">Log In</label>
    <form id="login" action="#" method="post">
      <div class="form-group">
        <label for="name">Número de cuenta:</label>
        <input type="text" name="cuenta" v-model="cuenta">
      </div>
      <div class="form-group">
        <label for="name">Contraseña:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div class="form-group">
        <button type="submit" @click.prevent="sendData">Entrar</button>
      </div>
    </form>
    <div v-if="success">
      <p>Bienvenido {{user.nombre}}</p>
      <router-link v-bind:to="'/usuarios/'+user.cuenta">Profile</router-link>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      cuenta: null,
      password: null,
      success: false,
      error: false,
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['updateUser']),
    sendData() {
      axios({
        method: 'POST',
        url: 'https://java-rest-server.herokuapp.com/usuarios/login/',
        data: {
          cuenta: this.cuenta,
          password: this.password,
        },
        headers: { 'content-type': 'application/json' },
      }).then(
        (response) => {
          if (response.data.id > 0) {
            this.success = true;
            this.cuenta = null;
            this.password = null;
            this.updateUser(response.data);
          }
          this.$router.push({
            path: `/usuarios/${response.data.cuenta}`,
          });
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

#login{
    padding: 19px;
    display: flex;
    box-sizing: border-box;
    width: 300px;
    border-radius: 12px;
    background-color: rgb(223, 217, 217);
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

#title{
  font-weight: bold;
}
section{
  padding-top: 40px;
  font-family: Arial;
  font-size: 20px;
  color: black;
}

</style>
