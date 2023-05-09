<template>
        <table id="menu_leftt" class="ui selectable inverted table">
            <thead>
            <tr><th style="font-size: 16px">Todos Los Rolls :</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <th style="font-size: 14px"><p style="text-align:center; margin-bottom: -2px">Rolls California (10 Piezas) :</p>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link style="text-decoration: none" class="item rolls" to="/rolls-california-s-q-c">
                                Envoltura Sésamo Ciboulette
                        </router-link><br></button>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-california-qc">
                                Envoltura Queso Crema
                        </router-link></button>
                        </th>
                    </td>
                </tr>
                <tr>
                    <td>
                        <th style="font-size: 14px"><p style="text-align:center; margin-bottom: -2px">Rolls Palta (10 Piezas) :</p>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-palta-p">
                                Envoltura Palta
                        </router-link><br></button>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-palta-p-qc">
                                Envoltura Palta Queso Crema
                        </router-link></button>
                        </th>
                    </td>
                </tr>
                 <tr>
                    <td>
                        <th style="font-size: 14px"><p style="text-align:center; margin-bottom: -2px">Rolls Salmón (10 Piezas) :</p>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-salmon-s">
                                Envoltura Salmón
                        </router-link><br></button>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-salmon-s-p">
                                Envoltura Salmón Palta
                        </router-link></button>
                        </th>
                    </td>
                </tr>
                 <tr>
                    <td>
                        <th style="font-size: 14px"><p style="text-align:center; margin-bottom: -2px">Rolls Nory (10 Piezas) :</p>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-nory-n">
                                Envoltura Nory
                        </router-link><br></button>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-nory-nf">
                                Envoltura Nory Frito
                        </router-link></button>
                        </th>
                    </td>
                </tr>
                 <tr>
                    <td>
                        <th style="font-size: 14px"><p style="text-align:center; margin-bottom: -2px">Rolls Vegetarianos (10 Piezas) :</p>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-vegetarianos-s-c-n">
                                Envoltura Sesamo Ciboulette Nory
                        </router-link><br></button>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-vegetarianos-p-f">
                                Envoltura Palta Frito
                        </router-link></button>
                        </th>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button style="color: #ff0101;margin-top:5px; border:1px solid red;width:100%" class="ui black button"><router-link  class="item rolls" to="/rolls-tempura-fritos">
                                Rolls Tempura (Fritos)
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
    name: "Menu_left",
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
    position:  absolute;
    width: 15%;
    max-width: 1366px;
    margin-left: 1%;
    text-align: center;
    .title{
         text-align: center;
    }
    .rolls{
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    .item.rolls{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    
}
}


@media screen and (min-width: 1024px) and (max-width: 1366px){
.ui.selectable.inverted.table{
    position:  absolute;
    width: 15%;
    max-width: 1366px;
    margin-left: 1%;
    text-align: center;
    .title{
         text-align: center;
    }
    .rolls{
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    .item.rolls{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    
}
}
//--------------- adaptar a pantallas full hd -----------------------
@media screen and (min-width: 1920px){
.ui.selectable.inverted.table{
    position:  absolute;
    width: 15%;
    margin-left: 3%;
    text-align: center;
    .title{
         text-align: center;
    }
    .rolls{
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    .item.rolls{
        text-decoration: none;
        color: #fff;
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    
}
}


//--------------- adaptar a pantallas full hd -----------------------
@media screen and (min-width: 1367px) and (max-width: 1600px){
.ui.selectable.inverted.table{
    position:  absolute;
    width: 15%;
    margin-left: 3%;
    max-width: 1600px;
    text-align: center;
    .title{
         text-align: center;
    }
    .rolls{
        &:hover{
        cursor: pointer;
        color: rgb(196, 5, 5);
    }
    }
    .item.rolls{
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