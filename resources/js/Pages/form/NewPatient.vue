<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      
      
      
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Nuevo Paciente</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Ingrese la informacíon básica para registrar un paciente</span
        >
      </h3>
    </div>
    <div class="card-body pt-2 pb-0">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="form-group row">
        <b-form-group id="input-group-1" label="Primer nombre:" label-for="input-1" class="col-lg-6">
          <b-form-input
          id="input-1"
          v-model="form.first_name_1"
          required
          placeholder="Ingrese un nombre"
          ></b-form-input>
        </b-form-group>
        
        
        <b-form-group id="input-group-2" label="Segundo nombre:" label-for="input-2" class="col-lg-6">
          <b-form-input
          id="input-2"
          v-model="form.first_name_2"
          placeholder="Ingrese un nombre"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-3" label="Primer apellido:" label-for="input-3" class="col-lg-6">
          <b-form-input
          id="input-3"
          v-model="form.last_name_1"
          required
          placeholder="Ingrese un apellido"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-4" label="Segundo apellido:" label-for="input-4" class="col-lg-6">
          <b-form-input
          id="input-4"
          v-model="form.last_name_2"
          placeholder="Ingrese un apellido"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-date" label="Fecha de nacimiento:" label-for="date" class="col-lg-6">
          <b-form-input
          :type="`date`"
          id="date"
          v-model="form.birth_date"
          required
          ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-5" label="Teléfono:" label-for="input-5" class="col-lg-6">
          <b-form-input
          id="input-5"
          v-model="form.phone"
          required
          placeholder="ej. 123456789"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group
        id="input-group-6"
        label="Correo electónico:"
        label-for="input-6"
        required
        description="El campo email debe ser válido."
        class="col-md-6"
        >
        <b-form-input
        id="input-6"
        v-model="form.email"
        type="email"
        required
        placeholder="ej: usuario@correo.com"
        class="col-md-6"
        ></b-form-input>
      </b-form-group>
      </div>
      <b-form-group>
        <b-button type="submit" variant="primary">Guardar</b-button>
        <b-button type="reset" variant="danger">Borrar</b-button>
      </b-form-group>
    </b-form>
  </div>
  
  
</div>
</template>

<script>
import { SET_BREADCRUMB } from "../../src/core/services/store/breadcrumbs.module";
import Layout from "../../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: 'Crear Paciente',
    }
  },
  props: ['cities'],
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
      first_name_1: '',
      first_name_2: '',
      last_name_1: '',
      last_name_2: '',
      birth_date: '',
      phone: '',
      email: ''
    },
    show: true,
  }
},
methods: {
  setActiveTab1(event) {
    this.tabIndex = this.setActiveTab(event);
  },
  setActiveTab2(event) {
    this.tabIndex2 = this.setActiveTab(event);
  },
  /**
  * Set current active on click
  * @param event
  */
  setActiveTab(event) {
    // get all tab links
    const tab = event.target.closest('[role="tablist"]');
    const links = tab.querySelectorAll(".nav-link");
    // remove active tab links
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    
    // set current active tab
    event.target.classList.add("active");
    
    // set clicked tab index to bootstrap tab
    return parseInt(event.target.getAttribute("data-tab"));
  },
  onSubmit(evt) {
    evt.preventDefault()
    this.$inertia.post(route('patients.store', this.form))
  },
  onReset(evt) {
    evt.preventDefault()
    // Reset our form values
    this.form.first_name_1 = ''
    this.form.first_name_2 = ''
    this.form.last_name_1 = ''
    this.form.last_name_2 = ''
    this.form.birth_date = ''
    this.form.email = ''
    this.form.phone = ''
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
};
</script>
