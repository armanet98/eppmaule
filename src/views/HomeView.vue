<template>
  <BasicLayout>
    <!--<button style="background-color: #000; border:1px solid red;margin-top:-5%;width:114%;margin-left:-7%" id="btn_buscar" class="ui button primary fluid" data-bs-toggle="modal" data-bs-target="#exampleModal2" >hola</button><br>-->
    <div id="borderprimercarrusel">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img id="fotos_carrusel" :src="API_URL + urlimgbanner1[0]" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img id="fotos_carrusel" :src="API_URL + urlimgbanner2[0]" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img id="fotos_carrusel" :src="API_URL + urlimgbanner3[0]" />
        </div>
      </div>
      <button
        id="btncarruselprev"
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          id="btncarruselnext"
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    <br />

    <!-- normal -------------------------------------------------------------------------------------------------------------------------- -->
    <div>
      <p id="imgtopprodu">
        <i class="star outline icon"></i><i class="star outline icon"></i
        ><i class="star outline icon"></i><i class="star outline icon"></i
        ><i class="star outline icon"></i> &nbsp; Productos Recomendados &nbsp;
        <i class="star outline icon"></i><i class="star outline icon"></i
        ><i class="star outline icon"></i><i class="star outline icon"></i
        ><i class="star outline icon"></i>
      </p>
    </div>
    <!-- <Topproducts/> -->
    <div
      id="carouselExampleControls2"
      class="carousel slide"
      data-ride="carousel"
    >
    <div id="carousel-inner" class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3500">
          <div class="cards-wrapper">
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[0]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                  class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[0] }} (+iva)
                </h5>
                <p class="card-text" id="wrapper"><a>{{ nomproducts[0] }}</a></p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id: idprod[0],url:API_URL + urlimgs[0],precio: priceprod[0],nombre:nomproducts[0],descripcion:descripciontopproducts[0]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[1]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[1] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[1] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[1], url:API_URL + urlimgs[1],precio: priceprod[1],nombre:nomproducts[1],descripcion:descripciontopproducts[1]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[2]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[2] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[2] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[2], url:API_URL + urlimgs[2],precio: priceprod[2],nombre:nomproducts[2],descripcion:descripciontopproducts[2]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[3]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[3] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[3] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[3], url:API_URL + urlimgs[3],precio: priceprod[3],nombre:nomproducts[3],descripcion:descripciontopproducts[3]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3500">
          <div class="cards-wrapper">
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[4]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[4] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[4] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[4], url:API_URL + urlimgs[4],precio: priceprod[4],nombre:nomproducts[4],descripcion:descripciontopproducts[4]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[5]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[5] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[5] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[5], url:API_URL + urlimgs[5],precio: priceprod[5],nombre:nomproducts[5],descripcion:descripciontopproducts[5]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[6]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[6] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[6] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[6], url:API_URL + urlimgs[6],precio: priceprod[6],nombre:nomproducts[6],descripcion:descripciontopproducts[6]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[7]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[7] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[7] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[7], url:API_URL + urlimgs[7],precio: priceprod[7],nombre:nomproducts[7],descripcion:descripciontopproducts[7]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="3500">
          <div class="cards-wrapper">
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[8]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[8] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[8] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[8], url:API_URL + urlimgs[8],precio: priceprod[8],nombre:nomproducts[8],descripcion:descripciontopproducts[8]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[9]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[9] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[9] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[9], url:API_URL + urlimgs[9],precio: priceprod[9],nombre:nomproducts[9],descripcion:descripciontopproducts[9]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[10]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[10] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[10] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[10], url:API_URL + urlimgs[10],precio: priceprod[10],nombre:nomproducts[10],descripcion:descripciontopproducts[10]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
            <div id="cartitas" class="card">
              <div id="cardimage">
                <br />
                <img
                  id="imgtopprod"
                  :src="API_URL + urlimgs[11]"
                  class="card-img-top"
                  alt="..."
                />
                <br /><br /><img
                class="logocardimg"
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[11] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[11] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="setdatamodal({id:idprod[11], url:API_URL + urlimgs[11],precio: priceprod[11],nombre:nomproducts[11],descripcion:descripciontopproducts[11]})"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><img style="width:30px;height:30px;margin-top:-5px" src="../assets/mirando.png">&nbsp;Detalles</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev_"
        type="button"
        data-bs-target="#carouselExampleControls2"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next_"
        type="button"
        data-bs-target="#carouselExampleControls2"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br />
 
    <!-- normal -------------------------------------------------------------------------------------------------------------------------- -->

    <!-- movil -------------------------------------------------------------------------------------------------------------------------- -->
    
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
    <div style="margin-top:-50px;display:none" id="divcategoriasprincipalesizqmobil">
      <hr style="width:80%;margin-left:38px">
      <p style="
          font-size: 26px;
          text-align: center;
          font-family: Century Gothic;
          margin-top: -10px;
          color: #909090;
        "
      >
        Productos Recomendados
      </p>
       <hr style="margin-top:-20px;width:80%;margin-left:38px"> 
    </div>
     <div id="borderow">
    <div
      ontouchstart=""
      id="carouselExampleControls3"
      class="carousel slide"
      data-bs-ride="carousel"
    >

      <div id="carousel-inner" class="carousel-inner">
        <div class="carousel-item" :class="index == 0 ? 'active':''" v-for="(data,index) in products.data" :key="data.id" data-bs-interval="3500">
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
                   <p style="margin-top:-20px;font-size:18px;margin-left:-140px;font-weight: 500">{{ data.attributes.name.toUpperCase() }}</p> 
                   <p style="margin-top:-10px;font-size:22px;margin-left:-190px;font-weight: 700">${{ data.attributes.price }}</p> 
                  <div style="margin-top:-22px;margin-left:-95px;font-weight: 500" class="product-rating">
                          <i class="fa fa-star rating" star-data="1"></i>
                          <i class="fa fa-star rating" star-data="2"></i>
                          <i class="fa fa-star rating" star-data="3"></i>
                          <i class="fa fa-star rating" star-data="4"></i>
                          <i class="fa fa-star rating" star-data="5"></i>
                          <div class="product-rating-details">
                            &nbsp;(
                            <span class="rating-count">580</span> reviews)
                          </div>
                        </div>
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
                  style="cursor: pointer;margin-left:-70px"
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
                </td>
              </tr>
            </table>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
           
            </div>
      <button
        id="btncarruselprev"
        class="carousel-control-prev_"
        type="button"
        data-bs-target="#carouselExampleControls3"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next_"
        type="button"
        data-bs-target="#carouselExampleControls3"
        data-bs-slide="next"
      >
        <span
          id="btncarruselnext"
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <br />
    <!-- movil -------------------------------------------------------------------------------------------------------------------------- -->
    <!-- marcas principales normal -------------------------------------------------------------------------------------------------------------------------- -->
    <div id="divcategoriasprincipalesizq">
      <p id="divcategoriasprincipalesizqp">Nuestras Principales Categorias</p>
    </div>
    <div id="divcategoriasprincipalesder">
      <p id="divcategoriasprincipalesderp">
        Contamos Con Las Principales Marcas Del Mercado
      </p>
    </div>
    <div id="catprincipales">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <table id="tablaizq">
            <tr>
              <td>
                <sui-reveal animated="small fade">
                <sui-reveal-content visible>
                  <sui-image :src="API_URL + urlcatprincipales2[0]" size="small" />
                </sui-reveal-content>
                <sui-reveal-content hidden>
                  <sui-image :src="API_URL + urlcatprincipales[0]" size="small" />
                </sui-reveal-content>
              </sui-reveal>
              <div class="contenedor-img ejemplo-1">  
                  <img  id="imagestopcat" :src="API_URL + urlcatprincipales[0]" />  
                  <div class="mascara">
                      <a href="/epp"><h2>VER CATEGORIA</h2></a> 
                  </div>
              </div>
              </td>
              <td>
                <div class="contenedor-img ejemplo-1">  
                  <img  id="imagestopcat" :src="API_URL + urlcatprincipales2[0]" />  
                  <div class="mascara">
                      <a href="/epp"><h2>VER CATEGORIA</h2></a> 
                  </div>
              </div>
              </td>
            </tr>
            <tr>
              <td>
                <br />
                <div class="contenedor-img ejemplo-1">  
                  <img  id="imagestopcat" :src="API_URL + urlcatprincipales3[0]" />  
                  <div class="mascara">
                      <a href="/epp"><h2>VER CATEGORIA</h2></a> 
                  </div>
              </div>
              </td>
              <td>
                <br />
                <div class="contenedor-img ejemplo-1">  
                  <img  id="imagestopcat" :src="API_URL + urlcatprincipales4[0]" />  
                  <div class="mascara">
                      <a href="/epp"><h2>VER CATEGORIA</h2></a> 
                  </div>
              </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="column">
          <table id="tablader">
            <tr>
              <td>
                <div
                  id="carouselExampleControls4"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas1"
                        :src="API_URL + urlmarcasprincipales[0]"
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas2"
                        :src="API_URL + urlmarcasprincipales2[0]"
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas3"
                        :src="API_URL + urlmarcasprincipales3[0]"
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas4"
                        :src="API_URL + urlmarcasprincipales4[0]"
                      />
                    </div>
                  </div>
                  <button
                    id="btncarruselprev"
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls4"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls4"
                    data-bs-slide="next"
                  >
                    <span
                      id="btncarruselnext"
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </td>
              <td>
                <div
                  id="carouselExampleControls5"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas5"
                        :src="API_URL + urlmarcasprincipales5[0]"
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas6"
                        :src="API_URL + urlmarcasprincipales6[0]"
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas7"
                        :src="API_URL + urlmarcasprincipales7[0]"
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3500">
                      <img
                        id="fotos_carruselmarcas8"
                        :src="API_URL + urlmarcasprincipales8[0]"
                      />
                    </div>
                  </div>
                  <button
                    id="btncarruselprev"
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls4"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls4"
                    data-bs-slide="next"
                  >
                    <span
                      id="btncarruselnext"
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h2 id="tit_socios"><p id="p_tit_socios">Nuestro Equipo De Trabajo</p></h2>
                <div
                  id="carouselExampleControls6"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                    
                    <div class="row" id="rowcito">
                        <div class="media">
                          <img src="../assets/socios.jpg" class="mr-3" alt="">
                          <div class="media-body">
                            <div class="testimonial">
                              <p id="desc_socios">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                              <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                          </div>
                      </div>
    
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                    
                    <div class="row" id="rowcito">
                        <div class="media">
                          <img src="../assets/socios.jpg" class="mr-3" alt="">
                          <div class="media-body">
                            <div class="testimonial">
                              <p id="desc_socios">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                              <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                          </div>
                      </div>
    
                    </div>
                    </div>
                     <div class="carousel-item" data-bs-interval="5000">
                    
                    <div class="row" id="rowcito">
                        <div class="media">
                          <img src="../assets/socios.jpg" class="mr-3" alt="">
                          <div class="media-body">
                            <div class="testimonial">
                              <p id="desc_socios">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                              <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                          </div>
                      </div>
    
                    </div>
                    </div>
                   <div class="carousel-item" data-bs-interval="5000">
                    
                    <div class="row" id="rowcito">
                        <div class="media">
                          <img src="../assets/socios.jpg" class="mr-3" alt="">
                          <div class="media-body">
                            <div class="testimonial">
                              <p id="desc_socios">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                              <p  class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                          </div>
                      </div>
    
                    </div>
                    </div>
                   <div class="carousel-item" data-bs-interval="5000">
                    
                    <div class="row" id="rowcito">
                        <div class="media">
                          <img src="../assets/socios.jpg" class="mr-3" alt="">
                          <div class="media-body">
                            <div class="testimonial">
                              <p id="desc_socios">Lorem ipsum dolor sit amet, consec adipiscing elit. Nam eusem scelerisque tempor, varius quam luctus dui. Mauris magna metus nec.</p>
                              <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
                            </div>
                          </div>
                      </div>
    
                    </div>
                    </div>
                  </div>
                  <button
                    id="btncarruselprev"
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls5"
                    data-bs-slide="next"
                  >
                  <span
                    id="btncarruselnext"
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- normal -------------------------------------------------------------------------------------------------------------------------- -->

    <!-- mobil -------------------------------------------------------------------------------------------------------------------------- -->
    <div id="bordeprincipalescategoria">
    <div id="catprincipalesizqmobil">
  <!-- <p style="border-radius:30px;width:395px;margin-top:-30px;margin-bottom:15px;font-size:22px;margin-left:-10px;font-weight:700;font-family: 'Bungee Shade';background-color:#eaeaea;color:#000;text-align:center">CATEGORIAS PRINCIPALES</p>   -->
      <h1 style="margin-left:-21px;margin-top:-55px;margin-bottom:-10px">CATEGORIAS PRINCIPALES</h1>
      <div class="column">
        <table id="tablaizq">
          <tr>
            <td>
              <div class="ejemplo-1">
                  <img  @click="vercategoria1()" id="imagestopcatarriba1" :src="API_URL + urlcatprincipales[0]" />  
                  <br>
                  <a  href="/epp"><h2 style="opacity:0;cursor:wait" id="vercate1" >VER CATEGORIA</h2></a> 
                  <br>
                  <br>
                  <br>
                  <br>
                  <br><br><br>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="ejemplo-1">
                  <img @click="vercategoria2()" id="imagestopcatarriba2" :src="API_URL + urlcatprincipales2[0]" />  
                  <a  href="/epp"><h2 style="opacity:0" id="vercate2">VER CATEGORIA</h2></a> 
                  <br>
                  <br>
                  <br>
                  <br>
                  <br><br><br>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="ejemplo-1">
                  <img @click="vercategoria3()" id="imagestopcatarriba3" :src="API_URL + urlcatprincipales3[0]" />  
                  <a  href="/epp"><h2 style="opacity:0" id="vercate3" >VER CATEGORIA</h2></a> 
                  <br>
                  <br>
                  <br>
                  <br>
                  <br><br><br>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="ejemplo-1">
                  <img @click="vercategoria4()" id="imagestopcatarriba4" :src="API_URL + urlcatprincipales4[0]" />  
                  <a  href="/epp"><h2 style="opacity:0" id="vercate4">VER CATEGORIA</h2></a> 
                  <br>
                  <br>
                  <br>
                  <br>
                  <br><br><br>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    </div>

    <div id="divcategoriasprincipalesizqmobil">
      <p
        style="
          font-size: 20px;
          text-align: center;
          font-family: Century Gothic;
          background-color: #000;
          color: #fff;
          margin-top: 20px;
        "
      >
        Contamos Con Las Marcas Lideres
      </p>
    </div>
    <div id="catprincipalesdermobil">
      <div class="column">
        <table id="tablader">
          <tr>
            <td>hola</td>
            <td>hola</td>
          </tr>
          <tr>
            <td>hola</td>
            <td>hola</td>
          </tr>
        </table>
      </div>
    </div>
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
                      <div style="margin-top:5px" class="product-image">
                        <img  :src="datamodal.urlimg" />
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
                        <button style="margin-top:10px" class="btn btn-danger" id="botonagregar" @click="agregarcantcarro(datamodal.id,cantidad_Prod)"><a id="agregaral" >Agregar Al Carro</a>&nbsp;<img id="tablaagregadoxx" style="visibility:hidden;width:25px;position:fixed" src="../assets/cargando.gif" /></button><br><a style="display:none" id="agregado">Agregado</a>
                      </div>
                      <br>
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
     
    <div style="display: none" v-for="product in products" :key="product.id">
      <Product :product="product" />
    </div>
    
  </BasicLayout>
  <br><br>
  <div class="foter"><Footer/></div>
  <div id="fotermobile">
  <footer
          id="footercito"
          class="text-center text-lg-start text-dark"
          style="background-color: #ECEFF1"
          >
    <!-- Section: Social media -->
    <section
             class="d-flex justify-content-between p-4 text-white"
             style="background-color: #21D192"
             >
      <div id="redes_sociales">
        Nuestras Redes Sociales &nbsp;&nbsp;&nbsp;
        <a href="" class="text-white me-4">
          <i class="instagram icon"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="facebook square icon"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="whatsapp icon"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold">Nuestra Compañia</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">cATEGORIAS</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Bootstrap Angular</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">Horarios De Atención</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a class="text-dark">LUNES-VIERNES:</a>
            </p>
            <p>
              <a  class="text-dark">8:30-20:00</a>
            </p>
            <p>
              <a  class="text-dark">SABADO:</a>
            </p>
            <p>
              <a class="text-dark">9:00-14:00</a>
            </p>
              <p>
              <a  class="text-dark">DOMINGO:</a>
            </p>
            <p>
              <a class="text-dark">Cerrado</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold">INFORMACIÓN DE CONTACTO</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="warehouse icon"></i> New York, NY 10012, US</p>
            <p><i class="envelope icon"></i> info@example.com</p>
            <p><i class="whatsapp icon"></i> + 01 234 567 88</p>
            <p><i class="phone icon"></i> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
        id="Copyright"
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2023 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/"
         >EppMaule S.A</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
  </div>
</template>

<script>
import { useStore } from "vuex";
import Footer from "../components/footer.vue";
import Topproducts from "../components/top-products.vue";
import Drop from "./dropdowns.vue"
import "../../public/assets/css/fontawesome.css";
import "../../public/assets/css/templatemo-edu-meeting.css";
import "../../public/assets/css/owl.css";
import "../../public/assets/css/lightbox.css";
import Product from "../components/Product.vue";
import BasicLayout from "../layout/BasicLayout.vue";
import { API_URL } from "../utils/constants";
import { getCartApi } from "../api/cart";
import { getPoductsCategory } from "../api/product";
import { addProductCarApi } from "../api/cart";
import { ref, onMounted, watchEffect,computed } from "vue";
import { getPoductsxNom } from "../api/product";

export default {
  name: "HomeView",
  components: {
    BasicLayout,
    Product,
    Drop,
    Topproducts,
    Footer,
  },
  setup() {
    let contador = 0;
    watchEffect(async () => {
      contador;
    });
    let model = ref("");
    const addProductCar = (idProduct) => {
      contador = getCartApi().length;
      addProductCarApi(idProduct);
    };
      const store = useStore();

     const cantidad_Prod = computed (() => store.state.cantidadProd);
     const total_Prod = computed (() => store.state.totalProd);
    let formData = ref({});
    let products = ref([]);
    let banners = [];
    let banners2 = [];
    let banners3 = [];
    let categoriasprincipales = [];
    let categoriasprincipales2 = [];
    let categoriasprincipales3 = [];
    let categoriasprincipales4 = [];
    let prod = [];
    let idprod = [];
    let urlimgs = [];
    let priceprod = [];
    let nomproducts = [];
    let productsinlimit = ref({});
    let urlimgbanner1 = [];
    let urlimgbanner2 = [];
    let urlimgbanner3 = [];
    let urlcatprincipales = [];
    let urlcatprincipales2 = [];
    let urlcatprincipales3 = [];
    let urlcatprincipales4 = [];
    let marcasprincipales = [];
    let marcasprincipales2 = [];
    let marcasprincipales3 = [];
    let marcasprincipales4 = [];
    let marcasprincipales5 = [];
    let marcasprincipales6 = [];
    let marcasprincipales7 = [];
    let marcasprincipales8 = [];
    let urlmarcasprincipales = [];
    let urlmarcasprincipales2 = [];
    let urlmarcasprincipales3 = [];
    let urlmarcasprincipales4 = [];
    let urlmarcasprincipales5 = [];
    let urlmarcasprincipales6 = [];
    let urlmarcasprincipales7 = [];
    let urlmarcasprincipales8 = [];
    let descripciontopproducts = [];
    let datamodal= ref({
      nomeprod:'',
      urlimg:'',
      descripcion:'',
      tallas:[''],
      cantidad:0,
      talla:''
    })
    let mitad1=[];
    let mitad2=[];

    onMounted(async () => {
   
           
     
      const respuesta = await getPoductsxNom("banner principal 1");
      banners.value = respuesta;
      const respuesta2 = await getPoductsxNom("banner principal 2");
      banners2.value = respuesta2;
      const respuesta3 = await getPoductsxNom("banner principal 3");
      banners3.value = respuesta3;
      const respuesta4 = await getPoductsxNom("categorias principales 1");
      categoriasprincipales.value = respuesta4;
      const respuesta5 = await getPoductsxNom("categorias principales 2");
      categoriasprincipales2.value = respuesta5;
      const respuesta6 = await getPoductsxNom("categorias principales 3");
      categoriasprincipales3.value = respuesta6;
      const respuesta7 = await getPoductsxNom("categorias principales 4");
      categoriasprincipales4.value = respuesta7;
      const respuesta8 = await getPoductsxNom("marcas menu principal 1");
      marcasprincipales.value = respuesta8;
      const respuesta9 = await getPoductsxNom("marcas menu principal 2");
      marcasprincipales2.value = respuesta9;
      const respuesta10 = await getPoductsxNom("marcas menu principal 3");
      marcasprincipales3.value = respuesta10;
      const respuesta11 = await getPoductsxNom("marcas menu principal 4");
      marcasprincipales4.value = respuesta11;
      const respuesta12 = await getPoductsxNom("marcas menu principal 5");
      marcasprincipales5.value = respuesta12;
      const respuesta13 = await getPoductsxNom("marcas menu principal 6");
      marcasprincipales6.value = respuesta13;
      const respuesta14 = await getPoductsxNom("marcas menu principal 7");
      marcasprincipales7.value = respuesta14;
      const respuesta15 = await getPoductsxNom("marcas menu principal 8");
      marcasprincipales8.value = respuesta15;
      const response = await getPoductsCategory("top-products");
      console.log(response);
      products.value = response;
      prod.push(response);
      console.log("prodcito", products.value);

      // -------------------- descripcion top products -------------------------

      for (let i = 0; i < products.value.data.length; i++) {
        descripciontopproducts.push(
          products.value.data[i].attributes.descripcion
        );
      }
      console.log("descripcion top products", descripciontopproducts);
      // -------------------- marcas principales 1 -------------------------

      for (let i = 0; i < marcasprincipales.value.data.length; i++) {
        urlmarcasprincipales.push(
          marcasprincipales.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 2 -------------------------

      // -------------------- marcas principales 2 -------------------------

      for (let i = 0; i < marcasprincipales2.value.data.length; i++) {
        urlmarcasprincipales2.push(
          marcasprincipales2.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 3 -------------------------

      // -------------------- marcas principales 3 -------------------------

      for (let i = 0; i < marcasprincipales3.value.data.length; i++) {
        urlmarcasprincipales3.push(
          marcasprincipales3.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 4 -------------------------

      // -------------------- marcas principales 4 -------------------------

      for (let i = 0; i < marcasprincipales4.value.data.length; i++) {
        urlmarcasprincipales4.push(
          marcasprincipales4.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 5-------------------------

      // -------------------- marcas principales 5 -------------------------

      for (let i = 0; i < marcasprincipales5.value.data.length; i++) {
        urlmarcasprincipales5.push(
          marcasprincipales5.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 6 -------------------------

      // -------------------- marcas principales 6 -------------------------

      for (let i = 0; i < marcasprincipales6.value.data.length; i++) {
        urlmarcasprincipales6.push(
          marcasprincipales6.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 7 -------------------------

      // -------------------- marcas principales 7 -------------------------

      for (let i = 0; i < marcasprincipales7.value.data.length; i++) {
        urlmarcasprincipales7.push(
          marcasprincipales7.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 8 -------------------------

      // -------------------- marcas principales 8 -------------------------

      for (let i = 0; i < marcasprincipales8.value.data.length; i++) {
        urlmarcasprincipales8.push(
          marcasprincipales8.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- marcas principales 1 -------------------------

      // -------------------- categorias principales1 -------------------------

      for (let i = 0; i < categoriasprincipales.value.data.length; i++) {
        urlcatprincipales.push(
          categoriasprincipales.value.data[i].attributes.image.data.attributes
            .url
        );
      }
      // -------------------- categorias principales 1 -------------------------

      // -------------------- categorias principales2 -------------------------

      for (let i = 0; i < categoriasprincipales2.value.data.length; i++) {
        urlcatprincipales2.push(
          categoriasprincipales2.value.data[i].attributes.image.data.attributes
            .url
        );
      }
      // -------------------- categorias principales 2 -------------------------

      // -------------------- categorias principales 3 -------------------------

      for (let i = 0; i < categoriasprincipales3.value.data.length; i++) {
        urlcatprincipales3.push(
          categoriasprincipales3.value.data[i].attributes.image.data.attributes
            .url
        );
      }
      // -------------------- categorias principales 3 -------------------------

      // -------------------- categorias principales 4 -------------------------

      for (let i = 0; i < categoriasprincipales4.value.data.length; i++) {
        urlcatprincipales4.push(
          categoriasprincipales4.value.data[i].attributes.image.data.attributes
            .url
        );
      }
      // -------------------- categorias principales 4 -------------------------

      // -------------------- banner1 -------------------------

      for (let i = 0; i < banners.value.data.length; i++) {
        urlimgbanner1.push(
          banners.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- banner1 -------------------------

      // -------------------- banner2-------------------------

      for (let i = 0; i < banners2.value.data.length; i++) {
        urlimgbanner2.push(
          banners2.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- banner2 -------------------------

      // -------------------- banner3-------------------------

      for (let i = 0; i < banners3.value.data.length; i++) {
        urlimgbanner3.push(
          banners3.value.data[i].attributes.image.data.attributes.url
        );
      }
      // -------------------- banner3 -------------------------

      // -------------------- id products -------------------------
      for (let index = 0; index < products.value.data.length; index++) {
        idprod.push(products.value.data[index].id);
      }
      console.log("idprodxxxxxxxxx",idprod);
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
        id:datos.id,
        nomprod: datos.nombre,
        urlimg: datos.url,
        descripcion: datos.descripcion,
        precio: datos.precio,
        tallas: [""],
        cantidad: 0,
        talla: "",
      };
       if(datos.precio){
            store.commit("setTotalProd",datos.precio);
             store.commit("setCantidadProd",1);
          }
    };

     function time() {
      setTimeout(nover1, 2500);
    }

    const ver = () => {
      document.getElementById("tablaagregado").style =
        "visibility:visibility;transition: all 0.7s ease-in-out;transform: translateX(285px)";
      time();
    };

    const nover1 = () => {
      document.getElementById("tablaagregado").style =
        "visibility:hidden;transition: all 0.7s ease-in-out;transform: translateX(-285px)";
    };


    const buscar_producto = async (nom) => {
      const response = await getPoductsxNom(nom);
      products.value = response;
    };

    const sumar=()=>{
      store.commit("setCantidadProd",cantidad_Prod.value+1);
      const totalString= document.getElementById("preccio").textContent;
      const totalsplit= totalString.split("$");
      let total= parseInt(totalsplit[1]);
      store.commit("setTotalProd",total*cantidad_Prod.value);
    }

    const restar=()=>{
      const totalString= document.getElementById("preccio").textContent;
      const totalsplit= totalString.split("$");
      let total= parseInt(totalsplit[1]);
      if(cantidad_Prod.value==1){
        store.commit("setCantidadProd",1);
        store.commit("setTotalProd",total);
      }else{store.commit("setCantidadProd",cantidad_Prod.value-1);
      store.commit("setTotalProd",total*cantidad_Prod.value);
      }}

       const ver1 = () =>{
        document.getElementById("agregaral").style="display:none";
        document.getElementById("agregado").style="display:none";
        document.getElementById("tablaagregadoxx").style =
        "visibility:visible;width:30px;position:absolute;margin-left:-65px";
        document.getElementById("botonagregar").style="visibility:hidden";
        }
          
        const ver2= () =>{
          document.getElementById("agregaral").style="display:none";
          document.getElementById("agregado").style="display:absolute;color:#08ff00;margin-right:33px";
         document.getElementById("botonagregar").style="display:none";
          document.getElementById("tablaagregadoxx").style =
          "display:none;transition: all 0.7s ease-in-out;width:50px;position:fixed";
        }
        const nover = () =>{
          document.getElementById("agregaral").style="display:absolute";
          document.getElementById("agregado").style="display:none";
          document.getElementById("botonagregar").style="background-color:red;margin-top:10px";
          document.getElementById("tablaagregadoxx").style =
          "display:none;transition: all 0.7s ease-in-out;width:50px;position:fixed";
        }
       
   
      function time2() {
      setTimeout(ver2, 1000);
      }
      function time3() {
      setTimeout(nover, 2000);
      }
      const agregarcantcarro = (id,cant) =>{
        console.log("idxx",id);
        console.log("cantidad",cant);
          for (let index = 0; index < cant; index++) {
              addProductCarApi(id);
          }
          ver1()
          time2();
          time3();
        }


   const vercategoria1=()=>{
    document.getElementById("imagestopcatarriba1").style="filter: blur(5px)";
    document.getElementById("vercate1").style="transform: translateX(-40px);transition: all 0.7s ease-in-out;opacity: 1";
    setTimeout(novercategoria1,2000);
   }
    const novercategoria1=()=>{
    document.getElementById("imagestopcatarriba1").style="filter: blur(-5px);";
    document.getElementById("vercate1").style=" transform: translateX(-70px);transition: all 0.7s ease-in-out;opacity: 0";
   }
  const vercategoria2=()=>{
    document.getElementById("imagestopcatarriba2").style="filter: blur(5px);";
    document.getElementById("vercate2").style=" transform: translateX(-20px);transition: all 0.7s ease-in-out;opacity: 1";
    setTimeout(novercategoria2,2000);
   }
    const novercategoria2=()=>{
    document.getElementById("imagestopcatarriba2").style="filter: blur(-5px);";
    document.getElementById("vercate2").style=" transform: translateX(-70px);transition: all 0.7s ease-in-out;opacity: 0";
   }
   const vercategoria3=()=>{
    document.getElementById("imagestopcatarriba3").style="filter: blur(5px);";
    document.getElementById("vercate3").style=" transform: translateX(-40px);transition: all 0.7s ease-in-out;opacity: 1";
     setTimeout(novercategoria3,2000);
   }
    const novercategoria3=()=>{
    document.getElementById("imagestopcatarriba3").style="filter: blur(-5px);";
    document.getElementById("vercate3").style=" transform: translateX(-70px);transition: all 0.7s ease-in-out;opacity: 0";
   }
   const vercategoria4=()=>{
    document.getElementById("imagestopcatarriba4").style="filter: blur(5px);";
    document.getElementById("vercate4").style=" transform: translateX(-20px);transition: all 0.7s ease-in-out;opacity: 1";
    setTimeout(novercategoria4,2000);
   }
    const novercategoria4=()=>{
    document.getElementById("imagestopcatarriba4").style="filter: blur(-5px);";
    document.getElementById("vercate4").style=" transform: translateX(-70px);transition: all 0.7s ease-in-out;opacity: 0";
   }


    return {
      vercategoria1,
      vercategoria2,
      vercategoria3,
      vercategoria4,
      ver,
      agregarcantcarro,
      sumar,
      restar,
      cantidad_Prod,
      total_Prod,
      setdatamodal,
      datamodal,
      model,
      descripciontopproducts,
      urlmarcasprincipales,
      urlmarcasprincipales2,
      urlmarcasprincipales3,
      urlmarcasprincipales4,
      urlmarcasprincipales5,
      urlmarcasprincipales6,
      urlmarcasprincipales7,
      urlmarcasprincipales8,
      urlcatprincipales,
      urlcatprincipales2,
      urlcatprincipales3,
      urlcatprincipales4,
      urlimgbanner1,
      urlimgbanner2,
      urlimgbanner3,
      priceprod,
      idprod,
      addProductCar,
      nomproducts,
      urlimgs,
      API_URL,
      formData,
      products,
      productsinlimit,
      prod,
      buscar_producto,
    };
  },
};
</script>

<style lang="scss" scoped>
//------------mobile ----------------
@media screen and (min-width: 1px) and (max-width: 768px) {
  #carouselExampleControls2 {
    display: none;
  }
  .ui.fluid.action.input {
    .hola {
      font-size: 18px;
      border: 2px solid red;
    }
    .hola::placeholder {
      color: black;
    }
  }
  #header_l {
    margin-left: 0%;
    width: 100%;
  }
  #carouselExampleControls {
    margin-top: 5.8%;
    padding: 0;
    box-sizing: border-box;
    width: 102.8%;
    height: 260px;
    margin-left: -2%;
    margin-bottom: 9%;
  }

  .carousel-control-prev {
    display: none;
  }
  .carousel-control-next {
    display: none;
  }

  #fotos_carrusel {
    margin-top:-1px;
    width: 100%;
    height: 260px;
  }
  .card img {
    height: 15em;
  }

  // tarjetas top productos
  .cards-wrapper {
    display: flex;
    justify-content: center;
  }
  .card img {
    max-width: 100%;
    max-height: 100%;
  }
  .card {
    margin: 0 0.5em;
    border: none;
    border-radius: 0;
  }
  .carousel-inner {
    padding: 1em;
  }
  .carousel-control-next_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 84%;
    margin-top: -5%;
    height: 30px;
    position: absolute;
     display:none;
  }
  .carousel-control-prev_ {
    display:none;
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -38px;
    margin-top: -5%;
    height: 30px;
    position: absolute;
  }

  #carouselExampleControls3 {
    width: 122.2%;
    height: 130%;
    margin-left: 4.5%;
    margin-top: -20px;
  }
  #cartitas {
    width: 600px;
    height: 390px;
    border-radius: 15px;
    margin-top: 6px;
    margin-bottom: 4px;
  }

  #imagestopcatarriba1 {
    width: 50.8%;
    height: 160px;
    margin-bottom: 5px;
    margin-left:2.1%;
  }
   #imagestopcatarriba2 {
    width: 50.8%;
    height: 160px;
    margin-top:-89%;
    margin-left:56%;
  }
  #imagestopcatarriba3 {
    width: 50.8%;
    height: 160px;
    margin-left:2.1%;
    margin-top:-15.5%;
  }
   #imagestopcatarriba4 {
     width: 50.8%;
    height: 160px;
    margin-top:-85.5%;
    margin-left:56%;
  }
  #imagestopcatabajo {
    width: 100%;
  }

  #imgtopprod {
    width: 50%;
    margin-left: 6.5%;
    height: 200px;
  }

  #carousel-inner {
    margin-left: -30px;
    border-radius: 10px;
  }
  #logocardimg {
    width: 140px;
    height: 35px;
    margin-left: 34%;
    margin-top: -15px;
    margin-bottom: 10px;
  }
  #imgtopprodu {
    display: none;
  }
  @keyframes slidein {
    from {
      margin-left: 110%;
    }

    to {
      margin-left: -35px;
    }
  }
  @keyframes slidein2 {
    from {
      margin-left: 108.5%;
    }

    to {
      margin-left: -4%;
    }
  }

  @keyframes slidein3 {
    from {
      margin-left: -80%;
    }

    to {
      margin-left: -11.5%;
    }
  }
  #btnvermastopprod {
    font-size: 18px;
    background-color: #000;
    text-align: center;
    font-family: Century Gothic;
  }
  #imgtopprodufonox {
    height: 32px;
    margin-left: -30px;
    margin-top: -57px;
    width: 116%;
  }
  #divcategoriasprincipalesizq {
    display: none;
  }

  #divcategoriasprincipalesder {
    display: none;
  }
  #catprincipales {
    display: none;
  }
  #divcategoriasprincipalesizqmobil {
    width: 114.7%;
    margin-left: -7.6%;
    margin-top: -10px;
  }
  #divcategoriasprincipalesizqpmobil {
    background-color: #000;
    color: #fff;
    font-size: 22px;
    font-family: Century Gothic;
  }

  #divcategoriasprincipalesdermobil {
    width: 122%;
    margin-left: -15.6%;
    margin-top: 10px;
    height: 25px;
  }
  #divcategoriasprincipalesderpmobil {
    background-color: #000;
    color: #fff;
    font-size: 18px;
    font-family: Century Gothic;
  }
  #catprincipalesizqmobil {
    width: 110%;
    margin-left: 2.7%;
    margin-top: 12%;
  }
  #catprincipalesdermobil {
  }
  .foter{
    display: none;
    opacity: 0;
    visibility: hidden;
  }
   .lightbox-blanket{
    margin-left:-10px;
  }

  #vercate1{
  font-size: 12px;
  color: #fff;
  transform: translateX(-70px);/*Desplazamos a la izquierda*/
  transition: all 0.7s ease-in-out;
  opacity:1;z-index:150;margin-top:-100px;margin-left:25%;
  }
  #vercate2{
  font-size: 12px;
  color: #fff;
  transform: translateX(-70px);/*Desplazamos a la izquierda*/
  transition: all 0.7s ease-in-out;
  opacity:1;z-index:150;margin-top:-180px;margin-left:250px;
  }
  #vercate3{
  font-size: 12px;
  color: #fff;
  transform: translateX(-70px);/*Desplazamos a la izquierda*/
  transition: all 0.7s ease-in-out;
  opacity:1;z-index:150;margin-top:-100px;margin-left:90px;
  }
  #vercate4{
  font-size: 12px;
  color: #fff;
  transform: translateX(-70px);/*Desplazamos a la izquierda*/
  transition: all 0.7s ease-in-out;
  opacity:1;z-index:150;margin-top:-172px;margin-left:250px;
  }

#botonagregar{
      box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
}

 #pic-1 {
    width: 260px;
    height: 195px;
  }
  .product-content {
    font-family: "Roboto", sans-serif;
    width: 350px;
  }
  .row {
    z-index: 40;
    border-radius: 10px;
    margin-top: 30px;
    width: 320px;
    margin-left:34px;
    margin-bottom: 10px;
  }
  .product-content {
    font-family: "Roboto", sans-serif;
    width: 350px;
     border-radius: 10px;
  }
  #tablaagregado {
    width: 200px;
    background-color: #a22308;
    border-radius: 20px;
    position: fixed;
    margin-left: -79%;
    margin-top: 66.5%;
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
    box-shadow: 1px 10px 15px 1px rgba(0.5, 0.5, 0.5, 0.5);
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
    height: 195px;
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

  #eppimg {
    width: 55px;
    height: 55px;
    margin-top: 0px;
    margin-left: 30px;
    margin-bottom: -60px;
    position: absolute;
  }
  #imgcabezera {
    width: 155px;
    height: 50px;
    margin-top: 10px;
    margin-left: 163px;
    margin-bottom: -40px;
    position: absolute;
  }

  #pricesproducts {
    color: #fff;
    font-size: 20px;
    width: 220px;
    margin-top: 13px;
    margin-left: 220px;
    position: absolute;
  }

  #tablaproductcontent {
    margin-bottom: -8px;
    width: 108.4%;
    height: 165px;
    margin-left: -12.5px;
    margin-top: -15px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
  }

  #nombreproductcard{
    font-size:15px
  }

  #btnañadir1 {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 0px;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
    font-size:12px;
    margin-top: 0px;
    margin-bottom: -15px;
    width: 100.7%;
    margin-left:-2px;
    height:45px;
    background-color:#007591;
    border-right:1px solid #acacaa;
    border-left:1px solid #007591;
    border-top:1px solid #007591;
    border-bottom:1px solid #007591;
  }

   #btnañadir1:hover{
    font-size:13.5px;
    background-color: #00b5e1;
  }
  
  #btnañadir1:hover, #btnañadir1:focus{
    font-size:13.5px;
    background-color: #00b5e1;}

  #btnañadir2 {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 15px;
    border-top-left-radius:0px;
    border-top-right-radius:0px;
    font-size:12px;
    margin-top: 0px;
    margin-bottom: -15px;
    width: 101.7%;
    margin-left:-2px;
    height:45px;
    background-color:#007591;
    border-right:1px solid  #007591;
    border-left:1px solid  #acacaa;
    border-top:1px solid #007591;
    border-bottom:1px solid #007591;
  }

   #btnañadir2:hover{
    font-size:13.5px;
    background-color: #00b5e1;
  }
  
  #btnañadir2:hover, #btnañadir2:focus{
    font-size:13.5px;
    background-color: #00b5e1;}

  #borderow{
    width: 115%;
    z-index: 1;
    border:1px solid rgba(138,221,45,0);
    background-image: url("../assets/fondoo.jpg");
    background-size:cover;
     background-position-y: -1px;
     margin-top:-6px;
     margin-left:-7.5%;
  }
  #bordeprincipalescategoria{
    border:1px solid rgba(138,221,45,0);
    width: 115%;
    margin-left: -25.5px;
    margin-top: -36px;
    background-image: url("../assets/diagonal.jpg");
    background-size:cover;
    background-position-x: -120px;
    background-position-y: 0px;
  }

  #borderprimercarrusel{
    border-bottom:1px solid black;
    width: 115%;
    margin-top:92px;
    margin-left:-7.1%;
    margin-bottom: -35px;
    background-image: url("../assets/cielo.jpg");
    background-size:cover;
  }

   #contenido_modal{
      border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
  }

}

//------------ hd ----------------
@media screen and (min-width: 1024px) and (max-width: 1366px) {
  #borderow{
  display: none;
}
  #fotermobile{
    display:none;
  }
  #imgtopprodufono {
    display: none;
  }
  .ui.fluid.action.input {
    .hola {
      font-size: 18px;
      border: 2px solid #000;
    }
    .hola::placeholder {
      color: black;
    }
  }
  #hola {
    width: 80%;
    margin-left: 10%;
  }
  #header_l {
    margin-left: 10%;
    width: 80%;
  }
  #btn_buscar {
    display: none;
  }
  #carouselExampleControls {
    margin: 12%;
    padding: 0;
    box-sizing: border-box;
    width: 128%;
    margin-left: -14%;
    animation-duration: 1s;
    animation-name: slidein3;
  }

  .carousel-control-prev {
    display: none;
  }
  .carousel-control-next {
    display: none;
  }

  // tarjetas top productos
  .cards-wrapper {
    display: flex;
    justify-content: center;
  }
  .card img {
    max-width: 100%;
    max-height: 100%;
  }
  .card {
    margin: 0 0.5em;
    border: none;
    border-radius: 0;
  }
  .carousel-inner {
    padding: 1em;
  }
  .carousel-control-prev_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -5.5px;
    margin-top: -3%;
    height: 30px;
    position: absolute;
    border: 1px solid #fff;
  }
  .carousel-control-next_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 93.7%;
    margin-top: -3%;
    height: 30px;
    position: absolute;
    border: 1px solid #fff;
  }

  #carouselExampleControls2 {
    width: 127.5%;
    margin-left: -11%;
    margin-top: -14px;
    animation-duration: 1s;
    animation-name: slidein;
  }
  #cartitas {
    width: 600px;
    height: 380px;
    border-radius: 15px;
  }

  #imgtopprod {
    width: 80%;
    margin-left: 9.7%;
    height: 180px;
  }
  #carousel-inner {
    margin-left: -30px;
    border-radius: 10px;
  }
  #logocardimg {
    width: 130px;
    height: 35px;
    margin-left: 55%;
    margin-top: -15px;
    margin-bottom: 10px;
  }
  #imgtopprodu {
    color: #fff;
    font-size: 22px;
    background-color: #000;
    text-align: center;
    width: 174%;
    margin-left: -37%;
    margin-top: -15.3%;
    animation-duration: 1s;
    animation-name: slidein2;
    font-family: Century Gothic;
  }
  #imgtopprodux {
    height: 48px;
  }
  @keyframes slidein {
    from {
      margin-left: 127%;
    }

    to {
      margin-left: -11%;
    }
  }
  @keyframes slidein2 {
    from {
      margin-left: 174%;
    }

    to {
      margin-left: -37%;
    }
  }

  @keyframes slidein3 {
    from {
      margin-left: -127%;
    }

    to {
      margin-left: -13%;
    }
  }
  #pricetopprod {
    font-size: 19px;
    color: orangered;
  }

  #btnvermastopprod {
    box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
    font-size: 16px;
    background-color: #000;
    text-align: center;
    font-family: Century Gothic;
  }
  #catprincipales {
    width: 125%;
    margin-left: -10.5%;
    height: 350px;
    border: none;
    margin-top: 15px;
    animation-duration: 1s;
    animation-name: slidecatprinc;
  }
  #imagestopcat {
    width: 95%;
    height: 220px;
  }

  #divcategoriasprincipalesizq {
    width: 100%;
    margin-left: -50%;
    margin-top: -70px;
    height: 45px;
    animation-duration: 1s;
    animation-name: slideizq;
  }
  #divcategoriasprincipalesder {
    width: 65%;
    margin-left: 50%;
    margin-top: -45px;
    height: 45px;
    animation-duration: 1s;
    animation-name: slideder;
  }
  #divcategoriasprincipalesizqp {
    color: #fff;
    background-color: #000;
    text-align: center;
    font-size: 18px;
    margin-left: 30%;
    font-family: Century Gothic;
  }
  #divcategoriasprincipalesderp {
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-family: Century Gothic;
  }
  @keyframes slidecatprinc {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: -12.5%;
    }
  }
  @keyframes slideizq {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: -50%;
    }
  }
  @keyframes slideder {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 50%;
    }
  }
  #tablaizq {
    width: 103.8%;
    margin-top: -18px;
  }
  #tablader {
    width: 100.5%;
    margin-top: -18px;
    margin-left: -50px;
    text-align: center;
  }
 #divcategoriasprincipalesizqmobil {
    display: none;
  }

  #divcategoriasprincipalesdermobil {
    display: none;
  }
  #catprincipalesizqmobil {
    display: none;
  }
  #catprincipalesdermobil {
    display: none;
  }
  #carouselExampleControls3 {
    display: none;
  }

  #carouselExampleControls4 {
    width: 290px;
    margin-top: -15px;
    margin-left: 20px;
  }
  #carouselExampleControls5 {
    width: 290px;
    margin-top: -15px;
  }
  #fotos_carruselmarcas1 {
    height: 200px;
    width: 350px;
  }
  #fotos_carruselmarcas2 {
    height: 200px;
   width: 290px;
  }
  #fotos_carruselmarcas3 {
    height: 200px;
    width: 290px;
  }
  #fotos_carruselmarcas4 {
    height: 200px;
    width: 290px;
  }
  #fotos_carruselmarcas5 {
    height: 200px;
    width: 290px;
  }
  #fotos_carruselmarcas6 {
    height: 200px;
    width: 290px;
  }
  #fotos_carruselmarcas7 {
    height: 200px;
    width: 290px;
  }
  #fotos_carruselmarcas8 {
    height: 200px;
    width: 290px;
  }

    //modales ---------------------
#modales1{
width: 820px; 
height: 600px; 
margin-left: -50px;
}
#tablamodal{
  width: 600px;
}
#td1tablamodal{
  width: 60%;
}
#td2tablamodal{
  width: 40%;
}
#titmodtd2{
  margin-top:-80px;
  font-size: 22px;
}

#carouselExampleControls6{
  width: 100%;
  background-color: #cedadd56;
  margin-top:-14px;
}

#tit_socios{
width: 100%;
background-color: #cedadd56;
}
#p_tit_socios{
font-size: 26px;
color:#fff;
background-color: #000000e0;
font-family: Century Gothic;
}
#desc_socios{
  font-size: 18px;
  margin-left: 150px;
  margin-top:-145px;
}
.carousel .media img {
	width: 163px;
	height: 100%;
  margin-left:-68%;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 0 60px 0 60px ;
	position: absolute;
}
.carousel .overview{
	margin-left: 140px;
  font-size: 20px;
  margin-top:-13px;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #1c47e3;
}
.ejemplo-1 h2 {
transform: translateX(-200px);/*Desplazamos a la izquierda*/
opacity: 0;
transition: all 0.7s ease-in-out;
}
.ejemplo-1 h2 {
transform: translateX(-200px);/*Desplazamos a la izquierda*/
opacity: 0;
transition: all 0.7s ease-in-out;
color: #fff;
position: absolute;
margin-top: -130px;
margin-left: 55px;
}
.ejemplo-1:hover #imagestopcat{
filter: blur(5px);
}
.card-img-top:hover{
  margin-top:10px;
  transform: scale(1.44);/*Damos un ligero zoom a la imagen*/
  transition: all 0.1s ease-in-out;
}
 #contenido_modal{
    margin-left:-82.5%;
      border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
  }
  #botonagregar{
      box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
}
#tablaagregado{
  display: none;
}
}

//------------full hd ----------------
@media screen and (min-width: 1920px) {
  #fotermobile{
    display:none;
  }
  #imgtopprodufono {
    display: none;
  }
  #courses {
    width: 174%;
    margin-left: -36.8%;
  }
  .ui.fluid.action.input {
    .hola {
      font-size: 18px;
      border: 2px solid #000;
    }
    .hola::placeholder {
      color: black;
    }
  }
  #header_l {
    margin-left: 10%;
    width: 80%;
  }
  #btn_buscar {
    display: none;
  }
  #carouselExampleControls {
    margin-top: 11%;
    padding: 0;
    box-sizing: border-box;
    width: 180%;
    margin-left: -39%;
    animation-duration: 1s;
    animation-name: slidein3;
  }
  #btncarruselprev {
    margin-left: -4px;
  }
  .carousel-control-prev {
    display: none;
  }
  .carousel-control-next {
    display: none;
  }

  // tarjetas top productos
  .cards-wrapper {
    display: flex;
    justify-content: center;
  }
  .card img {
    max-width: 100%;
    max-height: 100%;
  }
  .card {
    margin: 0 0.5em;
    border: none;
    border-radius: 0;
  }
  .carousel-inner {
    padding: 1em;
  }
  .carousel-control-prev_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -2.2px;
    margin-top: -3%;
    height: 30px;
    position: absolute;
    border: 1px solid #fff;
  }
  .carousel-control-next_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 95.5%;
    margin-top: -3%;
    height: 30px;
    position: absolute;
    border: 1px solid #fff;
  }

  #carouselExampleControls2 {
    width: 177.5%;
    margin-left: -36%;
    margin-top: -14px;
    animation-duration: 1s;
    animation-name: slidein;
  }
  #cartitas {
    width: 600px;
    height: 460px;
  }

  #imgtopprod {
    width: 80%;
    margin-left: 9.7%;
    height: 250px;
  }
  #carousel-inner {
    margin-left: -30px;
    border-radius: 10px;
  }
  #logocardimg {
    width: 145px;
    height: 40px;
    margin-left: 65%;
    margin-top: -15px;
    margin-bottom: 10px;
  }
  #cuerpoprodtop {
    border: none;
  }

  #imgtopprodu {
    width: 174%;
    color: #fff;
    font-size: 28px;
    background-color: #000;
    text-align: center;
    margin-left: -37%;
    margin-top: -3.2%;
    animation-duration: 1s;
    animation-name: slidein;
    font-family: Century Gothic;
  }
  #imgtopprodux {
    height: 30px;
  }
  @keyframes slidein {
    from {
      margin-left: 174%;
    }

    to {
      margin-left: -37%;
    }
  }
  @keyframes slidein3 {
    from {
      margin-left: -180%;
    }

    to {
      margin-left: -39%;
    }
  }

  #pricetopprod {
    font-size: 23px;
    color: orangered;
    font-family: Century Gothic;
  }

  #btnvermastopprod {
    box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
    font-size: 18px;
    background-color: #000;
    text-align: center;
    font-family: Century Gothic;
  }

  #catprincipales {
    width: 174%;
    margin-left: -35%;
    height: 565px;
    border: none;
    margin-top: -4px;
    animation-duration: 1s;
    animation-name: slidecatprinc;
  }
  #imagestopcat {
    width: 95%;
    height: 270px;
  }

  #divcategoriasprincipalesizq {
    width: 100%;
    margin-left: -50%;
    margin-top: -50px;
    height: 45px;
    animation-duration: 1s;
    animation-name: slideizq;
  }
  #divcategoriasprincipalesder {
    width: 100%;
    margin-left: 50%;
    margin-top: -45px;
    height: 45px;
    animation-duration: 1s;
    animation-name: slideder;
  }
  #divcategoriasprincipalesizqp {
    color: #fff;
    background-color: #000;
    text-align: center;
    font-size: 26px;
    margin-left: 10%;
    font-family: Century Gothic;
  }
  #divcategoriasprincipalesderp {
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 26px;
    margin-left:-100px;
    font-family: Century Gothic;
  }
  @keyframes slidecatprinc {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: -35%;
    }
  }
  @keyframes slideizq {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: -50%;
    }
  }
  @keyframes slideder {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 50%;
    }
  }
  #tablaizq {
    width: 103.8%;
    margin-top: 10px;
  }
  #tablader {
    width: 100.3%;
    margin-top: 10px;
    margin-left: -45px;
    text-align: center;
    background-color: #cedaddb4;
  }
  #divcategoriasprincipalesizqmobil {
    display: none;
  }

  #divcategoriasprincipalesdermobil {
    display: none;
  }
  #catprincipalesizqmobil {
    display: none;
  }
  #catprincipalesdermobil {
    display: none;
  }
  #carouselExampleControls3 {
    display: none;
  }

  #carouselExampleControls4 {
    width: 400px;
    margin-top: -15px;
    margin-left: 40px;
  }
  #carouselExampleControls5 {
    width: 400px;
    margin-top: -15px;
  }
  #fotos_carruselmarcas1 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas2 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas3 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas4 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas5 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas6 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas7 {
    height: 270px;
    width: 400px;
  }
  #fotos_carruselmarcas8 {
    height: 270px;
    width: 400px;
  }

#modales1{
width: 1020px; 
height: 620px; 
margin-left: -250px;
}
#tablamodal{
  width: 900px;
}
#td1tablamodal{
  width: 60%;
}
#td2tablamodal{
  width: 40%;
}
#titmodtd2{
  margin-top:-200px;
}

#carouselExampleControls6{
  width: 100%;
  background-color: #cedadd56;
  margin-top:-14px;
}

#tit_socios{
width: 100%;
background-color: #cedadd56;
}
#p_tit_socios{
font-size: 26px;
color:#fff;
background-color: #000000e0;
font-family: Century Gothic;
}
#desc_socios{
  font-size: 26px;
  margin-left: 230px;
  margin-top:-170px;
}
.carousel .testimonial {
	padding: 0 80px 0 60px ;
	position: absolute;
}
.carousel .overview{
	margin-left: 210px;
  font-size: 20px;
  margin-top:-13px;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #1c47e3;
}
#tit_socios{
width: 100%;
background-color: #cedadd56;
}
#p_tit_socios{
font-size: 26px;
color:#fff;
background-color: #000000e0;
font-family: Century Gothic;
}
#desc_socios{
  font-size: 26px;
  margin-left: 210px;
  margin-top:-160px;
}
.carousel .media img {
	width: 212px;
	height: 100%;
  margin-left:-68%;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 0 60px 0 60px ;
	position: absolute;
}
.carousel .overview{
	margin-left: 210px;
  font-size: 20px;
  margin-top:-13px;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #1c47e3;
}
.ejemplo-1 h2 {
transform: translateX(-200px);/*Desplazamos a la izquierda*/
opacity: 0;
transition: all 0.7s ease-in-out;
color: #fff;
position: absolute;
margin-top: -170px;
margin-left: 125px;
}
.ejemplo-1:hover #imagestopcat{
filter: blur(5px);
}

.card-img-top:hover{
  margin-top:9px;
  transform: scale(1.36);/*Damos un ligero zoom a la imagen*/
  transition: all 0.1s ease-in-out;
}
  #contenido_modal{
    border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
    margin-left:-144.5%;
  }
   #lightbox{
    display: none;
    visibility: hidden;
  }
  .lb-outerContainer{
    display: none;
  }
  #botonagregar{
      box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
}

#tablaagregado{
  display: none;
}
#borderow{
  display: none;
}
}

//------------ 1600x900 ----------------
@media screen and (min-width: 1367px) and (max-width: 1600px) {
  #borderow{
  display: none;
}
  #fotermobile{
    display:none;
  }
  #imgtopprodufono {
    display: none;
  }
  .ui.fluid.action.input {
    .hola {
      font-size: 18px;
      border: 2px solid #000;
    }
    .hola::placeholder {
      color: black;
    }
  }
  #hola {
    width: 80%;
    margin-left: 10%;
  }
  #header_l {
    margin-left: 10%;
    width: 80%;
  }
  #btn_buscar {
    display: none;
  }
  #carouselExampleControls {
    margin: 11%;
    padding: 0;
    box-sizing: border-box;
    width: 149%;
    margin-left: -24%;
    animation-duration: 1s;
    animation-name: slidein3;
  }
  #btncarruselprev {
    margin-left: -2px;
  }

  .carousel-control-prev {
    display: none;
  }
  .carousel-control-next {
    display: none;
  }

  // tarjetas top productos
  .cards-wrapper {
    display: flex;
    justify-content: center;
  }
  .card img {
    max-width: 100%;
    max-height: 100%;
  }
  .card {
    margin: 0 0.5em;
    border: none;
    border-radius: 0;
  }
  .carousel-inner {
    padding: 1em;
  }
  .carousel-control-prev_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -0px;
    margin-top: -3%;
    height: 30px;
    position: absolute;
    border: 1px solid #fff;
  }
  .carousel-control-next_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 94.5%;
    margin-top: -3%;
    height: 30px;
    position: absolute;
    border: 1px solid #fff;
  }

  #carouselExampleControls2 {
    width: 148.4%;
    margin-left: -21.5%;
    margin-top: -13px;
    animation-duration: 1s;
    animation-name: slidein;
  }
  #cartitas {
    width: 600px;
    height: 400px;
    border-radius: 15px;
  }

  #imgtopprod {
    width: 80%;
    margin-left: 9.7%;
    height: 200px;
  }
  #carousel-inner {
    margin-left: -30px;
    border-radius: 10px;
  }
  #logocardimg {
    width: 140px;
    height: 35px;
    margin-left: 59%;
    margin-top: -15px;
    margin-bottom: 10px;
  }
  #imgtopprodu {
    color: #fff;
    font-size: 25px;
    background-color: #000;
    text-align: center;
    width: 174%;
    margin-left: -37%;
    margin-top: -14.4%;
    animation-duration: 1s;
    animation-name: slidein2;
    font-family: Century Gothic;
  }
  #imgtopprodux {
    height: 48px;
  }

  @keyframes slidein {
    from {
      margin-left: 148.4%;
    }

    to {
      margin-left: -21.5%;
    }
  }
  @keyframes slidein2 {
    from {
      margin-left: 174%;
    }

    to {
      margin-left: -37%;
    }
  }

  @keyframes slidein3 {
    from {
      margin-left: -150%;
    }

    to {
      margin-left: -24%;
    }
  }

  #pricetopprod {
    font-size: 21px;
    color: orangered;
  }

  #btnvermastopprod {
    box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
    font-size: 16px;
    background-color: #000;
    text-align: center;
    font-family: Century Gothic;
  }

  #catprincipales {
    width: 148%;
    margin-left: -20%;
    height: 400px;
    border: none;
    margin-top: 18px;
    animation-duration: 1s;
    animation-name: slidecatprinc;
  }
  #imagestopcat {
    width: 95%;
    height: 240px;
  }

  #divcategoriasprincipalesizq {
    width: 100%;
    margin-left: -50%;
    margin-top: -50px;
    height: 45px;
    animation-duration: 1s;
    animation-name: slideizq;
  }
  #divcategoriasprincipalesder {
    width: 80%;
    margin-left: 50%;
    margin-top: -45px;
    height: 45px;
    animation-duration: 1s;
    animation-name: slideder;
  }
  #divcategoriasprincipalesizqp {
    color: #fff;
    background-color: #000;
    text-align: center;
    font-size: 22px;
    margin-left: 20%;
    font-family: Century Gothic;
  }
  #divcategoriasprincipalesderp {
    background-color: #000;
    color: #fff;
    text-align: center;
    font-size: 22px;
    font-family: Century Gothic;
  }
  @keyframes slidecatprinc {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: -20%;
    }
  }
  @keyframes slideizq {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: -50%;
    }
  }
  @keyframes slideder {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 50%;
    }
  }
  #tablaizq {
    width: 100.8%;
    margin-top: -18px;
  }
  #tablader {
    width: 97.5%;
    margin-top: -18px;
    margin-left: -70px;
    text-align: center;
  }
  #divcategoriasprincipalesizqmobil {
    display: none;
  }

  #divcategoriasprincipalesdermobil {
    display: none;
  }
  #catprincipalesizqmobil {
    display: none;
  }
  #catprincipalesdermobil {
    display: none;
  }
  #carouselExampleControls3 {
    display: none;
  }

  #carouselExampleControls4 {
    width: 350px;
    margin-top: -15px;
    margin-left: 20px;
  }
  #carouselExampleControls5 {
    width: 350px;
    margin-top: -15px;
  }
  #fotos_carruselmarcas1 {
    height: 240px;
    width: 350px;
  }
  #fotos_carruselmarcas2 {
    height: 240px;
   width: 350px;
  }
  #fotos_carruselmarcas3 {
    height: 240px;
    width: 350px;
  }
  #fotos_carruselmarcas4 {
    height: 240px;
    width: 350px;
  }
  #fotos_carruselmarcas5 {
    height: 240px;
    width: 350px;
  }
  #fotos_carruselmarcas6 {
    height: 240px;
    width: 350px;
  }
  #fotos_carruselmarcas7 {
    height: 240px;
    width: 350px;
  }
  #fotos_carruselmarcas8 {
    height: 240px;
    width: 350px;
  }

#modales1{
width: 1020px; 
height: 620px; 
margin-left: -250px;
}
#tablamodal{
  width: 900px;
}
#td1tablamodal{
  width: 60%;
}
#td2tablamodal{
  width: 40%;
}
#titmodtd2{
  margin-top:-200px;
}

#carouselExampleControls6{
  width: 100%;
  background-color: #cedadd56;
  margin-top:-14px;
}


  // modales------------

#modales1{
width: 1020px; 
height: 620px; 
margin-left: -250px;
}
#tablamodal{
  width: 900px;
}
#td1tablamodal{
  width: 60%;
}
#td2tablamodal{
  width: 40%;
}
#titmodtd2{
  margin-top:-200px;
}
#carouselExampleControls6{
  width: 100%;
  background-color: #cedadd56;
  margin-top:-14px;
}

#tit_socios{
width: 100%;
background-color: #cedadd56;
}
#p_tit_socios{
font-size: 26px;
color:#fff;
background-color: #000000e0;
font-family: Century Gothic;
}
#desc_socios{
  font-size: 20px;
  margin-left: 165px;
  margin-top:-140px;
}
.carousel .media img {
	width: 180px;
	height: 100%;
  margin-left:-68%;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 0 60px 0 60px ;
	position: absolute;
}
.carousel .overview{
	margin-left: 165px;
  font-size: 20px;
  margin-top:-13px;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #1c47e3;
}
.ejemplo-1 h2 {
transform: translateX(-200px);/*Desplazamos a la izquierda*/
opacity: 0;
transition: all 0.7s ease-in-out;
color: #fff;
position: absolute;
margin-top: -150px;
margin-left: 80px;
}
.ejemplo-1:hover #imagestopcat{
filter: blur(5px);
}


.card-img-top:hover{
  margin-top:8px;
  transform: scale(1.4);/*Damos un ligero zoom a la imagen*/
  transition: all 0.1s ease-in-out;
}

#contenido_modal{
    border:1px solid rgba(138,221,45,0);
    background-color: rgba(138,221,45,0);
    margin-left:-110.5%;
  }

  #botonagregar{
      box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
}
#tablaagregado{
  display: none;
}
}
//-------------------------------------------------------------------------------------------
.carousel .carousel-item {
	color: #999;
	overflow: hidden;
	min-height: 50px;
	font-size: 13px;
}
.carousel .carousel-indicators {
	bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin: 1px 3px;
	box-sizing: border-box;
}
.carousel-indicators li {	
	background: #e2e2e2;
	border: 4px solid #fff;
}
.carousel-indicators li.active {
	color: #fff;
	background: #1c47e3;    
	border: 5px double;    
}

.ejemplo-1 img {
transition: all 0.2s linear;
}
.ejemplo-1:hover img {
transform: scale(1.1);/*Damos un ligero zoom a la imagen*/
}
.ejemplo-1:hover h2{
opacity: 1;
transform: translateX(0px);/*Regresamos a las posiciones originales*/
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
  background-color: rgba(138,221,45,0);
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


.icon-btn{
    min-height:150px;
    background:#f5f5f5;
    float:left;
}

.icon-btn button{
    float:left;
    margin:10px;
}

.btn-google{
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
    margin-left:3%;
    font-size:26px;
    padding:0px 20px;
    color: #fff;
    background-color: #f06262;
    border:none;
    justify-content: center;
    align-items: center;
    display: flex;
    width:300px;
    height: 40px;
}

.btn-text{
    width:60%;
}

.btn-gradient i{
  font-size:30px;
  display:flex;
  justify-content:center;
  align-items:center;
}

/* Button Style 2 (Normal) */
.normal-icon{
    min-height: 100px;
    line-height: 100px;
    background:#e8e8e8;
}

.normal-icon a{
    margin:20px;
    border-radius:0;
}

/* Button Style 3 (Radius) */
.radius-icon{
    min-height: 100px;
    line-height:100px;
    background:#f5f5f5;
}

.radius-icon a{
    margin:20px;
    border-radius: 20px;
    font-size: 13px;
    width: 150px;
    font-weight:bold;
}

.btn-purple{
    padding: 0.375rem 0.75rem;
    background: #d733da;
    color: #FFF;
}


/* Button Style 4 (Circle) */
.circle-btn{
    min-height: 100px;
    line-height: 100px;
    background:#e8e8e8;
}

.circle-btn button{
    margin:10px;
    border-radius: 50%;
    height:80px;
    width:80px;
    font-size: 15px;
}

/* Button Style 5 (Size) */
.rounded-btn{
    min-height: 100px;
    line-height:100px;
    background:#f5f5f5;
}

.rounded-btn button{
    border-radius:12px;
    margin:10px;
}

/* Button Style 6 (Hover) */
.hover-btn{
    min-height: 100px;
    line-height: 100px;
    background:#e8e8e8;
}

.hover-btn button{
   margin:10px; 
   color:#FFF;
   padding:10px 40px;
}

.hover-btn button:hover{
    background:#5a5a5a;
}

.btn-one{
   background: #f11350;
}

.btn-two{
   background: #5863db;
}

.btn-three{
   background: #c41f26;
}

.btn-four{
   background: #58cadb;
}

/* Line Style 7 (Line) */
.line-btn{
    min-height: 100px;
    line-height:100px;
    background:#f5f5f5;
}

.line-btn button{
   margin:10px; 
   color:#FFF;
   padding:5px 120px;
}


/* Line Style 8 (Left Icon) */

.radius-style button{
    border-radius:30px;
}

.radius-btn{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}
// @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap');@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');:root{--font1: 'Heebo', sans-serif;--font2: 'Fira Sans Extra Condensed', sans-serif;--font3: 'Roboto', sans-serif}body{font-family: var(--font3);background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)}h2{font-weight: 900}.container-fluid{max-width: 1200px}.card{background: #fff;box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);border: 0;border-radius: 1rem}.card-img, .card-img-top{border-top-left-radius: calc(1rem - 1px);border-top-right-radius: calc(1rem - 1px)}.card h5{overflow: hidden;height: 56px;font-weight: 900;font-size: 1rem}.card-img-top{width: 100%;max-height: 180px;object-fit: contain;padding: 30px}.card h2{font-size: 1rem}.card:hover{transform: scale(1.05);box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)}.label-top{position: absolute;background-color: #8bc34a;color: #fff;top: 8px;right: 8px;padding: 5px 10px 5px 10px;font-size: .7rem;font-weight: 600;border-radius: 3px;text-transform: uppercase}.top-right{position: absolute;top: 24px;left: 24px;width: 90px;height: 90px;border-radius: 50%;font-size: 1rem;font-weight: 900;background: #ff5722;line-height: 90px;text-align: center;color: white}.top-right span{display: inline-block;vertical-align: middle}@media (max-width: 768px){.card-img-top{max-height: 250px}}.over-bg{background: rgba(53, 53, 53, 0.85);box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);backdrop-filter: blur(0.0px);-webkit-backdrop-filter: blur(0.0px);border-radius: 10px}.btn{font-size: 1rem;font-weight: 500;text-transform: uppercase;padding: 5px 50px 5px 50px}.box .btn{font-size: 1.5rem}@media (max-width: 1025px){.btn{padding: 5px 40px 5px 40px}}@media (max-width: 250px){.btn{padding: 5px 30px 5px 30px}}.btn-warning{background: none #f7810a;color: #ffffff;fill: #ffffff;border: none;text-decoration: none;outline: 0;box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);border-radius: 100px}.btn-warning:hover{background: none #ff962b;color: #ffffff;box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35)}.bg-success{font-size: 1rem;background-color: #f7810a !important}.bg-danger{font-size: 1rem}.price-hp{font-size: 1rem;font-weight: 600;color: darkgray}.amz-hp{font-size: .7rem;font-weight: 600;color: darkgray}.fa-question-circle:before{color: darkgray}.fa-plus:before{color: darkgray}.box{border-radius: 1rem;background: #fff;box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)}.box-img{max-width: 300px}.thumb-sec{max-width: 300px}@media (max-width: 576px){.box-img{max-width: 200px}.thumb-sec{max-width: 200px}}.inner-gallery{width: 60px;height: 60px;border: 1px solid #ddd;border-radius: 3px;margin: 1px;display: inline-block;overflow: hidden;-o-object-fit: cover;object-fit: cover}@media (max-width: 370px){.box .btn{padding: 5px 40px 5px 40px;font-size: 1rem}}.disclaimer{font-size: .9rem;color: darkgray}.related h3{font-weight: 900}footer{background: #212529;height: 80px;color: #fff}

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
.product-grid .product-sale-label {
  margin-left:30px;
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
  text-fill-color: transparent;
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


//ultimo
@import url('//fonts.googleapis.com/css?family=Bungee+Shade');
@import url('https://fonts.googleapis.com/css?family=Sarpanch:900');

$rotationAmt: 0;

body {
  background-color: rgba(138,221,45,0);
  display: grid;
  grid-template-areas: ". . ." ". text ." ". . .";
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  height: 100vh;
  width: 100vw;
  margin: 0;
  overflow: hidden;
}

h1 {
  transform: skew(#{$rotationAmt}deg) rotate(#{$rotationAmt}deg);
  grid-area: text;
  font-family: 'Sarpanch', sans-serif;
  font-size: 25px;
  margin: 0;
  padding: 30px;
  color: #030a06;
  text-shadow: 0.5vmin 0.5vmin 0 #c0e710, -0.5vmin -0.5vmin 0 #e71010;
}

</style>
