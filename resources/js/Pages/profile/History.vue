<template>
  <div class="card card-custom">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <inertia-link
        class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
        :href="route('patients.show', patient.id)">
        <span class="card-label font-weight-bolder text-dark">
          Editar Historial de {{patient.first_name_1}} {{patient.last_name_1}}
        </span>
      </inertia-link>
      <span class="text-muted mt-3 font-weight-bold font-size-sm">
        información detallada del paciente
      </span>
    </h3>
    <div class="card-toolbar">
      <inertia-link
      :href="$route('patients.show', patient.id)"
      class="btn btn-primary font-weight-bolder font-size-sm"
      >
      Volver al perfil
    </inertia-link>
  </div>
</div>
<div class="card-body p-0">
  <!--begin: Wizard-->
  <div
  class="wizard wizard-3"
  id="kt_wizard_v3"
  data-wizard-state="step-first"
  data-wizard-clickable="true"
  >
  <!--begin: Wizard Nav -->
  <div class="wizard-nav border-bottom mb-1 mb-lg-5">
    <div class="wizard-steps px-8 py-8 px-lg-15 py-lg-3">
      <div
      class="wizard-step"
      data-wizard-type="step"
      data-wizard-state="current"
      >
      <div class="wizard-label">
        <h3 class="wizard-title"><span>1</span>Datos Básicos</h3>
        <div class="wizard-bar"></div>
      </div>
    </div>
    <div class="wizard-step" data-wizard-type="step">
      <div class="wizard-label">
        <h3 class="wizard-title"><span>2</span>Estado físico</h3>
        <div class="wizard-bar"></div>
      </div>
    </div>
    <div class="wizard-step" data-wizard-type="step">
      <div class="wizard-label">
        <h3 class="wizard-title"><span>3</span>Alimentación</h3>
        <div class="wizard-bar"></div>
      </div>
    </div>
    <div class="wizard-step" data-wizard-type="step">
      <div class="wizard-label">
        <h3 class="wizard-title"><span>3</span>Diagnóstico</h3>
        <div class="wizard-bar"></div>
      </div>
    </div>
  </div>
</div>
<!--end: Wizard Nav -->

<!--begin: Wizard Body-->
<div class="row justify-content-center py-12 px-8 py-lg-15 px-lg-10">
  <div class="col-xl-12 col-xxl-7">
    <!--begin: Wizard Form-->
    <form class="form" id="kt_form" v-if="show" >
      <!--begin: Wizard Step 1-->
      <div
      class="pb-5"
      data-wizard-type="step-content"
      data-wizard-state="current"
      >
      <h4 class="mb-10 font-weight-bold text-dark">
        Datos básicos del paciente
      </h4>

      <div class="row">
        <div class="col-xl-12">
          <div class="form-group row">
            <label class="col-xl-6 col-lg-6 col-form-label text-right"
            >Fotografía</label
            >
            <div class="col-lg-6 col-xl-6">
              <div class="image-input image-input-outline" id="kt_avatar">
                <div
                class="image-input-wrapper"
                :style="{ backgroundImage: `url(${photo})` }"
                ></div>
                <label
                class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                data-action="change"
                data-toggle="tooltip"
                title=""
                data-original-title="Change avatar"
                >
                <!-- <i class="fa fa-pen icon-sm text-muted"></i> -->
                <i class="fa fa-pencil icon-sm text-muted" aria-hidden="true"></i>
                <input
                type="file"
                name="avatar"
                accept=".png, .jpg, .jpeg"
                @change="onFileChange($event)"
                />
                <input type="hidden" name="avatar_remove" />
              </label>
              <span
              class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
              data-action="cancel"
              data-toggle="tooltip"
              title="Cancel avatar"
              >
              <i class="fa fa-times icon-sm text-muted" aria-hidden="true"></i>
            </span>
            <span
            class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="remove"
            data-toggle="tooltip"
            title="Remove avatar"
            @click="deleteAvatar"
            >
            <i class="fa fa-times icon-sm text-muted" aria-hidden="true"></i>
          </span>
        </div>
        <span class="form-text text-muted"
        >formatos permitidos: png, jpg, jpeg.</span
        >
      </div>
    </div>
  </div>


  <div class="col-xl-6">
    <div class="form-group">
      <label for="fist">Primer nombre</label>
      <b-form-input
      v-model="form.first_name_1"
      id="first"
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="first_name_1"
      placeholder="Primer nombre"
      required
      :state="firstNameState"
      aria-describedby="input-live-help input-live-feedback"
      trim
      ></b-form-input>
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback id="first-feedback">
        Campo obligatorio
      </b-form-invalid-feedback>


      <span class="form-text text-muted"
      >Por favor ingrese el primer nombre.</span
      >
    </div>
  </div>
  <div class="col-xl-6">
    <div class="form-group">
      <label>Segundo nombre</label>
      <input
      type="text"
      v-model="form.first_name_2"
      class="form-control form-control-solid form-control-lg"
      name="first_name_2"
      placeholder="segundo nombre"
      />
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xl-6">
    <div class="form-group">
      <label>Primer apellido</label>
      <b-form-input
      type="text"
      v-model="form.last_name_1"
      class="form-control form-control-solid form-control-lg"
      name="last_name_1"
      placeholder="Primer apellido"
      required
      :state="lastNameState"
      aria-describedby="input-live-help input-live-feedback"
      trim
      ></b-form-input>
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback>
        Campo obligatorio
      </b-form-invalid-feedback>
      <span class="form-text text-muted"
      >Por favor ingrese el primer apellido.</span
      >
    </div>
  </div>
  <div class="col-xl-6">
    <div class="form-group">
      <label>Segundo apellido</label>
      <input
      type="text"
      v-model="form.last_name_2"
      class="form-control form-control-solid form-control-lg"
      name="last_name_2"
      placeholder="segundo apellido"
      />
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xl-6">
    <div class="form-group">
      <label>Teléfono</label>
      <b-form-input
      type="text"
      v-model="form.phone"
      class="form-control form-control-solid form-control-lg"
      name="phone"
      :state="phoneState"
      aria-describedby="input-live-help input-live-feedback"
      trim
      ></b-form-input>
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback>
        Campo obligatorio
      </b-form-invalid-feedback>
    </div>
  </div>
  <div class="col-xl-6">
    <div class="form-group">
      <label>Correo electrónico</label>
      <b-form-input
      type="email"
      v-model="form.email"
      class="form-control form-control-solid form-control-lg"
      name="email"
      required
      :state="emailState"
      aria-describedby="input-live-help input-live-feedback"
      trim
      ></b-form-input>
      <!-- This will only be shown if the preceding input has an invalid state -->
      <b-form-invalid-feedback>
        Campo obligatorio
      </b-form-invalid-feedback>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xl-6">
    <div class="form-group">
      <label>Fecha de nacimiento</label>
      <input
      :type="`date`"
      v-model="form.birth_date"
      class="form-control form-control-solid form-control-lg"
      name="birth_date"
      required
      />
    </div>
  </div>

<div class="col-xl-6">
  <div class="form-group">
    <label>Objetivo</label>
    <select
    name="goal"
    v-model="form.goal"
    class="form-control form-control-solid form-control-lg"
    >
      <option value="">Selecccionar</option>
      <option value="perdida de peso">Perdida de peso</option>
      <option value="Perdida de % graso">Perdida de % graso</option>
      <option value="Masa muscular">Masa muscular</option>
      <option value="Aumento de peso">Aumento de peso</option>
    </select>
  </div>
</div>

</div>



<!-- <div class="form-group">
<label>Describa las aspiraciones o motivo de la consulta</label>
<textarea
type="text"
v-model="form.aspiration"
class="form-control form-control-solid form-control-lg"
name="aspiration"
></textarea>
</div> -->

</div>
<!--end: Wizard Step 1-->

<!--begin: Wizard Step 2-->
<div class="pb-5" data-wizard-type="step-content">

  <h4 class="mb-10 font-weight-bold text-dark">
    Estado físico del paciente
  </h4>

  <div class="row">
    <div class="col-xl-12">
      <b-form-checkbox
      id="chk_laboratory"
      v-model="chk_laboratory"
      name="chk_laboratory"
      value="1"
      unchecked-value="0"
      :checked="patient.laboratory == 'varios'"
      >
      Exámenes de laboatorio
    </b-form-checkbox>
  </div>
  <div class="col-xl-12" v-if="chk_laboratory == 1">
    <div class="form-group">
      <label>Mencione los examenes</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="laboratory"
      v-model="form.laboratory"
      />
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xl-12">
    <b-form-checkbox
    id="chk_previous_experience"
    v-model="chk_previous_experience"
    name="chk_previous_experience"
    value="1"
    unchecked-value="0"
    >
    ¿Ha tenido otro proceso nutricional anteriormente?
  </b-form-checkbox>
</div>
<div class="col-xl-12" v-if="chk_previous_experience == 1">
  <div class="form-group">
    <label>¿Cómo ha sido tu experiencia previa?</label>
    <input
    type="text"
    v-model="form.previous_experience"
    class="form-control form-control-solid form-control-lg"
    name="previous_experience"
    />
  </div>
</div>
</div>

<div class="row">
  <div class="col-xl-12">
    <b-form-checkbox
    id="chk_medical_condition"
    v-model="chk_medical_condition"
    name="chk_medical_condition"
    value="1"
    unchecked-value="0"
    >
    ¿Sufre de alguna condición médica?
  </b-form-checkbox>
</div>
<div class="col-xl-12" v-if="chk_medical_condition == 1">
  <div class="form-group">
    <label>Por favor describa</label>
    <input
    type="text"
    v-model="form.medical_condition"
    class="form-control form-control-solid form-control-lg"
    name="medical_condition"
    />
  </div>
</div>
</div>

<div class="row">
  <div class="col-xl-12">
    <b-form-checkbox
    id="chk_medicine"
    v-model="chk_medicine"
    name="chk_medicine"
    value="1"
    unchecked-value="0"
    >
    ¿Toma algún medicamento?
  </b-form-checkbox>
</div>
<div class="col-xl-12" v-if="chk_medicine == 1">
  <div class="form-group">
    <label>Indique cuales toma</label>
    <input
    type="text"
    v-model="form.medicine"
    class="form-control form-control-solid form-control-lg"
    name="medicine"
    />
  </div>
</div>
</div>

<div class="row">
  <div class="col-xl-12">
    <b-form-checkbox
    id="chk_supplement"
    v-model="chk_supplement"
    name="chk_supplement"
    value="1"
    unchecked-value="0"
    >
    ¿Toma algún suplemento?
  </b-form-checkbox>
</div>
<div class="col-xl-12" v-if="chk_supplement == 1">
  <div class="form-group">
    <label>Indique cual toma</label>
    <input
    type="text"
    v-model="form.supplement"
    class="form-control form-control-solid form-control-lg"
    name="supplement"
    />
  </div>
</div>
</div>

<div class="row">
  <div class="col-xl-12">
    <b-form-checkbox
    id="chk_previous_supplement"
    v-model="chk_previous_supplement"
    name="chk_previous_supplement"
    value="1"
    unchecked-value="0"
    >
    ¿Toma algún suplemento previamente?
  </b-form-checkbox>
</div>
<div class="col-xl-12" v-if="chk_previous_supplement == 1">
  <div class="form-group">
    <label>Indique cual toma</label>
    <input
    type="text"
    v-model="form.previous_supplement"
    class="form-control form-control-solid form-control-lg"
    name="previous_supplement"
    />
  </div>
</div>
</div>

<div class="row">
  <div class="col-xl-12">
    <b-form-checkbox
    id="chk_weight_variation"
    v-model="chk_weight_variation"
    name="chk_weight_variation"
    value="1"
    unchecked-value="0"
    >
    ¿Ha variado mucho de peso en los últimos 2 años?
  </b-form-checkbox>
</div>
<div class="col-xl-12" v-if="chk_weight_variation == 1">
  <div class="form-group">
    <label>¿Por qué?</label>
    <input
    type="text"
    v-model="form.weight_variation"
    class="form-control form-control-solid form-control-lg"
    name="weight_variation"
    />
  </div>
</div>
</div>

<h4 class="mb-10 mt-10 font-weight-bold text-dark">
  Actividad física
</h4>

<div class="form-group">
  <label>¿A qué se dedica?</label>
  <input
  type="text"
  v-model="form.job"
  class="form-control form-control-solid form-control-lg"
  name="job"
  />
</div>

<b-form-checkbox
id="sedentary"
v-model="form.sedentary"
name="sedentary"
value="1"
unchecked-value="0"
>
¿Es sedentario?
</b-form-checkbox>


<b-form-group label="Disciplina deportiva">
  <b-form-radio-group
  id="rad_athletic_discipline"
  v-model="form.rad_athletic_discipline"
  :options="athletic_discipline_options"
  name="rad_athletic_discipline"
  ></b-form-radio-group>
</b-form-group>
<div class="form-group" v-if="form.rad_athletic_discipline == 'Otra'">
  <label>Espeifique otra Disciplina</label>
  <input
  type="text"
  class="form-control form-control-solid form-control-lg"
  name="athletic_discipline"
  v-model="form.athletic_discipline"
  />
</div>

<div class="form-group">
  <label>Describa el entrenamiento</label>
  <textarea
  class="form-control form-control-solid form-control-lg"
  name="training_description"
  v-model="form.training_description"
  ></textarea>
</div>

<div class="row">
  <div class="col-xl-6">
    <div class="form-group">
      <label>Cantidad de horas diaras de entrenamiento</label>
      <input
      type="number"
      min="0"
      max="24"
      class="form-control form-control-solid form-control-lg"
      name="training_hours"
      v-model="form.training_hours"
      />
    </div>
  </div>
  <div class="col-xl-6">
    <div class="form-group">
      <label>Cantidad de días de entrenamiento semanal</label>
      <input
      type="number"
      min="0"
      max="7"
      class="form-control form-control-solid form-control-lg"
      name="training_days"
      v-model="form.training_days"
      />
    </div>
  </div>
</div>
</div>
<!--end: Wizard Step 2-->

<!--begin: Wizard Step 3-->
<div class="pb-5" data-wizard-type="step-content">
  <h4 class="mb-10 font-weight-bold text-dark">
    Hábitos alimenticios
  </h4>

  <b-form-group
    label="Desayuno"
    label-for="breakfast"
    class="mb-0"
  >
    <b-form-textarea
        name="breakfast"
      id="breakfast"
      v-model="form.breakfast"
      class="form-control form-control-solid form-control-lg"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </b-form-group>

  <b-form-group
    label="Media mañana"
    label-for="brunch"
    class="mb-0"
  >
    <b-form-textarea
        name="brunch"
      id="brunch"
      v-model="form.brunch"
      class="form-control form-control-solid form-control-lg"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </b-form-group>

  <b-form-group
    label="Almuerzo"
    label-for="lunch"
    class="mb-0"
  >
    <b-form-textarea
        name="lunch"
      id="lunch"
      v-model="form.lunch"
      class="form-control form-control-solid form-control-lg"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </b-form-group>

  <b-form-group
    label="Merienda"
    label-for="snack"
    class="mb-0"
  >
    <b-form-textarea
        name="snack"
      id="snack"
      v-model="form.snack"
      class="form-control form-control-solid form-control-lg"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </b-form-group>

  <b-form-group
    label="Cena"
    label-for="dinner"
    class="mb-0"
  >
    <b-form-textarea
        name="dinner"
      id="dinner"
      v-model="form.dinner"
      class="form-control form-control-solid form-control-lg"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </b-form-group>

  <b-form-group
    label="Cuando come fuera de casa ¿Qué suele comer?"
    label-for="street_food"
    class="mb-0"
  >
    <b-form-textarea
        name="street_food"
      id="street_food"
      v-model="form.street_food"
      class="form-control form-control-solid form-control-lg"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </b-form-group>

  <h4 class="mb-10 mt-10 font-weight-bold text-dark">
    Haga una descripción de sus comidas por grupo
  </h4>

  <b-form-group label="Proteinas:">
    <b-form-checkbox inline  name="pollo" v-model="form.pollo">Pollo</b-form-checkbox>
    <b-form-checkbox inline  name="pescado_blanco" v-model="form.pescado_blanco">Pescado blanco</b-form-checkbox>
    <b-form-checkbox inline  name="carne_de_res" v-model="form.carne_de_res">Carne de res</b-form-checkbox>
    <b-form-checkbox inline  name="lomo_de_cerdo" v-model="form.lomo_de_cerdo">Lomo de cerdo</b-form-checkbox>
    <b-form-checkbox inline  name="atun" v-model="form.atun">Atún</b-form-checkbox>
    <b-form-checkbox inline  name="huevos" v-model="form.huevos">Huevos</b-form-checkbox>
    <b-form-checkbox inline  name="claras_de_huevos" v-model="form.claras_de_huevos">Claras de huevos</b-form-checkbox>
    <b-form-checkbox inline  name="pavo" v-model="form.pavo">Pavo</b-form-checkbox>
    <b-form-checkbox inline  name="salmon" v-model="form.salmon">Salmón</b-form-checkbox>
    <b-form-checkbox inline  name="whey_protein" v-model="form.whey_protein">Whey Protein</b-form-checkbox>
    <b-form-checkbox inline  name="chk_otros_proteinas" v-model="chk_otros_proteinas" id="chk_otros_proteinas" value="1" unchecked-value="0">Otros</b-form-checkbox>

  </b-form-group>

<div class="row">
  <div class="col-xl-12" v-if="chk_otros_proteinas == 1">
    <div class="form-group">
      <label>Indique cuales otras proteinas</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="otros_proteinas"
      v-model="form.otros_proteinas"
      />
    </div>
  </div>
</div>




  <b-form-group label="Harinas / Carbohidratos:">
    <b-form-checkbox inline v-model="form.arroz" name="arroz">Arroz</b-form-checkbox>
    <b-form-checkbox inline v-model="form.arroz_integral" name="arroz_integral">Arroz integral</b-form-checkbox>
    <b-form-checkbox inline v-model="form.pasta" name="pasta">Pasta</b-form-checkbox>
    <b-form-checkbox inline v-model="form.pasta_integral" name="pasta_integral">Pasta integral</b-form-checkbox>
    <b-form-checkbox inline v-model="form.platano" name="platano">Plátano</b-form-checkbox>
    <b-form-checkbox inline v-model="form.papa" name="papa">Papa</b-form-checkbox>
    <b-form-checkbox inline v-model="form.arepa" name="arepa">Arepa</b-form-checkbox>
    <b-form-checkbox inline v-model="form.pan" name="pan">Pan</b-form-checkbox>
    <b-form-checkbox inline v-model="form.tostadas_de_arroz" name="tostadas_de_arroz">Tostadas de arroz</b-form-checkbox>
    <b-form-checkbox inline  name="chk_otros_carbohidratos" v-model="chk_otros_carbohidratos" id="chk_otros_carbohidratos" value="1" unchecked-value="0">Otros</b-form-checkbox>

  </b-form-group>

<div class="row">
  <div class="col-xl-12" v-if="chk_otros_carbohidratos == 1">
    <div class="form-group">
      <label>Indique cuales otros carbohidratos</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="otros_carbohidratos"
      v-model="form.otros_carbohidratos"
      />
    </div>
  </div>
</div>

  <b-form-group label="Frutas:">
    <b-form-checkbox inline name="frutos_rojos" v-model="form.frutos_rojos">Frutos rojos</b-form-checkbox>
    <b-form-checkbox inline name="frutos_amarillos" v-model="form.frutos_amarillos">Frutos amarillos</b-form-checkbox>
    <b-form-checkbox inline name="frutos_verdes" v-model="form.frutos_verdes">Frutos verdes</b-form-checkbox>
    <b-form-checkbox inline name="banano" v-model="form.banano">Banano</b-form-checkbox>
    <b-form-checkbox inline name="frutas_deshidratadas" v-model="form.frutas_deshidratadas">Frutas deshidratadas</b-form-checkbox>
    <b-form-checkbox inline  name="chk_otros_frutas" v-model="chk_otros_frutas" id="chk_otros_frutas" value="1" unchecked-value="0">Otros</b-form-checkbox>

  </b-form-group>

<div class="row">
  <div class="col-xl-12" v-if="chk_otros_frutas == 1">
    <div class="form-group">
      <label>Indique cuales otras frutas</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="otros_frutas"
      v-model="form.otros_frutas"
      />
    </div>
  </div>
</div>

  <b-form-group label="Vegetales:">
    <b-form-checkbox inline name="verduras_cocidas" v-model="form.verduras_cocidas">Verduras cocidas</b-form-checkbox>
    <b-form-checkbox inline name="vegetales_frescos" v-model="form.vegetales_frescos">Vegetales frescos</b-form-checkbox>
    <b-form-checkbox inline  name="chk_otros_vegetales" v-model="chk_otros_vegetales" id="chk_otros_vegetales" value="1" unchecked-value="0">Otros</b-form-checkbox>

  </b-form-group>

<div class="row">
  <div class="col-xl-12" v-if="chk_otros_vegetales == 1">
    <div class="form-group">
      <label>Indique cuales otros vegetales</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="otros_vegetales"
      v-model="form.otros_vegetales"
      />
    </div>
  </div>
</div>

  <b-form-group label="Lacteos:">
    <b-form-checkbox inline name="quesos_frescos" v-model="form.quesos_frescos">Quesos frescos</b-form-checkbox>
    <b-form-checkbox inline name="quesos_madurados" v-model="form.quesos_madurados">Quesos madurados</b-form-checkbox>
    <b-form-checkbox inline name="yogures" v-model="form.yogures">Yogures</b-form-checkbox>
    <b-form-checkbox inline name="leche" v-model="form.leche">Leche</b-form-checkbox>
    <b-form-checkbox inline name="crema_de_leche" v-model="form.crema_de_leche">Crema de leche</b-form-checkbox>
    <b-form-checkbox inline name="mantequilla" v-model="form.mantequilla">Mantequilla</b-form-checkbox>
    <b-form-checkbox inline  name="chk_otros_lacteos" v-model="chk_otros_lacteos" id="chk_otros_lacteos" value="1" unchecked-value="0">Otros</b-form-checkbox>

  </b-form-group>

<div class="row">
  <div class="col-xl-12" v-if="chk_otros_lacteos == 1">
    <div class="form-group">
      <label>Indique cuales otros lácteos</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="otros_lacteos"
      v-model="form.otros_lacteos"
      />
    </div>
  </div>
</div>

  <b-form-group label="Grasas:">
    <b-form-checkbox inline name="aguacate" v-model="form.aguacate">Aguacate</b-form-checkbox>
    <b-form-checkbox inline name="frutos_secos" v-model="form.frutos_secos">Frutos secos</b-form-checkbox>
    <b-form-checkbox inline name="aceites_adicionados" v-model="form.aceites_adicionados">Aceites adicionados</b-form-checkbox>
    <b-form-checkbox inline name="crema_de_mani" v-model="form.crema_de_mani">Crema de maní</b-form-checkbox>
    <b-form-checkbox inline  name="chk_otros_grasas" v-model="chk_otros_grasas" id="chk_otros_grasas" value="1" unchecked-value="0">Otros</b-form-checkbox>

  </b-form-group>

<div class="row">
  <div class="col-xl-12" v-if="chk_otros_grasas == 1">
    <div class="form-group">
      <label>Indique cuales otras grasas</label>
      <input
      type="text"
      class="form-control form-control-solid form-control-lg"
      name="otros_grasas"
      v-model="form.otros_grasas"
      />
    </div>
  </div>
</div>

  <div class="form-group">
    <label>Menciona los alimentos que no toleras, no te gustan o no prefieras</label>
    <input
    type="text"
    class="form-control form-control-solid form-control-lg"
    v-model="form.unwanted_food"
    name="unwanted_food"
    />
  </div>

  <div class="form-group">
    <label>Menciona alimentos que son indispensables para ti, que si se eliminan de su dieta, los volvería a comer</label>
    <input
    type="text"
    class="form-control form-control-solid form-control-lg"
    v-model="form.desired_food"
    name="desired_food"
    />
  </div>


  <div class="row">
    <div class="col-xl-6">
      <div class="form-group">
        <label>¿Cuánto de agua toma al dia?</label>
        <select
        name="water"
        v-model="form.water"
        class="form-control form-control-solid form-control-lg"
        >
        <option value="">-- Seleccione --</option>
        <option value="Menos de 1 litro">Menos de 1 litro</option>
        <option value="Entre 1 y 2 litros">Entre 1 y 2 litros</option>
        <option value="Más de 2 litros">Más de 2 litros</option>
        <option value="No sabe cuanto toma">No sabe cuanto toma</option>
      </select>
    </div>
  </div></div>

  <b-form-group label="Otra bebidas:">
    <b-form-checkbox inline name="soda" v-model="form.soda">Gaseosas</b-form-checkbox>
    <b-form-checkbox inline name="alcoholic_drinks" v-model="form.alcoholic_drinks">Bebidas alchoolicas</b-form-checkbox>
    <b-form-checkbox inline name="coffee" v-model="form.coffee">Café</b-form-checkbox>
    <b-form-checkbox inline name="tea" v-model="form.tea">Tés / Aromáticas</b-form-checkbox>
  </b-form-group>
</div>
<!--end: Wizard Step 3-->

<!--begin: Wizard Step 3-->
<div class="pb-5" data-wizard-type="step-content">
  <h4 class="mb-10 font-weight-bold text-dark">
    Diagnóstico y Plan de trabajo
  </h4>






<b-form-group label="Diagnósticos dietarios:">
  <b-form-checkbox name="bajo_consumo_energetico" v-model="form.bajo_consumo_energetico">Bajo cosumo energético</b-form-checkbox>
  <b-form-checkbox name="bajo_consumo_proteico" v-model="form.bajo_consumo_proteico">Bajo consumo proteico</b-form-checkbox>
  <b-form-checkbox name="bajo_consumo_carbohidratos" v-model="form.bajo_consumo_carbohidratos">Bajo consumo de carbohidratos</b-form-checkbox>
  <b-form-checkbox name="bajo_consumo_grasas_escenciales" v-model="form.bajo_consumo_grasas_escenciales">Bajo consumo de grasas escenciales</b-form-checkbox>
  <b-form-checkbox name="bajo_consumo_micronutrientes" v-model="form.bajo_consumo_micronutrientes">Bajo consumo de micronutrientes</b-form-checkbox>
  <b-form-checkbox name="alto_consumo_ultraprcesados" v-model="form.alto_consumo_ultraprcesados">Alto consumo de ultraprocesados</b-form-checkbox>
  <b-form-checkbox name="inadecuado_timming_ingestas" v-model="form.inadecuado_timming_ingestas">Inadecuando TIMMING de ingestas</b-form-checkbox>
  <b-form-checkbox name="esquema_hidratacion_inadecuado" v-model="form.esquema_hidratacion_inadecuado">Esquea de hidratación inadecuado</b-form-checkbox>
  <b-form-checkbox name="dieta_alta_fodmaps" v-model="form.dieta_alta_fodmaps">Dieta alta en FODMAPS</b-form-checkbox>
  <b-form-checkbox name="excedente_calorico" v-model="form.excedente_calorico">Excedente calórico</b-form-checkbox>
</b-form-group>

<b-form-group label="Plan de Trabajo:">
  <b-form-checkbox name="dieta_alta_proteinas" v-model="form.dieta_alta_proteinas">Dieta alta en Proteinas</b-form-checkbox>
  <b-form-checkbox name="deficit_calorico" v-model="form.deficit_calorico">Déficit Calórico</b-form-checkbox>
  <b-form-checkbox name="dieta_de_mantenimiento" v-model="form.dieta_de_mantenimiento">Dieta de mantenimiento</b-form-checkbox>
  <b-form-checkbox name="superavit_calorico" v-model="form.superavit_calorico">Superavit Calórico</b-form-checkbox>
  <b-form-checkbox name="ayuno_intermitente" v-model="form.ayuno_intermitente">Ayuno Intermintente</b-form-checkbox>
  <b-form-checkbox name="dietas_keto" v-model="form.dietas_keto">Dietas Keto</b-form-checkbox>
  <b-form-checkbox name="dieta_baja_en_fodmaps" v-model="form.dieta_baja_en_fodmaps">Dieta Baja en FODMAPS</b-form-checkbox>
  <b-form-checkbox name="medidas_anti_inflamatorias" v-model="form.medidas_anti_inflamatorias">Medias Anti inflamatorias</b-form-checkbox>
  <b-form-checkbox name="dieta_muy_baja_en_carbohidratos" v-model="form.dieta_muy_baja_en_carbohidratos">Dieta muy baja en carbohidratos</b-form-checkbox>
  <b-form-checkbox name="esquema_de_suplementacion" v-model="form.esquema_de_suplementacion">Esquema de Suplementación</b-form-checkbox>
</b-form-group>







</div>





<!--begin: Wizard Actions -->
<div class="d-flex justify-content-between border-top pt-10">
  <div class="mr-2">
    <button
    class="btn btn-light-primary font-weight-bold text-uppercase px-9 py-4"
    data-wizard-type="action-prev"
    >
    Anterior
  </button>
</div>
<div>
  <button
  v-on:click="submit"
  class="btn btn-success font-weight-bold text-uppercase px-9 py-4"
  data-wizard-type="action-submit"
  >
  Guardar
</button>
<button
class="btn btn-primary font-weight-bold text-uppercase px-9 py-4"
data-wizard-type="action-next"
>
Siguiente paso
</button>
</div>
</div>
<!--end: Wizard Actions -->
</form>
<!--end: Wizard Form-->
</div>
</div>
<!--end: Wizard Body-->
</div>
<!--end: Wizard-->
</div>
</div>
</template>

<style lang="scss">
@import "../../src/assets/sass/pages/wizard/wizard-3.scss";
</style>

<script>
import { SET_BREADCRUMB } from "../../src/core/services/store/breadcrumbs.module";
import KTUtil from "../../src/assets/js/components/util";
import KTWizard from "../../src/assets/js/components/wizard";
import { mapGetters } from "vuex"
import Swal from "sweetalert2";
import Layout from "../../src/view/layout/Layout"

export default {
  name: "History",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Historial del paciente ${this.patient.first_name_1} ${this.patient.last_name_1}`,
    }
  },
  props: [
    'patient',
    'cities'
  ],
  data() {
    return {
      form: this.$inertia.form({
        _method: 'put',
        first_name_1 : this.patient.first_name_1,
        first_name_2 : this.patient.first_name_2,
        last_name_1 : this.patient.last_name_1,
        last_name_2 : this.patient.last_name_2,
        birth_date : this.patient.birth_date,
        phone : this.patient.phone,
        email : this.patient.email,
        active : this.patient.active,
        goal : this.patient.goal,
        avatar : this.patient.avatar,
        laboratory : this.patient.laboratory,
        otros_proteinas : this.patient.otros_proteinas,
        otros_carbohidratos : this.patient.otros_carbohidratos,
        otros_frutas : this.patient.otros_frutas,
        otros_vegetales : this.patient.otros_vegetales,
        otros_lacteos : this.patient.otros_lacteos,
        otros_grasas : this.patient.otros_grasas,
        previous_experience : this.patient.previous_experience,
        medical_condition : this.patient.medical_condition,
        medicine : this.patient.medicine,
        supplement : this.patient.supplement,
        previous_supplement : this.patient.previous_supplement,
        weight_variation : this.patient.weight_variation,
        job : this.patient.job,
        sedentary : this.patient.sedentary,
        rad_athletic_discipline : this.disciplina(),
        athletic_discipline : this.patient.athletic_discipline,
        training_description : this.patient.training_description,
        training_hours : this.patient.training_hours,
        training_days : this.patient.training_days,
        breakfast : this.patient.breakfast,
        brunch : this.patient.brunch,
        lunch : this.patient.lunch,
        snack : this.patient.snack,
        dinner : this.patient.dinner,
        street_food : this.patient.street_food,
        pollo : this.checked(this.patient.pollo),
        pescado_blanco : this.checked(this.patient.pescado_blanco),
        carne_de_res : this.checked(this.patient.carne_de_res),
        lomo_de_cerdo : this.checked(this.patient.lomo_de_cerdo),
        atun : this.checked(this.patient.atun),
        huevos : this.checked(this.patient.huevos),
        claras_de_huevos : this.checked(this.patient.claras_de_huevos),
        pavo : this.checked(this.patient.pavo),
        salmon : this.checked(this.patient.salmon),
        whey_protein : this.checked(this.patient.whey_protein),
        arroz : this.checked(this.patient.arroz),
        arroz_integral : this.checked(this.patient.arroz_integral),
        pasta : this.checked(this.patient.pasta),
        pasta_integral : this.checked(this.patient.pasta_integral),
        platano : this.checked(this.patient.platano),
        papa : this.checked(this.patient.papa),
        arepa : this.checked(this.patient.arepa),
        pan : this.checked(this.patient.pan),
        avena : this.checked(this.patient.avena),
        tostadas_de_arroz : this.checked(this.patient.tostadas_de_arroz),
        frutos_rojos : this.checked(this.patient.frutos_rojos),
        frutos_amarillos : this.checked(this.patient.frutos_amarillos),
        frutos_verdes : this.checked(this.patient.frutos_verdes),
        banano : this.checked(this.patient.banano),
        frutas_deshidratadas : this.checked(this.patient.frutas_deshidratadas),
        verduras_cocidas : this.checked(this.patient.verduras_cocidas),
        vegetales_frescos : this.checked(this.patient.vegetales_frescos),
        quesos_frescos : this.checked(this.patient.quesos_frescos),
        quesos_madurados : this.checked(this.patient.quesos_madurados),
        yogures : this.checked(this.patient.yogures),
        leche : this.checked(this.patient.leche),
        crema_de_leche : this.checked(this.patient.crema_de_leche),
        mantequilla : this.checked(this.patient.mantequilla),
        grasas : this.checked(this.patient.grasas),
        aguacate : this.checked(this.patient.aguacate),
        frutos_secos : this.checked(this.patient.frutos_secos),
        aceites_adicionados : this.checked(this.patient.aceites_adicionados),
        crema_de_mani : this.checked(this.patient.crema_de_mani),
        unwanted_food : this.patient.unwanted_food,
        desired_food : this.patient.desired_food,
        water : this.patient.water,
        soda : this.checked(this.patient.soda),
        alcoholic_drinks : this.checked(this.patient.alcoholic_drinks),
        coffee : this.checked(this.patient.coffee),
        tea : this.checked(this.patient.tea),
        bajo_consumo_energetico : this.checked(this.patient.bajo_consumo_energetico),
        bajo_consumo_proteico : this.checked(this.patient.bajo_consumo_proteico),
        bajo_consumo_carbohidratos : this.checked(this.patient.bajo_consumo_carbohidratos),
        bajo_consumo_grasas_escenciales : this.checked(this.patient.bajo_consumo_grasas_escenciales),
        bajo_consumo_micronutrientes : this.checked(this.patient.bajo_consumo_micronutrientes),
        alto_consumo_ultraprcesados : this.checked(this.patient.alto_consumo_ultraprcesados),
        inadecuado_timming_ingestas : this.checked(this.patient.inadecuado_timming_ingestas),
        esquema_hidratacion_inadecuado : this.checked(this.patient.esquema_hidratacion_inadecuado),
        dieta_alta_fodmaps : this.checked(this.patient.dieta_alta_fodmaps),
        excedente_calorico : this.checked(this.patient.excedente_calorico),
        dieta_alta_proteinas : this.checked(this.patient.dieta_alta_proteinas),
        deficit_calorico : this.checked(this.patient.deficit_calorico),
        dieta_de_mantenimiento : this.checked(this.patient.dieta_de_mantenimiento),
        superavit_calorico : this.checked(this.patient.superavit_calorico),
        ayuno_intermitente : this.checked(this.patient.ayuno_intermitente),
        dietas_keto : this.checked(this.patient.dietas_keto),
        dieta_baja_en_fodmaps : this.checked(this.patient.dieta_baja_en_fodmaps),
        medidas_anti_inflamatorias : this.checked(this.patient.medidas_anti_inflamatorias),
        dieta_muy_baja_en_carbohidratos : this.checked(this.patient.dieta_muy_baja_en_carbohidratos),
        esquema_de_suplementacion : this.checked(this.patient.esquema_de_suplementacion),
      }),
      show:true,
      default_photo: "/storage/avatars/default.jpg",
      current_photo:  `/storage/avatars/${this.patient.avatar}`,
      chk_laboratory: this.habilitado(this.patient.laboratory),
      chk_previous_experience: this.habilitado(this.patient.previous_experience),
      chk_medical_condition: this.habilitado(this.patient.medical_condition),
      chk_medicine: this.habilitado(this.patient.medicine),
      chk_supplement: this.habilitado(this.patient.supplement),
      chk_previous_supplement: this.habilitado(this.patient.supplement),
      chk_weight_variation: this.habilitado(this.patient.weight_variation),
      rad_athletic_discipline: this.habilitado(this.patient.athletic_discipline),
      chk_otros_proteinas: this.habilitado(this.patient.otros_proteinas),
      chk_otros_carbohidratos: this.habilitado(this.patient.otros_carbohidratos),
      chk_otros_frutas: this.habilitado(this.patient.otros_frutas),
      chk_otros_vegetales: this.habilitado(this.patient.otros_vegetales),
      chk_otros_lacteos: this.habilitado(this.patient.otros_lacteos),
      chk_otros_grasas: this.habilitado(this.patient.otros_grasas),
      athletic_discipline_options: [
        { text: 'Crossfit', value: 'Crossfit' },
        { text: 'Programación de atleta', value: 'Programación de atleta' },
        { text: 'Gimnasio', value: 'Gimnasio'},
        { text: 'Entrenamiento funcional', value: 'Entrenamiento funcional'},
        { text: 'Entrenamiento en casa', value: 'Entrenamiento en casa'},
        { text: 'Otra', value: 'Otra' }
      ]
    }
  },
  mounted() {
    // Initialize form wizard
    const wizard = new KTWizard("kt_wizard_v3", {
      startStep: 1, // initial active step number
      clickableSteps: true // allow step clicking
    });
    // Validation before going to next page
    wizard.on("beforeNext", function(/*wizardObj*/) {
      // validate the form and use below function to stop the wizard's step
      wizardObj.stop();
    });

    // Change event
    wizard.on("change", function(/*wizardObj*/) {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });

    //this.current_photo = this.patient.avatar;
  },
  methods: {
    disciplina(){
      let valor = 'Otra'
      let options = [
        'Crossfit',
        'Programación de atleta',
        'Gimnasio',
        'Entrenamiento funcional',
        'Entrenamiento en casa',
        'Otra'];
        options.forEach((item, i) => {
          if(item.localeCompare(this.patient.athletic_discipline) === 0) {
            valor = this.patient.athletic_discipline
          }
        });
        return valor;
      },
      habilitado(v){
        if(v === '' || v === null || v === false || v === 0) return 0
        else return 1
      },
      checked(v){
        if(v === '' || v === null || v === false || v === 0) return false
        else return true
      },
      onFileChange(e) {
        this.form.avatar = e.target.files[0]
        console.log(e.target.files[0])
        //const file = e.target.files[0];

        if (typeof FileReader === "function") {
          const reader = new FileReader();

          reader.onload = event => {
            this.current_photo = event.target.result;
          };

          reader.readAsDataURL(this.form.avatar);
        } else {
          alert("Sorry, FileReader API not supported");
        }
      },
      deleteAvatar(){
        this.current_photo = null
        this.form.avatar = null
      },
      submit: function(e) {
        this.form.post(route('patients.update', this.patient.id),
        {
          forceFormData: true,
          onSuccess: () => {
            Swal.fire({
              title: "",
              text: "La información fue actualizada exitosamente",
              icon: "success",
              confirmButtonClass: "btn btn-secondary"
            })
          },
          onError: (response) =>{
            Swal.fire({
              title: "",
              text: "Debe llenar todos los campos obligatorios",
              icon: "warning",
              confirmButtonClass: "btn btn-secondary"
            })
          }
        })
      }
    },
    computed: {
      //...mapGetters(["currentUserPersonalInfo"]),
      photo() {
        return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
      },
      firstNameState() {
        return this.form.first_name_1.length > 2 ? true : false
      },
      lastNameState() {
        return this.form.last_name_1.length > 2 ? true : false
      },
      phoneState() {
        return this.form.phone.length > 2 ? true : false
      },
      emailState() {
        return this.form.email.length > 2 ? true : false
      }
    },


  }
  </script>
