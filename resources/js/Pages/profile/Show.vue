<template>
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Historial de {{patient.first_name_1}} {{patient.last_name_1}}
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          información detallada del paciente
        </span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('patients.edit', patient.id)"
        class="btn btn-primary font-weight-bolder font-size-sm mr-1">
        editar historial
      </inertia-link>
      
      <inertia-link
      :href="$route('patients.show', patient.id)"
      class="btn btn-primary font-weight-bolder font-size-sm">
      perfil
    </inertia-link>
  </div>
</div>
<!-- end::Header -->
<div class="card-body pt-2 pb-0">
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Datos de paciente:
    </div>
    <div class="line-height-xl">
      <strong>Nombre: </strong> {{patient.first_name_1}} {{patient.first_name_2}} {{patient.last_name_1}} {{patient.last_name_2}}
      <br />
      <strong>fecha de nacimiento: </strong> {{patient.birth_date|formatDate}}
      <br />
      <strong>Telefono: {{patient.phone}}</strong>
      <br />
      <strong>Correo electrónico: {{patient.email}}</strong>
      <br />
      <strong>Aspiraciones o motivo de consulta: </strong> {{patient.aspiration}}
      <br />
      <strong>Objetivo: </strong>{{patient.goal}}
    </div>
  </div>
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Estado físico:
    </div>
    <div class="line-height-xl">
      <strong>Exámenes de laboratorio: </strong><span v-if="patient.laboratory"> {{patient.laboratory}}</span> <span v-else> No</span>
      <br />
      <strong>Exámenes de laboratorio: </strong><span v-if="patient.previous_experience"> {{patient.previous_experience}}</span> <span v-else> No</span>
      <br />
      <strong>Alguna condición médica: </strong><span v-if="patient.medical_condition"> {{patient.medical_condition}}</span> <span v-else> No</span>
      <br />
      <strong>Toma algún medicamento: </strong><span v-if="patient.medicine"> {{patient.medicine}}</span> <span v-else> No</span>
      <br />
      <strong>Toma algún suplemento: </strong><span v-if="patient.supplement"> {{patient.supplement}}</span> <span v-else> No</span>
      <br />
      <strong>Tomaba algún suplemento anteriormente: </strong><span v-if="patient.previous_supplement"> {{patient.previous_supplement}}</span> <span v-else> No</span>
      <br />
      <strong>Variación de peso en los ultimos años: </strong><span v-if="patient.weight_variation"> {{patient.weight_variation}}</span> <span v-else> No</span>
      <br /><br />
      <strong>Trabajo:</strong>{{patient.job}}
      <br />
      <strong>Sedentario: </strong><span v-if="patient.sedentary">Si</span> <span v-else> No</span>
      <br />
      <strong>Disciplina deportiva: </strong>{{patient.athletic_discipline}}
      <br />
      <strong>Descripción del entrenamiento: </strong>{{patient.training_description}}
      <br />
      <strong>Días semanales de entrenamiento: </strong>{{patient.training_days}}
      <br />
      <strong>Horas diarias de entrenamiento: </strong>{{patient.training_hours}}
      <br />
    </div>
  </div>
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Alimentación:
    </div>
    <div class="line-height-xl">
      <strong>Desayuno: </strong>{{patient.breakfast}}
      <br />
      <strong>Media mañana: </strong>{{patient.brunch}}
      <br />
      <strong>Almuerzo: </strong>{{patient.lunch}}
      <br />
      <strong>Merienda: </strong>{{patient.snack}}
      <br />
      <strong>Cena: </strong>{{patient.dinner}}
      <br />
    </div>
    <div class="font-weight-bold mb-3">
      Alimentación:
    </div>
    <div class="line-height-xl">
      <strong>Proteinas: </strong>
      <span v-if="patient.pollo">pollo, </span>
      <span v-if="patient.pescado_blanco">pescado blanco, </span>
      <span v-if="patient.carne_de_res">carne de res, </span>
      <span v-if="patient.lomo_de_cerdo">lomo de cerdo, </span>
      <span v-if="patient.atun">atun, </span>
      <span v-if="patient.huevos">huevos, </span>
      <span v-if="patient.claras_de_huevos">claras de huevos, </span>
      <span v-if="patient.whey_protein">whey protein. </span>
      <br /><br />
      <strong>Harinas / Carbohidratos: </strong>
      <span v-if="patient.arroz">arroz, </span>
      <span v-if="patient.arroz_integral">arroz integral, </span>
      <span v-if="patient.pasta">pasta, </span>
      <span v-if="patient.pasta_integral">pasta integral, </span>
      <span v-if="patient.platano">platano, </span>
      <span v-if="patient.papa">papa, </span>
      <span v-if="patient.arepa">arepa, </span>
      <span v-if="patient.pan">pan, </span>
      <span v-if="patient.avena">avena, </span>
      <span v-if="patient.tostadas_de_arroz">tostadas de arroz. </span>
      <br /><br />
      <strong>Frutas: </strong>
      <span v-if="patient.frutos_rojos">frutos rojos, </span>
      <span v-if="patient.frutos_amarillos">frutos amarillos, </span>
      <span v-if="patient.frutos_verdes">frutos verdes, </span>
      <span v-if="patient.banano">banano, </span>
      <span v-if="patient.frutas_deshidratadas">frutas deshidratadas. </span>
      <br /><br />
      <strong>Vegetales: </strong>
      <span v-if="patient.verduras_cocidas">verduras cocidas, </span>
      <span v-if="patient.vegetales_frescos">vegetales frescos. </span>
      <br /><br />
      <strong>Lacteos: </strong>
      <span v-if="patient.quesos_frescos">quesos frescos, </span>
      <span v-if="patient.quesos_madurados">quesos madurados, </span>
      <span v-if="patient.yogures">yogures, </span>
      <span v-if="patient.leche">leche, </span>
      <span v-if="patient.crema_de_leche">crema de leche, </span>
      <span v-if="patient.mantequilla">mantequilla. </span>
      <br /><br />
      <strong>Grasas: </strong>
      <span v-if="patient.grasas">grasas, </span>
      <span v-if="patient.aguacate">aguacate, </span>
      <span v-if="patient.frutos_secos">frutos secos, </span>
      <span v-if="patient.aceites_adicionados">aceites adicionados, </span>
      <span v-if="patient.crema_de_mani">crema de mani. </span>
      <br /><br />
      <strong>Alimetos que no toleras: </strong>{{patient.unwanted_food}}
      <br />
      <strong>Alimentos indespensables: </strong>{{patient.desired_food}}
      <br />
      <strong>Cantidad de agua al día: </strong>{{patient.water}}
      <br />
      <strong>Otras bebidas: </strong>
      <span v-if="patient.soda">gaseosas, </span>
      <span v-if="patient.alcoholic_drinks">bebidas alchoolicas, </span>
      <span v-if="patient.coffee">café, </span>
      <span v-if="patient.tea">tés / aromáticas. </span>
    </div>
    
  </div>
  <div class="border-bottom mb-5 pb-5">
    <div class="font-weight-bold mb-3">
      Diagnóstico y Plan de trabajo:
    </div>
    <div class="line-height-xl">
      <strong>Diagnóstico: </strong>
      <span v-if="patient.bajo_consumo_energetico">bajo consumo energético, </span>
      <span v-if="patient.bajo_consumo_proteico">bajo consumo proteico, </span>
      <span v-if="patient.bajo_consumo_carbohidratos">bajo consumo carbohidratos, </span>
      <span v-if="patient.bajo_consumo_grasas_escenciales">bajo consumo grasas escenciales, </span>
      <span v-if="patient.bajo_consumo_micronutrientes">bajo consumo micronutrientes, </span>
      <span v-if="patient.alto_consumo_ultraprcesados">alto consumo ultraprocesados, </span>
      <span v-if="patient.inadecuado_timming_ingestas">inadecuado timming de ingestas, </span>
      <span v-if="patient.esquema_hidratacion_inadecuado">esquema de hidratación inadecuado, </span>
      <span v-if="patient.dieta_alta_fodmaps">dieta alta FODMAPS, </span>
      <span v-if="patient.excedente_calorico">excedente calórico. </span>
      <br />
      <strong>Plan de trabajo: {{patient.workplan}}</strong>
      <br />
    </div>
  </div>
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
      title: 'Control',
    }
  },
  data(){
    return {
      tipo: {
        flamenco: 'Agendado sin confirmar',
        lavanda: 'Confirmado',
        albahaca: 'Pagó',
        naranja: 'Pidió cambio',
        rojo: 'No llegó / Canceló',
        verde: 'Se le entregó el plan o ajustes'
      }
    }
  },
  props: ['patient'],
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
    /**
    * Set current active on click
    * @param event
    */
    
  }
};
</script>
