<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">Editar Plan</span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('plans.index', plan.city_id)" class="btn btn-primary font-weight-bolder font-size-sm">
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
      
      <b-form-group id="price-group" label="Price:" label-for="price">
        <b-form-input
        id="price"
        v-model="form.price"
        required
        placeholder="Ingrese un precio"
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
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: 'Editar Plan',
    }
  },
  props: ['plan'],
  data() {
    return {
      form: {
        name: this.plan.name,
        price: this.plan.price
      },
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$inertia.patch(route('plans.update', this.plan.id), this.form)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.plan.price = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>
