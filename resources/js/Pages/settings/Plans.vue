<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Planes de {{city.name}}
        </span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('plans.create', city.id)" class="btn btn-primary font-weight-bolder font-size-sm">
        Crear plan
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
          <th class="pr-0" style="width: 40%">Nombre</th>
          <th style="min-width: 40%">Precio</th>
          <th class="pr-0 text-right" style="min-width: 20%"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(plan, i) in city.plans">
          <tr v-bind:key="i">
            <td>
              <inertia-link
              class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
              href="javascript:void(0)">
              <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                {{ plan.name }}
              </span>
            </inertia-link>
          </td>
          <td>
            <span
            class="text-muted font-weight-bold">
            {{plan.price}}
          </span>
        </td>
        
        <td class="pr-0 text-right">
          <inertia-link
          :href="$route('plans.edit', [plan.id])"
          class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
          >
          <span class="svg-icon svg-icon-md svg-icon-primary">
            <inline-svg
            src="/media/svg/icons/Communication/Write.svg"
            />
          </span>
        </inertia-link>
        
        <inertia-link
        :href="$route('plans.destroy', {'id' : plan.id})"
        method="delete"
        as="button"
        type="button"
        class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
        >
        <span
        class="svg-icon svg-icon-md svg-icon-primary">
        <inline-svg src="/media/svg/icons/General/Trash.svg" />
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
</div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
export default {
  name: "plans-list",
  props: ['city'],
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Configuración - Ciudad ${city.name} - Planes`,
    }
  },
}
</script>
