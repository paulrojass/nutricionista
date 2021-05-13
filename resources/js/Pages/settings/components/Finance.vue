<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Finanzas
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
            <th class="pr-0 text-right" style="width: 20%"></th>
          </tr>
        </thead>
        <tbody>
          <template>
            <tr>
              <td class="pl-0">
                <inertia-link
                href="javascript:void(0)"
                class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                >
                Ganancias del mes en pesos
              </inertia-link>
            </td>
            <td class="pr-0 text-right">
              <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
                {{formatPrice(this.cop_mensual[11])}}
              </span>
            </td>
          </tr>
          
          <tr>
            <td class="pl-0">
              <inertia-link
              href="javascript:void(0)"
              class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
              >
              Ganancias del mes en dolares
            </inertia-link>
          </td>
          <td class="pr-0 text-right">
            <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
              {{formatPrice(this.usd_mensual[11])}}
            </span>
          </td>
        </tr>
        
        <tr>
          <td class="pl-0">
            <inertia-link
            href="javascript:void(0)"
            class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
            >
            Total facturado del año en pesos
          </inertia-link>
        </td>
        <td class="pr-0 text-right">
          <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
            {{formatPrice(this.total_this_year_cop)}}
          </span>
        </td>
      </tr>
      
      <tr>
        <td class="pl-0">
          <inertia-link
          href="javascript:void(0)"
          class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
          >
          Total facturado del año en dolares
        </inertia-link>
      </td>
      <td class="pr-0 text-right">
        <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
          {{formatPrice(this.total_this_year_usd)}}
        </span>
      </td>
    </tr>
    <tr>
      <td class="pl-0">
        <inertia-link
        href="javascript:void(0)"
        class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
        >
        Variación de la facturación con respecto al mes pasado en pesos
      </inertia-link>
    </td>
    <td class="pr-0 text-right">
      <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
        {{variation(this.cop_mensual[11], this.cop_mensual[10])}} %
      </span>
    </td>
  </tr>
  <tr>
    <td class="pl-0">
      <inertia-link
      href="javascript:void(0)"
      class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
      >
      Variación de la facturación con respecto al mes pasado en dolares
    </inertia-link>
  </td>
  <td class="pr-0 text-right">
    <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
      {{variation(this.usd_mensual[11], this.usd_mensual[10])}} %
    </span>
  </td>
</tr>
<tr>
  <td class="pl-0">
    <inertia-link
    href="javascript:void(0)"
    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
    >
    Variación de la facturación con respecto al año pasado en pesos
  </inertia-link>
</td>
<td class="pr-0 text-right">
  <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
    {{variation(this.total_this_year_cop, this.total_last_year_cop)}} %
  </span>
</td>
</tr>
<tr>
  <td class="pl-0">
    <inertia-link
    href="javascript:void(0)"
    class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
    >
    Variación de la facturación con respecto al año pasado en dolares
  </inertia-link>
</td>
<td class="pr-0 text-right">
  <span class="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
    {{variation(this.total_this_year_usd, this.total_last_year_usd)}} %
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
    'usd_mensual',
    'cop_mensual',
    'total_this_year_usd',
    'total_this_year_cop',
    'total_last_year_usd',
    'total_last_year_cop'
  ],
  methods: {
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    variation(actual, anterior) {
      return Math.round(((actual/anterior)*100)-100)
    },
  },
}
</script>
