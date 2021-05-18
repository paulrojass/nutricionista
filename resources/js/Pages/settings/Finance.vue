<template>
  <div class="row">
    <div class="col-xl-6">
      <WidgetProgress
      :total_cop='this.total_cop'
      :total_usd='this.total_usd'
      :usd_mensual='this.usd_mensual'
      :cop_mensual='this.cop_mensual'
      :meses='this.meses'
      ></WidgetProgress>
    </div>
    <div class="col-xl-6">
      <WidgetPatients
      :month_candidates='this.month_candidates'
      :month_patients='this.month_patients'
      :total_actives='this.total_actives'
      :patients='this.patients'
      ></WidgetPatients>
    </div>
    <div class="col-xl-12">
      <WidgetFinance
      :usd_mensual='this.usd_mensual'
      :cop_mensual='this.cop_mensual'
      :total_this_year_usd='this.total_this_year_usd'
      :total_this_year_cop='this.total_this_year_cop'
      :total_last_year_usd='this.total_last_year_usd'
      :total_last_year_cop='this.total_last_year_cop'
      ></WidgetFinance>
    </div>
  </div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
import WidgetProgress from "./components/Progress"
import WidgetPatients from "./components/Patients"
import WidgetFinance from "./components/Finance"
export default {
  name: "finance",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Finanzas`,
    }
  },
  props: [
    'total_cop',
    'total_usd',
    'usd_mensual',
    'cop_mensual',
    'meses',
    'month_candidates',
    'month_patients',
    'total_actives',
    'patients',
    'total_this_year_usd',
    'total_this_year_cop',
    'total_last_year_usd',
    'total_last_year_cop'
  ],
  components: {
    WidgetProgress,
    WidgetPatients,
    WidgetFinance
  }
}
</script>
