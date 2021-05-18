<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Nuevo Plan de Ciudad {{city.name}}</span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('plans.index', city.id)" class="btn btn-primary font-weight-bolder font-size-sm">
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
      
      <b-form-group id="price-group" label="Precio:" label-for="price">
        <b-form-input
        id="price"
        v-model="form.price"
        required
        placeholder="Ingrese el precio"
        ></b-form-input>
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
  props: ['city'],
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: 'Crear Plan',
    }
  },
  data() {
    return {
      form: {
        city_id: this.city.id,
        name: '',
        price: ''
      },
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$inertia.post(route('plans.store', this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.price = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>
