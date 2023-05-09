<template>
  <div class="cart-footer">
    <h2>Total: ${{total}}</h2>
    <router-link to="/cart">
        <button class="ui button primary fluid btn-buy" @click="closeCart">
            Comprar
        </button>
    </router-link>
  </div>
</template>

<script>
import {ref, watchEffect} from "vue";
export default {
    name:"CarFooter",
    props:{
        products: Array,
        closeCart: Function,
    },
    setup(props){
        let total = ref(0);

        watchEffect(()=>{
            props.products;

            let totalTemp = 0;
            props.products.forEach((product)=>{
                totalTemp += product.data.attributes.price * product.quantity;
            })
            total.value = totalTemp.toLocaleString("es");
        })

        return{
            total,
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-footer{
    padding: 10px;

    h2{
        text-align: center;
        color: green;
    }
}
</style>