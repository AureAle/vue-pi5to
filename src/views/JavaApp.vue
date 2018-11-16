<template>
  <div>
    {{ response }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "javaApp",
  data() {
    return {
      response: null
    };
  },
  created() {
    axios
      .get("https://java-rest-server.herokuapp.com/recursos/")
      .then(response => {
        console.log(response);
        this.response = response.data[0];
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style>
</style>
