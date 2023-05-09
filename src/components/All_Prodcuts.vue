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
  <div class="ui grid">
    <div
      class="twelve wide mobile six wide tablet four wide computer column"
      v-for="(data, index) in products"
      :key="data.id"
    >
      <div class="row">
        <div class="product-grid">
          <div class="product-image" v-if="data.attributes">
            <a href="#" class="image">
              <img
                id="pic-1"
                class="pic-1"
                :src="API_URL + data.attributes.image.data.attributes.url"
              />
            </a>
            <span class="product-sale-label">Sale!</span>
            <ul class="product-links">
              <li>
                <a style="cursor: pointer" @click="ver()"
                  ><a @click="addProductCar(data.id)"
                    ><i class="shopping bag icon"></i>Añadir</a
                  ></a
                >
              </li>
              <li>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  @click="
                    setdatamodal({
                      url: API_URL + urlimgs[index],
                      precio: priceprod[index],
                      nombre: nomproducts[index],
                      descripcion: descripciontopproducts[index],
                    })
                  "
                  style="cursor: pointer"
                  ><i class="fa fa-search"></i>Ver Detalles</a
                >
              </li>
            </ul>
          </div>
          <div class="product-content">
            <h3 class="title">
              <a style="font-family: Century Gothic;font-size:20px">{{ data.attributes.name }}</a>
            </h3>
            <div class="price">${{ data.attributes.price }}</div>
          </div>
        </div>
      </div>
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
      <div class="modal-dialog modal-dialog-centered" >
        <div class="modal-content" id="contenido_modal">
          <body>
            <div class="lightbox-blanket">
            <div class="pop-up-container">
              <div class="pop-up-container-vertical">
                <div class="pop-up-wrapper">
                  <div style="cursor:pointer" class="go-back" data-bs-dismiss="modal"
                  aria-label="Close"><i class="fa fa-arrow-left"></i>
                  </div>
                  <div class="product-details">
                    <div class="product-left">
                      <div class="product-info">
                        <div class="product-manufacturer">
                        </div>
                        <div class="product-title">
                          {{ datamodal.nomprod }}
                        </div>
                        <div class="product-price">
                          <h2 id="preccio"> ${{ datamodal.precio }}</h2>
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
                        In stock. <span class="product-extended"><a href="#">Buy Extended Warranty</a></span>
                      </div>
                      <div class="product-rating">
                        <i class="fa fa-star rating" star-data="1"></i>
                        <i class="fa fa-star rating" star-data="2"></i>
                        <i class="fa fa-star rating" star-data="3"></i>
                        <i class="fa fa-star" star-data="4"></i>
                        <i class="fa fa-star" star-data="5"></i>
                        <div class="product-rating-details">(3.1 - <span class="rating-count">1203</span> reviews)
                        </div>

                      </div>
                      <div class="product-quantity">
                        <label for="product-quantity-input" class="product-quantity-label">Cantidad</label>
                        <div class="product-quantity-subtract">
                          <div @click="restar()"><button id="restcantidad" style="cursor:pointer"><i class="minus icon"></i></button></div>
                        </div>
                        <div>
                          <div id="product-quantity-input" >{{cantidad_Prod}}</div>
                        </div>
                        <div class="product-quantity-add">
                          <div @click="sumar()"><button id="sumcantidad" style="cursor:pointer"><i class="plus icon"></i></button></div>
                        </div>
                      </div>
                    </div>
                    <div class="product-bottom">
                      <div class="product-checkout">
                        Precio Total
                        <div class="product-checkout-total">
                          <i class="fa fa-usd"></i>
                          <div class="product-checkout-total-amount">
                           {{total_Prod}}
                          </div>
                        </div>
                      </div>
                      <div class="product-checkout-actions">
                        <a class="add-to-cart" href="#" onclick="AddToCart(event);">Add to Cart</a>
                        
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
import Footer2 from "./footer_mobile.vue";
import { useStore } from "vuex";
import Menu from "./Menu.vue";
import { getCartApi } from "../api/cart";
import VueBasicAlert from "vue-basic-alert";
import { addProductCarApi } from "../api/cart";
import { API_URL } from "../utils/constants";
import { getTodos } from "../api/product";
import { ref, onMounted, watchEffect, computed } from "vue";
export default {
  name: "Product",
  components: {
    VueBasicAlert,
    Menu,
    Footer2,
  },
  setup() {
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


    const cantidad_Prod = computed (() => store.state.cantidadProd);
    const total_Prod = computed (() => store.state.totalProd);


    watchEffect(async () => {
      contador;
    });
    const addProductCar = (idProduct) => {
      contador = getCartApi().length;
      addProductCarApi(idProduct);
    };
    console.log("contador",contador);

    function time2() {
      setTimeout(nover, 2500);
    }

    const ver = () => {
      document.getElementById("tablaagregado").style =
        "visibility:visibility;transition: all 0.7s ease-in-out;transform: translateX(285px)";
      time2();
    };
 
    const nover = () => {
      document.getElementById("tablaagregado").style =
        "visibility:hidden;transition: all 0.7s ease-in-out;transform: translateX(-285px)";
    };

  

    onMounted(async () => {
      console.log("cantidad",cantidad_Prod.value);
      const response = await getTodos();
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
        nomprod: datos.nombre,
        urlimg: datos.url,
        descripcion: datos.descripcion,
        precio: datos.precio,
        tallas: [""],
        cantidad: 0,
        talla: "",
      };
    };


    const sumar=()=>{
      store.commit("setCantidadProd",cantidad_Prod.value+1);
      const totalString= document.getElementById("preccio").textContent;
      const totalsplit= totalString.split("$");
      let total= parseInt(totalsplit[1]);
      store.commit("setTotalProd",total*cantidad_Prod.value);
    }

    const restar=()=>{
      if(cantidad_Prod.value==0){
        store.commit("setCantidadProd",0);
        store.commit("setTotalProd",0);
      }else{store.commit("setCantidadProd",cantidad_Prod.value-1);
      const totalString= document.getElementById("preccio").textContent;
      const totalsplit= totalString.split("$");
      let total= parseInt(totalsplit[1]);
      store.commit("setTotalProd",total*cantidad_Prod.value);
      }
      
    }

    return {
      products,
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
  .fondo_template {
    background: url("../assets/fondo blanco.png");
  }
  #foter {
    opacity: 1;
    width: 90%;
    margin-left: -7%;
  }
  .ui.grid {
    margin-top: -5%;
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

  .product-grid {
    width: 380px;
  }
  #pic-1 {
    width: 350px;
    height: 300px;
  }
  .product-content {
    font-family: "Roboto", sans-serif;
    width: 350px;
  }
  .row {
    width: 365px;
  }
  .product-content {
    font-family: "Roboto", sans-serif;
    width: 350px;
  }
  #tablaagregado {
    width: 200px;
    background-color: #a22308;
    border-radius: 20px;
    position: fixed;
    margin-left: -79%;
    margin-top: 139.5%;
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
  .lightbox-blanket{
    margin-left:-10px;
  }
}
//------------ hd ----------------
@media screen and (min-width: 1024px) and (max-width: 1366px) {
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
    width: 247px;
    height: 250px;
    margin-left:-10px;
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
  #contenido_modal{
    margin-left:-82.5%;
  }
}
//----------------full hd -----------
@media screen and (min-width: 1920px) {
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
    width: 360px;
  }
  #pic-1 {
    height: 310px;
    width: 350px;
    margin-left:-17px;
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
  #contenido_modal{
    margin-left:-144.5%;
  }
}
//-------------- 1600x900 -------------
@media screen and (min-width: 1367px) and (max-width: 1600px) {
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
    width: 310px;
    height: 320px;
    margin-left:-15px;
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
    width: 320px;
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
  #contenido_modal{
    margin-left:-110.5%;
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
.product-grid .product-image:hover img {
  transform: translate(10px, -10px);
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
  top: 0;
  right: 0;
  animation: bg-animate 5s infinite linear;
}
.product-grid .product-links {
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  bottom: 15px;
  left: 20px;
  transition: all 0.3s ease 0s;
}
.product-grid:hover .product-links {
  opacity: 1;
}
.product-grid .product-links li {
  margin: 0 0 5px;
  opacity: 0;
  transform: translateX(-100%);
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

.itemlist{ 
  max-width:1024px;  
  margin:auto; 
  padding:20px;
  display:flex;
  flex-wrap: wrap;
}

.itemlist-item-wrapper{width: calc(90% / 3); display:inline-block; font-size: 20px !important; margin:1% 0.5% 0.5% 0.5%; background-color:white; padding:10px;
box-sizing: content-box;}

@media(max-width: 800px){
  .itemlist{ width:auto; margin:auto; padding:0;}
  .itemlist-item-wrapper{width:48%; margin:auto; margin-bottom:0.5%; padding:30px;}
}

@media(max-width: 600px){
  .itemlist{ width:auto; margin:auto; padding:0;}
  .itemlist-item-wrapper{width:auto; margin:auto; margin-bottom:2%;}
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

@media (max-width:400px) {
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
  color:#222;
  width: 0;
  height: 0;
  border-top: 60px solid #CAE00D;
  border-right: 60px solid transparent;
}

.go-back i {
  font-size:20px;
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

.product-bottom{border-top:1px solid #ccc; position:relative; padding-top:20px;}

@media (max-width:650px){
  .product-left, .product-right, .product-bottom{
    width:100%;}
  .product-left{padding-right:0;}
  .product-info{display:inline-block; width:60%; vertical-align:top;}
   .product-image{display:inline-block; width:39%; vertical-align:top;}
}

@media (max-width:512px){
  .product-info, .product-image{width:100%;}
}

.product-manufacturer {
  color:#222;
  font-size: 70px;
  font-weight: bold;
  line-height: 1;
  margin: -2px;
}

.product-title {
  line-height : 25px;
  font-size: 20px;
  color: #888;
  text-align: center;
}

.product-price {
  text-align: center;
  margin-bottom: -20px;
  margin-top:10px;
  color:#222;
  font-size: 24px;
  letter-spacing: 1px;
}

.product-price-cents {
  text-decoration: underline;
  vertical-align: top;
  padding-left:3px;
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

.product-description {line-height:1.5;}

.product-available {
  margin-top: 25px;
}

.product-rating{
  margin-top:25px;
}

i.fa-star{color:#aaa; display:inline-block;}
i.fa-star.rating{color: rgb(232, 217, 31);}
.product-rating-details{display:inline-block; padding-left: 10px;}
@media(max-width:515px){
  .product-rating-details{padding-left:0;}
}
.product-extended {
  color: #235ba8;
  padding-left: 5px;
}
.product-quantity{margin-top:25px;
  margin-bottom:25px;}

.product-checkout{position:absolute; left:0;font-size: 12px; text-transform: uppercase;}
.product-checkout-actions{position:absolute; right:0;}
.product-checkout-total, .product-checkout-total-amount{font-size: 20px; color: #C17A41;}
.product-checkout-total * {display:inline-block;}
.product-checkout-actions{}

/* 6. Components - buttons, menus, images, etc. */
.product-quantity-label{text-transform:uppercase;}
.product-quantity *{display:inline-block;}

#product-quantity-input{background-color: #eee;border: none; width:2.5em; text-align: center;}
.product-quantity-subtract, .product-quantity-add{margin-left: 20px; padding-left:5px; padding-right: 5px;}
.product-quantity-subtract{margin-right:20px;}


.toast{
  position: fixed;
  top: -50px;
  left: calc(50vw - 50px);
  z-index:25;
  padding:5px 10px;
  border-radius: 15px;
}

.toast-success{
  background-color: green;
  color:white;
  font-size: 9pt;
}

.toast-transition{
  top: calc(50px);
  transition:top 1s;
}


/* 7. Trumps - text helpers, often !important */

.hidden {
  display: none;
}
</style>
