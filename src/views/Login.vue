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
        <p>Bienvenido</p>
        <router-link to="/">Home</router-link>
    </div>
</section>
</template>
<script>
import axios from "axios";

export default {
    name: "login",
    data(){
        return{
            cuenta:null,
            password:null,
            success: false,
            error: false
        };
    },
    methods:{
        sendData(){
            console.log("here");
            axios({
                method: "POST",
                url: "https://java-rest-server.herokuapp.com/login/",
                data:{
                    cuenta: this.cuenta,
                    password: this.password
                },
            headers: {"content-type": "application/json"}    
            }).then(
                result =>{
                    if(result.data.id>0){
                        this.success=true;
                        this.cuenta=null;
                        this.password=null;
                       
                    }
                },
                error=> {
                    this.error=true;
                }
            );
        }
    }
};
</script>
<style>

</style>



