<template>
    <div class="cart-dimmer" :class="{open: showCart}" @click="closeCart"/>
  <div class="cart" :class="{open: showCart}">
    <div>
        <CartHeader :closeCart="closeCart"/>
        <CartBody :products="products" :reloadCartFn="reloadCartFn"/>
    </div>
    <CartFooter  :products="products" :closeCart="closeCart" v-if="products"/>
  </div>
</template>

<script>
import CartFooter from "./CartFooter.vue";
import CartBody from "./CartBody.vue";
import {getProductsCartApi, productsCountfrom} from "../../api/cart";
import CartHeader from "./CartHeader";
import {ref, computed, watchEffect,onMounted } from "vue";
import {useStore } from "vuex";
export default {
    name: "Cart",
    components:{
        CartHeader,
        CartBody,
        CartFooter,
    },
    setup(){
        const store = useStore();
        const showCart = computed (() => store.state.showCart);
        let reloadCart = ref(false);

        let products= ref(null);

        const getProductsCart = async () =>{
        const response = await getProductsCartApi();
        products.value = response;
        console.log("datos carritoxxxx",products.value);
        }
        watchEffect(()=>{
            showCart.value;
            reloadCart.value;
            getProductsCart();
        })
        
        const closeCart = () =>{
            store.commit("setShowCart", false);
        }

        const reloadCartFn = () =>{
            reloadCart.value = !reloadCart.value;
        }

        return{
            showCart,
            closeCart,
            products,
            reloadCartFn,
        }
}
}
</script>

<style lang="scss" scoped>
.cart-dimmer{
    opacity: 0;
    transition: opacity 0.5s ease;

    &.open{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7;
    }
}
.cart{
    z-index: 999;
    position: fixed;
    right: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background-color: #fff;
    box-shadow: 0px 0px 26px 5px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.9s ease;
    transform: translateX(150%);
    
    &.open{
        transform: translateX(0);
    }
}
</style>