<template>
        <table class="ui selectable inverted table">
            <thead>
            <tr><th style="font-size: 16px">Agregados / Extras :</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                   <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"> <router-link  class="item extras" to="/bebestibles">
                            Bebestibles
                    </router-link></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item extras" to="/agregar-ingredientes">
                            Agregar Ingredientes
                    </router-link></button>
                </td>
            </tr>
            <tr>
                <td>
                   <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"> <router-link  class="item extras" to="/papas-fritas">
                            Acompañamiento (Papas Fritas)
                    </router-link></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item extras" to="/extras">
                            Extras<br>
                            (hand Rolls-Rollitos-Ceviche)
                    </router-link></button>
                </td>
            </tr>
            <tr>
                <td>
                    <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link class="item extras" to="/salsas">
                            Agregar Salsas
                    </router-link></button>
                </td>
            </tr>
            </tbody>
        </table>
</template>

<script>
import {useStore} from "vuex"
import {ref, onMounted , watchEffect} from "vue";
import {getTokenApi, deleteTokeApi} from "../api/token";
import {getCategoriesApi} from "../api/category";
export default {
    name: "Menu_right",
    setup(){
        
        const store = useStore();
        let categorias= ref(null);
        const token = getTokenApi();
        
        onMounted (async () =>{
            const response = await getCategoriesApi(); // trayendo las categorias de strapi 
            categorias.value = response.data;          // pasandole las categorias de strapi a la variable categories 
        })
        
        const logout = () =>{
            deleteTokeApi();   // borrando token 
            location.replace("/");  // redireccionar a la home
        }

        const openCart = () =>{
            store.commit("setShowCart",true);
        }

        return{
            token,
            logout,
            categorias,
            onMounted,
            openCart,
        }
    }
    
}
</script>





<style lang="scss" scoped>

//-----------------mobile ---------------------------
@media screen and (min-width: 1px) and (max-width: 768px){
.ui.selectable.inverted.table{
    display:none;
    position: absolute;
    width: 15%;
    max-width: 1366px;
    margin-left: 84%;
    text-align: center;
    .title{
         text-align: center;
    }
    .item.extras{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
}
}
//-----------------pantallas hd ---------------------------
@media screen and (max-width: 1366px){
.ui.selectable.inverted.table{
    position: absolute;
    width: 15%;
    max-width: 1366px;
    margin-left: 84%;
    text-align: center;
    .title{
         text-align: center;
    }
    .item.extras{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
}
}
//-------------- pantallas full hd ---------------------------------
@media screen and (min-width: 1920px){
.ui.selectable.inverted.table{
    position: absolute;
    width: 15%;
    margin-left: 82%;
    text-align: center;
    .title{
         text-align: center;
    }
    .item.extras{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
}
}


//-------------- pantallas 1600x900 ---------------------------------
@media screen and (min-width: 1367px) and (max-width: 1600px){
.ui.selectable.inverted.table{
    position: absolute;
    width: 15%;
    max-width: 1600px;
    margin-left: 82%;
    text-align: center;
    .title{
         text-align: center;
    }
    .item.extras{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
}
}

</style>