<template>
  <div class="col-lg-4">
    <div class="card card-custom card-stretch gutter-b">
      <!-- <div class="card-header border-0"></div> -->
      <div class="card-body p-5">
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
          <em v-if="patient.aspiration">{{patient.aspiration| truncate(70, '...') }}</em>
        </p>
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <strong>email: </strong>{{patient.email}}
        </p>
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <strong>teléfono: </strong>{{patient.phone}}
        </p>
      </div>
    </div>
    <div class="card-footer border-0 p-0 pb-5">
      <div class="my-2 d-flex justify-content-center">
        <inertia-link v-if="route().current('patients.index') == true" :href="route('patients.show', patient.id)">
          <b-button size="sm" pill variant="success">Ver más</b-button>
        </inertia-link>
        
        <inertia-link v-if="route().current('controls.patients') == true" :href="$route('controls.create', [patient.id])">
          <b-button size="sm" pill variant="success">Crear Cita</b-button>
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
