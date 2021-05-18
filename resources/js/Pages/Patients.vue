<template>
  <div >
    
    
    
    <b-row class="row" align-h="end">
      <div class="col-xl-8">
        <p class="pt-5 mt-5">
          {{patients.length}} pacientes
        </p>
      </div>
      <div class="col-xl-4">
        <div class="form-group">
          <label>Filtrar por estatus</label>
          <select
          name="status"
          v-model="params.status"
          class="form-control "
          >
          <option value="todos">Todos</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="prospecto">Prospecto</option>
        </select>
      </div>
    </div>
  </b-row>
  
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
import PatientsList from "./list/Patients.vue";
import Layout from "../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Pacientes`,
    }
  },
  props: ['patients', 'status'],
  components: {
    PatientsList
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,
      items: this.patients,
      params:{
        status : this.status,
      }
    }
  },
  watch: {
    params: {
      handler() {
        this.getResults();
      },
      deep: true
    }
  },
  methods: {
    getResults() {
      this.$inertia.get(route('patients.search-status'), this.params,
      {
        onSuccess: (response) => {
          console.log(response)
        },
        onError: (response) =>{
          console.log(response)
        }
      })
    },
    itemsForList() {
      return this.items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage,
      );
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
};
</script>
