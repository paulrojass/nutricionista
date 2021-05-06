<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Nuevo control para {{patient.first_name_1}} {{patient.last_name_1}}</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Ingrese la informacion solicitada para el registro del control</span>
      </h3>
    </div>
    <!-- end::Header -->
    <div class="card-body pt-2 pb-0">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        
        <input
        type="hidden"
        v-model="form.patient_id"
        id="patient_id"
        class="form-control"
        name="patient_id"
        />
        
        <div class="row">
          <div class="col-xl-6">
            <div class="form-group">
              <label>Tipo de Consulta</label>
              <select
              required
              name="city"
              @change="getPlans"
              v-model="form.city"
              class="form-control">
              <option :value="null">Seleccione ciudad</option>
              <option
              v-for="(city , index) in cities"
              :value="index"
              >{{ city.name }}</option>
            </select>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="form-group">
            <label>Especifique: Cuidad - País</label>
            <input
            type="text"
            v-model="form.city_name"
            class="form-control"
            name="city_name"
            required
            />
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label>Plan</label>
        <select
        name="plan_id"
        v-model="form.plan_id"
        class="form-control"
        required
        >
        <option value="">Seleccione un plan</option>
        <option v-for="plan in plans" :value="plan.id">{{ plan.name }}</option>
      </select>
    </div>
    <div class="row pb-5">
      <div class="col-xl-12">
        <div>
          <b-form-checkbox
          id="agreement"
          v-model="form.agreement"
          name="agreement"
          value="1"
          unchecked-value="0"
          >
          ¿Tiene convenio?
        </b-form-checkbox>
      </div>
    </div>
    
    <div class="col-xl-6" v-if="form.agreement == 1">
      <div class="form-group">
        <label>Nombre del convenio</label>
        <input
        type="text"
        v-model="form.agreement_name"
        class="form-control"
        name="agreement_name"
        required
        />
      </div>
    </div>
    <div class="col-xl-6" v-if="form.agreement == 1">
      <div class="form-group">
        <label>Precio del convenio</label>
        <input
        type="text"
        v-model="form.agreement_price"
        class="form-control"
        name="agreement_price"
        required
        />
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
      <b-form-group id="input-date" label="Fecha:" label-for="date">
        <b-form-input
        :type="`date`"
        id="date"
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
        v-model="form.time"
        required
        ></b-form-input>
      </b-form-group>
    </div>
  </div>
  
  <b-form-group id="input-note" label="Nota:" label-for="note">
    <b-form-input
    id="note"
    v-model="form.note"
    placeholder="Puede agregar alguna informacíon sobre la consulta"
    required
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
import { SET_BREADCRUMB } from "../../src/core/services/store/breadcrumbs.module";
import Layout from "../../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Crear Control para ${this.patient.first_name_1} ${this.patient.last_name_1}`,
    }
  },
  props: ['patient','cities'],
  data() {
    return {
      form: {
        patient_id: this.patient.id,
        plan_id : '',
        city: null,
        city_name : '',
        agreement : 0,
        agreement_name : '',
        agreement_price : '',
        date: '',
        time: '',
        note: ''
      },
      plans : [],
      show: true,
    }
  },
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
      this.$inertia.post(route('controls.store', this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.plan_id = ''
      this.form.city = null
      this.form.city_name = ''
      this.form.agreement = 0
      this.form.agreement_name = ''
      this.form.agreement_price = ''
      this.form.date = ''
      this.form.time = ''
      this.form.note = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
};
</script>
