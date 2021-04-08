<template>
    <layout>
    <!--begin::Dashboard-->
    <!--begin::Row-->
    <div class="row mt-0 mt-lg-8">
            <PatientsList
            class="col-lg-4"
            v-for="patient in patients"
            :key="patient.id"
            :patient="patient"
            ></PatientsList>
    </div>
    <!--end::Row-->
    <!--end::Dashboard-->
    </layout>
</template>

<script>
import { SET_BREADCRUMB } from "../src/core/services/store/breadcrumbs.module";
import PatientsList from "./list/Patients.vue";
import Layout from "../src/view/layout/Layout"

export default {
    props: ['patients'],
    created() {
        console.log(this.patients)
    },
    components: {
        PatientsList
    },
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    metaInfo() {
      return {
        title: `Panel de Inicio`,
      }
    },
/*
  mounted() {
      this.$store.dispatch(SET_BREADCRUMB, [{ title: "Patients" }]);
      axios.get('patients').then((response) => {
          console.log(response)
          this.patients = response.data;
      });
      console.log('Component mounted.')
  },
*/
  methods: {
    setActiveTab1(event) {
      this.tabIndex = this.setActiveTab(event);
    },
    setActiveTab2(event) {
      this.tabIndex2 = this.setActiveTab(event);
    },
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab(event) {
      // get all tab links
      const tab = event.target.closest('[role="tablist"]');
      const links = tab.querySelectorAll(".nav-link");
      // remove active tab links
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      return parseInt(event.target.getAttribute("data-tab"));
    }
  }
};
</script>
