<template>
  <div class="col-lg-4">

  <!--begin::List Widget 8-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <!-- <h3 class="card-title font-weight-bolder text-dark">Trends</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor"></i></Dropdown2>
      </div> -->
      <!--begin::Section-->
      <div class="d-flex align-items-center">
        <!--begin::Symbol-->
        <div class="symbol symbol-45 symbol-light mr-5">
          <span class="symbol-label">
            <inline-svg
              src=""
              class="h-50 align-self-center"
            ></inline-svg>
          </span>
        </div>
        <!--end::Symbol-->
        <!--begin::Text-->
        <div class="d-flex flex-column flex-grow-1">
          <a
            href="#"
            class="font-weight-bold text-dark-75 text-hover-primary font-size-lg mb-1"
          >
            {{`${patient.first_name_1} ${patient.last_name_1}`}}
          </a>
          <span class="text-muted font-weight-bold">
            {{`${calcularEdad(patient.birth_date)} años`}}
          </span>
        </div>
        <!--end::Text-->
      </div>


































    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0">
        <!--begin::Item-->
        <div class="mb-10">
          <!--begin::Desc-->
          <p class="text-dark-50 m-0 pt-5 font-weight-normal">
            <em>{{patient.goal| truncate(20, '...') }}</em>
          </p>
          <!--end::Desc-->
          <!--begin::Desc-->
          <p class="text-dark-50 m-0 pt-5 font-weight-normal">
            <strong>Ubicación: </strong>{{patient.city.name}}
          </p>
          <!--end::Desc-->
          <div class="my-2">
            <v-btn text small color="primary" :href="route('patients.show', patient.id)">Ver más</v-btn>
          </div>
        </div>
        <!--end::Item-->
    </div>
    <!--end::Body-->
  </div>
  <!--end: List Widget 8-->
  </div>
</template>

<script>
export default {
  props: ['patient'],
  methods: {
        calcularEdad(fecha) {
            var hoy = new Date()
            var cumpleanos = new Date(fecha)
            var edad = hoy.getFullYear() - cumpleanos.getFullYear()
            var m = hoy.getMonth() - cumpleanos.getMonth()
            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--
            }
            return edad
        }
    }
};
</script>
