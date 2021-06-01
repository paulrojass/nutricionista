<template>
  <div class="col-lg-4">
    <div class="card card-custom card-stretch gutter-b">
      <!-- <div class="card-header border-0"></div> -->
      <div class="card-body pt-5 pr-5 pb-0 pl-5">
        <div class="d-flex align-items-center">
          <div class="symbol symbol-50 pr-2">
            <img :src="`/storage/avatars/${patient.avatar}`" alt="image" />
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <inertia-link
            :href="route('patients.show', patient.id)"
            class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
            >
            {{`${patient.first_name_1} ${patient.last_name_1}`}}
          </inertia-link>
          <span class="text-muted font-weight-bold">
            {{`${calcularEdad(patient.birth_date)} años`}}
          </span>
        </div>
      </div>
      <div class="mb-10">
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <em v-if="!patient.active">{{patient.aspiration| truncate(70, '...') }}</em>
            <label v-if="patient.active">
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
        </p>
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <strong>email: </strong>{{patient.email}}
        </p>
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <strong>teléfono: </strong>{{patient.phone}}
        </p>
      </div>
    </div>
    <div class="card-footer border-0 pt-0 pr-5 pb-5 pl-5">
      <div class="my-2 d-flex justify-content-center">
        <inertia-link v-if="this.$route().current() == 'patients.index'  || this.$route().current() == 'patients.search-status'" :href="route('patients.show', patient.id)"
        class="btn btn-primary2 btn-shadow-hover font-weight-bolder w-100 py-1"
        v-bind:class="{ 'btn-danger2': active }"
        >
        Ver más
        <!-- <b-button>Ver más</b-button> -->
      </inertia-link>
      
      <inertia-link v-if="this.$route().current() == 'controls.patients'" :href="$route('controls.create', [patient.id])"
      
      class="btn btn-primary2 btn-shadow-hover font-weight-bolder w-100 py-1"
      v-bind:class="{ 'btn-danger2': active }"
      >
      Crear Cita
    </inertia-link>
    
  </div>
</div>
</div>
</div>
</template>

<script>
import Layout from "../../src/view/layout/Layout"
export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Pacientes`,
    }
  },
  data() {
    return {
      'active' : this.patient.active
    }
  },
  props: ['patient'],
  methods: {
    calcularEdad(fecha) {
      var hoy = new Date()
      var cumpleanos = new Date(fecha)
      var edad = hoy.getFullYear() - cumpleanos.getFullYear()
      var m = hoy.getMonth() - cumpleanos.getMonth()
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--
      }
      return edad
    }
  }
};
</script>
