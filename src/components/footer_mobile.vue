<template>

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
</template>

<script>
export default {
    name:"Footer_mobile"
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1px) and (max-width: 768px) {
#footercito{
opacity: 1;
}
}

//------------ hd ----------------
@media screen and (min-width: 1024px) and (max-width: 1366px) {
  .d-flex.justify-content-between.p-4.text-white{
    height:30px;
  }
 #footercito{
  margin-top:70px;
}
 #logo{
    width:100px;
  }
  #redes_sociales{
    margin-left: 37%;
    font-size: 22px;
    margin-top: -10px;
  }
  .text-white.me-4:hover{
    background-color: rgba(0, 255, 149, 0.507);
  }
}

//------------full hd ----------------
@media screen and (min-width: 1920px) {
  .d-flex.justify-content-between.p-4.text-white{
    height:35px;
  }
  #footercito{
  margin-top:-10px;
}
  #logo{
    width:100px;
  }
  #redes_sociales{
    margin-left: 37%;
    font-size: 30px;
    margin-top:-10px;
  }
  .text-white.me-4:hover{
    background-color: rgba(0, 255, 149, 0.507);
  }
  #Copyright{
    height: 40px;
  }
}

//------------ 1600x900 ----------------
@media screen and (min-width: 1367px) and (max-width: 1600px) {
  .d-flex.justify-content-between.p-4.text-white{
    height:35px;
  }
#footercito{
  margin-top:60px;
}
 #logo{
    width:100px;
  }
  #redes_sociales{
    margin-left: 37%;
    font-size: 30px;
    margin-top: -10px;
  }
  .text-white.me-4:hover{
    background-color: rgba(0, 255, 149, 0.507);
  }
}
</style>