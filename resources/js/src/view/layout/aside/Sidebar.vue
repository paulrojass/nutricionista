<template>
  <!--begin::Aside Secondary-->
  <div
  class="sidebar sidebar-left d-flex flex-row-auto flex-column"
  id="kt_sidebar"
  ref="kt_sidebar"
  >
  <!--begin::Aside Secondary Header-->
  <div
  class="sidebar-header flex-column-auto pt-5 pt-lg-19 pb-5 px-5 px-lg-10"
  >
  <!--begin::Toolbar-->
  <div class="d-flex">
    <!--begin::Desktop Search-->
    <div
    class="quick-search quick-search-inline flex-grow-1"
    id="kt_quick_search_inline"
    >
    <!--begin::Form-->
    <form method="get" :action="$route('patients.search')" class="quick-search-form">
      <div class="input-group rounded bg-light">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <span class="svg-icon svg-icon-lg">
              <inline-svg src="/media/svg/icons/General/Search.svg" />
            </span>
          </span>
        </div>
        <input
        type="text"
        name="search"
        class="form-control h-40px"
        placeholder="Buscar pacientes..."
        />
        <div class="input-group-append">
          <span class="input-group-text">
            <i
            class="quick-search-close ki ki-close icon-sm text-muted"
            ></i>
          </span>
        </div>
      </div>
    </form>
    <!--end::Form-->
    <!--begin::Search Toggle-->
    <div
    id="kt_quick_search_toggle"
    data-toggle="dropdown"
    data-offset="0px,1px"
    ></div>
    <!--end::Search Toggle-->
  </div>
  <!--end::Desktop Search-->
</div>
<!--end::Toolbar-->
</div>
<!--end::Aside Secondary Header-->
<!--begin::Aside Secondary Content-->
<div class="sidebar-content flex-column-fluid pb-10 pt-9 px-5 px-lg-10">
  <!--begin: Stats Widget 19-->
  <div class="card card-custom bg-light-success card-shadowless gutter-b">
    <!--begin::Body-->
    <div class="card-body my-3">
      <a
      href="#"
      class="card-title font-weight-bolder text-success text-hover-state-dark font-size-h6 mb-4 d-block"
      >Pacientes activos</a
      >
      <div class="font-weight-bold text-muted font-size-sm">
        <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2"
        >{{activePatients}}%</span
        >{{activesTotal}} aprobados para cita
      </div>
      <div class="progress progress-xs mt-7 bg-success-o-60">
        <div
        class="progress-bar bg-success"
        role="progressbar"
        :style="`width: ${activePatients}%;`"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        ></div>
      </div>
    </div>
    <!--end:: Body-->
  </div>
  <!--end: Stats:Widget 19-->
  <!--begin::Stats Widget 20-->
  <div class="card card-custom bg-light-warning card-shadowless gutter-b">
    <!--begin::Body-->
    <div class="card-body my-4">
      <a
      href="#"
      class="card-title font-weight-bolder text-warning font-size-h6 mb-4 text-hover-state-dark d-block"
      >Citas culminadas del dia</a
      >
      <div class="font-weight-bold text-muted font-size-sm">
        <span class="text-dark-75 font-weight-bolder font-size-h2 mr-2"
        >{{controlsSuccessToday}}%</span
        >{{controlsCount}} citas programadas para hoy
      </div>
      <div class="progress progress-xs mt-7 bg-warning-o-60">
        <div
        class="progress-bar bg-warning"
        role="progressbar"
        :style="`width: ${controlsSuccessToday}%;`"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        ></div>
      </div>
    </div>
    <!--end::Body-->
  </div>
  <Candidates></Candidates>
</div>
<!--end::Aside Secondary Content-->
</div>
<!--end::Aside Secondary-->
</template>

<style lang="scss">
/* hide default vue-bootstrap tab links */
.hide-tabs > div:not(.tab-content) {
  display: none;
}
</style>

<script>
import KTLayoutSidebar from "../../../assets/js/layout/base/sidebar.js";
import Candidates from "../../content/widgets/list/Candidates.vue";

export default {
  name: "sidebar",
  components: {
    Candidates
  },
  mounted() {
    this.$nextTick(() => {
      // Init sidebar
      KTLayoutSidebar.init(this.$refs["kt_sidebar"]);
    });
  },
  computed: {
    activePatients() {
      return this.$page.props.activePatients
    },
    inactivePatients() {
      return this.$page.props.inactivePatients
    },
    activesTotal() {
      return this.$page.props.activesTotal
    },
    inactivesTotal() {
      return this.$page.props.inactivesTotal
    },
    controlsSuccessToday() {
      return this.$page.props.controlsSuccessToday
    },
    successControls() {
      return this.$page.props.successControls
    },
   controlsCount() {
      return this.$page.props.controlsCount
    },
  }
};
</script>
