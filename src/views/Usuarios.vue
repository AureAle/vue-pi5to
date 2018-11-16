<template>
  <form action="https://java-rest-server.herokuapp.com/usuarios/" method="post">
    <label for="name">Nombre:</label>
    <input type="text" name="name" >
    <br>
    <label for="name">Career:</label>
    <input type="text" name="career" >
    <br>
    <label for="name">Email:</label>
    <input type="text" name="email" >
    <br>
    <label for="name">User:</label>
    <input type="text" name="user" >
    <br>
    <label for="name">Password:</label>
    <input type="text" name="password" >
    <br>
    <label for="name">Cuenta:</label>
    <input type="number" name="cuenta" >
    <br>
    <label for="name">Type:</label>
    <input type="text" name="type" >
    <br>
    <button type="submit">Registrar</button>
  </form>
</template>

<script>
export default {
  name: "usuarios"
};
</script>

<style>
</style>
