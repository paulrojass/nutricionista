<template>
  <div class="row">
    <PatientsList
    v-for="patient in patients"
    :key="patient.id"
    :patient="patient"
    ></PatientsList>
  </div>
</template>

<script>
import PatientsList from "../list/Patients.vue"
import Layout from "../../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Pacientes - Crear Control`,
    }
  },
  props: ['patients'],
  components: {
    PatientsList
  }
};
</script>
