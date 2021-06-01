<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom gutter-b">
      <div class="card-body">
        <!--begin::Details-->
        <div class="d-flex mb-9">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-lg-0 mt-3">
            <div class="symbol symbol-50 symbol-lg-120">
              <img :src="`/storage/avatars/${patient.avatar}`" alt="image" />
            </div>
            
            <!-- <div class="symbol symbol-50 symbol-lg-120 symbol-primary d-none">
              <span class="font-size-h3 symbol-label font-weight-boldest">
                JM
              </span>
            </div> -->
          </div>
          <!--end::Pic-->
          
          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div class="d-flex justify-content-between flex-wrap mt-1">
              <div class="d-flex mr-3">
                <a
                href="#"
                class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">
                {{patient.first_name_1}} {{patient.last_name_1}}
              </a>
              <!-- <a href="#">
              <i v-if="patient.active == 1" class="fa fa-user text-success font-size-h5" title="Activo"></i>
              <i v-else class="fa fa-user text-danger font-size-h5" title="Prospecto"></i>
            </a> -->
          </div>
          
          <div class="my-lg-0 my-3">
            <inertia-link
            :href="$route('controls.create', [patient.id])"
            class="btn btn-sm btn-info font-weight-bolder text-uppercase"
            >
            Crear cita
          </inertia-link>
          <inertia-link
            v-if="!patient.active"
            :href="route('patients.edit', patient.id)"
            class="btn btn-sm btn-info font-weight-bolder text-uppercase"
            >
            Cargar Historia
          </inertia-link>
          
          <inertia-link
          v-if="patient.active"
          :href="route('patients.show-history', patient.id)"
          class="btn btn-sm btn-info font-weight-bolder text-uppercase"
          >
          Ver Historial
        </inertia-link>
        <inertia-link
        v-if="patient.active"
        :href="route('patients.edit', patient.id)"
        class="btn btn-sm btn-info font-weight-bolder text-uppercase"
        >
        Editar Historial
      </inertia-link>
    </div>
  </div>
  <!--end::Title-->
  
  <!--begin::Content-->
  <div class="d-flex flex-wrap justify-content-between mt-3">
    <div class="d-flex flex-column flex-grow-1 pr-8">
      <div class="d-flex flex-wrap mb-4">
        <a
        href="#"
        class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
        ><i class="fa fa-envelope mr-2 font-size-lg"></i
          >{{patient.email}}
        </a>
        <a
        href="#"
        class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
        ><i class="fa fa-mobile mr-2 font-size-lg"></i>
        {{patient.phone}}
      </a>
      <a
      href="#"
      class="text-dark-50 text-hover-primary font-weight-bold"
      ><i class="flaticon2-placeholder mr-2 font-size-lg"></i>
      {{patient.city}}
    </a>
  </div>
  
  <span class="font-weight-bold text-dark-50">
    <!-- {{patient.aspiration}} -->
    <!-- {{patient.workplan}} -->
      <label>
        <strong>Diagnóstico: </strong>
        <span v-if="patient.bajo_consumo_energetico">bajo consumo energético, </span>
        <span v-if="patient.bajo_consumo_proteico">bajo consumo proteico, </span>
        <span v-if="patient.bajo_consumo_carbohidratos">bajo consumo carbohidratos, </span>
        <span v-if="patient.bajo_consumo_grasas_escenciales">bajo consumo grasas escenciales, </span>
        <span v-if="patient.bajo_consumo_micronutrientes">bajo consumo micronutrientes, </span>
        <span v-if="patient.alto_consumo_ultraprcesados">alto consumo ultraprocesados, </span>
        <span v-if="patient.inadecuado_timming_ingestas">inadecuado timming de ingestas, </span>
        <span v-if="patient.esquema_hidratacion_inadecuado">esquema de hidratación inadecuado, </span>
        <span v-if="patient.dieta_alta_fodmaps">dieta alta FODMAPS, </span>
        <span v-if="patient.excedente_calorico">excedente calórico. </span>
        <br />
        <strong>Plan de trabajo: {{patient.workplan}}</strong>
        <br />
      </label>
  </span>
</div>
</div>
<!--end::Content-->
</div>
<!--end::Info-->
</div>
<!--end::Details-->
</div>
<!--end::Item-->
</div>

<div v-if="patient.active">
  
  <div class="row">
    <div class="col-lg-4">
      <WidgetAdvertising :nextControl="nextControl"></WidgetAdvertising>
    </div>
    <div class="col-lg-8">
      <WidgetNotes
      :patient="patient"
      ></WidgetNotes>
    </div>
  </div>
  <!--end::Row-->
  <!--begin::Row-->
  <div class="row">
    <div class="col-lg-12">
      <WidgetFiles
      :patient="patient"
      ></WidgetFiles>
    </div>
  </div>
</div>

</div>
</template>

<script>
import Layout from "../src/view/layout/Layout"
import { mapGetters } from "vuex"
import WidgetNotes from "./profile/Notes"
import WidgetAdvertising from "./profile/Advertising"
import WidgetFiles from "./profile/Files"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Paciente ${this.patient.first_name_1} ${this.patient.last_name_1}`,
    }
  },
  props: ['patient', 'nextControl'],
  components: {
    WidgetNotes,
    WidgetAdvertising,
    WidgetFiles,
  },
  computed: {
    //...mapGetters(["currentUserPhoto"])
  },
  data() {
    return {};
  },
};
</script>
