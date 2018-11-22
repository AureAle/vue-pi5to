<template>
<section>
    <form action="#" method="post">
    <label for="name">Comenta:</label>
    <textarea name="contenido" v-model="contenido" ></textarea>
    <br>
    <label for="name">Número de cuenta:</label>
    <input type="text" name="cuentaUsuario" v-model="cuentaUsuario" >
    <br>
    <button type="submit" @click.prevent="sendData">Comentar</button>
    </form>
    <br>
    <div v-if="success">
        <p>Tu comentario se ha subido</p>
        <router-link to="/">Home</router-link>
    </div>

</section>
</template>
<script>
import axios from "axios";

export default {
    name: "comentarios",
    data(){
        return{
            contenido:null,
            cuentaUsuario:null,
            success: false,
            error: false
        };
    },
    methods:{
        sendData(){
            console.log("here");
            axios({
                method: "POST",
                url: "https://java-rest-server.herokuapp.com/comentarios/",
                data:{
                    contenido: this.contenido,
                    cuentaUsuario: this.cuentaUsuario
                },
            headers: {"content-type": "application/json"}    
            }).then(
                result =>{
                    if(result.data.id>0){
                        this.success=true;
                        this.contenido=null;
                        this.cuentaUsuario=null;
                        
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



