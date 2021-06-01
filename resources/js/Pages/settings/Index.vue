<template>
  
  
  
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Configuración
        </span>
      </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      <div
      class="offcanvas-content pr-5 mr-n5 scroll ps"
      style="height: 804px; overflow: hidden;"
      >
      <div class="row gutter-b">
        <!--begin::Item-->
        <div class="col-4">
          <inertia-link
          :href="route('cities.index')"
          class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
          >
          <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
            <!--begin::Svg Icon-->
            <inline-svg src="/media/svg/icons/Shopping/Box2.svg" />
            <!--end::Svg Icon-->
          </span>
          <span class="d-block font-weight-bold font-size-h6 mt-2"
          >Planes por ubicación</span
          >
        </inertia-link>
      </div>
      
      <!--begin::Item-->
      <div class="col-4">
        <inertia-link
        :href="route('my-profile')"
        class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
        >
        <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
          <!--begin::Svg Icon-->
          <inline-svg src="/media/svg/icons/General/User.svg" />
          <!--end::Svg Icon-->
        </span>
        <span class="d-block font-weight-bold font-size-h6 mt-2"
        >Mi perfil</span
        >
      </inertia-link>
    </div>
    
    <!--begin::Item-->
    <div class="col-4" v-if="this.$page.props.auth_user.admin == 1">
      <inertia-link
      :href="route('users.index')"
      class="btn btn-block btn-light btn-hover-primary text-dark-50 text-center py-10 px-5"
      >
      <span class="svg-icon svg-icon-3x svg-icon-primary m-0">
        <inline-svg src="/media/svg/icons/Communication/Group.svg" />
      </span>
      <span class="d-block font-weight-bold font-size-h6 mt-2"
      >Usuarios</span
      >
    </inertia-link>
  </div>
  
  
</div>
</div>
</div>
</div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
export default {
  name: "Settings4",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Configuración`,
    }
  },
}
</script>
