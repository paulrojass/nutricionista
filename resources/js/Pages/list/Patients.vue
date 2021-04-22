<template>
  <div class="col-lg-4">
    <div class="card card-custom card-stretch gutter-b">
      <div class="card-header border-0">
        <div class="d-flex align-items-center">
          <div class="symbol symbol-45 symbol-light mr-5">
            <span class="symbol-label">
              <inline-svg
              src=""
              class="h-50 align-self-center"
              ></inline-svg>
            </span>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <a
            :href="route('patients.show', patient.id)"
            class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
            >
            {{`${patient.first_name_1} ${patient.last_name_1}`}}
          </a>
          <span class="text-muted font-weight-bold">
            {{`${calcularEdad(patient.birth_date)} años`}}
          </span>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="mb-10">
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <em>{{patient.aspiration| truncate(20, '...') }}</em>
        </p>
        <p class="text-dark-50 m-0 pt-5 font-weight-normal">
          <strong>Ubicación: </strong>{{patient.city}}
        </p>
        <div class="my-2">
          <v-btn text small color="primary" :href="route('patients.show', patient.id)">Ver más</v-btn>
        </div>
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
