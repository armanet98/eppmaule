<template>
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
                  id="logocardimg"
                  src="../assets/logoMutual.png"
                /><br />
              </div>
              <div id="cuerpoprodtop" class="card-body">
                <h5 id="pricetopprod" class="card-title">
                  ${{ priceprod[0] }} (+iva)
                </h5>
                <p class="card-text">{{ nomproducts[0] }}</p>
                <a
                  id="btnvermastopprod"
                  @click="addProductCar(idprod[0])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[1])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop2"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[2])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop3"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[3])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop4"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[4])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop5"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[5])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop6"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[6])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop7"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[7])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop8"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[8])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop9"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[9])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop10"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[10])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop11"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
                  @click="addProductCar(idprod[11])"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop12"
                  ><i style="font-size: 20px" class="eye icon"></i>Detalles</a
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
          <div
            class="modal-content"
            id="modales1" 
          >
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {{ nomproducts[0] }}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table id="tablamodal">
                <tr>
                  <td id="td1tablamodal">
                    <img
                      id="imgmodaltd1"
                      style="height: 500px"
                      :src="API_URL + urlimgs[0]"
                      class="card-img-top"
                      alt="..."
                    />
                  </td>
                  <td id="td2tablamodal">
                    <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[0] }}<br /><br />
                     <div class="dropdown">
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[1] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[1]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[1] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop3"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[2] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[2]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[2] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop4"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[3] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[3]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[3] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop5"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[4] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[4]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[4] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop6"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[5]}}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[5]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[5] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop7"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[6] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[6]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[6] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop8"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[7] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[7]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[7] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop9"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[8] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[8]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[8] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop10"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[9] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[9]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[9] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop11"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[10] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[10]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[10] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop12"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" id="modales1">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              {{ nomproducts[11] }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <table id="tablamodal">
              <tr>
                <td id="td1tablamodal">
                  <img
                    id="imgmodaltd1"
                    style="height: 500px"
                    :src="API_URL + urlimgs[11]"
                    class="card-img-top"
                    alt="..."
                  />
                </td>
                <td id="td2tablamodal" >
                  <h2 id="titmodtd2" >Descripción Del Producto</h2>
                    <br />{{ descripciontopproducts[11] }}<br /><br />
                    <div class="ui selection dropdown">
                      <input type="hidden" name="gender" />
                      <i class="dropdown icon"></i>
                      <div class="default text">Gender</div>
                      <div class="menu">
                        <div class="item" data-value="1">Male</div>
                        <div class="item" data-value="0">Female</div>
                      </div>
                    </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modales ------------------------------------------------------------ -->
</template>

<script>
import Drop from "../views/dropdowns.vue"
import "../../public/assets/css/fontawesome.css";
import "../../public/assets/css/templatemo-edu-meeting.css";
import "../../public/assets/css/owl.css";
import "../../public/assets/css/lightbox.css";
import { API_URL } from "../utils/constants";
import { getCartApi } from "../api/cart";
import { getPoductsCategory } from "../api/product";
import { addProductCarApi } from "../api/cart";
import { ref, onMounted, watchEffect } from "vue";
import { getPoductsxNom } from "../api/product";
export default {
    name:"Top-products",
    components:{
        Drop,
    },
    setup() {
    let contador = 0;
    watchEffect(async () => {
      contador;
    });

    let products = ref({});
    let prod = [];
    let idprod = [];
    let urlimgs = [];
    let priceprod = [];
    let nomproducts = [];
    let descripciontopproducts = [];

    onMounted(async () => {
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
      console.log("descripciontop", descripciontopproducts);

      // -------------------- id products -------------------------
      for (let index = 0; index < products.value.data.length; index++) {
        idprod.push(products.value.data[index].id);
      }
      console.log("idtop",idprod);
      // -------------------- id products-------------------------

      // -------------------- url imagenes -------------------------

      for (let index = 0; index < products.value.data.length; index++) {
        urlimgs.push(
          products.value.data[index].attributes.image.data.attributes.url
        );
      }
      console.log("urltop",urlimgs);

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
      console.log("pricetop",priceprod);
      // -------------------- price products-------------------------
    });

    return {
      descripciontopproducts,
      priceprod,
      idprod,
      nomproducts,
      urlimgs,
      API_URL,
      products,
      prod,
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
    margin-top: 26.8%;
    padding: 0;
    box-sizing: border-box;
    width: 123.5%;
    margin-left: -11.5%;
    animation-duration: 1s;
    animation-name: slidein3;
  }

  .carousel-control-prev {
    display: none;
  }
  .carousel-control-next {
    display: none;
  }

  #fotos_carrusel {
    width: 100%;
    height: 200px;
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
    margin-left: 87%;
    margin-top: -5%;
    height: 30px;
    position: absolute;
  }
  .carousel-control-prev_ {
    background-color: #e1e1e1;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -20px;
    margin-top: -5%;
    height: 30px;
    position: absolute;
  }

  #carouselExampleControls3 {
    width: 110%;
    height: 100%;
    margin-left: -0px;
    margin-top: -15px;
    animation-duration: 1s;
    animation-name: slidein;
  }
  #cartitas {
    width: 600px;
    height: 380px;
    border-radius: 15px;
    margin-top: 6px;
  }

  #imagestopcatarriba {
    width: 95%;
    margin-bottom: -10px;
  }
  #imagestopcatabajo {
    width: 95%;
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
    margin-left: 36%;
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
    margin-left: -14.5px;
    margin-top: 10px;
  }
  #catprincipalesdermobil {
  }
}

//------------ hd ----------------
@media screen and (min-width: 1024px) and (max-width: 1366px) {
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
    margin-top: -15.7%;
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
    height: 180px;
  }

  #divcategoriasprincipalesizq {
    width: 100%;
    margin-left: -50%;
    margin-top: -34px;
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
    width: 100%;
    border: 1px solid black;
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
}

//------------full hd ----------------
@media screen and (min-width: 1920px) {
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
    margin-top: 12%;
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
    margin-top: -3.63%;
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
    margin-top: -34px;
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
    width: 100%;
    border: 1px solid black;
    margin-top: 10px;
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
    width: 400px;
    margin-top: -15px;
    margin-left: 20px;
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
}

//------------ 1600x900 ----------------
@media screen and (min-width: 1367px) and (max-width: 1600px) {
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
    margin-top: -15.7%;
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
    height: 180px;
  }

  #divcategoriasprincipalesizq {
    width: 100%;
    margin-left: -50%;
    margin-top: -34px;
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
    width: 99%;
    border: 1px solid black;
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
}
</style>
