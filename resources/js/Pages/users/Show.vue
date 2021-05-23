<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Mi perfil
        </span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('settings')" class="btn btn-primary font-weight-bolder font-size-sm">
        Volver
      </inertia-link>
    </div>
  </div>
  <!--end::Header-->
  <!--begin::Body-->
  <div class="card-body py-0">
  </div>
</div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"

export default {
  name: "my-profile",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Mi Perfil`,
    }
  },
  props: ['user']
}
</script>
