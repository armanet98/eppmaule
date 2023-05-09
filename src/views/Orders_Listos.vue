<template>
  <BasicLayout>
    <h3 v-if="!orders">no tienes pedidos</h3>
    <template v-if="datos">
        <div class="hola"><h2 style="text-align: center; background-color: green">Total De Ventas:  ${{tottal.toLocaleString("es")}} Equivalente a {{datos.length}} Pedidos</h2></div><br>
        <div class="order" v-for="data in datos" :key="data.id">
        <table class="ui selectable inverted table">
            <tbody>
            <tr>
                <td class="header">
                        <span class="date">
                        <button id="btn-date" class="ui black button disabled">{{ formatDate(data.attributes.createdAt) }}</button>
                        </span>
                        <span class="date2">
                        <button id="btn-metod" class="ui black button disabled">Metodo De Pago: {{ data.attributes.metodo_pago}}</button>
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
            </tbody>
        </table>
        <br>
        </div>
    </template>
  </BasicLayout>
</template>

<script>
import moment from "moment";
import {getOrders2,getUsuarios} from "../api/order";
import {ref, onMounted}  from "vue";
import BasicLayout from "../layout/BasicLayout.vue";
import {getTokenApi} from "../api/token";
import jwtDecode from "jwt-decode";
import {API_URL} from "../utils/constants";
export default {
    name: "Orders_Listos",
    components:{
        BasicLayout,
    },
    setup(){
        let formData= ref({});
        let orders = ref([]);
        let datos = [];
        let datos2 = [];
        let tottal = ref(0);
       
           onMounted(async()=>{
           const token = getTokenApi();
           const {id} = jwtDecode(token);
           const response2 = await getUsuarios(id);
           console.log(response2[0].username);
           const response = await getOrders2(response2[0].username);
           console.log(formData.fecha);
           let response3 = 0;
           orders.value = response;
            for (let index = 0; index < orders.value.data.length; index++) {
                datos.push(orders.value.data[index]);
                response3+= orders.value.data[index].attributes.totalPayment; 
            }
            for (let index = 0; index <datos.length; index++) {
                datos2.push(datos[index].attributes.data);
            }
            tottal.value = response3;
            });
                
        const formatDate = (date) =>{
            moment.locale("es");
            return moment(date).format("L, h:mm a");
        }

        return{
            orders,
            datos,
            datos2,
            formatDate,
            API_URL,
            tottal,
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
        .date2{ margin-left: 21% ;}
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
}
</style>