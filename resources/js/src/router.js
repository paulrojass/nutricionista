import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/panel",
      component: () => import("../Pages/Home.vue"),
      children: [
        {
          path: "/panel/pacientes",
          name: "patients",
          component: () => import("../Pages/Patients.vue")
        }
      ]
    },
  ],
  mode: "history"
});
