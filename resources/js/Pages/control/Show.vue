<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <inertia-link
        :href="route('patients.show', control.patient.id)"
        class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">
        <span class="card-label font-weight-bolder text-dark">
          Control de {{control.patient.first_name_1}} {{control.patient.last_name_1}}
        </span>
      </inertia-link>
      <span class="text-muted mt-3 font-weight-bold font-size-sm">
        información detallada del Control
      </span>
    </h3>
    <div class="card-toolbar">
      <inertia-link
      :href="$route('controls.edit-date', control.id)" class="btn btn-primary font-weight-bolder font-size-sm mr-1">
      editar fecha
    </inertia-link>
    
    <inertia-link
    :href="$route('patients.show', control.patient.id)" class="btn btn-primary font-weight-bolder font-size-sm mr-1">
    Ir al perfil
  </inertia-link>
  <inertia-link
  :href="$route('controls.index')" class="btn btn-primary font-weight-bolder font-size-sm">
  volver al listado
</inertia-link>
</div>
</div>
<!-- end::Header -->
<div class="card-body pt-2 pb-0">
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Datos de paciente:
    </div>
    <div class="line-height-md">
      Nombre: {{control.patient.first_name_1}} {{control.patient.first_name_2}} {{control.patient.last_name_1}} {{control.patient.last_name_2}}
      <br />
      fecha de nacimiento: {{control.patient.birth_date|formatDate}}
      <br />
      Telefono: <strong> {{control.patient.phone}}</strong>
    </div>
  </div>
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Detalles de la consulta:
    </div>
    <div class="line-height-md">
      fecha y hora: <strong>{{control.date | formatDate}}, {{control.time}}</strong>
      <br />
      Tipo de consulta: {{control.plan.name}} ({{control.city_name}})
      <br />
      Precio: {{control.plan.city.currency}} {{control.plan.price}}
      <br />
      <p v-if="control.agreement_name && control.agreement_price">Convenio: {{control.agreement_name}} - precio: {{control.agreement_price}}</p>
      <p v-else>Sin convenio</p>
    </div>
  </div>
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Estado de la consulta:
    </div>
    <div class="row">
      <div class="col-xl-12">
        <h4>
          <b-badge class="mr-1" :class="`control-${control.status}`">
            <span style="color:white">
              {{this.tipo[control.status]}}
            </span>
          </b-badge>
        </h4>
        <inertia-link
        :href="$route('controls.edit', control.id)" class="btn btn-primary font-weight-bolder font-size-sm mr-1">
        Cambiar estado
      </inertia-link>
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
      title: 'Control',
    }
  },
  data(){
    return {
      tipo: {
        flamenco: 'Agendado sin confirmar',
        lavanda: 'Confirmado',
        albahaca: 'Pagó',
        naranja: 'Pidió cambio',
        rojo: 'No llegó / Canceló',
        verde: 'Se le entregó el plan o ajustes'
      }
    }
  },
  props: ['control','cities'],
  methods: {
    getPlans(){
      if(this.form.city != null) {
        return this.plans = this.cities[this.form.city].plans
      }
      return this.plans = []
    },
    habilitado(v){
      if(v === '' || v === null) return 0
      else return 1
    },
    extranjero(v){
      let c = 'Extranjero (online)'
      this.cities.forEach((city) => {
        if (v == city.name) {
          c = city.name
        }
      })
      return c
    },
    /**
    * Set current active on click
    * @param event
    */
    
  }
};
</script>
