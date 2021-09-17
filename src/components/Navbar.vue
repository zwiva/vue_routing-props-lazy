<template>
  <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand">V8</a
      ><button
        data-toggle="collapse"
        data-target="#navbarResponsive"
        class="navbar-toggler"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <!-- MENU DE NAVEGACION -->
        <ul class="nav navbar-nav ml-auto" id="menu-v8">
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
            <!-- <a href="/">portada</a> -->
            <router-link :to="{ name: 'Inicio' }">Portada</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
            <!-- <a href="/sobremi">sobre mí</a> -->
            <router-link :to="{ name: 'SobreMi' }">Sobre Mi</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
            <!-- <a href="/contacto">contacto</a> -->
            <router-link :to="{ name: 'Contacto' }">Contacto</router-link>
          </li>
          <li class="nav-item" role="presentation">
            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
            <!-- <a href="/post/1">último post</a> -->
            <router-link :to="{ name: 'LastPost' }">Ultimo post</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>