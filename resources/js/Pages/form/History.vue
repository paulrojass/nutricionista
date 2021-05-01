<template>
  <layout>
    <div class="card card-custom card-stretch gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            Historial
          </span>
          <span class="text-muted mt-3 font-weight-bold font-size-sm">
            Información detallada del paciente
          </span>
        </h3>
      </div>
      <div class="card-body pt-2 pb-0">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <p><strong>Fecha: </strong>
            {{patient.created_at}}
          </p>
          
          <p><strong>Nombre: </strong>
            {{patient.first_name_1}} {{patient.first_name_2}}
            {{patient.last_name_1}} {{patient.last_name_2}}
          </p>
          
          <p><strong>Fecha de nacimiento: </strong>
            {{patient.birth_date}}
          </p>
          
          <b-form-group id="input-group-7" label="Objetivo:" label-for="input-7">
            <b-form-select
            id="aspiration"
            name="aspiration"
            v-model="form.aspiration"
            required
            >
            <option value="1">Perdida de peso</option>
            <option value="2">Perdida de % graso</option>
            <option value="3">Masa muscular</option>
            <option value="4">Aumento de peso</option>
            <template v-slot:first>
              <option :value="null">Seleccione objetivo...</option>
            </template>
          </b-form-select>
        </b-form-group>
        
        <b-form-group label="Exámenes de laboratorio:" label-for="laboratory">
          <b-form-input
          id="laboratory"
          v-model="form.laboratory"
          required
          placeholder="Mencione los exámenes si los tiene"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Este sería tu primer proceso nutricional? De no ser así, ¿cómo ha sido tu experiencia previa?" label-for="experience">
          <b-form-input
          id="experience"
          v-model="form.experience"
          required
          placeholder="Explique detalladamente"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="¿Sufre de alguna condición médica?" label-for="medical_condition">
          <b-form-input
          id="medical_condition"
          v-model="form.medical_condition"
          required
          placeholder="Explique detalladamente"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="¿Toma algún medicamento?" label-for="medicine">
          <b-form-input
          id="medicine"
          v-model="form.medicine"
          required
          placeholder="Explique detalladamente"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="¿Toma algún suplemento?" label-for="supplement">
          <b-form-input
          id="supplement"
          v-model="form.supplement"
          required
          placeholder="Si es así, por favor indique"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="¿Ha tomado suplemento previamente?" label-for="supplement_previous">
          <b-form-input
          id="supplement_previous"
          v-model="form.supplement_previous"
          required
          placeholder="Si es así, por favor indique"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Has variado mucho de peso el los últimos 2 años?" label-for="weight_change">
          <b-form-input
          id="weight_change"
          v-model="form.weight_change"
          required
          placeholder="En caso de que sí, ¿por qué?"
          ></b-form-input>
        </b-form-group>
        
        <b-form-group label="¿A qué se dedica?" label-for="occupation">
          <b-form-input
          id="occupation"
          v-model="form.occupation"
          required
          ></b-form-input>
        </b-form-group>
        
        <b-form-group
        label-cols-sm="3"
        label="¿Es sedentario?"
        label-align-sm="right" class="mb-0"
        >
        <b-form-radio-group
        id="sedentary"
        v-model="form.sedentary"
        class="pt-2"
        :options="['Si', 'No']"
        ></b-form-radio-group>
      </b-form-group>
      
      <p>Describa un día frecuente de alimentación</p>
      
      <b-form-group label="Desayuno" label-for="breakfast">
        <b-form-input
        id="breakfast"
        v-model="form.breakfast"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Media mañana" label-for="brunch">
        <b-form-input
        id="brunch"
        v-model="form.brunch"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Almuerzo" label-for="lunch">
        <b-form-input
        id="lunch"
        v-model="form.lunch"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Merienda" label-for="snack">
        <b-form-input
        id="snack"
        v-model="form.snack"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Cena" label-for="dinner">
        <b-form-input
        id="dinner"
        v-model="form.dinner"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Cuando come por fuera de casa, ¿qué suele comer?" label-for="street_food">
        <b-form-input
        id="street_food"
        v-model="form.street_food"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="Menciona los alimentos que no tolores, no te gustan o no prefieras" label-for="unwanted_food">
        <b-form-input
        id="unwanted_food"
        v-model="form.unwanted_food"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group label="¿Cuanto toma de agua al dia?" label-for="water">
        <b-form-select
        id="water"
        name="water"
        v-model="form.water"
        required
        >
        <option value="Menos de 1 litro">Menos de 1 litro</option>
        <option value="Entre 1 y 2 litros">Entre 1 y 2 litros</option>
        <option value="Más de 2 litros">Más de 2 litros</option>
        <option value="No sabe cuanto toma">No sabe cuanto toma</option>
        <template v-slot:first>
          <option :value="null">Seleccione objetivo...</option>
        </template>
      </b-form-select>
    </b-form-group>
    
    <b-form-group id="input-group-4">
      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        <b-form-checkbox value="soda">Gaseosas</b-form-checkbox>
        <b-form-checkbox value="alchool">Bebidas alcholicas</b-form-checkbox>
        <b-form-checkbox value="coffe">Café</b-form-checkbox>
        <b-form-checkbox value="tea">Té / Aromáticas</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
    
    
    <b-button type="submit" variant="primary">Guardar</b-button>
    <b-button type="reset" variant="danger">Borrar</b-button>
  </b-form>
</div>
</div>
</layout>
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
    form: {
      first_name_1: '',
      first_name_2: '',
      last_name_1: '',
      last_name_2: '',
      city_id: null,
      phone: '',
      email: ''
    },
    show: true
  }
},
methods: {
  setActiveTab1(event) {
    this.tabIndex = this.setActiveTab(event);
  },
  setActiveTab2(event) {
    this.tabIndex2 = this.setActiveTab(event);
  },
  habilitar(){
    
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
    this.form.email = ''
    this.form.phone = ''
    this.form.city_id = null
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
};
</script>
