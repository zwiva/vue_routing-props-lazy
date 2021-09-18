import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/inicio", // es la raiz
  },
  {
    path: "/",
    component: Inicio,
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio, // no lazy porque es la raiz
    meta: {
      header: true,
      title: "Chevrolet presenta la totalmente nueva Blazer",
      subTitle: "Llega como la primera SUV deportiva de la marca",
      backgroundimage: "./assets/img/home-bg.jpg",
      siteHeading: true,
    },
    alias: ["/home", "/portada"],
  },
  { path: "/portada", redirect: "/inicio" },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: () => import("../views/SobreMi.vue"), //lazy
    meta: {
      header: true,
      title: "Sobre mí",
      subTitle: "",
      backgroundimage: "./assets/img/about-bg.jpg",
      siteHeading: true,
    },
    alias: ["/acerca"],
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"), //lazy
    meta: {
      header: true,
      title: "Contacto",
      subTitle: "",
      backgroundimage: "./assets/img/contact-bg.jpg",
      siteHeading: true,
    },
    alias: ["/contactarme"],
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"), //lazy
    meta: {
      header: true,
      title: "La página que busca no existe",
      subTitle: "",
      backgroundimage: "./assets/img/chevrolet-blazer.jpg",
      siteHeading: true,
    },
  },
  {
    path: "*",
    redirect: "/notfound",
  },
  {
    path: "/post/",
    name: "Post",
    component: () => import("../views/Post.vue"), //lazy
    children: [
      {
        path: "1",
        component: () => import("../views/Articulo.vue"), //lazy
        name: "LastPost",
        meta: {
          header: true,
          title: "Chevrolet presenta la totalmente nueva Blazer",
          subTitle: "Llega como la primera SUV deportiva de la marca",
          siteHeading: false,
          backgroundimage: "./../assets/img/chevrolet-blazer.jpg",
        },
      },
    ],
    redirect: "/notfound",
  },
  {
    path: "/administrador",
    name: "Administrador",
    children: [
      {
        path: "simple", // mediante url, no boton de navbar
        name: "administradorsimple",
        meta: {
          header: true,
          title: "Bienvenido a la pagina de administración",
          subTitle: "",
          siteHeading: true,
          backgroundimage: "./../assets/img/maintenance.jpeg",
        },
      },
      {
        path: "avanzado", // mediante url, no boton de navbar
        name: "administradoravanzado",
        meta: {
          header: true,
          title:
            "Esta pagina de administración esta en construcción. Intente como administrador simple",
          subTitle: "",
          siteHeading: true,
          backgroundimage: "./../assets/img/maintenance.jpeg",
        },
      },
    ],
    redirect: "/notfound", // si escribe /administrador o /administrador/ 
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
