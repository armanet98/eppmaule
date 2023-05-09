<template>
  <BasicLayout>
    <h3 v-if="!orders">no tienes pedidos</h3>
    <template v-if="orders">
        {{time()}}
        <div class="hola"><h2 style="text-align: center; background-color: red; top: -20px">HAY {{tottal}} PEDIDO POR ENTREGAR <i style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#exampleModal" class="print icon" @click="PDF()"></i> </h2></div><br>
        <div class="order" v-for="data in datos" :key="data.id">
        <table class="ui selectable inverted table">
            <tbody>
            <tr>
                <td class="header">
                        <span class="date">
                        <button id="btn-date" class="ui black  button disabled">{{ formatDate(data.attributes.createdAt) }}</button>
                        </span>
                        <span class="date2">
                        <button  id="btn-metod" class="ui black button disabled">Metodo De Pago: {{ data.attributes.metodo_pago}}</button><br>
                        </span>
                        <p><button class="ui primary button disabled"> Nombre Cliente: {{data.attributes.nombre_cliente}}</button></p>
                        <p><button class="ui primary button disabled">Telefono: {{data.attributes.telefono_cliente}}</button></p>
                        <p><button class="ui primary button disabled">Total: ${{data.attributes.totalPayment.toLocaleString("es")}}</button></p>
                </td>
            </tr> 
            <tr class="products">
                <tr  class="product" v-for="product in data.attributes.data" :key="product.id">
                    <td>
                        <img :src="API_URL + product.data.attributes.image.data.attributes.url" 
                        :alt="product.data.attributes.name" 
                        class="ui image"/>
                        <p style="margin-top: -38px; margin-left: 55px"><button class="ui primary button disabled">{{product.data.attributes.name}}</button></p>
                    </td>
                    <td>
                        <h3> {{product.quantity}} x ${{product.data.attributes.price}} </h3>
                    </td>
                </tr>
            </tr>
            <tr>
                <td>
                   <p style="text-align: center; font-size: 20px"><button class="ui primary button disabled">Direccion De Entrega: {{data.attributes.direccion_cliente}}</button></p>
                </td>
            </tr>
            <tr>
                <td>
                   <button type="submit"  class="ui inverted red button fluid" @click="cambiarEstados(data.id)">Marcar Como Entregado</button>
                </td>
            </tr>
            </tbody>
        </table>
        <br>
        </div>
        <br>
        <div v-if="showBoleta==true" id="element-to-pdf">
        <table style="width:100%;font-size:18px"
         v-for="data in datos" :key="data.id">
            <tr style="width:100%;text-align:center;border: 1px dashed black">
                <td>Miami Sushi restaurant</td>
            </tr>
            <tr style="width:100%;text-align:center;border: 1px dashed black">
                <td>Turno de: {{nombrecito}}</td>
            </tr>
            <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black">
                <td>Fecha Pedido: {{ formatDate(data.attributes.createdAt) }}</td>
            </tr>
            <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black">
                <td>Metodo de pago: {{ data.attributes.metodo_pago}}</td>
            </tr>
            <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black">
                <td>Nombre Cliente: {{data.attributes.nombre_cliente}}</td>
            </tr>
             <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black;border-bottom: 1px dashed black">
                <td>Telefono: {{data.attributes.telefono_cliente}}</td>
            </tr>
             <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black;" v-for="product in data.attributes.data" :key="product.id">
                <td>{{product.quantity}} x {{product.data.attributes.name}}</td> 
            </tr>
             <tr style="width:100%;text-align:center; border: 1px dashed black">
                <td>Direccion De Entrega: {{data.attributes.direccion_cliente}}</td>
            </tr>
            <tr><td><br></td></tr>
        </table>
        </div>
       <div v-if="showBoleta==false" id="element-to-pdf">
        <table style="width:100%;border: 1px dashed black;font-size:18px;display:none"
         v-for="data in datos" :key="data.id">
           <tr style="width:100%;text-align:center;border: 1px dashed black">
                <td>Miami Sushi restaurant</td>
            </tr>
             <tr style="width:100%;text-align:center;border: 1px dashed black">
                <td>Turno de: {{nombrecito}}</td>
            </tr>
            <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black">
                <td>Fecha Pedido: {{ formatDate(data.attributes.createdAt) }}</td>
            </tr>
            <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black">
                <td>Metodo de pago: {{ data.attributes.metodo_pago}}</td>
            </tr>
            <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black">
                <td>Nombre Cliente: {{data.attributes.nombre_cliente}}</td>
            </tr>
             <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black;border-bottom: 1px dashed black">
                <td>Telefono: {{data.attributes.telefono_cliente}}</td>
            </tr>
             <tr style="width:100%;text-align:center;border-left: 1px dashed black;border-right: 1px dashed black;" v-for="product in data.attributes.data" :key="product.id">
                <td>{{product.quantity}} x {{product.data.attributes.name}}</td> 
            </tr>
             <tr style="width:100%;text-align:center; border: 1px dashed black">
                <td>Direccion De Entrega: {{data.attributes.direccion_cliente}}</td>
            </tr>
            <tr><td><br></td></tr>
        </table>
        </div>
    <div style="text-align: center" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" >
            <div class="modal-content" >
            <div class="modal-header" style="text-align:center; background-color: #000; color:white; border: 1px solid red">
                <h1 id="mensajealert" class="modal-title fs-5">GENERANDO PDF &nbsp;<div class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                </h1>
            </div>
    </div>
  </div>
</div>
    </template>
  </BasicLayout>
</template>
<script>
import { jsPDF } from "jspdf";
import CountDown from "../views/CountDown.vue";
import moment from "moment";
import {getOrdersASC,getUsuarios, cambiarEstado} from "../api/order";
import {ref, onMounted,computed}  from "vue";
import BasicLayout from "../layout/BasicLayout.vue";
import {getTokenApi} from "../api/token";
import jwtDecode from "jwt-decode";
import {API_URL} from "../utils/constants";
import html2pdf from "html2pdf.js";
import {useStore} from "vuex"
export default {
    name: "Orders",
    components:{
        BasicLayout,
        CountDown,
    },
    setup(){


        const store = useStore();
        const showBoleta = computed (() => store.state.showBoleta);
        let orders = ref([]);
        let datos = [];
        let datos2 = [];
        let tottal = ref(0);
        let nombrecito = ref("");

        function cambiar() {
        location.reload();
        }

        function time() {
        setTimeout(cambiar,15000);
        }

        onMounted(async()=>{
           const token = getTokenApi();
           const {id} = jwtDecode(token);
           console.log(id);
           const response2= await getUsuarios(id);
           console.log(response2[0].username);
           nombrecito.value=response2[0].username;
           console.log("nom",nombrecito);
           const response = await getOrdersASC(response2[0].username);
           orders.value = response;
           let response3 = orders.value.data.length;
            for (let index = 0; index < orders.value.data.length; index++) {
                datos.push(orders.value.data[index]);
            }
            console.log("datos",datos);
            for (let index = 0; index <datos.length; index++) {
                datos2.push(datos[index].attributes.data);
                
            }
            tottal.value = response3;
        });

        const formatDate = (date) =>{
            moment.locale("es");
            return moment(date).format("L, h:mm a");
        }

        const cambiarEstados = async (idusu) =>{
            const estado = await cambiarEstado(idusu);
            console.log(estado);
            location.replace("orders");
        }

        function PDF2(){
        var element = document.getElementById('element-to-pdf');
        var opt = {
        margin:       1,
        filename:     'pedidos.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'}
        };
        html2pdf().from(element).set(opt).save();
        }

        function PDF(){
        store.commit("setShowBoleta",true);
        setTimeout(PDF2,1500);
        }

        return{
            nombrecito,
            showBoleta,
            PDF,
            time,
            tottal,
            orders,
            datos,
            datos2,
            formatDate,
            API_URL,
            cambiarEstados,
    }
    }

}
</script>


<style lang="scss" scoped>
// ---------------- mobile ---------------
@media screen and (min-width: 1px) and (max-width: 768px){
    .hola{
    margin-left: 10%; 
    width:80%;
}
.ui.selectable.inverted.table{
    margin-left: 0%; 
    width:100%;
    border: 5px groove #000;
    margin-bottom: 25px;
    margin-top: 40px;

    .header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px;
        .date2{ 
        
        font-size: 2px;}
    }

    p{
        margin: 0;
        font-size: 20px;
    }

    span{
        position: absolute;
        top: -62px;
        left: 0%;
        font-size: 10px;
        color: #000;
        
       
    }

    .products{
        border-top: 3px solid #000;

        .product{
            display: flex;
            align-items:  center;
            justify-content: space-between;
            padding: 5px;
            p{
            margin: 0;
            font-size: 20px;
            }
            >div{
                display: flex;
                align-items: center;
                justify-content:  space-between;
            }
        }
    }
    .ui.image{
        width: 50px;
    }
}
.ui.button.primary.disabled{
    background-color: #000;
    margin-bottom: 2px;
}
#btn-metod{
    font-size: 12px;
    margin-left: 150px;
    margin-top: 10px;
}
#btn-date{
    font-size: 12px;
    margin-left: 0%;
    margin-top: 10px;
    width: 100%;
}
#pantallazo{
    cursor: pointer;
    margin-left: 90%;
    margin-top: 30px;
    color: white;
    font-size: 30px;
}
#mensajealert{
    margin-left: 25%;
}
}

// ---------------- hd ---------------
@media screen and (min-width: 1024px) and (max-width: 1366px){
    .hola{
    margin-left: 10%; 
    width:80%;
}
.ui.selectable.inverted.table{
    margin-left: 10%; 
    width:80%;
    border: 5px groove #000;
    margin-bottom: 25px;
    margin-top: 40px;

    .header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        .date2{ margin-left: 27% ;}
    }

    p{
        margin: 0;
        font-size: 20px;
    }

    span{
        position: absolute;
        top: -58px;
        left: 0%;
        font-size: 30px;
        color: #000;
        
       
    }

    .products{
        border-top: 3px solid #000;

        .product{
            display: flex;
            align-items:  center;
            justify-content: space-between;
            padding: 5px;
            p{
            margin: 0;
            font-size: 20px;
            }
            >div{
                display: flex;
                align-items: center;
                justify-content:  space-between;
            }
        }
    }
    .ui.image{
        width: 50px;
    }
}
.ui.button.primary.disabled{
    background-color: #000;
}
#btn-metod{
    font-size: 18px;
}
#btn-date{
    font-size: 18px;
}
#pantallazo{
    cursor: pointer;
    margin-left: 455px;
    margin-top: 30px;
    color: white;
}
#mensajealert{
    margin-left: 30%;
}
}
//------------------- 1600x900 ----------------------
@media screen and (min-width: 1367px) and (max-width: 1600px){
.hola{
    margin-left: 5%; 
    width:90%;
}
.ui.selectable.inverted.table{
    margin-left: 5%; 
    width:90%;
    border: 5px groove #000;
    margin-bottom: 25px;
    margin-top: 40px;

    .header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        .date2{ margin-left: 25% ;}
    }

    p{
        margin: 0;
        font-size: 20px;
    }

    span{
        position: absolute;
        top: -58px;
        left: 0%;
        font-size: 30px;
        color: #000;
    }

    .products{
        border-top: 3px solid #000;

        .product{
            display: flex;
            align-items:  center;
            justify-content: space-between;
            padding: 5px;
            p{
            margin: 0;
            font-size: 20px;
            }
            >div{
                display: flex;
                align-items: center;
                justify-content:  space-between;
            }
        }
    }
    .ui.image{
        width: 50px;
    }
}
.ui.button.primary.disabled{
    background-color: #000;
}
#btn-metod{
    font-size: 18px;
}
#btn-date{
    font-size: 18px;
}
#pantallazo{
    cursor: pointer;
    margin-left: 558px;
    margin-top: 30px;
    color: white;
}
#mensajealert{
    margin-left: 30%;
}
}

//--------------------------- full hd -----------
@media screen and (min-width: 1920px){
.ui.selectable.inverted.table{
    border: 5px groove #000;
    margin-bottom: 25px;
    margin-top: 40px;

    .header{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        .date2{ margin-left: 21% ;
        }
    }

    p{
        margin: 0;
        font-size: 20px;
    }

    span{
        position: absolute;
        top: -58px;
        left: 0%;
        font-size: 30px;
        color: #000;
        
    }

    .products{
        border-top: 3px solid #000;

        .product{
            display: flex;
            align-items:  center;
            justify-content: space-between;
            padding: 5px;
            p{
            margin: 0;
            font-size: 20px;
            }
            >div{
                display: flex;
                align-items: center;
                justify-content:  space-between;
            }
        }
    }
    .ui.image{
        width: 50px;
    }
}
.ui.button.primary.disabled{
    background-color: #000;
}
#btn-metod{
    font-size: 18px;
    margin-left:10px;
}
#btn-date{
    font-size: 18px;
}
#pantallazo{
    cursor: pointer;
    margin-left: 680px;
    margin-top: 30px;
    color: white;
}
#mensajealert{
    margin-left: 30%;
}
}

</style>