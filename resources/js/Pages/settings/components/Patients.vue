<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Clientes y Prospectos
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
            <th class="pr-0" style="width: 80%"></th>
            <th class="pr-0 text-right" style="min-width: 20%"></th>
          </tr>
        </thead>
        <tbody>
          <template>
            <tr>
              <td class="pl-0">
                <inertia-link
                :href="route('candidates.index')"
                class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                >
                Prospectos del mes
              </inertia-link>
            </td>
            <td class="pr-0 text-right">
              <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
                {{this.month_candidates}}
              </span>
            </td>
          </tr>
          
          <tr>
            <td class="pl-0">
              <inertia-link
              :href="route('patients.index')"
              class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >
              Clientes nuevos
            </inertia-link>
          </td>
          <td class="pr-0 text-right">
            <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
              {{this.month_patients}}
            </span>
          </td>
        </tr>
        
        <tr>
          <td class="pl-0">
            <inertia-link
            :href="route('patients.index')"
            class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
            >
            Total de clientes activos
          </inertia-link>
        </td>
        <td class="pr-0 text-right">
          <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
            {{this.total_actives}}
          </span>
        </td>
      </tr>
      
      <tr>
        <td class="pl-0">
          <inertia-link
          :href="route('patients.index')"
          class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
          >
          Total de clientes
        </inertia-link>
      </td>
      <td class="pr-0 text-right">
        <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
          {{this.patients}}
        </span>
      </td>
    </tr>
  </template>
</tbody>
</table>
</div>
</div>
</div>
</template>
<script>
export default {
  name: "finance-patients",
  props: [
    'month_candidates',
    'month_patients',
    'patients',
    'total_actives'
  ],
}
</script>
