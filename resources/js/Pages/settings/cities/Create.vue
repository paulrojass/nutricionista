<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Nueva Ciudad</span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('cities.index')" class="btn btn-primary font-weight-bolder font-size-sm">
        volver
      </inertia-link>
    </div>
  </div>
  <div class="card-body pt-2 pb-0">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="name-group" label="Nombre:" label-for="name">
        <b-form-input
        id="name"
        v-model="form.name"
        required
        placeholder="Ingrese un nombre"
        ></b-form-input>
      </b-form-group>
      
      <b-form-checkbox
      id="online"
      v-model="form.online"
      name="online"
      value="1"
      unchecked-value="0"
      >
      ¿Online?
    </b-form-checkbox>
    
    
    <b-form-group
    class="pt-5"
    id="currency-group" label="Moneda:" label-for="currency">
    <select
    name="currency"
    v-model="form.currency"
    class="form-control"
    required
    >
    <option value="COP">Peso colombiano (COP)</option>
    <option value="USD">Dólar (USD)</option>
  </select>
</b-form-group>

<b-form-group>
  <b-button type="submit" variant="primary">Guardar</b-button>
  <b-button type="reset" variant="danger">Borrar</b-button>
</b-form-group>
</b-form>
</div>
</div>
</template>

<script>
import Layout from "../../../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: 'Crear Ciudad',
    }
  },
  data() {
    return {
      form: {
        name: '',
        online: '',
        currency: 'COP'
      },
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$inertia.post(route('cities.store', this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.online = ''
      this.form.currency = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>
