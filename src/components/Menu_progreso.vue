<template>
<button @click="abrir()" class="ui button primary fluid" id="prepa">Pedidos En Preparación</button>
<div v-if="showProgreso==false">
        <table class="ui selectable inverted table" id="cerrar_tabla">
            <button  @click="cerrar()" class="ui button primary fluid" id="cerrar_prepa">Cerrar</button>
            <thead>
            <tr><th style="font-size: 16px">Pedidos En Preparación: {{tottal}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="tottal!=0">
            <tr v-for="data in datos" :key="data.id">
                <td>
                    <p class="al medio">- {{data.attributes.nombre_cliente}}</p>
                </td>
            </tr>
            </tr>
            <tr v-if="tottal==0">
                <td>
                    <p>No Hay Pedidos Actualmente</p>
                </td>
            </tr>
            </tbody>
        </table>
</div>
<div v-if="showProgreso==true">
        <table class="ui selectable inverted table">
            <button  @click="cerrar()" class="ui button primary fluid" id="cerrar_prepa">Cerrar</button>
            <thead>
            <tr><th style="font-size: 16px">Pedidos En Preparación: {{tottal}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="tottal!=0">
            <tr v-for="data in datos" :key="data.id">
                <td>
                    <p class="al medio">- {{data.attributes.nombre_cliente}}</p>
                </td>
            </tr>
            </tr>
            <tr v-if="tottal==0">
                <td>
                    <p>No Hay Pedidos Actualmente</p>
                </td>
            </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import {ref, onMounted,computed} from "vue";
import {getOrders,getUsuarios} from "../api/order";
import {getTokenApi} from "../api/token";
import jwtDecode from "jwt-decode";
import {useStore} from "vuex"
export default {
    name: "Menu_progreso",
    setup(){
           
           let orders = ref([]);
           let tottal = ref(0);
           let datos = [];
           const store = useStore();
           const showProgreso = computed (() => store.state.showProgreso);

           onMounted(async()=>{
           const token = getTokenApi();
           const {id} = jwtDecode(token);
           console.log(id);
           const response2= await getUsuarios(id);
           console.log(response2[0].username);
           const response = await getOrders(response2[0].username);
           orders.value = response;
           for (let index = 0; index < orders.value.data.length; index++) {
                datos.push(orders.value.data[index]);
            }
            
           tottal.value=orders.value.data.length
           })

           const cerrar = () =>{
            store.commit("setShowProgreso", false);
           }
           const abrir = () =>{
            store.commit("setShowProgreso", true);
         
           }
           
        return{
            showProgreso,
            cerrar,
            abrir,
            tottal,
            datos,
        }
    }
    
}
</script>





<style lang="scss" scoped>
//---------------- mobile ---------------
@media screen and (min-width: 1px) and (max-width: 768px){
.ui.selectable.inverted.table{
    .al.medio{
        color:red;
    }
    position: absolute;
    width: 60%;
    margin-top: 30%;
    margin-left: 20%;
    text-align: center;
     z-index: 99;
     box-shadow: 0px 0px 26px 5px rgba(0,0,0,0.75);
    .title{
         text-align: center;
    }
    .extras{
        &:hover{
        cursor: pointer;
        color: green;
    }
    }
}
.ui.button.primary.fluid{
    width: 50%;
    background-color: black;
    border: 1px solid red;

   
}
 #prepa{
        margin-left:50%;
        margin-top:1% ;
    }
 #cerrar_prepa{
    margin-left:25%;
    height: 30px;
 }
 #cerrar_tabla{
    display: none;
}
}

//---------------- hd ---------------
@media screen and (min-width: 1024px) and (max-width: 1366px){
.ui.selectable.inverted.table{
    .al.medio{
        color:red;
         margin-left: 62px;
    }
    position: absolute;
    width: 15%;
    top: 125%;
    margin-left: 84%;
    text-align: center;
    .title{
         text-align: center;
    }
    .extras{
        &:hover{
        cursor: pointer;
        color: green;
    }
    }
}
.ui.button.primary.fluid{
    display: none;
}
}
// ------------------ full hd ---------------
@media screen and (min-width: 1920px){
.ui.selectable.inverted.table{
    .al.medio{
        color:red;
         margin-left: 107px;
    }
    position: absolute;
    width: 15%;
    top: 80%;
    margin-left: 82%;
    text-align: center;
    .title{
         text-align: center;
    }
    .extras{
        &:hover{
        cursor: pointer;
        color: green;
    }
    }
}
.ui.button.primary.fluid{
    display: none;
}
}

//---------- 1600x900 --------------
@media screen and (min-width: 1367px) and (max-width:1600px){
.ui.selectable.inverted.table{
    .al.medio{
        color:red;
         margin-left: 82px;
    }
    position: absolute;
    width: 15%;
    top: 103%;
    margin-left: 82%;
    text-align: center;
    .title{
         text-align: center;
    }
    .extras{
        &:hover{
        cursor: pointer;
        color: green;
    }
    }
}
.ui.button.primary.fluid{
    display: none;
}
}

</style>