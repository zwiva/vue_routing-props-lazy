<template>
  <div>
    <header
      class="masthead"
      :style="{ 'background-image': `url(${backgroundimage})` }"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div
              :class="{
                'site-heading': siteHeading,
                'post-heading': !siteHeading,
              }"
            >
              <h1>
                <strong>{{ title }}</strong>
              </h1>
              <h2 class="subheading">
                <strong>{{ subTitle }}</strong>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- CONTENIDO PARA LA VISTA DE PORTADA / INICIO -->
    <!-- <header
      class="masthead"
      style="background-image: url('assets/img/home-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1>V8</h1>
              <span class="subheading">Noticias y reseñas de automóviles</span>
            </div>
          </div>
        </div>
      </div>
    </header> -->

    <!-- CONTENIDO PARA LA VISTA DE 'SOBRE MÍ' -->
    <!-- <header
      class="masthead"
      
      style="background-image: url('assets/img/about-bg.jpg')">

      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">

            <div class="site-heading">
              <h1>Sobre mí</h1>
            </div>
          
          </div>
        </div>
      </div>
    </header> -->

    <!-- CONTENIDO PARA LA VISTA DE CONTACTO -->
    <!-- <header
      class="masthead"

      style="background-image: url('assets/img/contact-bg.jpg')">

      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">

            <div class="site-heading">
              <h1>Contacto</h1>
              <span class="subheading"></span>
            </div>

          </div>
        </div>
      </div>
    </header> -->

    <!-- CONTENIDO PARA LA VISTA DE POST -->
    <!-- <header
      class="masthead"

      style="background-image: url('/assets/img/chevrolet-blazer.jpg')">

      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">

            <div class="post-heading">
              <h1>
                <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
              </h1>
              <h2 class="subheading">
                <strong>Llega como la primera SUV deportiva de la marca</strong>
              </h2>
            </div>
          
          </div>
        </div>
      </div>
    </header> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    backgroundimage: { type: String },
    title: { type: String },
    subTitle: { type: String },
    siteHeading: { type: Boolean },
  },
};
</script>

<style>
</style>