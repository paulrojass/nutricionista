<template>
  <div >
    <div
    class="row"
    id="patient-list"
    :items="items"
    :per-page="perPage"
    :current-page="currentPage">
    <PatientsList
    v-for="patient in itemsForList()"
    :key="patient.id"
    :patient="patient">
    ></PatientsList>
  </div>
  
  <div>
    <b-pagination
    v-model="currentPage"
    :total-rows="rows"
    :per-page="perPage"
    aria-controls="patient-list"
    ></b-pagination>
  </div>
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
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,
      items: this.patients
    }
  },
  methods: {
    itemsForList() {
      return this.items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    }
  },
  computed: {
    rows() {
      console.log(this.items.length)
      return this.items.length
    }
  }
};
</script>
