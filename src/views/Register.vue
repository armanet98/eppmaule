<template>
  <BasicLayout>
  <div class="register">
    <h2>Registro De Usuario</h2>
    <form class="ui form" @submit.prevent="register">
        <div class="field">
            <input type="text" placeholder="nombre de usuario" 
            v-model="formData.username"
            :class="{error: formError.username}">
        </div>
        <div class="field">
            <input type="text" placeholder="correo electronico" 
            v-model="formData.email"
            :class="{error: formError.email}">
        </div>
        <div class="field">
            <input type="password" placeholder="contraseña"
             v-model="formData.password"
             :class="{error: formError.password}">
        </div>
        <button type="submit" style="border: 2px solid red" class="ui black button fluid" :class="{loading}">
            Crear Usuario
        </button><br>
        <router-link to="/login">
            Iniciar sesión
        </router-link>
    </form>
  </div>
</BasicLayout>
</template>

<script>
import {useRouter} from "vue-router";
import {registerApi} from "../api/user";
import {ref , onMounted} from "vue";
import BasicLayout from "../layout/BasicLayout.vue";
import * as Yup from "yup";
import {getTokenApi} from "../api/token";
export default {
 name: "Register",
 components:{
    BasicLayout,
 },
 setup(){
    let formData = ref({});

    let formError = ref({});
    const router = useRouter();
    let loading = ref(false);       // animacion de carga

    const token = getTokenApi();

    onMounted (()=>{
        if(token) router.push("/")   // si esta creado el token (al iniciar sesion) que vuelva al home 
    })

    const schemaForm = Yup.object().shape({
        username: Yup.string().required(true),
        email : Yup.string().email(true).required(true),
        password : Yup.string().required(true),
    })
    const register = async () =>{
        formError.value = {};
        loading.value = true;
        try {
            await schemaForm.validate(formData.value, {abortEarly: false});
            try {
                const response = await registerApi(formData.value);
                router.push('/login' );
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            error.inner.forEach((err) =>{
                formError.value[err.path] = error.message;
            })
        }
        console.log("registrando usuario");
        console.log(formData.value);
        loading.value = false;
    }


    return{
        formData,
        register,
        formError,
        loading,
    }
 }
}
</script>

<style lang="scss" scoped>
.register{
    text-align: center;
    > h2 {
        margin: 50px 0 30px 0;
    }
    .ui.form{
        max-width: 300px !important;
        margin: 0 auto;
        margin-bottom: 10px;
        input.error{
            border-color: #faa;
            background-color: #ffeded;
        }
    }
}

</style>