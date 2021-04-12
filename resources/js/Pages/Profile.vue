<template>
  <div>
    <b-alert
      show
      variant="light"
      class="alert alert-custom alert-white alert-shadow fade show gutter-b"
    >
    <b-container class="bv-example-row">
      <b-row>
        <b-col col lg="2">
          <div class="symbol symbol-50 symbol-light mr-4">
            <span class="symbol-label">
              <img
                src="../../../public/media/svg/avatars/001-boy.svg"
                class="h-75 align-self-end"
                alt=""
              />
            </span>
          </div>
        </b-col>
        <b-col cols="12" lg="7">
          <h5 class="mt-0 font-weight-bolder text-dark">
            {{patient.first_name_1}} {{patient.first_name_2}}
          </h5>
          <p>
            {{patient.goal}}
          </p>
        </b-col>
        <b-col col lg="3">
          <a href="#" class="btn btn-info font-weight-bolder font-size-sm mr-3"
            >Editar historial</a
          >
        </b-col>
      </b-row>
    </b-container>
    </b-alert>

    <div class="row">
      <div class="col-lg-4">
        <div class="card card-custom card-stretch card-shadowless gutter-b">
          <!--begin::Header-->
          <div class="card-header border-0 pt-5">
            <div class="card-title font-weight-bolder">
              <div class="card-label">
                Anuncios
                <div class="font-size-sm text-muted mt-2">


                </div>
              </div>
            </div>
            <div class="card-toolbar">

            </div>
          </div>
          <div class="card-body">
          </div>
        </div>



                <div class="card card-custom card-stretch card-shadowless gutter-b">
                  <div class="card-header border-0 pt-5">
                    <div class="card-title font-weight-bolder">
                      <div class="card-label">
                        Nombre
                        <div class="font-size-sm text-muted mt-2">


                        </div>
                      </div>
                    </div>
                    <div class="card-toolbar">

                    </div>
                  </div>
                  <div class="card-body">
                  </div>
                </div>



      </div>
      <div class="col-lg-8">
        <div class="card card-custom card-stretch card-shadowless gutter-b">
          <div class="card-header border-0 pt-5">
            <div class="card-title font-weight-bolder">
              <div class="card-label">
                Notas
                <div class="font-size-sm text-muted mt-2">


                </div>
              </div>
            </div>
            <div class="card-toolbar">

            </div>
          </div>
          <div class="card-body">
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { SET_BREADCRUMB } from "../src/core/services/store/breadcrumbs.module";
import PatientsList from "./list/Patients.vue";
import Layout from "../src/view/layout/Layout"

export default {
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    metaInfo() {
      return {
        title: `Paciente ${patient.first_name_1} ${patient.last_name_1}`,
      }
    },
    props: ['patient'],
    components: {
        PatientsList
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
  // methods: {
  //   setActiveTab1(event) {
  //     this.tabIndex = this.setActiveTab(event);
  //   },
  //   setActiveTab2(event) {
  //     this.tabIndex2 = this.setActiveTab(event);
  //   },
  //   /**
  //    * Set current active on click
  //    * @param event
  //    */
  //   setActiveTab(event) {
  //     // get all tab links
  //     const tab = event.target.closest('[role="tablist"]');
  //     const links = tab.querySelectorAll(".nav-link");
  //     // remove active tab links
  //     for (let i = 0; i < links.length; i++) {
  //       links[i].classList.remove("active");
  //     }
  //
  //     // set current active tab
  //     event.target.classList.add("active");
  //
  //     // set clicked tab index to bootstrap tab
  //     return parseInt(event.target.getAttribute("data-tab"));
  //   }
  // }
};
</script>
