<template>
  <table style="visibility: hidden" id="tablaagregado">
    <tr id="trtablaagregado">
      <td>
        <img id="imgtablaagregado" src="../assets/checkbox-unscreen.gif" />
        <p style="color: white; margin-left: 50px; margin-top: -39px">
          Producto Agregado
        </p>
        <br />
        <p style="color: white; margin-left: 60px; margin-top: -37px">
          Correctamente
        </p>
      </td>
    </tr>
  </table>
  <br /><br /><br />
  <!-- <p id="otrascatt">otras categorias</p> -->
  <button id="buttonizq" class="btn btn-success" @click="moverotrascategoriasizq()"><i class="angle double left icon"></i></button>
  <div id="otrascategorias" class="scrolling-wrapper">
  <div class="card"><h2><a href="/rolls-california-s-q-c"><p id="pcardx">epp</p></a><img @click="vernombrecate()" id="imgcardx" src="../assets/categorias2.png"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx1">epp</p></a><img  @click="vernombrecate1()" id="imgcardx1" src="../assets/categorias5.jpg"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx2">epp</p></a><img  @click="vernombrecate2()" id="imgcardx2" src="../assets/categorias4.jpg"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx3">epp</p></a><img  @click="vernombrecate3()" id="imgcardx3" src="../assets/categorias4.jpg"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx4">epp</p></a><img  @click="vernombrecate4()" id="imgcardx4" src="../assets/categorias5.jpg"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx5">epp</p></a><img  @click="vernombrecate5()" id="imgcardx5" src="../assets/categorias6.jpg"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx6">epp</p></a><img  @click="vernombrecate6()" id="imgcardx6" src="../assets/categorias7.jpg"></h2></div>
  <div class="card"><h2><a href="rolls-california-s-q-c"><p id="pcardx7">epp</p></a><img  @click="vernombrecate7()" id="imgcardx7" src="../assets/categorias8.png"></h2></div>
</div>
<button id="buttonder" class="btn btn-success" @click="moverotrascategoriasder()"><i class="angle double right icon"></i></button>
  <!-- <p id="estacat">Categoria:</p><p id="nomestacat">{{categoriaa}}</p> -->
  <div style="z-index: 20" class="ui grid">
    <div
    id="todo"
      class="twelve wide mobile six wide tablet four wide computer column"
      v-for="(data, index) in product"
      :key="data.id"
    >
    <div class="row">
        <div class="product-grid">
          <div class="product-image" v-if="data.attributes">
             <span  class="product-sale-label">Oferta!</span>
            <a class="image">
              <img
                id="pic-1"
                class="pic-1"
                :src="API_URL + data.attributes.image.data.attributes.url"
              />
            </a>
          </div>
          <div>
            <div>
            <table id="tablaproductcontent">
              <tr style="border: 1px solid #acacac">
                <td style="background-color: #ebebeb;border-bottom-left-radius:10px;border-bottom-right-radius:10px;height:100px">
                 <div>
                   <p id="nombreprodu">{{ data.attributes.name.toUpperCase() }}</p> 
                   <p id="priceprodu">${{ data.attributes.price }}</p> 
                  
                  </div>
                  <div style="margin-top:10px;margin-bottom:-20px">
                  <a
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  @click="
                    setdatamodal({
                      id: idprod[index],
                      url: API_URL + urlimgs[index],
                      precio: priceprod[index],
                      nombre: nomproducts[index],
                      descripcion: descripciontopproducts[index],
                    })
                  "
                  style="cursor: pointer"
                  >
                  <button
                  style="background-color:black;border:1px solid black"
                      class="btn btn-primary"
                    ><i class="clipboard list icon"></i>Detalles
                  </button></a>&nbsp;
                  <a style="cursor: pointer" @click="ver()">
                  <button style="background-color:black;border:1px solid black" @click="addProductCar(data.id)"
                      class="btn btn-primary" ><i class="shopping cart icon"></i>añadir</button></a> 
                  </div>
                  <br><br>
                </td>
              </tr>
            </table>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div id="foter"><Footer2 /></div>
  </div>
  <br />
  <!-- modales ------------------------------------------------------------ -->

  <!-- Modal -->
  <div>
    <div
      class="modal fade"
      id="staticBackdrop1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="contenido_modal">
          <body>
            <div class="lightbox-blanket">
              <div class="pop-up-container">
                <div class="pop-up-container-vertical">
                  <div class="pop-up-wrapper">
                    <div
                      style="cursor: pointer"
                      class="go-back"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i class="fa fa-arrow-left"></i>
                    </div>
                    <div class="product-details">
                      <div class="product-left">
                        <div class="product-info">
                          <div class="product-manufacturer"></div>
                          <div class="product-title">
                            {{ datamodal.nomprod }}
                          </div>
                          <div class="product-price">
                            <h2 id="preccio">${{ datamodal.precio }}</h2>
                          </div>
                        </div>
                        <div class="product-image">
                          <img :src="datamodal.urlimg" />
                        </div>
                      </div>
                      <div class="product-right">
                        <div class="product-description">
                          {{ datamodal.descripcion }}
                        </div>
                        <div class="product-available">
                          In stock.
                          <span class="product-extended"
                            ><a href="#">Buy Extended Warranty</a></span
                          >
                        </div>
                        <div class="product-rating">
                          <i class="fa fa-star rating" star-data="1"></i>
                          <i class="fa fa-star rating" star-data="2"></i>
                          <i class="fa fa-star rating" star-data="3"></i>
                          <i class="fa fa-star" star-data="4"></i>
                          <i class="fa fa-star" star-data="5"></i>
                          <div class="product-rating-details">
                            (3.1 -
                            <span class="rating-count">1203</span> reviews)
                          </div>
                        </div>
                        <div class="product-quantity">
                          <label
                            for="product-quantity-input"
                            class="product-quantity-label"
                            >Cantidad</label
                          >
                          <div class="product-quantity-subtract">
                            <div @click="restar()">
                              <button id="restcantidad" style="cursor: pointer">
                                <i class="minus icon"></i>
                              </button>
                            </div>
                          </div>
                          <div>
                            <div id="product-quantity-input">
                              {{ cantidad_Prod }}
                            </div>
                          </div>
                          <div class="product-quantity-add">
                            <div @click="sumar()">
                              <button id="sumcantidad" style="cursor: pointer">
                                <i class="plus icon"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-bottom">
                        <div class="product-checkout">
                          Precio Total
                          <div class="product-checkout-total">
                            <i class="fa fa-usd"></i>
                            <div class="product-checkout-total-amount">
                              {{ total_Prod }}
                            </div>
                          </div>
                        </div>
                        <div class="product-checkout-actions">
                          <button
                            style="margin-top: 10px"
                            class="btn btn-danger"
                            id="botonagregar"
                            @click="
                              agregarcantcarro(datamodal.id, cantidad_Prod)
                            "
                          >
                            <a id="agregaral">Agregar Al Carro</a>&nbsp;<img
                              id="tablaagregadox"
                              style="
                                visibility: hidden;
                                width: 25px;
                                position: fixed;
                              "
                              src="../assets/cargando.gif"
                            /></button
                          ><a style="display: none" id="agregado">Agregado</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
    </div>
  </div>
  <!-- modales ------------------------------------------------------------ -->
</template>

<script>
import { useRoute } from "vue-router";
import Footer2 from "../components/footer_mobile.vue";
import { useStore } from "vuex";
import Menu from "./Menu.vue";
import { getCartApi, addCantProductCarApi } from "../api/cart";
import VueBasicAlert from "vue-basic-alert";
import { addProductCarApi } from "../api/cart";
import { API_URL } from "../utils/constants";
import { getPoductsxNom } from "../api/product";
import { getPoductsCategory, getTodos } from "../api/product";
import { ref, onMounted, watchEffect, computed, inject } from "vue";
export default {
  name: "Product",
  components: {
    VueBasicAlert,
    Menu,
    Footer2,
  },
  props: {
    product: Object,
  },
  watch: {
    $route(to, from) {
      this.getProdutts(to.params.category);
    },
  },
  setup(props) {
    const { params } = useRoute();
    let products = ref(null);
    let prod = [];
    let idprod = [];
    let urlimgs = [];
    let priceprod = [];
    let nomproducts = [];
    let descripciontopproducts = [];
    const store = useStore();
    let formData = ref({});
    let contador = 0;
    let datamodal = ref({
      nomeprod: "",
      urlimg: "",
      descripcion: "",
      tallas: [""],
      cantidad: 0,
      talla: "",
    });
    let categoriaa= ref('');

    const cantidad_Prod = computed(() => store.state.cantidadProd);
    const total_Prod = computed(() => store.state.totalProd);

    let productsss = ref(null);

    watchEffect(async () => {
      contador;
    });
    const addProductCar = (idProduct) => {
      contador = getCartApi().length;
      addProductCarApi(idProduct);
    };
    console.log("contador", contador);

    function time() {
      setTimeout(nover, 2500);
    }

    const ver = () => {
      document.getElementById("tablaagregado").style =
        "visibility:visibility;transition: all 0.7s ease-in-out;transform: translateX(285px)";
      time();
    };

    const nover = () => {
      document.getElementById("tablaagregado").style =
        "visibility:hidden;transition: all 0.7s ease-in-out;transform: translateX(-285px)";
    };

    onMounted(async () => {
      categoriaa.value=params.category;
      console.log("cantidad", cantidad_Prod.value);
      const response = await getPoductsCategory(params.category);
      products.value = response;
      prod.push(response);
      console.log("al iniciar:", products.value);
      // -------------------- id products -------------------------
      for (let index = 0; index < products.value.data.length; index++) {
        idprod.push(products.value.data[index].id);
      }
      console.log(idprod);
      // -------------------- id products-------------------------

      // -------------------- url imagenes -------------------------

      for (let index = 0; index < products.value.data.length; index++) {
        urlimgs.push(
          products.value.data[index].attributes.image.data.attributes.url
        );
      }
      console.log(urlimgs);
      // -------------------- url imagenes -------------------------

      // -------------------- titulos imagenes-------------------------
      for (let index = 0; index < products.value.data.length; index++) {
        nomproducts.push(products.value.data[index].attributes.name);
      }
      // -------------------- titulos imagenes-------------------------

      // -------------------- price products -------------------------
      for (let index = 0; index < products.value.data.length; index++) {
        priceprod.push(products.value.data[index].attributes.price);
      }
      console.log(priceprod);
      // -------------------- price products-------------------------

      // -------------------- descripcion top products -------------------------

      for (let i = 0; i < products.value.data.length; i++) {
        descripciontopproducts.push(
          products.value.data[i].attributes.descripcion
        );
      }
      console.log("descripcion top products", descripciontopproducts);
    });

    const setdatamodal = (datos) => {
      console.log("datitos", datos);
      // nomeprod:'',
      // urlimg:'',
      // descripcion:'',
      //precio:'',
      // tallas:[''],
      // cantidad:0,
      // talla:''
      datamodal.value = {
        id: datos.id,
        nomprod: datos.nombre,
        urlimg: datos.url,
        descripcion: datos.descripcion,
        precio: datos.precio,
        tallas: [""],
        cantidad: 0,
        talla: "",
      };
      if (datos.precio) {
        store.commit("setTotalProd", datos.precio);
        store.commit("setCantidadProd", 1);
      }
    };

    const sumar = () => {
      store.commit("setCantidadProd", cantidad_Prod.value + 1);
      const totalString = document.getElementById("preccio").textContent;
      const totalsplit = totalString.split("$");
      let total = parseInt(totalsplit[1]);
      store.commit("setTotalProd", total * cantidad_Prod.value);
    };

    const restar = () => {
      const totalString = document.getElementById("preccio").textContent;
      const totalsplit = totalString.split("$");
      let total = parseInt(totalsplit[1]);
      if (cantidad_Prod.value == 1) {
        store.commit("setCantidadProd", 1);
        store.commit("setTotalProd", total);
      } else {
        store.commit("setCantidadProd", cantidad_Prod.value - 1);
        store.commit("setTotalProd", total * cantidad_Prod.value);
      }
    };

    const ver1 = () => {
      document.getElementById("agregaral").style = "display:none";
      document.getElementById("agregado").style = "display:none";
      document.getElementById("tablaagregadox").style =
        "visibility:visible;width:30px;position:absolute;margin-left:-65px";
      document.getElementById("botonagregar").style = "visibility:hidden";
    };

    const ver2 = () => {
      document.getElementById("agregaral").style = "display:none";
      document.getElementById("agregado").style =
        "display:absolute;color:#08ff00;margin-right:33px";
      document.getElementById("botonagregar").style = "display:none";
      document.getElementById("tablaagregadox").style =
        "display:none;transition: all 0.7s ease-in-out;width:50px;position:fixed";
    };
    const noverx = () => {
      document.getElementById("agregaral").style = "display:absolute";
      document.getElementById("agregado").style = "display:none";
      document.getElementById("botonagregar").style =
        "background-color:red;margin-top:10px";
      document.getElementById("tablaagregadox").style =
        "display:none;transition: all 0.7s ease-in-out;width:50px;position:fixed";
    };

    function time2() {
      setTimeout(ver2, 1000);
    }
    function time3() {
      setTimeout(noverx, 2000);
    }
    const agregarcantcarro = (id, cant) => {
      for (let index = 0; index < cant; index++) {
        addProductCarApi(id);
      }
      ver1();
      time2();
      time3();
    };

    const moverotrascategoriasder =()=>{
    document.getElementById('otrascategorias').scrollLeft += 100;
    }
    
     const moverotrascategoriasizq=()=>{
    document.getElementById('otrascategorias').scrollLeft -= 100;
    }

    function timevercate(){
      setTimeout(novernombrecate,1500);
    }
    function timevercate1(){
      setTimeout(novernombrecate1,1500);
    }
    function timevercate2(){
      setTimeout(novernombrecate2,1500);
    }
    function timevercate3(){
      setTimeout(novernombrecate3,1500);
    }
    function timevercate4(){
      setTimeout(novernombrecate4,1500);
    }
    function timevercate5(){
      setTimeout(novernombrecate5,1500);
    }
    function timevercate6(){
      setTimeout(novernombrecate6,1500);
    }
    function timevercate7(){
      setTimeout(novernombrecate7,1500);
    }
    const vernombrecate =()=>{
      document.getElementById('pcardx').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx').style="filter:blur(5px)";
      timevercate();
    }
    const vernombrecate1 =()=>{
      document.getElementById('pcardx1').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx1').style="filter:blur(5px)";
      timevercate1();
    }
    const vernombrecate2 =()=>{
      document.getElementById('pcardx2').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx2').style="filter:blur(5px)";
      timevercate2();
    }
    const vernombrecate3 =()=>{
      document.getElementById('pcardx3').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx3').style="filter:blur(5px)";
      timevercate3();
    }
    const vernombrecate4 =()=>{
      document.getElementById('pcardx4').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx4').style="filter:blur(5px)";
      timevercate4();
    }
    const vernombrecate5 =()=>{
      document.getElementById('pcardx5').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx5').style="filter:blur(5px)";
      timevercate5();
    }
    const vernombrecate6 =()=>{
      document.getElementById('pcardx6').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx6').style="filter:blur(5px)";
      timevercate6();
    }
    const vernombrecate7 =()=>{
      document.getElementById('pcardx7').style="display:absolute; margin-top:50px;margin-left:45px;visibility:visible;color:white;font-size:18px";
      document.getElementById('imgcardx7').style="filter:blur(5px)";
      timevercate7();
    }
     
    const novernombrecate =()=>{
      document.getElementById('pcardx').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
        document.getElementById('imgcardx').style="filter:blur(0px)";
    } 

      const novernombrecate1 =()=>{
       document.getElementById('pcardx1').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
       document.getElementById('imgcardx1').style="filter:blur(0px)";
    } 
       const novernombrecate2 =()=>{
       document.getElementById('pcardx2').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
        document.getElementById('imgcardx2').style="filter:blur(0px)";
    }
        const novernombrecate3 =()=>{
       document.getElementById('pcardx3').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
         document.getElementById('imgcardx3').style="filter:blur(0px)";
    }      
       const novernombrecate4 =()=>{
      document.getElementById('pcardx4').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
          document.getElementById('imgcardx4').style="filter:blur(0px)";
    }
       const novernombrecate5 =()=>{
        document.getElementById('pcardx5').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
           document.getElementById('imgcardx5').style="filter:blur(0px)";
    } 
       const novernombrecate6 =()=>{
       document.getElementById('pcardx6').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
            document.getElementById('imgcardx6').style="filter:blur(0px)";
    }  
       const novernombrecate7 =()=>{
       
              document.getElementById('pcardx7').style="display:absolute; margin-top:0px;margin-left:50px;visibility:hidden";
              document.getElementById('imgcardx7').style="filter:blur(0px)";
    }            
                 

    return {
      categoriaa,
      vernombrecate,
      vernombrecate1,
      vernombrecate2,
      vernombrecate3,
      vernombrecate4,
      vernombrecate5,
      vernombrecate6,
      vernombrecate7,
      moverotrascategoriasder,
      moverotrascategoriasizq,
      agregarcantcarro,
      sumar,
      restar,
      cantidad_Prod,
      total_Prod,
      datamodal,
      urlimgs,
      idprod,
      nomproducts,
      priceprod,
      descripciontopproducts,
      setdatamodal,
      ver,
      formData,
      API_URL,
      addProductCar,
    };
  },
};
</script>

<style lang="scss" scoped>
//------------mobile ----------------
@media screen and (min-width: 1px) and (max-width: 768px) {
  
  #todo{
    margin-right: -39px;
    margin-left: -5px;
  }
  #foter {
    margin-left: -7%;
    width: 95%;
  }
  .fondo_template {
    background: url("../assets/fondo blanco.png");
  }
  .ui.grid {
    margin-top: 30%;
    margin-left: -3.6%;
    width: 120%;
    position: absolute;
    .product {
      &:hover {
        .ui.button {
          min-height: 36px;
        }
      }
      .ui.button {
        max-height: 0;
        min-height: 0;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.6s ease;
      }
      .ui.button.primary {
        background-color: red;
      }
    }
  }

 
 #pic-1 {
    width: 260px;
    height: 210px;
  }
  .product-content {
    font-family: "Roboto", sans-serif;
    width: 350px;
     border-radius: 10px;
  }
  .row {
    z-index: 40;
    border-radius: 10px;
    margin-top: 10px;
    width: 320px;
    margin-left:20px;
    margin-bottom: -50px;
  }
 
  #tablaagregado {
    width: 200px;
    background-color: #a22308;
    border-radius: 20px;
    position: fixed;
    margin-left: -79%;
    margin-top: 139.8%;
    z-index: 150;
  }
  #trtablaagregado {
    border-radius: 20px;
    color: white;
    font-family: Century Gothic;
  }
  #imgtablaagregado {
    width: 55px;
  }
  .lightbox-blanket {
    margin-left: -10px;
  }
  #botonagregar {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .product-grid {
    border-radius: 10px;
    box-shadow: 1px 10px 30px 1px rgba(0.5, 0.5, 0.5, 0.5);
    //background-image: url("../assets/fondoo.jpg");
    background-size: cover;
    background-position-x: -20px;
    background-position-y: 1px;
    //background: linear-gradient(rgb(153, 236, 171) 50%, rgb(235, 202, 202));
    // background: -webkit-linear-gradient(left, rgb(243, 54, 54), rgb(250, 250, 250), blue);
  }

  #parrafotitulo {
    margin-top: -5px;
    font-size: 22px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }
  .image {
    background-color: #fff;
    margin-top: -15px;
    width: 115.2%;
    height: 210px;
    margin-left: -22px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
  .product-content {
    margin-left: -5px;
     border-radius: 10px;
  }
  // products card

  .product-grid .product-links {
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    bottom: -14px;
    left: 108px;
    top: 36px;
    transition: all 0.3s ease 0s;
  }

  #tablaproductcontent {
    margin-bottom: -5px;
    width: 108.4%;
    height: 165px;
    margin-left: -12.5px;
    margin-top: -15px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
  }


  .btn.btn-primary{
    margin-bottom: -40px;
    margin-top:-20px
  }
    .btn.btn-primary:hover{
    font-size:15px;
    color:rgb(255, 255, 124);
  }
  
  .btn.btn-primary:hover, .btn.btn-primary:focus{
   font-size:15px;
    color:rgb(255, 255, 124);}

    #nombreprodu{
      margin-top:10px;font-size:16px;font-weight: 500;
    }
    #priceprodu{
      margin-top:-10px;font-size:22px;font-weight: 700;
    }

    .product-grid .product-sale-label {
  color: #fff;
  background: #1abc9c;
  font-size: 13px;
  text-transform: capitalize;
  line-height: 35px;
  width: 55px;
  height: 35px;
  position: absolute;
  top: -5px;
  right: 0;
  animation: bg-animate 5s infinite linear;
}

.scrolling-wrapper{
  z-index: 0;
  position: absolute;
	width:85%;
  height: 100%;
  margin-left:1.5%;
  margin-top:-30px;
  display: block;
  overflow-x:scroll;
  overflow-y:hidden;
  white-space: nowrap;
  margin-bottom: 20px;
  
  .card {
    margin-right: 15px;
    display: inline-block;
    width: 35%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx1{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx2{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx3{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx4{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx5{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx6{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
  #imgcardx7{
    width: 100%;
    height: 120px;
    border-radius: 50%;
  }
   #imgcardx:focus{
    filter: blur(3px);
  }
  #imgcardx1:focus{
    filter: blur(3px);
  }
  #imgcardx2:focus{
    filter: blur(3px);
  }
  #imgcardx3:focus{
    filter: blur(3px);
  }
  #imgcardx4:focus{
    filter: blur(3px);
  }
  #imgcardx5:focus{
    filter: blur(3px);
  }
  #imgcardx6:focus{
    filter: blur(3px);
  }
  #imgcardx7:focus{
    filter: blur(3px);
  }
}
#buttonizq{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:-8%;
  margin-top:-2%;
  display: none;
}
#buttonder{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:84.5%;
  margin-top:-2%;
  display: none;
}
#pcardx{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx1{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx2{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx3{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx4{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx5{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx6{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}
#pcardx7{
  visibility: hidden;
  position:absolute;
  z-index:10;
 
}

#otrascatt{
  position: absolute;
  margin-top:-16%;
  margin-left:23%;
  font-size: 18px;
  font-family: 'Courier New', Courier, monospace;
   font-weight: 580;
}
#estacat{
  position: absolute;
  margin-top:28%;
  margin-left:5%;
  font-size: 19px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
   display: none;
}
#nomestacat{
  position: absolute;
  margin-top:28.7%;
  margin-left:35%;
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  margin-bottom: 20px;
  display: none;
}
}

//------------ hd ----------------
@media screen and (min-width: 1024px) and (max-width: 1366px) {
  #botonagregar {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  #foter {
    display: none;
  }
  .ui.grid {
    margin-left: -5%;
    width: 110%;
    margin-top: -10px;
    .product {
      &:hover {
        .ui.button {
          min-height: 36px;
        }
      }
      .ui.button {
        max-height: 0;
        min-height: 0;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.6s ease;
      }
      .ui.button.primary {
        background-color: red;
      }
    }
  }
  #pic-1 {
    width: 240px;
    height: 230px;
    margin-left: -10px;
  }
  .product-content {
    font-family: "Roboto", sans-serif;
    width: 230px;
  }
  .row {
    width: 270px;
  }
  .ui.huge.breadcrumb {
    margin-top: -30px;
    margin-bottom: -30px;
    margin-left: -40px;
  }

  #tablaagregado {
    width: 200px;
    background-color: #a22308;
    border-radius: 20px;
    position: fixed;
    margin-left: -30.5%;
    margin-top: 28.9%;
    z-index: 150;
  }
  #trtablaagregado {
    border-radius: 20px;
    color: white;
    font-family: Century Gothic;
  }
  #imgtablaagregado {
    width: 55px;
  }
  #contenido_modal {
      border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
    margin-left: -82.5%;
  }
  .product-grid {
    border-radius: 5px;
    box-shadow: 1px 15px 15px 4px rgba(0.5, 0.5, 0.5, 0.5);
    // background-image: url("../assets/fondoo.jpg");
    background-size: cover;
    background-position-x: -20px;
    background-position-y: 1px;
    //background: linear-gradient(rgb(153, 236, 171) 50%, rgb(235, 202, 202));
    // background: -webkit-linear-gradient(left, rgb(243, 54, 54), rgb(250, 250, 250), blue);
  }

  #parrafotitulo {
    margin-top: -5px;
    font-size: 17px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }
  .image {
    height: 249px;
    width: 247px;
    margin-left: -5px;
    margin-top: 26px;
    margin-bottom: -10px;
  }
  .product-content {
    margin-left: 10px;
  }
  // products card

  .product-grid .product-links {
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    bottom: -14px;
    left: 60px;
    top: 30px;
    transition: all 0.3s ease 0s;
  }

  #tablaproductcontent {
    width: 110.1%;
    margin-left: -13px;
    margin-top: 5px;
    margin-bottom: -1px;
  }


      #nombreprodu{
      margin-top:10px;font-size:16px;font-weight: 500;
    }
    #priceprodu{
      margin-top:-10px;font-size:22px;font-weight: 700;
    }
    .btn.btn-primary{
      margin-bottom: -5px;
    }
    .btn.btn-primary:hover{
    font-size:18px;
    color:rgb(255, 255, 124);
  }
  
  .btn.btn-primary:hover, .btn.btn-primary:focus{
   font-size:18px;
    color:rgb(255, 255, 124);}

    .product-grid .product-sale-label {
  color: #fff;
  background: #1abc9c;
  font-size: 13px;
  text-transform: capitalize;
  line-height: 35px;
  width: 55px;
  height: 35px;
  position: absolute;
  top: 0px;
  right: 0;
  animation: bg-animate 5s infinite linear;
}

.scrolling-wrapper{
	width:100%;
  margin-left:0%;
  margin-top:-20px;
  margin-bottom: 80px;
}
.scrolling-wrapper {
  overflow-x:scroll;
  white-space: nowrap;
  
  .card {
    margin-right: 30px;
    display: inline-block;
    width: 13%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx1{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx2{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx3{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx4{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx5{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx6{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx7{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
 .card:hover #imgcardx{
    filter: blur(5px);
  }
  .card:hover #imgcardx1{
    filter: blur(5px);
  }
  .card:hover #imgcardx2{
    filter: blur(5px);
  }
  .card:hover #imgcardx3{
    filter: blur(5px);
  }
  .card:hover #imgcardx4{
    filter: blur(5px);
  }
  .card:hover #imgcardx5{
    filter: blur(5px);
  }
  .card:hover #imgcardx6{
    filter: blur(5px);
  }
  .card:hover #imgcardx7{
    filter: blur(5px);
  }
}
#buttonizq{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:-4%;
  margin-top:2%;
}
#buttonder{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:82%;
  margin-top:-13%;
}
.scrolling-wrapper {
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  
  .card {
    display: inline-block;
  }
}
#pcardx{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx{
 cursor:pointer;
 visibility: visible;
}
#pcardx:hover .card{
  filter: blur(3px);
}
#pcardx1{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx1{
 cursor:pointer;
 visibility: visible;
}
#pcardx1:hover .card{
  filter: blur(3px);
}
#pcardx2{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx2{
 cursor:pointer;
 visibility: visible;
}
#pcardx2:hover .card{
  filter: blur(3px);
}
#pcardx3{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx3{
 cursor:pointer;
 visibility: visible;
}
#pcardx3:hover .card{
  filter: blur(3px);
}
#pcardx4{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx4{
 cursor:pointer;
 visibility: visible;
}
#pcardx4:hover .card{
  filter: blur(3px);
}
#pcardx5{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx5{
 cursor:pointer;
 visibility: visible;
}
#pcardx5:hover .card{
  filter: blur(3px);
}
#pcardx6{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx6{
 cursor:pointer;
 visibility: visible;
}
#pcardx6:hover .card{
  filter: blur(3px);
}
#pcardx7{
  position:absolute;z-index:10;margin-top:58px;font-size:16px;margin-left:60px;color:white;visibility: hidden;
}
.card:hover #pcardx7{
 cursor:pointer;
 visibility: visible;
}
#pcardx7:hover .card{
  filter: blur(3px);
}
}
//----------------full hd -----------
@media screen and (min-width: 1920px) {
  #botonagregar {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  #foter {
    display: none;
  }
  .ui.grid {
    margin-top: -2%;
    margin-left: -18%;
    width: 135%;
    .product {
      &:hover {
        .ui.button {
          min-height: 36px;
        }
      }
      .ui.button {
        max-height: 0;
        min-height: 0;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.6s ease;
      }
      .ui.button.primary {
        background-color: red;
      }
    }
  }
  .row {
    width: 350px;
  }
  #pic-1 {
    border-radius: 10px;
    height: 280px;
    width: 300px;
    margin-left: -17px;
  }
  .image {
    margin-top: 26px;
    height: 310px;
    width: 310px;
    margin-bottom: -15px;
    margin-left: 8px;
  }

  #product-links {
    margin-left: 24%;
  }
  .ui.huge.breadcrumb {
    margin-top: 20px;
    margin-left: -180px;
  }

  #tablaagregado {
    width: 200px;
    background-color: #a22308;
    border-radius: 20px;
    position: fixed;
    margin-left: -36%;
    margin-top: 36.7%;
    z-index: 150;
  }
  #trtablaagregado {
    border-radius: 20px;
    color: white;
    font-family: Century Gothic;
  }
  #imgtablaagregado {
    width: 55px;
  }

  #modales1 {
    width: 1020px;
    height: 620px;
    margin-left: -250px;
  }
  #tablamodal {
    width: 900px;
  }
  #td1tablamodal {
    width: 60%;
  }
  #td2tablamodal {
    width: 40%;
  }
  #titmodtd2 {
    margin-top: -200px;
  }
  #contenido_modal {
      border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
    margin-left: -144.5%;
  }
  .product-grid {
    border-radius: 20px;
    box-shadow: 1px 15px 15px 4px rgba(0.5, 0.5, 0.5, 0.5);
    //background-image: url("../assets/fondoo.jpg");
    background-size: cover;
    background-position-x: -20px;
    //background-position-y: -120px;
    //background: linear-gradient(rgb(153, 236, 171) 50%, rgb(235, 202, 202));
    // background: -webkit-linear-gradient(left, rgb(243, 54, 54), rgb(250, 250, 250), blue);
  }

  #parrafotitulo {
    margin-top: 20px;
    font-size: 22px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }

  // products card

  .product-grid .product-links {
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    bottom: -14px;
    left: 102px;
    top: 36px;
    transition: all 0.3s ease 0s;
  }

  #tablaproductcontent {
    width: 107.4%;
    margin-left: -12px;
    margin-top: 5px;
    margin-bottom: -1px;
  }

      #nombreprodu{
      margin-top:10px;font-size:16px;font-weight: 500;
    }
    #priceprodu{
      margin-top:-10px;font-size:22px;font-weight: 700;
    }
    .btn.btn-primary{
      margin-bottom: -5px;
    }
    .btn.btn-primary:hover{
    font-size:18px;
    color:rgb(255, 255, 124);
  }
  
  .btn.btn-primary:hover, .btn.btn-primary:focus{
   font-size:18px;
    color:rgb(255, 255, 124);}

    .product-grid .product-sale-label {
  color: #fff;
  background: #1abc9c;
  font-size: 13px;
  text-transform: capitalize;
  line-height: 35px;
  width: 55px;
  height: 35px;
  position: absolute;
  top: 0px;
  right: 0;
  border-top-right-radius:4px;
  animation: bg-animate 5s infinite linear;
}
.scrolling-wrapper{
	width:120%;
  margin-left:-12%;
  margin-top:-20px;
  margin-bottom: 80px;
}
.scrolling-wrapper {
  overflow-x:scroll;
  white-space: nowrap;
  
  .card {
    margin-right: 30px;
    display: inline-block;
    width: 12.4%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx1{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx2{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx3{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx4{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx5{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx6{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
   #imgcardx7{
    border: 1px solid rgb(219, 210, 210);
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  .card:hover #imgcardx{
    filter: blur(5px);
  }
  .card:hover #imgcardx1{
    filter: blur(5px);
  }
  .card:hover #imgcardx2{
    filter: blur(5px);
  }
  .card:hover #imgcardx3{
    filter: blur(5px);
  }
  .card:hover #imgcardx4{
    filter: blur(5px);
  }
  .card:hover #imgcardx5{
    filter: blur(5px);
  }
  .card:hover #imgcardx6{
    filter: blur(5px);
  }
  .card:hover #imgcardx7{
    filter: blur(5px);
  }

}
#buttonizq{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:-10%;
  margin-top:2%;
}
#buttonder{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:63.5%;
  margin-top:-9%;
}
.scrolling-wrapper {
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  
}
#pcardx{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx{
  cursor:pointer;
 visibility: visible;
}
#pcardx:hover .card{
  filter: blur(5px);
}
#pcardx1{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx1{
  cursor:pointer;
 visibility: visible;
}
#pcardx1:hover .card{
  filter: blur(5px);
}
#pcardx2{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx2{
  cursor:pointer;
 visibility: visible;
}
#pcardx2:hover .card{
  filter: blur(5px);
}
#pcardx3{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx3{
  cursor:pointer;
 visibility: visible;
}
#pcardx3:hover .card{
  filter: blur(5px);
}
#pcardx4{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx4{
  cursor:pointer;
 visibility: visible;
}
#pcardx4:hover .card{
  filter: blur(5px);
}
#pcardx5{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx5{
  cursor:pointer;
 visibility: visible;
}
#pcardx5:hover .card{
  filter: blur(5px);
}
#pcardx6{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx6{
  cursor:pointer;
 visibility: visible;
}
#pcardx6:hover .card{
  filter: blur(5px);
}
#pcardx7{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:62px;color:red;visibility: hidden;
  
}
.card:hover #pcardx7{
  cursor:pointer;
 visibility: visible;
}
#pcardx7:hover .card{
  filter: blur(5px);
}
}
//-------------- 1600x900 -------------
@media screen and (min-width: 1367px) and (max-width: 1600px) {
  #botonagregar {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  #foter {
    display: none;
  }
  .ui.grid {
    margin-left: -10%;
    width: 120%;
    margin-top: -0px;
    .product {
      &:hover {
        .ui.button {
          min-height: 36px;
        }
      }
      .ui.button {
        max-height: 0;
        min-height: 0;
        overflow: hidden;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: min-height 0.6s ease;
      }
      .ui.button.primary {
        background-color: red;
      }
    }
  }
  #pic-1 {
    width: 250px;
    height: 280px;
    margin-left: 0px;
  }
  .breadcrumb {
    margin-top: 10px;
    margin-bottom: -30px;
    margin-left: -100px;
  }

  .product-content {
    font-family: "Roboto", sans-serif;
    width: 305px;
  }
  .row {
    width: 310px;
  }

  #tablaagregado {
    width: 200px;
    background-color: #a22308;
    border-radius: 20px;
    position: fixed;
    margin-left: -33.5%;
    margin-top: 32.85%;
    z-index: 150;
  }
  #trtablaagregado {
    border-radius: 20px;
    color: white;
    font-family: Century Gothic;
  }
  #imgtablaagregado {
    width: 55px;
  }
  #contenido_modal {
      border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
    margin-left: -110.5%;
  }

  .product-grid {
    border-radius: 5px;
    box-shadow: 1px 15px 15px 4px rgba(0.5, 0.5, 0.5, 0.5);
    //background-image: url("../assets/fondoo.jpg");
    background-size: cover;
    background-position-x: -20px;
    background-position-y: 1px;
    //background: linear-gradient(rgb(153, 236, 171) 50%, rgb(235, 202, 202));
    // background: -webkit-linear-gradient(left, rgb(243, 54, 54), rgb(250, 250, 250), blue);
  }

  #parrafotitulo {
    margin-top: 0px;
    font-size: 18px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
  .image {
    height: 300px;
    width: 280px;
    margin-left: -7px;
     margin-bottom: -20px;
      margin-top: 12px;
  }
  // products card

  .product-grid .product-links {
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    bottom: -14px;
    left: 85px;
    top: 30px;
    transition: all 0.3s ease 0s;
  }


  #tablaproductcontent {
    width: 108%;
    margin-left: -11px;
    margin-top: 5px;
    margin-bottom: -2px;
  }

      #nombreprodu{
      margin-top:10px;font-size:16px;font-weight: 500;
    }
    #priceprodu{
      margin-top:-10px;font-size:22px;font-weight: 700;
    }
    .btn.btn-primary{
      margin-bottom: -5px;
    }
    .btn.btn-primary:hover{
    font-size:18px;
    color:rgb(255, 255, 124);
  }
  
  .btn.btn-primary:hover, .btn.btn-primary:focus{
   font-size:18px;
    color:rgb(255, 255, 124);}

    .product-grid .product-sale-label {
  color: #fff;
  background: #1abc9c;
  font-size: 13px;
  text-transform: capitalize;
  line-height: 35px;
  width: 55px;
  height: 35px;
  position: absolute;
  top: 0px;
  right: 0;
  animation: bg-animate 5s infinite linear;
}
.scrolling-wrapper{
	width:100%;
  margin-left:0%;
  margin-top:-20px;
  margin-bottom: 80px;
}
.scrolling-wrapper {
  overflow-x:scroll;
  white-space: nowrap;
  
  .card {
    margin-right: 30px;
    display: inline-block;
    width: 16%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx1{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx2{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx3{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx4{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx5{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx6{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  #imgcardx7{
    width: 100%;
    height: 150px;
    border-radius: 50%;
  }
  .card:hover #imgcardx{
    filter: blur(5px);
  }
  .card:hover #imgcardx1{
    filter: blur(5px);
  }
  .card:hover #imgcardx2{
    filter: blur(5px);
  }
  .card:hover #imgcardx3{
    filter: blur(5px);
  }
  .card:hover #imgcardx4{
    filter: blur(5px);
  }
  .card:hover #imgcardx5{
    filter: blur(5px);
  }
  .card:hover #imgcardx6{
    filter: blur(5px);
  }
  .card:hover #imgcardx7{
    filter: blur(5px);
  }
}
#buttonizq{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:-4%;
  margin-top:2%;
}
#buttonder{
  background-color: rgba(138,221,45,0);
  border-color: rgba(138,221,45,0) ;
  color: #000;
  position: absolute;
  margin-left:70%;
  margin-top:-11%;
}
.scrolling-wrapper {
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  
  .card {
    display: inline-block;
  }
}
#pcardx{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx{
 cursor:pointer;
 visibility: visible;
}
#pcardx:hover .card{
  filter: blur(3px);
}
#pcardx1{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx1{
 cursor:pointer;
 visibility: visible;
}
#pcardx1:hover .card{
  filter: blur(3px);
}
#pcardx2{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx2{
 cursor:pointer;
 visibility: visible;
}
#pcardx2:hover .card{
  filter: blur(3px);
}
#pcardx3{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx3{
 cursor:pointer;
 visibility: visible;
}
#pcardx3:hover .card{
  filter: blur(3px);
}
#pcardx4{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx4{
 cursor:pointer;
 visibility: visible;
}
#pcardx4:hover .card{
  filter: blur(3px);
}
#pcardx5{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx5{
 cursor:pointer;
 visibility: visible;
}
#pcardx5:hover .card{
  filter: blur(3px);
}
#pcardx6{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx6{
 cursor:pointer;
 visibility: visible;
}
#pcardx6:hover .card{
  filter: blur(3px);
}
#pcardx7{
  position:absolute;z-index:10;margin-top:58px;font-size:20px;margin-left:70px;color:white;visibility: hidden;
}
.card:hover #pcardx7{
 cursor:pointer;
 visibility: visible;
}
#pcardx7:hover .card{
  filter: blur(3px);
}
}
//
//------------------------------------------------------------

.product-grid {
  font-family: "Poppins", sans-serif;
  text-align: center;
  border: 1px solid #e7e7e7;
}
.product-grid .product-image {
  position: relative;
}
.product-grid .product-image a.image {
  display: block;
}
.product-grid .product-image img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease 0s;
}

.product-grid:hover .product-links {
  opacity: 1;
}
.product-grid .product-links li {
  margin: 0 0 5px;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.3s ease 0s;
}
.product-grid:hover .product-links li:nth-child(2) {
  transition: all 0.3s ease 0.15s;
}
.product-grid:hover .product-links li {
  opacity: 1;
  transform: translateX(0);
}
.product-grid .product-links li a {
  color: #fff;
  background-color: #00b894;
  font-size: 14px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  display: block;
  opacity: 0.9;
  transition: all 0.3s ease 0s;
  animation: bg-animate 5s infinite linear;
}
.product-grid .product-links li a:hover {
  color: #fff;
  box-shadow: 0 0 0 3px #fff inset;
  opacity: 1;
}
.product-grid .product-links li a i {
  margin: 0 5px 0 0;
}
.product-grid .product-content {
  padding: 15px 0 5px;
}
.product-grid .title {
  font-size: 17px;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 10px 14px;
  margin: 0 0 7px;
  border-bottom: 1px solid #dfe5e9;
}
.product-grid .title a {
  color: #000;
  transition: all 0.3s ease 0s;
}
.product-grid .title a:hover {
  animation: color-animate 5s infinite linear;
}
.product-grid .price {
  color: #1abc9c;
  font-size: 20px;
  font-weight: 400;
  animation: color-animate 5s infinite linear;
}
.product-grid .price span {
  color: #999;
  text-decoration: line-through;
  margin: 0 3px 0 0;
}
@keyframes color-animate {
  0% {
    color: #00b894;
  }
  20% {
    color: #00cec9;
  }
  40% {
    color: #0984e3;
  }
  60% {
    color: #6c5ce7;
  }
  80% {
    color: #e84393;
  }
  100% {
    color: #00b894;
  }
}
@keyframes bg-animate {
  0% {
    background-color: #00b894;
  }
  20% {
    background-color: #00cec9;
  }
  40% {
    background-color: #0984e3;
  }
  60% {
    background-color: #6c5ce7;
  }
  80% {
    background-color: #e84393;
  }
  100% {
    background-color: #00b894;
  }
}
@media screen and (max-width: 1200px) {
  .product-grid {
    margin: 0 0 30px;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  background-color: #e6eaf5;
  font-family: "Roboto", sans-serif;
}
.card {
  width: 350px;
  height: 100px;
  border: none;
  border-radius: 20px;
  background-color: #597afd;
}
h6 {
  font-size: 30px;
  text-align: center;
  color: #e5f3ff;
}
.text {
  color: #b2c9ff;
}

.cssload-loader:before,
.cssload-loader:after {
  opacity: 0;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  content: "\0020";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 238px;
  border: 12px solid rgb(0, 0, 0);
  box-shadow: 0 0 119px rgb(0, 0, 0), inset 0 0 119px rgb(0, 0, 0);
  -o-box-shadow: 0 0 119px rgb(0, 0, 0), inset 0 0 119px rgb(0, 0, 0);
  -ms-box-shadow: 0 0 119px rgb(0, 0, 0), inset 0 0 119px rgb(0, 0, 0);
  -webkit-box-shadow: 0 0 119px rgb(0, 0, 0), inset 0 0 119px rgb(0, 0, 0);
  -moz-box-shadow: 0 0 119px rgb(0, 0, 0), inset 0 0 119px rgb(0, 0, 0);
}

.cssload-loader:after {
  z-index: 1;
  animation: cssload-gogoloader 2.3s infinite 1.15s;
  -o-animation: cssload-gogoloader 2.3s infinite 1.15s;
  -ms-animation: cssload-gogoloader 2.3s infinite 1.15s;
  -webkit-animation: cssload-gogoloader 2.3s infinite 1.15s;
  -moz-animation: cssload-gogoloader 2.3s infinite 1.15s;
}

.cssload-loader:before {
  z-index: 2;
  animation: cssload-gogoloader 2.3s infinite;
  -o-animation: cssload-gogoloader 2.3s infinite;
  -ms-animation: cssload-gogoloader 2.3s infinite;
  -webkit-animation: cssload-gogoloader 2.3s infinite;
  -moz-animation: cssload-gogoloader 2.3s infinite;
}

@keyframes cssload-gogoloader {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@-o-keyframes cssload-gogoloader {
  0% {
    -o-transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -o-transform: scale(1);
    opacity: 0;
  }
}

@-ms-keyframes cssload-gogoloader {
  0% {
    -ms-transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -ms-transform: scale(1);
    opacity: 0;
  }
}

@-webkit-keyframes cssload-gogoloader {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@-moz-keyframes cssload-gogoloader {
  0% {
    -moz-transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: scale(1);
    opacity: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  33% {
    height: 0;
    width: 0;
    margin-top: 92px;
  }
  55% {
    transform: rotate(720deg);
    margin-top: 92px;
    height: 0;
    width: 0;
  }
  70% {
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  100% {
    transform: rotate(360deg);
    margin-top: 0;
  }
}

@-o-keyframes spin {
  0% {
    -o-transform: rotate(0deg);
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  33% {
    height: 0;
    width: 0;
    margin-top: 92px;
  }
  55% {
    -o-transform: rotate(720deg);
    margin-top: 92px;
    height: 0;
    width: 0;
  }
  70% {
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  100% {
    -o-transform: rotate(360deg);
    margin-top: 0;
  }
}

@-ms-keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  33% {
    height: 0;
    width: 0;
    margin-top: 92px;
  }
  55% {
    -ms-transform: rotate(720deg);
    margin-top: 92px;
    height: 0;
    width: 0;
  }
  70% {
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  100% {
    -ms-transform: rotate(360deg);
    margin-top: 0;
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  33% {
    height: 0;
    width: 0;
    margin-top: 92px;
  }
  55% {
    -webkit-transform: rotate(720deg);
    margin-top: 92px;
    height: 0;
    width: 0;
  }
  70% {
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  100% {
    -webkit-transform: rotate(360deg);
    margin-top: 0;
  }
}

@-moz-keyframes spin {
  0% {
    -moz-transform: rotate(0deg);
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  33% {
    height: 0;
    width: 0;
    margin-top: 92px;
  }
  55% {
    -moz-transform: rotate(720deg);
    margin-top: 92px;
    height: 0;
    width: 0;
  }
  70% {
    height: 197px;
    width: 197px;
    margin-top: 0;
  }
  100% {
    -moz-transform: rotate(360deg);
    margin-top: 0;
  }
}

@keyframes shrink {
  0%,
  100% {
    height: 53px;
    width: 53px;
  }
  33%,
  55% {
    height: 0;
    width: 0;
  }
  70% {
    height: 53px;
    width: 53px;
  }
}

@-o-keyframes shrink {
  0%,
  100% {
    height: 53px;
    width: 53px;
  }
  33%,
  55% {
    height: 0;
    width: 0;
  }
  70% {
    height: 53px;
    width: 53px;
  }
}

@-ms-keyframes shrink {
  0%,
  100% {
    height: 53px;
    width: 53px;
  }
  33%,
  55% {
    height: 0;
    width: 0;
  }
  70% {
    height: 53px;
    width: 53px;
  }
}

@-webkit-keyframes shrink {
  0%,
  100% {
    height: 53px;
    width: 53px;
  }
  33%,
  55% {
    height: 0;
    width: 0;
  }
  70% {
    height: 53px;
    width: 53px;
  }
}

@-moz-keyframes shrink {
  0%,
  100% {
    height: 53px;
    width: 53px;
  }
  33%,
  55% {
    height: 0;
    width: 0;
  }
  70% {
    height: 53px;
    width: 53px;
  }
}

//modal

body {
  margin: 0;
  padding: 0;
  background-color: #222;
  color: #666;
}

/* 5. Objects - wrappers, cards, etc. */

.random-background {
  display: none;
  opacity: 0;
  visibility: hidden;
  background-color: #36a88e;
  /*top colour*/
  background-image: -webkit-linear-gradient(top, #36a88e, #f35b47);
  background-image: -moz-linear-gradient(top, #36a88e, #f35b47);
  background-image: -o-linear-gradient(top, #36a88e, #f35b47);
  background-image: linear-gradient(to bottom, #36a88e, #f35b47);
  height: 200vh;
  width: 100vw;
}

.itemlist {
  max-width: 1024px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}

.itemlist-item-wrapper {
  width: calc(90% / 3);
  display: inline-block;
  font-size: 20px !important;
  margin: 1% 0.5% 0.5% 0.5%;
  background-color: white;
  padding: 10px;
  box-sizing: content-box;
}

@media (max-width: 800px) {
  .itemlist {
    width: auto;
    margin: auto;
    padding: 0;
  }
  .itemlist-item-wrapper {
    width: 48%;
    margin: auto;
    margin-bottom: 0.5%;
    padding: 30px;
  }
}

@media (max-width: 600px) {
  .itemlist {
    width: auto;
    margin: auto;
    padding: 0;
  }
  .itemlist-item-wrapper {
    width: auto;
    margin: auto;
    margin-bottom: 2%;
  }
}

.lightbox-blanket {
  display: block;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  width: 100vw;
  z-index: 20;
}

.pop-up-container {
  height: 100%;
  width: auto;
  display: table;
  margin: auto;
  position: static;
}

@media (max-width: 400px) {
  .pop-up-container {
    width: 96%;
    margin: 2%;
  }
}

.pop-up-container-vertical {
  height: 100%;
  vertical-align: middle;
  display: table-cell;
}

.pop-up-wrapper {
  -webkit-box-shadow: -45px 49px 83px 1px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: -45px 49px 83px 1px rgba(0, 0, 0, 0.45);
  box-shadow: -45px 49px 83px 1px rgba(0, 0, 0, 0.45);
  display: block;
  margin: 20px auto;
  width: auto;
  position: relative;
}

.pop-up-wrapper {
  background-color: white;
  display: block;
  padding: 50px;
}

.go-back {
  position: absolute;
  left: 10px;
  top: 10px;
  color: #222;
  width: 0;
  height: 0;
  border-top: 60px solid #cae00d;
  border-right: 60px solid transparent;
}

.go-back i {
  font-size: 20px;
  position: relative;
  top: -52px;
  left: 10px;
}

.product-details {
  max-width: 600px;
}

.product-left {
  display: inline-block;
  padding-right: 4%;
  vertical-align: top;
  width: 46%;
}

.product-right {
  display: inline-block;
  vertical-align: top;
  width: 49%;
}

.product-bottom {
  border-top: 1px solid #ccc;
  position: relative;
  padding-top: 20px;
}

@media (max-width: 650px) {
  .product-left,
  .product-right,
  .product-bottom {
    width: 100%;
  }
  .product-left {
    padding-right: 0;
  }
  .product-info {
    display: inline-block;
    width: 60%;
    vertical-align: top;
  }
  .product-image {
    display: inline-block;
    width: 39%;
    vertical-align: top;
  }
}

@media (max-width: 512px) {
  .product-info,
  .product-image {
    width: 100%;
  }
}

.product-manufacturer {
  color: #222;
  font-size: 70px;
  font-weight: bold;
  line-height: 1;
  margin: -2px;
}

.product-title {
  line-height: 25px;
  font-size: 20px;
  color: #888;
  text-align: center;
}

.product-price {
  text-align: center;
  margin-bottom: -20px;
  margin-top: 10px;
  color: #222;
  font-size: 24px;
  letter-spacing: 1px;
}

.product-price-cents {
  text-decoration: underline;
  vertical-align: top;
  padding-left: 3px;
}

.product-image {
  padding: 10px 10px 0 10px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  height: 295px;
}

.product-description {
  line-height: 1.5;
}

.product-available {
  margin-top: 25px;
}

.product-rating {
  margin-top: 25px;
}

i.fa-star {
  color: #aaa;
  display: inline-block;
}
i.fa-star.rating {
  color: rgb(232, 217, 31);
}
.product-rating-details {
  display: inline-block;
  padding-left: 10px;
}
@media (max-width: 515px) {
  .product-rating-details {
    padding-left: 0;
  }
}
.product-extended {
  color: #235ba8;
  padding-left: 5px;
}
.product-quantity {
  margin-top: 25px;
  margin-bottom: 25px;
}

.product-checkout {
  position: absolute;
  left: 0;
  font-size: 12px;
  text-transform: uppercase;
}
.product-checkout-actions {
  position: absolute;
  right: 0;
}
.product-checkout-total,
.product-checkout-total-amount {
  font-size: 20px;
  color: #c17a41;
}
.product-checkout-total * {
  display: inline-block;
}
.product-checkout-actions {
}

/* 6. Components - buttons, menus, images, etc. */
.product-quantity-label {
  text-transform: uppercase;
}
.product-quantity * {
  display: inline-block;
}

#product-quantity-input {
  background-color: #eee;
  border: none;
  width: 2.5em;
  text-align: center;
}
.product-quantity-subtract,
.product-quantity-add {
  margin-left: 20px;
  padding-left: 5px;
  padding-right: 5px;
}
.product-quantity-subtract {
  margin-right: 20px;
}

.toast {
  position: fixed;
  top: -50px;
  left: calc(50vw - 50px);
  z-index: 25;
  padding: 5px 10px;
  border-radius: 15px;
}

.toast-success {
  background-color: green;
  color: white;
  font-size: 9pt;
}

.toast-transition {
  top: calc(50px);
  transition: top 1s;
}

/* 7. Trumps - text helpers, often !important */

.hidden {
  display: none;
}

#wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 30em;
}

#container {
  display: flex;
  flex-direction: column;
  float: left;
  justify-content: center;
  min-height: 0vh;
  width: 100%;
}

h1 {
  animation: text-shadow 1.5s ease-in-out infinite;
  font-size: 2em;
  font-weight: 100;
  line-height: 1;
}

h1:hover {
  animation-play-state: paused;
}

a {
  color: #024794;
}

a:hover {
  text-decoration: none;
}

@keyframes text-shadow {
  0% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }

  20% {
    transform: translateY(-0.2em);
    text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
      0 -0.25em 0 #fefc4b;
  }

  40% {
    transform: translateY(0.1em);
    text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
      0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
  }

  60% {
    transform: translateY(0em);
    text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
      0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
  }

  80% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 22px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}


//// otras categorias





.scrolling-wrapper-flexbox {
  display:none;
  flex-wrap: none;
  overflow-x: hidden;
  overflow-y: hidden;

  .card {
    flex: 0 0 auto;
  }
}



.scrolling-wrapper {
  -webkit-overflow-scrolling: touch;
}


.scrolling-wrapper {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
