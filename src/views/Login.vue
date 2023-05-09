<template>
<BasicLayout>
  <div class="login" >
   <h2>Iniciar Sesión</h2>
   <form class="ui form" @submit.prevent="login">
      <div class="field">
         <input type="text" placeholder="Nombre de Usuario" 
         v-model="formData.identifier"
         :class="{error: formError.identifier}">
      </div>
      <div class="field">
         <input type="password" placeholder="contraseña"
          v-model="formData.password"
          :class="{error: formError.password}">
      </div>
      <button type="submit" style="border: 2px solid red" class="ui black button fluid" :class="{loading}">
         Entrar 
      </button>
   </form>
     <router-link to="/register">Crear una cuenta</router-link>
     <h3 v-if="errorLogin">{{errorLogin}}</h3>
  </div>
</BasicLayout>
</template>

<script>
import {setTokenApi , getTokenApi} from "../api/token";
import {useRouter} from "vue-router"
import {loginApi} from "../api/user";
import {ref, onMounted} from "vue";
import * as Yup from "yup";
import BasicLayout from "../layout/BasicLayout.vue";
export default {
 name: "Login",
 components:{
    BasicLayout,
 },
 setup(){
   let formData = ref({});
   let formError = ref({});
   let loading = ref(false);
   const router = useRouter();
   let errorLogin = ref(false);
   const token = getTokenApi();


   onMounted(()=>{
      if(token) return router.push("/")
   })


   const schemaForm = Yup.object().shape({
      identifier: Yup.string().required(true),
      password: Yup.string().required(true),
   })

   const login = async () =>{
      loading.value = true;
      errorLogin.value = false;
      formError.value = {};
      try {
       await schemaForm.validate(formData.value, {abortEarly: false}); 
      try {
         const response = await loginApi(formData.value);
         if(!response?.jwt) throw errorLogin.value="El Usuario y/o contraseña no son validos";
         setTokenApi(response.jwt);
         router.push("/");
      } catch (error) {
         console.log(error);
      }
      } catch (error) {
         error.inner.forEach((err)=>{
            formError.value[err.path] = err.message;
         })
      }
      loading.value = false;
   }

   return{
      formData,
      formError,
      login,
      loading,
      errorLogin,
   }
 }
}
</script>

<style lang="scss" scoped>
.login{
   text-align: center;
   >h2{
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