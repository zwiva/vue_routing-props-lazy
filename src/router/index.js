import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/inicio",
  },
  {
    path: "/",
    component: Inicio,
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio,
    meta: {
      header: true,
      title: "Chevrolet presenta la totalmente nueva Blazer",
      subTitle: "Llega como la primera SUV deportiva de la marca",
      backgroundimage: "./assets/img/home-bg.jpg",
      siteHeading: true,
    },
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: () => import("../views/SobreMi.vue"),
    meta: {
      header: true,
      title: "Sobre mí",
      subTitle: "",
      backgroundimage: "./assets/img/about-bg.jpg",
      siteHeading: true,
    },
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"),
    meta: {
      header: true,
      title: "Contacto",
      subTitle: "",
      backgroundimage: "./assets/img/contact-bg.jpg",
      siteHeading: true,
    },
  },
  {
    path: "/notfound",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
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
    component: () => import("../views/NotFound.vue"),
    redirect: "/notfound",
  },
  {
    path: "/post/",
    name: "Post",
    component: () => import("../views/Post.vue"),
    children: [
      {
        path: "1",
        component: () => import("../views/Articulo.vue"),
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
