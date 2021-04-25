<template>
  <div class="card card-custom card-shadowless gutter-b bg-light">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Prospectos
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          {{inactivesTotal}} posibles pacientes por evaluar
        </span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('candidates.index')" class="btn btn-success font-weight-bolder font-size-sm">
        Todos
      </inertia-link>
    </div>
    
    
    
    
  </div>
  <!--end::Header-->
  <!--begin::Body-->
  <div class="card-body py-0">
    <!--begin::Table-->
    <div class="table-responsive">
      <table
      class="table table-head-custom table-vertical-center"
      id="kt_advance_table_widget_1"
      >
      <thead>
        <tr class="text-left">
          <th class="pr-0" style="width: 60%">Nombre</th>
          <th class="pr-0 text-right" style="min-width: 40%">Crear Cita</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in inactives">
          <tr v-bind:key="i">
            <td class="pl-0">
              <a
              href="#"
              class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >{{ item.first_name_1 }} {{ item.last_name_2 }}</a
              >
              <span
              class="text-muted font-weight-bold text-muted d-block"
              >{{ calcularEdad(item.birth_date) }} años</span
              >
            </td>
            
            <td class="pr-0 text-right">
              <inertia-link
              :href="$route('controls.create', [item.id])"
              class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
              >
              <span class="svg-icon svg-icon-md svg-icon-primary">
                <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
                <inline-svg
                src="/media/svg/icons/Communication/Write.svg"
                />
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
<!--end::Advance Table Widget 2-->
</div>
</template>

<script>
import Dropdown2 from "../../dropdown/Dropdown2.vue";
import Dropdown4 from "../../dropdown/Dropdown4.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-2",
  data() {
    return {
      list: this.inactives,
    };
  },
  created(){
    console.log(this.inactives)
  },
  components: {},
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
  },
  computed: {
    inactives() {
      return this.$page.props.inactives
    },
    inactivePatients() {
      return this.$page.props.inactivePatients
    },
    inactivesTotal() {
      return this.$page.props.inactivesTotal
    }
  }
};
</script>
