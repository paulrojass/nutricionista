<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Controles</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Listado de citas programadas</span
        >
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-dark-75">
          <li class="nav-item">
            <a
            class="nav-link py-2 px-4"
            data-toggle="tab"
            :class="{ active: this.show === 'month' }"
            href="#kt_tab_pane_2_1"
            @click="show = 'month'"
            >Mes</a
            >
          </li>
          <li class="nav-item">
            <a
            class="nav-link py-2 px-4"
            data-toggle="tab"
            :class="{ active: this.show === 'week' }"
            href="#kt_tab_pane_2_2"
            @click="show = 'week'"
            >Semana</a
            >
          </li>
          <li class="nav-item">
            <a
            class="nav-link py-2 px-4"
            data-toggle="tab"
            :class="{ active: this.show === 'day' }"
            href="#kt_tab_pane_2_3"
            @click="show = 'day'"
            >Día</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless table-vertical-center">
          <thead>
            <tr>
              <th class="p-0" style="width: 50px"></th>
              <th class="p-0" style="min-width: 100px"></th>
              <th class="p-0" style="min-width: 60px"></th>
              <th class="p-0" style="min-width: 40px"></th>
              <th class="p-0" style="min-width: 100px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in dataToShow">
              <tr v-bind:key="i">
                <td class="pr-0">
                  <div
                  class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center"
                  >
                  <div
                  class="symbol-label"
                  :style="{
                    backgroundImage: `url(/storage/avatars/${item.patient.avatar})`
                    }"
                    ></div>
                    <!-- <i class="symbol-badge bg-success"></i> -->
                  </div>
                </td>
                <td class="pl-0">
                  <inertia-link
                  :href="route('patients.show', item.patient.id)"
                  class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                  {{item.patient.first_name_1}} {{item.patient.last_name_1}}
                </inertia-link>
                <span class="text-muted font-weight-bold d-block">
                  {{calcularEdad(item.patient.birth_date)+' años'}}
                </span>
              </td>
              <td>
                <span class="text-muted font-weight-bold">
                  {{item.date | formatDate}}
                </span>
              </td>
              <td>
                <span class="text-muted font-weight-bold">
                  {{item.time | formatTime}}
                </span>
              </td>
              <td>
                <span class="text-muted font-weight-bold">
                  {{item.note| truncate(40, '...')}}
                </span>
              </td>
              <td class="text-right pr-0">
                <inertia-link
                :href="route('patients.show', item.patient.id)"
                class="btn btn-icon btn-light btn-sm">
                <span class="svg-icon svg-icon-md svg-icon-success">
                  <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg-->
                  <inline-svg
                  src="/media/svg/icons/Navigation/Arrow-right.svg"
                  ></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </inertia-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <!--end::Table-->
</div>
<!--end::Body-->
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "controls",
  props: [
    'monthControls',
    'weekControls',
    'dayControls'
  ],
  data() {
    return {
      show: "day",
      month: this.monthControls,
      week: this.weekControls,
      day: this.dayControls
    }
  },
  methods:{
    calcularEdad(fecha) {
      var hoy = new Date()
      var cumpleanos = new Date(fecha)
      var edad = hoy.getFullYear() - cumpleanos.getFullYear()
      var m = hoy.getMonth() - cumpleanos.getMonth()
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--
      }
      return edad
    },
    dayOfWeekAsString(dayIndex) {
      return ["Domingo", "Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"][dayIndex] || '';
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),
    dataToShow() {
      if (this.show === "month") return this.month;
      if (this.show === "week") return this.week;
      if (this.show === "day") return this.day;
      return this.day;
    }
  }
};
</script>
