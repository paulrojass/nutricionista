<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      
      
      
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Adjuntar nuevo archivo de {{patient.first_name_1}} {{patient.first_name_2}}</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Para agregar un archivo debe ingresar ademas el nombre y la descripción</span
        >
      </h3>
    </div>
    <div class="card-body pt-2 pb-0">
      <b-form @submit="submit" @reset="onReset" v-if="show">
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_0" label="Archivo:" label-for="file_0">
              
              <!-- Styled -->
              <b-form-file
              name="file_0"
              v-model="form.file_0"
              :state="Boolean(form.file_0)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_0" label="nombre:" label-for="name_0">
              <b-form-input
              id="name_0"
              v-model="form.name_0"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_0" label="Descripción:" label-for="description_0">
              <b-form-input
              id="description_0"
              v-model="form.description_0"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_1" label="Archivo:" label-for="file_1">
              
              <!-- Styled -->
              <b-form-file
              name="file_1"
              v-model="form.file_1"
              :state="Boolean(form.file_1)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_1" label="nombre:" label-for="name_1">
              <b-form-input
              id="name_1"
              v-model="form.name_1"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_1" label="Descripción:" label-for="description_1">
              <b-form-input
              id="description_1"
              v-model="form.description_1"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_2" label="Archivo:" label-for="file_2">
              
              <!-- Styled -->
              <b-form-file
              name="file_2"
              v-model="form.file_2"
              :state="Boolean(form.file_2)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_2" label="nombre:" label-for="name_2">
              <b-form-input
              id="name_2"
              v-model="form.name_2"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_2" label="Descripción:" label-for="description_2">
              <b-form-input
              id="description_2"
              v-model="form.description_2"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_3" label="Archivo:" label-for="file_3">
              
              <!-- Styled -->
              <b-form-file
              name="file_3"
              v-model="form.file_3"
              :state="Boolean(form.file_3)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_3" label="nombre:" label-for="name_3">
              <b-form-input
              id="name_3"
              v-model="form.name_3"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_3" label="Descripción:" label-for="description_3">
              <b-form-input
              id="description_3"
              v-model="form.description_3"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_4" label="Archivo:" label-for="file_4">
              
              <!-- Styled -->
              <b-form-file
              name="file_4"
              v-model="form.file_4"
              :state="Boolean(form.file_4)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_4" label="nombre:" label-for="name_4">
              <b-form-input
              id="name_4"
              v-model="form.name_4"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_4" label="Descripción:" label-for="description_4">
              <b-form-input
              id="description_4"
              v-model="form.description_4"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_5" label="Archivo:" label-for="file_5">
              
              <!-- Styled -->
              <b-form-file
              name="file_5"
              v-model="form.file_5"
              :state="Boolean(form.file_5)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_5" label="nombre:" label-for="name_5">
              <b-form-input
              id="name_5"
              v-model="form.name_5"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_5" label="Descripción:" label-for="description_5">
              <b-form-input
              id="description_5"
              v-model="form.description_5"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_6" label="Archivo:" label-for="file_6">
              
              <!-- Styled -->
              <b-form-file
              name="file_6"
              v-model="form.file_6"
              :state="Boolean(form.file_6)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_6" label="nombre:" label-for="name_6">
              <b-form-input
              id="name_6"
              v-model="form.name_6"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_6" label="Descripción:" label-for="description_6">
              <b-form-input
              id="description_6"
              v-model="form.description_6"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_7" label="Archivo:" label-for="file_7">
              
              <!-- Styled -->
              <b-form-file
              name="file_7"
              v-model="form.file_7"
              :state="Boolean(form.file_7)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_7" label="nombre:" label-for="name_7">
              <b-form-input
              id="name_7"
              v-model="form.name_7"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_7" label="Descripción:" label-for="description_7">
              <b-form-input
              id="description_7"
              v-model="form.description_7"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_8" label="Archivo:" label-for="file_8">
              
              <!-- Styled -->
              <b-form-file
              name="file_8"
              v-model="form.file_8"
              :state="Boolean(form.file_8)"
              
              placeholder=""
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_8" label="nombre:" label-for="name_8">
              <b-form-input
              id="name_8"
              v-model="form.name_8"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_8" label="Descripción:" label-for="description_8">
              <b-form-input
              id="description_8"
              v-model="form.description_8"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col>
            <b-form-group id="group_file_9" label="Archivo:" label-for="file_9">
              
              <!-- Styled -->
              <b-form-file
              name="file_9"
              v-model="form.file_9"
              :state="Boolean(form.file_9)"
              placeholder=""
              
              
              drop-placeholder="Arrastre el archivo aquí..."
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_name_9" label="nombre:" label-for="name_9">
              <b-form-input
              id="name_9"
              v-model="form.name_9"
              
              placeholder="Ingrese un nombre"
              class="form-control"
              maxlength="20"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="group_description_9" label="Descripción:" label-for="description_9">
              <b-form-input
              id="description_9"
              v-model="form.description_9"
              class="form-control"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        
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
      file_0: null,
      name_0: '',
      description_0: '',
      file_1: null,
      name_1: '',
      description_1: '',
      file_2: null,
      name_2: '',
      description_2: '',
      file_3: null,
      name_3: '',
      description_3: '',
      file_4: null,
      name_4: '',
      description_4: '',
      file_5: null,
      name_5: '',
      description_5: '',
      file_6: null,
      name_6: '',
      description_6: '',
      file_7: null,
      name_7: '',
      description_7: '',
      file_8: null,
      name_8: '',
      description_8: '',
      file_9: null,
      name_9: '',
      description_9: '',
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
