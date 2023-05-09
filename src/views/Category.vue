<template>
  <BasicLayout>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <div id="holita"
      v-for="product in products"
      :key="product.id">
      <Product :product="product"/>
      </div>
      <br><br><br><br><br><br>
  </BasicLayout>
  <Footer/> 
</template>

<script>
import Footer from "../components/footer.vue";
import Menu from "../components/Menu.vue";
import Product from "../components/Product.vue";
import {useRoute} from "vue-router";
import {ref, onMounted} from "vue";
import BasicLayout from  "../layout/BasicLayout.vue";
import {getPoductsCategory} from "../api/product";
export default {
    name: "Category",

    components:{
        BasicLayout,
        Product,
        Menu,
        Footer,
    },
    watch:{
        $route(to, from){
          this.getProdutts(to.params.category);
        }
    },
    setup(){

      const {params} = useRoute();
      let products = ref(null);
      console.log(params)

      onMounted(()=>{
        getProdutts(params.category)
      })

    const getProdutts = async (category) =>{
       const response = await getPoductsCategory(category);
       products.value = response;
       console.log("datos de esta categoria",response);
    }

    return{
      getProdutts,
      products,
    }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1px) and (max-width: 768px){
#holita{
  margin-top: -50%;
}
.navbar.navbar-expand-lg.bg-body-tertiary{
    height: 70px;
    position: fixed;
    z-index: 10;
    background-color: #fff;
    .nav-item{
        margin-left:9%
    }

    .nav-item.dropdown{
        margin-left:9%
    }
    
}
}

@media screen and (min-width: 769px) and (max-width:1366px){
  #holita{
  margin-top: -12%;
}
.navbar.navbar-expand-lg.bg-body-tertiary{
    height: 70px;
    position: fixed;
    z-index: 10;
    margin-top: -2%;
    background-color: #fff;
    .nav-item{
        margin-left:9%
    }

    .nav-item.dropdown{
        margin-left:9%
    }
    
}
}

@media screen and (min-width: 1367px) and (max-width:1600px){
  #holita{
  margin-top: -12%;
}
.navbar.navbar-expand-lg.bg-body-tertiary{
    height: 70px;
    position: fixed;
    z-index: 10;
    margin-top: -2%;
    background-color: #fff;
    .nav-item{
        margin-left:9%
    }

    .nav-item.dropdown{
        margin-left:9%
    }
    
}
}

@media screen and (min-width: 1920px){
#holita{
  margin-top: -12%;
}
.navbar.navbar-expand-lg.bg-body-tertiary{
    height: 70px;
    position: fixed;
    z-index: 10;
    background-color: #fff;
    .nav-item{
        margin-left:9%
    }

    .nav-item.dropdown{
        margin-left:9%
    }
    
}
}


</style>