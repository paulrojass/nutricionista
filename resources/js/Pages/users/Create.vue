<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Nuevo Usuario</span
        >
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('users.index')" class="btn btn-primary font-weight-bolder font-size-sm">
        volver
      </inertia-link>
    </div>
  </div>
  <div class="card-body pt-2 pb-0">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-name" label="Nombre:" label-for="name">
        <b-form-input
        id="name"
        v-model="form.name"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
      id="input-email" label="Correo electrónico:" label-for="email">
      <b-form-input
      id="email"
      v-model="form.email"
      type="email"
      required
      ></b-form-input>
      <div v-if="errors.email" tabindex="-1" id="fieldset-1__BV_feedback_invalid_" role="alert" aria-live="assertive" aria-atomic="true" class="d-block invalid-feedback">Este email ya existe</div>
    </b-form-group>
    
    <!-- <div class="form-group">
    <label>Rol</label>
    <select
    name="role"
    v-model="form.role"
    class="form-control form-control-solid form-control-lg"
    >
    <option value="">Selecccionar</option>
    <option value="1">Administrador</option>
    <option value="1">Usuario</option>
  </select>
</div> -->





<b-form-group>
  <b-button type="submit" variant="primary">Guardar</b-button>
  <b-button type="reset" variant="danger">Borrar</b-button>
</b-form-group>
</b-form>
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
      title: 'Crear usuario',
    }
  },
  props: {
    errors: Object,
  },
  /*
  mounted() {
  this.$store.dispatch(SET_BREADCRUMB, [{ title: "Patients" }]);
  axios.get('patients').then((response) => {
  console.log(response)
  this.patients = response.data;
});
console.log('Component mounted.')
},
*/
data() {
  return {
    form: {
      name: '',
      email: ''
    },
    show: true,
  }
},
methods: {
  onSubmit(evt) {
    evt.preventDefault()
    this.$inertia.post(route('users.store', this.form))
  },
  onReset(evt) {
    evt.preventDefault()
    // Reset our form values
    this.form.name = ''
    this.form.email = ''
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
};
</script>
