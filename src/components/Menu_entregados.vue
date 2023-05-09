<template>
        <button @click="abrir()" class="ui button primary fluid">Ver Ventas Del Dia</button><br>
        <div v-if="showEntregados==false">
        <table class="ui selectable inverted table" id="cerrar_tabla">
            <button @click="cerrar()" class="ui button primary fluid" id="cerrar_entregado">Cerrar</button>
            <thead>
            <tr><th style="font-size: 16px">Desglose Ventas De Hoy:</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <p style="font-size: 12px"> Ventas Efectivo: ${{tottalE.toLocaleString("es")}}</p>
                    <p style="font-size: 12px"> Ventas Debito: ${{tottalD.toLocaleString("es")}}</p>
                    <p style="font-size: 12px"> Ventas Credito: ${{tottalC.toLocaleString("es")}}</p>
                    <p style="font-size: 12px"> Ventas Transferencia: ${{tottalT.toLocaleString("es")}}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="font-size: 20px">Total: ${{tottalglobal.toLocaleString("es")}}</p>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        <div v-if="showEntregados==true">
        <table class="ui selectable inverted table">
            <button @click="cerrar()" class="ui button primary fluid" id="cerrar_entregado">Cerrar</button>
            <thead>
            <tr><th style="font-size: 16px">Desglose Ventas De Hoy:</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <p style="font-size: 12px"> Ventas Efectivo: ${{tottalE.toLocaleString("es")}}</p>
                    <p style="font-size: 12px"> Ventas Debito: ${{tottalD.toLocaleString("es")}}</p>
                    <p style="font-size: 12px"> Ventas Credito: ${{tottalC.toLocaleString("es")}}</p>
                    <p style="font-size: 12px"> Ventas Transferencia: ${{tottalT.toLocaleString("es")}}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p style="font-size: 20px">Total: ${{tottalglobal.toLocaleString("es")}}</p>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
import moment from "moment";
import {ref, onMounted , computed} from "vue";
import {getOrders,getUsuarios, getOrdersPorFecha, getOrdersPorEfectivo,getOrdersPorDebito,getOrdersPorCredito,getOrdersPorTransferencia} from "../api/order";
import {getTokenApi} from "../api/token";
import jwtDecode from "jwt-decode";
import { boolean } from 'yup';
import {useStore} from "vuex"
export default {
    name: "Menu_entregados",
    setup(){
           
           let orders = ref([]);
           let orders2 = ref([]);
           let ordersE = ref([]);
           let ordersD = ref([]);
           let ordersC = ref([]);
           let ordersT = ref([]);
           let tottal = ref(0);
           let datos = [];
           let datos2 =[];
           let tottalglobal = ref(0);
           let tottalE = ref(0);
           let tottalD = ref(0);
           let tottalC = ref(0);
           let tottalT = ref(0);

           const store = useStore();
           const showEntregados = computed (() => store.state.showEntregados);

           onMounted(async()=>{
            moment.locale("es");
           const token = getTokenApi();
           const {id} = jwtDecode(token);
           console.log(id);
           const response2= await getUsuarios(id);
           console.log(response2[0].username);
           const response3 = await getOrdersPorFecha(moment(Date.now()).format("L"),response2[0].username);
           orders2.value= response3;
           const response = await getOrders(response2[0].username);
           orders.value = response;
           let response4= 0;
           for (let index = 0; index < orders.value.data.length; index++) {
                datos.push(orders.value.data[index]);
            }
            for (let index = 0; index < orders2.value.data.length; index++) {
                datos2.push(orders2.value.data[index]);
                response4 += datos2[index].attributes.totalPayment;
            }
           tottalglobal.value= response4;
           tottal.value=orders.value.data.length

           //------------------------------------Efectivo-----------------------------------
           const responseE = await getOrdersPorEfectivo(moment(Date.now()).format("L"),response2[0].username);
           ordersE.value= responseE;
           let response5 = 0;
           for (let index = 0; index < ordersE.value.data.length; index++) {
               response5 +=ordersE.value.data[index].attributes.totalPayment;
            }
            tottalE.value= response5;
           //------------------------------------Efectivo-----------------------------------

           //------------------------------------Debito-----------------------------------
           const responseD = await getOrdersPorDebito(moment(Date.now()).format("L"),response2[0].username);
           ordersD.value= responseD;
           let response6 = 0;
           for (let index = 0; index < ordersD.value.data.length; index++) {
               response6 +=ordersD.value.data[index].attributes.totalPayment;
            }
            tottalD.value= response6;
           //------------------------------------Debito-----------------------------------

            //------------------------------------Credito-----------------------------------
           const responseC = await getOrdersPorCredito(moment(Date.now()).format("L"),response2[0].username);
           ordersC.value= responseC;
           let response7 = 0;
           for (let index = 0; index < ordersC.value.data.length; index++) {
               response7 +=ordersC.value.data[index].attributes.totalPayment;
            }
            tottalC.value= response7;
           //------------------------------------Credito-----------------------------------

            //------------------------------------Efectivo-----------------------------------
           const responseT = await getOrdersPorTransferencia(moment(Date.now()).format("L"),response2[0].username);
           ordersT.value= responseT;
           let response8 = 0;
           for (let index = 0; index < ordersT.value.data.length; index++) {
               response8 +=ordersT.value.data[index].attributes.totalPayment;
            }
            tottalT.value= response8;
           //------------------------------------Efectivo-----------------------------------


           })

           const cerrar = () =>{
            store.commit("setShowEntregados", false);
           }
           const abrir = () =>{
            store.commit("setShowEntregados", true);
         
           }
           
        return{
            abrir,
            showEntregados,
            cerrar,
            tottal,
            datos,
            tottalglobal,
            tottalE,
            tottalD,
            tottalC,
            tottalT,
        }
    }
    
}
</script>





<style lang="scss" scoped>

//------------ mobile ------------
@media screen and (min-width: 1px) and (max-width: 768px){
.ui.selectable.inverted.table{
    transition: opacity 0.5s ease;
    position: absolute;
    width: 65%;
    top: 30%;
    margin-left: 18%;
    text-align: center;
    z-index: 99;
    box-shadow: 0px 0px 26px 5px rgba(0,0,0,0.75);
    transition: transform 0.9s ease;
    &.open{
        position: fixed;
        background-color: #000;
        opacity: 0.7;
    }
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
    margin-top: -9.6%;
}
#cerrar_entregado{
    margin-left:25%;
    height: 30px;
    margin-top: 5%;
}
#cerrar_tabla{
    display: none;
}
}

//------------ hd ------------
@media screen and (min-width: 1024px) and (max-width: 1366px){
.ui.selectable.inverted.table{
    position: absolute;
    width: 15%;
    top: 82%;
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
//------------ full hd ------------
@media screen and (min-width: 1920px){
.ui.selectable.inverted.table{
    position: absolute;
    width: 15%;
    top: 53%;
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

//------------ 1600 x 900------------
@media screen and (min-width: 1367px) and (max-width: 1600px){
.ui.selectable.inverted.table{
    position: absolute;
    width: 15%;
    top: 69%;
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