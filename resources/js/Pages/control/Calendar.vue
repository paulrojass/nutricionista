<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Google Calendar
        </span>
        <span class="text-muted mt-3 font-weight-bold font-size-sm">
          Controles creados en el calendario
        </span>
      </h3>
      <div class="card-toolbar">
        
        
        <inertia-link
        :href="$route('controls.index')"
        class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
        >
        <span class="svg-icon svg-icon-md svg-icon-primary">
          <!--begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg-->
          <inline-svg
          src="/media/svg/icons/Text/Bullet-list.svg"
          />
          <!--end::Svg Icon-->
        </span>
      </inertia-link>
      
      
    </div>
  </div>
  <div class="card-body responsive-iframe-container big-container">
    <iframe
    src="https://calendar.google.com/calendar/embed?src=es.pa%23holiday%40group.v.calendar.google.com&ctz=America%2FPanama&amp;src=ZXMucGEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237CB342&amp;showPrint=1&amp;title=Mi%20calendario&amp;showNav=1&amp;showTabs=1&amp;showCalendars=0"
    style="border: 0"
    width="100%"
    height="600"
    frameborder="0"
    scrolling="no"
    ></iframe>
  </div>
</div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
export default {
  name: "Calendar",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Calendario de Citas`,
    }
  },
}
</script>
<style scope>
</style>
