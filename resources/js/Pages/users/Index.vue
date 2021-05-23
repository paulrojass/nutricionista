<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Usuarios
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          
        </span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('users.create')" class="btn btn-primary font-weight-bolder font-size-sm">
        Crear usuario
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
          <th class="pr-0" style="width: 25%">Nombre</th>
          <th style="min-width: 50%">Correo</th>
          <th class="pr-0 text-right" style="min-width: 25%"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(user, i) in users">
          <tr v-bind:key="i">
            <td>
              <inertia-link
              class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
              :href="$route('users.show', user.id)">
              <span class="text-dark-75 font-weight-bolder d-block font-size-lg">
                {{ user.name }}
              </span>
            </inertia-link>
          </td>
          <td>
            <span
            class="text-muted font-weight-bold">
            {{ user.email }}
          </span>
        </td>
        <!-- <td>
        <span
        v-if="user.admin == 1"
        class="text-muted font-weight-bold">
        administrador
      </span>
      <span
      v-else
      class="text-muted font-weight-bold">
      Usuario
    </span>
  </td> -->
  <td class="pr-0 text-right">
    <!-- <inertia-link
    :href="$route('users.edit', [user.id])"
    class="btn btn-icon btn-light btn-hover-primary btn-sm"
    >
    <span class="svg-icon svg-icon-md svg-icon-primary">
    <inline-svg
    src="/media/svg/icons/Communication/Write.svg"
    />
  </span>
</inertia-link> -->




<inertia-link
:href="$route('users.destroy', {'id' : user.id})"
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
import Layout from "../../src/view/layout/Layout"


export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Listado de usuarios`,
    }
  },
  props: ['users'],
  mounted() {
    //do something after mounting vue instance
    console.log('hola')
    if( this.$page.props.flash.message === 'eliminado'){
      console.log('eliminado')
    }
  },
  computed: {
    inactivesTotal() {
      return this.$page.props.inactivesTotal
    },
  },
  methods: {
    deleteCandidate(id){
      this.$inertia.post(route('patients.delete', id))
    },
  }
};
</script>
