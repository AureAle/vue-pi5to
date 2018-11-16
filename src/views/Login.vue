<template>
    <form action="https://java-rest-server.herokuapp.com/login/" method="post">
    <label for="name">Número de cuenta:</label>
    <input type="text" name="cuenta" >
    <br>
    <label for="name">Contraseña:</label>
    <input type="password" name="password" >
    <br>
    </form>
</template>
<script>
export default {
    name: "login"
};
</script>


