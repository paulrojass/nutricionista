<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Ciudades
        </span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('cities.create')" class="btn btn-primary font-weight-bolder font-size-sm">
        Crear ciudad
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
          <th style="min-width: 20%">Online</th>
          <th style="min-width: 20%">Moneda</th>
          <th class="pr-0 text-right" style="min-width: 20%"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(city, i) in cities">
          <tr v-bind:key="i">
            <td>
              <inertia-link
              class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
              href="javascript:void(0)">
              <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                {{ city.name }}
              </span>
            </inertia-link>
          </td>
          <td>
            <span
            class="text-muted font-weight-bold">
            <p v-if="city.online == 1">Si</p>
            <p v-else>No</p>
          </span>
        </td>
        <td>
          <span
          class="text-muted font-weight-bold">
          {{city.currency}}
        </span>
      </td>
      
      <td class="pr-0 text-right">
        <inertia-link
        :href="$route('plans.index', [city.id])"
        class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
        >
        <span class="svg-icon svg-icon-md svg-icon-primary">
          <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
          <inline-svg
          src="/media/svg/icons/Shopping/Box2.svg"
          />
          <!--end::Svg Icon-->
        </span>
      </inertia-link>
      
      
      
      
      
      <inertia-link
      :href="$route('cities.edit', [city.id])"
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
    
    <button
    as="button"
    type="button"
    @click="deleteCity(city)"
    class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
    >
    <span
    class="svg-icon svg-icon-md svg-icon-primary">
    <inline-svg src="/media/svg/icons/General/Trash.svg" />
  </span>
</button>


<!-- <inertia-link
:href="$route('cities.destroy', {'id' : city.id})"
method="delete"
as="button"
type="button"
class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
>
<span
class="svg-icon svg-icon-md svg-icon-primary">
<inline-svg src="/media/svg/icons/General/Trash.svg" />
</span>
</inertia-link> -->

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
import Swal from "sweetalert2"
export default {
  name: "cities",
  props: ['cities', 'errors'],
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Configuración - Ciudades`,
    }
  },
  methods: {
    deleteCity(city) {
      if(Object.keys(city.plans).length > 0){
        var c = 0
        city.plans.forEach((plan, i) => {
          if(Object.keys(plan.controls).length > 0){
            Swal.fire({
              icon: 'error',
              text: 'Esta ubicación tiene planes con controles asignados los cuales forman parte del historial para las finanzas, no se puede eliminar.'
            })
          } else {
            return this.$inertia.delete(route('cities.destroy', city.id))
          }
          //c++
        })
        // if(c > 0){
        //   return Swal.fire({
        //     icon: 'error',
        //     text: 'Esta ubicación tiene controles asignados los cuales forman parte del historial para las finanzas, no se puede eliminar.'
        //   })
        // } else {
        //   return this.$inertia.delete(route('cities.destroy', city.id))
        // }
      } else {
        return this.$inertia.delete(route('cities.destroy', city.id))
      }
    }
  }
}
</script>
