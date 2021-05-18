<template>
  <div class="aside aside-left d-flex flex-column" id="kt_aside" ref="kt_aside">
    <!--begin::Brand-->
    <div
    class="aside-brand d-flex flex-column align-items-center flex-column-auto pt-5 pt-lg-18 pb-10"
    >
    <!--begin::Logo-->
    <div
    class="btn p-0 symbol symbol-60 symbol-light-primary"
    id="kt_quick_user_toggle"
    >
    <inertia-link :href="$route('home')">
      <div class="symbol-label">
        <inline-svg
        alt="Logo"
        src="/media/svg/avatars/001-boy.svg"
        class="h-75 align-self-end"
        />
      </div>
    </inertia-link>
  </div>
  <!--end::Logo-->
</div>
<!--end::Brand-->
<!--begin::Nav Wrapper-->
<div
class="aside-nav d-flex flex-column align-items-center flex-column-fluid pb-10"
>
<!--begin::Nav-->
<ul class="nav flex-column">
  <li class="nav-item mb-2" v-b-tooltip.hover.right="'Configuración'">
    <inertia-link
    :href="$route('settings')"
    class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
    >
    <span class="svg-icon svg-icon-xxl">
      <inline-svg src="/media/svg/icons/Code/Settings4.svg" />
    </span>
  </inertia-link>
</li>
<!--end::Item-->
<!--begin::Item-->
<li class="nav-item mb-2" v-b-tooltip.hover.right="'Finanzas'">
  <inertia-link
  :href="$route('finance')"
  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
  >
  <span class="svg-icon svg-icon-xxl">
    <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
    <inline-svg src="/media/svg/icons/Shopping/Money.svg" />
    <!--end::Svg Icon-->
  </span>
</inertia-link>
</li>
<!--end::Item-->
<!--begin::Item-->
<li class="nav-item mb-2" v-b-tooltip.hover.right="'Salir'">
  <a
  :href="$route('logout')"
  class="nav-link btn btn-icon btn-hover-text-primary btn-lg active"
  >
  <span class="svg-icon svg-icon-xxl">
    <!--begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg-->
    <inline-svg src="/media/svg/icons/Navigation/Sign-out.svg" />
    <!--end::Svg Icon-->
  </span>
</a>
</li>
<!--end::Item-->
</ul>
<!--end::Nav-->
</div>
<!--end::Nav Wrapper-->
<!--begin::Footer-->
<!-- <div
class="aside-footer d-flex flex-column align-items-center flex-column-auto py-8"
>
<KTQuickNotifications></KTQuickNotifications>
<KTQuickActions></KTQuickActions>
<KTQuickPanel></KTQuickPanel>
</div> -->
<!--end::Footer-->
</div>
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import KTLayoutAside from "../../../assets/js/layout/base/aside.js";
// import KTQuickNotifications from "../extras/offcanvas/QuickNotifications.vue";
// import KTQuickActions from "../extras/offcanvas/QuickActions.vue";
// import KTQuickPanel from "../extras/offcanvas/QuickPanel.vue";

export default {
  name: "Aside",
  mounted() {
    this.$nextTick(() => {
      // Init Aside
      KTLayoutAside.init(this.$refs["kt_aside"]);
    });
  }
};
</script>
