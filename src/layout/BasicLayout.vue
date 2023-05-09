<template>
  <div class="basic-layout">
    <Menu/>
    <div class="ui container">
        <slot/> <!-- slot se refiere a todos los componentes que definamos en las otras paginas se mostraran aqui -->
    </div>
  </div>
  <Cart/>
</template>

<script>
import MenuE from "../components/Menu_entregados.vue";
import MenuP from "../components/Menu_progreso.vue";
import MenuR  from "../components/Menu_right.vue"
import MenuL  from "../components/Menu_left.vue"
import Menu  from "../components/Menu.vue"
import Cart from "../components/Cart/Cart.vue";
export default {
    name: "BasicLayout",
    components:{
        Menu,
        Cart,
    }
}
</script>

<style>

</style>