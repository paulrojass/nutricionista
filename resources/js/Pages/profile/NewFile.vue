<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      
      
      
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Adjuntar nuevo archivo de {{patient.first_name_1}} {{patient.first_name_2}}</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Agregue cualquier archivo de imágenes o documentos del paciente</span
        >
      </h3>
    </div>
    <div class="card-body pt-2 pb-0">
      <b-form @submit="submit" @reset="onReset" v-if="show">
        
        
        <!-- <input
        type="hidden"
        v-model="form.patient_id"
        id="patient_id"
        class="form-control"
        name="patient_id"
        /> -->
        
        <b-form-group id="group_file" label="Archivo:" label-for="file">
          
          <!-- Styled -->
          <b-form-file
          name="file"
          v-model="form.file"
          :state="Boolean(form.file)"
          placeholder="haga clic para agregar el archivo"
          drop-placeholder="Arrastre el archivo aquí..."
          required
          ></b-form-file>
          <div class="mt-3">seleccionado: {{ form.file ? form.file.name: '' }}</div>
        </b-form-group>
        
        
        <b-form-group id="group_name" label="nombre:" label-for="name">
          <b-form-input
          id="name"
          v-model="form.name"
          required
          placeholder="Ingrese un nombre"
          class="form-control"
          maxlength="20"
          ></b-form-input>
        </b-form-group>
        
        
        
        <b-form-group label="Descripción">
          <!-- <label>Descripción</label> -->
          <textarea
          v-model="form.description"
          class="form-control"
          name="description"
          required
          ></textarea>
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
import Layout from "../../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: 'Adjuntar archivo',
    }
  },
  props: ['patient'],
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
    form: this.$inertia.form({
      patient_id: this.patient.id,
      file: null,
      name: '',
      description: ''
    }),
    show: true,
  }
},
methods: {
  submit(evt) {
    evt.preventDefault()
    this.form.post(route('attachments.store'), this.form, {forceFormData: true})
  },
  onReset(evt) {
    evt.preventDefault()
    // Reset our form values
    this.form.file = ''
    this.form.name = ''
    this.form.description = ''
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
};
</script>
