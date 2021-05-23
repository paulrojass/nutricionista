<template>
  <div >
    
    
    
    <b-row class="row">
      <div class="col-xl-12">
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
          @change="resetear()"
          >
          <option value="todos">Todos</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
          <option value="prospecto">Prospecto</option>
        </select>
      </div>
    </div>
    
    <div class="col-xl-4" v-if="params.status == 'activo'">
      <div class="form-group">
        <label>Filtrar por Diagnóstico</label>
        <select
        name="diagnostic"
        v-model="params.diagnostic"
        class="form-control "
        >
        <option value="todos">Todos</option>
        <option value="bajo_consumo_energetico" >Bajo cosumo energético</option>
        <option value="bajo_consumo_proteico">Bajo consumo proteico</option>
        <option value="bajo_consumo_carbohidratos" >Bajo consumo de carbohidratos</option>
        <option value="bajo_consumo_grasas_escenciales" >Bajo consumo de grasas escenciales</option>
        <option value="bajo_consumo_micronutrientes" >Bajo consumo de micronutrientes</option>
        <option value="alto_consumo_ultraprcesados" >Alto consumo de ultraprocesados</option>
        <option value="inadecuado_timming_ingestas">Inadecuando TIMMING de ingestas</option>
        <option value="esquema_hidratacion_inadecuado" >Esquea de hidratación inadecuado</option>
        <option value="dieta_alta_fodmaps" >Dieta alta en FODMAPS</option>
        <option value="excedente_calorico" >Excedente calórico</option>
      </b-form-group>
    </select>
  </div>
</div>
<div class="col-xl-4" v-if="params.status == 'activo'">
  <div class="form-group">
    <label>Filtrar por Plan de trabajo</label>
    <select
    name="workplan"
    v-model="params.workplan"
    class="form-control "
    >
    <option value="todos" selected>Todos</option>
    <option value="Dieta alta en proteinas">Dieta alta en proteinas</option>
    <option value="Déficit calórico">Déficit calórico</option>
    <option value="Superavit calórico">Superavit calórico</option>
    <option value="Ayuno intermitente">Ayuno intermitente</option>
    <option value="Dietas Keto">Dietas Keto</option>
    <option value="Dieta baja en FODMAPS">Dieta baja en FODMAPS</option>
    <option value="Medidas anti inflamatorias">Medidas anti inflamatorias</option>
    <option value="Deta muy baja en carbohidratos">Deta muy baja en carbohidratos</option>
    <option value="Esquema de suplementación">Esquema de suplementación</option>
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
  props: ['patients', 'status', 'diagnostic', 'workplan'],
  components: {
    PatientsList
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,
      items: this.patients,
      params: {
        workplan: this.workplan,
        diagnostic: this.diagnostic,
        status: this.status
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
    resetear() {
      if(this.params.status != 'activo'){
        this.params.workplan = 'todos'
        this.params.diagnostic = 'todos'
      }
    },
    getResults() {
      this.$inertia.get(route('patients.search-status'), this.params,
      {
        onSuccess: (response) => {
          //console.log(response)
        },
        onError: (response) =>{
          //console.log(response)
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
      return this.patients.length
    }
  }
};
</script>
