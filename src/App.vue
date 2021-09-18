<template>
  <div>
    <Navbar />
    <Header
      v-if="$route.meta.header"
      :title="$route.meta.title"
      :subTitle="$route.meta.subTitle"
      :backgroundimage="$route.meta.backgroundimage"
      :siteHeading="$route.meta.siteHeading"
    />

    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <!-- <router-view ></router-view> -->

    <transition name="mi-transicion" mode="out-in">
      <!-- <transition name="mi-transicion" mode="in-out"> -->
      <router-view></router-view>
    </transition>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Header,
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#menu-v8 a {
  text-shadow: 1px 1px #000;
}

.mi-transicion-enter-active,
.mi-transicion-leave-active {
  /* imperceptible: */
  /* transition: opacity 0.1s; */
  transition: opacity 0.5s;
}
.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
}
</style>
