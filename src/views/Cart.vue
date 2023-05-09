<template>
  <BasicLayout>
    <h1 class="carrito">Carrito</h1>
    <table class="ui selectable inverted table" v-if="products">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th style="text-align: center">Eliminar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{product.data.attributes.name}}</td>
                <td>{{product.quantity}}</td>
                <td>${{product.data.attributes.price}}</td>
                <td style="text-align:center"><i class="close icon" @click="deleteAllProductCart(product.data.id)"></i></td>
            </tr>
            <tr>
                <td></td>
                <td>Total:</td>
                <td colspan="2" style="text-align: center ; font-size: 20px"> ${{getTotal()}}</td>
            </tr>
            <tr>
                <td>Nombre: <input style="width: 85%" type="text" v-model="formData.nombre"/></td>
                <td>Direccion: <input style="width: 85%" type="text" v-model="formData.direccion"/></td>
                <td>Telefono: <input style="width: 85%" type="text" v-model="formData.telefono"/></td>
                <td>Metodo De Pago: <select style="width: 85%" v-model="formData.metodo_pago">
                <option disabled value="">Seleccione una opción</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Debito">Debito</option>
                <option value="Credito">Credito</option>
                <option value="Transferencia">Transferencia</option>
                </select></td>
            </tr>
        </tbody>    
    </table>
    <button style="border: 2px solid red" class="ui black button fluid" @click="createOrder" v-if="products">
        Generar Pedido
    </button>
    <h3 v-if="!products">No tienes productos en el carrito</h3>
  </BasicLayout>
</template>

<script>
import moment from "moment";
import {useRouter} from "vue-router";
import jwtDecode from "jwt-decode";
import {getTokenApi} from "../api/token";
import { createOrderApi ,getUsuarios} from "../api/order";
import {ref, watchEffect}from "vue";
import {getProductsCartApi, deleteAllProductCartApi , deleteCartApi} from "../api/cart";
import BasicLayout from "../layout/BasicLayout.vue";
export default {
    name: "Cart",
    components:{
        BasicLayout,
    },
    setup(){

        let formData = {};
        let products = ref(null);
        let reloadCart = ref(false);
        const router= useRouter();

        watchEffect(async()=>{
            reloadCart.value;
            const response  = await getProductsCartApi();
            products.value= response;
        })

        const getTotal = () =>{
            let totalTemp = 0;

            products.value.forEach((product)=>{
                totalTemp += product.data.attributes.price * product.quantity;
            })
            return totalTemp;
        }

        const deleteAllProductCart = (idproduct) => {
            deleteAllProductCartApi(idproduct);
            reloadCart.value = !reloadCart.value;
        }

        const createOrder = async () =>{
            const token = getTokenApi();
            const {id} = jwtDecode(token);
            console.log(id);
            const nombre = await getUsuarios(id);
            console.log("nombre:",nombre);
            moment.locale("es");
            const data ={
                user: id,
                totalPayment: getTotal(),
                data: products.value,
                nom_usuario: nombre[0].username,
                nombre_cliente: formData.nombre,
                direccion_cliente: formData.direccion,
                telefono_cliente: formData.telefono,
                metodo_pago: formData.metodo_pago,
                fecha: moment(Date.now()).format("L"), 
            }
           
           try {
                const response = await createOrderApi(data);
                deleteCartApi();
                router.push("/orders");
           } catch (error) {
            console.log(error);
           }
        }


        return{
            formData,
            products,
            getTotal,
            deleteAllProductCart,
            createOrder,
        }
    }
}
</script>

<style lang="scss" scoped>

// ---------------- hd ---------------
@media screen and (max-width: 1366px){
.carrito{
margin-left: 10%; 
width:80%;
text-align: center;
}
.ui.selectable.inverted.table{
margin-left: 10%; 
width:80%;

}
.ui.black.button.fluid{
    margin-left: 10%; 
    width:80%;
}
}

// ---------------- hd ---------------
@media screen and (max-width: 1366px){
.carrito{
margin-left: 10%; 
width:80%;
}
.ui.selectable.inverted.table{
margin-left: 10%; 
width:80%;

}
.ui.black.button.fluid{
    margin-left: 10%; 
    width:80%;
}
}
//--------------- 1600x900------------

@media screen and (min-width: 1367px) and (max-width: 1600px){
.carrito{
margin-left: 10%; 
width:90%;
}
.ui.selectable.inverted.table{
margin-left: 10%; 
width:80%;

}
.ui.black.button.fluid{
    margin-left: 10%; 
    width:80%;
}
}
</style>