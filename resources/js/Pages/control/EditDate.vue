<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Cambio de fecha del control de {{control.patient.first_name_1}} {{control.patient.last_name_1}}</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Ingrese la informacion solicitada para el registro del control</span>
      </h3>
      
      <div class="card-toolbar">
        <inertia-link
        :href="$route('controls.index')" class="btn btn-primary font-weight-bolder font-size-sm">
        volver
      </inertia-link>
    </div>
    
  </div>
  <!-- end::Header -->
  <div class="card-body pt-2 pb-0">
    <form class="form" @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="row">
        <div class="col-md-6">
          <b-form-group id="input-date" label="Fecha:" label-for="date">
            <b-form-input
            :type="`date`"
            id="date"
            name="dante"
            v-model="form.date"
            required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6">
          <b-form-group id="input-time" label="Hora:" label-for="time">
            <b-form-input
            :type="`time`"
            id="time"
            name="time"
            v-model="form.time"
            required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <b-form-group>
        <b-button type="submit" variant="primary">Guardar</b-button>
        <b-button type="reset" variant="danger">Borrar</b-button>
      </b-form-group>
    </form>
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
      title: 'Editar fecha del Control',
    }
  },
  props: ['control'],
  data() {
    return {
      form: {
        date: this.control.date,
        time: this.control.time
      },
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$inertia.put(route('controls.update', this.control.id), this.form)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.date = ''
      this.form.time = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>
