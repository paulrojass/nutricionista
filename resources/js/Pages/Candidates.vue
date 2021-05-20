<template>
  <div class="card card-custom card-stretch gutter-b">
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
            <th class="pr-0" style="width: 30%">Nombre</th>
            <th style="min-width: 20%">Correo</th>
            <th style="min-width: 25%">Teléfono</th>
            <th class="pr-0 text-right" style="min-width: 25%"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(candidate, i) in candidates">
            <tr v-bind:key="i">
              <td>
                <inertia-link
                class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
                :href="$route('patients.show', candidate.id)">
                <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                  {{ candidate.first_name_1 }} {{ candidate.first_name_2 }} {{ candidate.last_name_1 }} {{ candidate.last_name_2 }}
                </span>
              </inertia-link>
              <span class="text-muted font-weight-bold">
                {{ calcularEdad(candidate.birth_date) }} años
              </span>
            </td>
            <td>
              <span
              class="text-muted font-weight-bold">
              {{ candidate.email }}
            </span>
          </td>
          <td>
            <span
            class="text-muted font-weight-bold">
            {{ candidate.phone }}
          </span>
        </td>
        <td class="pr-0 text-right">
          <inertia-link
          :href="$route('controls.create', [candidate.id])"
          class="btn btn-icon btn-light btn-hover-primary btn-sm"
          >
          <span class="svg-icon svg-icon-md svg-icon-primary">
            <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
            <inline-svg
            src="/media/svg/icons/Communication/Write.svg"
            />
            <!--end::Svg Icon-->
          </span>
        </inertia-link>
        
        
        
        
        <inertia-link
        :href="$route('candidates.destroy', {'id' : candidate.id})"
        method="delete"
        as="button"
        type="button"
        class="btn btn-icon btn-light btn-hover-primary btn-sm"
        >
        <span
        class="svg-icon svg-icon-md svg-icon-primary">
        <!--begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg-->
        <inline-svg src="/media/svg/icons/General/Trash.svg" />
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
import Layout from "../src/view/layout/Layout"


export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Crear cita - Prospectos`,
    }
  },
  props: ['candidates'],
  computed: {
    inactivesTotal() {
      return this.$page.props.inactivesTotal
    },
  },
  methods: {
    deleteCandidate(id){
      this.$inertia.post(route('patients.delete', id))
    },
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
