<template>
  <!-- Image and text -->
  <!-- Sub Header -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="sub-header" id="subheader">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-sm-8">
            <div class="left-content">
              <p>
                This is an educational <em>HTML CSS</em> template by TemplateMo
                website.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-4">
            <div class="right-icons">
              <ul>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-behance"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="/"
              ><img
                id="logomenu"
                src="../assets/logoMutual.png"
                class="d-inline-block align-top"
            /></a>
            <span v-if="token" class="navbar-brand" @click="logout">
              <i id="logocerrarsesion" class="sign-out icon"></i>
            </span>
            <span
              id="logocarrito"
              v-if="!token"
              class="navbar-brand"
              @click="openCart"
            >
              <span
                class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
              ></span>
              <div id="carritocomprasdiv">
                <img id="carritocompras" src="../assets/carrito.png" />
                <p id="cant_recibido">{{ agregado }}</p>
              </div>
              <div id="logowspdiv">
                <img id="logowsp" src="../assets/logowsp.png" />
              </div>
            </span>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul
              id="navcito"
              class="nav"
              :style="openmenu ? 'display:block' : ''"
            >
              <li id="x11" class="scroll-to-section">
                <a style="color: #000" href="#top" class="active">Home</a>
              </li>
              <li><a style="color: #000" href="meetings.html">Meetings</a></li>
              <li class="scroll-to-section">
                <a style="color: #000" href="#apply">Apply Now</a>
              </li>
              <li
                style="color: #000"
                class="has-sub"
                :class="opensubmenu ? 'is-open-sub' : ''"
              >
                <a @click="abrir_submenu" style="color: #000">Pages</a>
                <ul
                  class="sub-menu"
                  :style="opensubmenu ? 'display:block' : ''"
                >
                  <li id="x22" style="color: #000">
                    <a href="/epp"> Guantes </a>
                  </li>
                  <li id="x22">
                    <a style="color: #000" href="meeting-details.html"
                      >Meeting Details</a
                    >
                  </li>
                </ul>
              </li>
              <li class="scroll-to-section">
                <a style="color: #000" href="#courses">Courses</a>
              </li>
              <li class="scroll-to-section">
                <a style="color: #000" href="#contact">Contact Us</a>
              </li>
            </ul>
            <a
              @click="abrir_menu"
              id="menutrigger"
              class="menu-trigger"
              :class="openmenu ? 'active' : ''"
            >
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- <nav style="color:#000" class="navbar navbar-expand-lg bg-body-tertiary">
  <div style="color:#000" class="container-fluid">
    <a style="color:#000" class="navbar-brand"   href="/"><img id="logomenu" src="../assets/logoMutual.png" class="d-inline-block align-top"></a>
    <i id="flechamenu" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="caret square down icon"></i>
                     <span id="logocarrito" v-if="!token"  class="navbar-brand" @click="openCart">
                    <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"></span>
                    <div id="carritocomprasdiv"><img id="carritocompras" src="../assets/carrito.png"></div>
                    <div id="logowspdiv"><img id="logowsp" src="../assets/logowsp.png"></div>
                    </span>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item" style="text-align:center">
            <router-link id="inicio" class="nav-link" v-if="!token" style="background-color:#fff;text-decoration: none;color:#000" to="/">
                Inicio
            </router-link>
        </li>
        <li class="nav-item dropdown" style="background-color:#fff;text-align:center">
          <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-s-q-c">
                Guantes
            </router-link></li>
          <ul id="submenuepp" class="dropdown-menu">
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-s-q-c">
                Guantes
            </router-link></li>
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-qc">
                Overoles
            </router-link></li>
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-qc">
                Cascos y Protección Auditiva
            </router-link></li>
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-qc">
                Chaleco Geologo
            </router-link></li>
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-qc">
                Protección Altura
            </router-link></li>
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-qc">
                Protección Visual
            </router-link></li>
          </ul>
        </li>
        <li id="soldador" class="nav-item" style="text-align:center">
          <router-link  class="nav-link" style="background-color:#fff;text-decoration: none;color:#000" to="/promociones-miami">
                Ropa Soldador
            </router-link>
        </li>
        <li class="nav-item dropdown" style="background-color:#fff;text-align:center">
          <a style="color:#000; text-align:center" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos Desechables
          </a>
          <ul id="submenuproddesch" class="dropdown-menu">
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-s-q-c">
                Mascarrillas
            </router-link></li>
            <li> <router-link class="dropdown-item" style="text-decoration: none" to="/rolls-california-qc">
                Buzos Desechables
            </router-link></li>
          </ul>
        </li>
        <span  v-if="!token" class="navbar-brand" @click="logout">
        <i id ="logocerrarsesion" class="sign-out icon"></i>
        </span>
      </ul>
    </div>
  </div>
</nav>-->
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { useStore } from "vuex";
import { ref, onMounted, watchEffect, computed, watch } from "vue";
import { getTokenApi, deleteTokeApi } from "../api/token";
import { getCategoriesApi } from "../api/category";
import Product from "./Product.vue";
export default {
  name: "Menu",
  components: {
    Product,
  },
  setup() {
    const store = useStore();
    const openmenu = computed(() => store.state.openmenu);
    const opensubmenu = computed(() => store.state.opensubmenu);

    const abrir_menu = () => {
      store.commit("setOpenMenu", !store.state.openmenu);
    };

    const abrir_submenu = () => {
      store.commit("setOpenSubMenu", !store.state.opensubmenu);
    };
    let formatData = {};

    let categorias = ref(null);
    const token = getTokenApi();

    onMounted(async () => {
      const response = await getCategoriesApi(); // trayendo las categorias de strapi
      categorias.value = response.data; // pasandole las categorias de strapi a la variable categories
    });

    const logout = () => {
      deleteTokeApi(); // borrando token
      location.replace("/"); // redireccionar a la home
    };

    const openCart = () => {
      store.commit("setShowCart", true);
    };

    return {
      opensubmenu,
      abrir_submenu,
      abrir_menu,
      openmenu,
      formatData,
      token,
      logout,
      categorias,
      onMounted,
      openCart,
    };
  },
};
</script>

<style lang="scss" scoped>
//----------------- mobile----------------------
@media screen and (min-width: 1px) and (max-width: 768px) {
  .container{
    z-index: 150;
  }
  #menutrigger {
    margin-top: 24px;
     z-index: 150;
  }
  #subheader {
    position: absolute;
    width: 100%;
    margin-left: -15px;
     z-index: 150;
  }
  .header-area.header-sticky {
    position: fixed;
    margin-top: -12%;
    z-index: 150;
  }
  #x11 {
    margin-top: -99px;
     z-index: 150;
  }
  #x22 {
    margin-left: -13px;
     z-index: 150;
  }

  .nav_active {
    display: block;
  }
  #inicio {
    display: none;
  }
  #logocerrarsesion {
    display: block;
    font-size: 25px;
    margin-top: -32px;
    margin-left: 250px;
  }
  #logomenu {
    margin: 50px 200px 0 0;
    width: 50%;
    height: 30;
  }
  #navbarSupportedContent {
    margin-top: 0%;
    margin-left: -14%;
    font-size: 22px;
  }

  .dropdown-menu {
    font-size: 18px;
  }
  #carritocomprasdiv {
    background-color: rgb(197, 196, 196);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 154%;
    margin-left: -2%;
    z-index: 100;
    border-radius: 20px;
  }
  #carritocompras {
    width: 40px;
    margin-left: 7%;
    margin-top: 10%;
  }
  #logowspdiv {
    background-color: rgba(9, 231, 94, 0.678);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 154%;
    margin-left: 80%;
    z-index: 100;
    border-radius: 20px;
  }
  #logowsp {
    width: 40px;
    margin-left: 12%;
    margin-top: 10%;
  }
}

//----------------- hd----------------------
@media screen and (min-width: 1024px) and (max-width: 1366px) {
  .header-area.header-sticky {
    position: absolute;
    margin-top: -3%;
  }
  #navcito {
    position: absolute;
    margin-left: 320px;
    margin-top: -50px;
  }
  #x22 {
    margin-left: -30px;
  }
  #flechamenu {
    display: none;
  }
  #logocerrarsesion {
    font-size: 20px;
    margin-top: 30px;
    margin-left: 850px;
    position: absolute;
  }
  #logomenu {
    margin: 8px 25px 0 0;
    width: 20%;
    height: 20;
  }
  #navbarSupportedContent {
    margin-left: 4%;
    font-size: 22px;
  }

  .dropdown-menu {
    font-size: 18px;
  }
  #submenuproddesch {
    margin-left: 15%;
  }
  #submenuepp {
    margin-left: -40%;
  }
  #carritocomprasdiv {
    background-color: rgb(197, 196, 196);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 34.2%;
    margin-left: -8.9%;
    z-index: 20;
    border-radius: 20px;
  }
  #carritocompras {
    width: 40px;
    margin-left: 7%;
    margin-top: 10%;
  }
  #logowspdiv {
    background-color: rgba(9, 231, 94, 0.678);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 34.2%;
    margin-left: 87.2%;
    z-index: 20;
    border-radius: 20px;
  }
  #logowsp {
    width: 40px;
    margin-left: 12%;
    margin-top: 10%;
  }
}

//----------------- full hd----------------------
@media screen and (min-width: 1920px) {
  .header-area.header-sticky {
    position: absolute;
    margin-top: -2.2%;
  }
  #navcito {
    position: absolute;
    margin-left: 500px;
    margin-top: -50px;
  }
  #x22 {
    margin-left: -30px;
  }
  #flechamenu {
    display: none;
  }
  #logocerrarsesion {
    font-size: 20px;
    margin-top: 40px;
    margin-left: 1100px;
    position: absolute;
  }
  #logomenu {
    margin: 12px 25px 0 0;
    width: 20%;
    height: 20;
  }
  #navbarSupportedContent {
    margin-left: 4%;
    font-size: 22px;
  }

  .dropdown-menu {
    font-size: 18px;
  }
  #submenuproddesch {
    margin-left: 15%;
  }
  #submenuepp {
    margin-left: -40%;
  }
  #carritocomprasdiv {
    background-color: rgb(197, 196, 196);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 39.9%;
    margin-left: -16.2%;
    z-index: 20;
    border-radius: 20px;
  }
  #carritocompras {
    width: 40px;
    margin-left: 7%;
    margin-top: 10%;
  }
  #logowspdiv {
    background-color: rgba(9, 231, 94, 0.678);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 39.9%;
    margin-left: 81.2%;
    z-index: 20;
    border-radius: 20px;
  }
  #logowsp {
    width: 40px;
    margin-left: 12%;
    margin-top: 10%;
  }
}

//----------------- 1600x900----------------------
@media screen and (min-width: 1367px) and (max-width: 1600px) {
  .header-area.header-sticky {
    position: absolute;
    margin-top: -2.5%;
  }
  #navcito {
    position: absolute;
    margin-left: 400px;
    margin-top: -50px;
  }
  #x22 {
    margin-left: -30px;
  }
  #flechamenu {
    display: none;
  }
  #logocerrarsesion {
    font-size: 20px;
    margin-top: 40px;
    margin-left: 1000px;
    position: absolute;
  }
  #logomenu {
    margin: 8px 25px 0 0;
    width: 20%;
    height: 20;
  }
  #navbarSupportedContent {
    margin-left: 4%;
    font-size: 22px;
  }

  .dropdown-menu {
    font-size: 18px;
  }
  #submenuproddesch {
    margin-left: 15%;
  }
  #submenuepp {
    margin-left: -40%;
  }
  #carritocomprasdiv {
    background-color: rgb(197, 196, 196);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 36.7%;
    margin-left: -9.3%;
    z-index: 20;
    border-radius: 20px;
  }
  #carritocompras {
    width: 40px;
    margin-left: 7%;
    margin-top: 10%;
  }
  #logowspdiv {
    background-color: rgba(9, 231, 94, 0.678);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 36.7%;
    margin-left: 87.2%;
    z-index: 20;
    border-radius: 20px;
  }
  #logowsp {
    width: 40px;
    margin-left: 12%;
    margin-top: 10%;
  }
}
</style>
