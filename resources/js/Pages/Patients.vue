<template>
  <div>
    <!--begin::Dashboard-->
    <!--begin::Row-->
    <div class="row mt-0 mt-lg-8">
      <div class="col-xl-12">
        <PatientsList
        v-for="patient in patients"
        :key="patient.id"
        :patient="patient"
        ></PatientsList>
      </div>
    </div>
    <!--end::Row-->
    <!--end::Dashboard-->
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "../src/core/services/store/breadcrumbs.module";
import PatientsList from "./list/Patients.vue";

export default {
    props: ['patients'],
    created() {
        console.log(this.patients)
    },
    components: {
        PatientsList
    },
/*
  data(){
      return {
          patients:[]
      }
  },
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
