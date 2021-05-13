<template>
  <!--begin::Mixed Widget 5-->
  <div class="card card-custom bg-radial-gradient-danger gutter-b card-stretch">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title font-weight-bolder text-white">Resumen Anual</h3>
      <div class="card-toolbar">
        <Dropdown2><i class="ki ki-bold-more-hor text-white"></i></Dropdown2>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex flex-column p-0">
      <!--begin::Chart-->
      <apexchart
      class="card-rounded-bottom"
      :options="chartOptions"
      :series="series"
      type="bar"
      ></apexchart>
      <!--end::Chart-->
      <!--begin::Stats-->
      <div class="card-spacer bg-white card-rounded flex-grow-1">
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col px-8 py-6 mr-8">
            <div class="font-size-sm text-muted font-weight-bold">
              Ganancia del mes en pesos
            </div>
            <div class="font-size-h4 font-weight-bolder">COP {{formatPrice(this.cop_mensual[11])}}</div>
          </div>
          <div class="col px-8 py-6">
            <div class="font-size-sm text-muted font-weight-bold">
              Ganancia de mes en dolares
            </div>
            <div class="font-size-h4 font-weight-bolder">USD {{formatPrice(this.usd_mensual[11])}}</div>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col px-8 py-6 mr-8">
            <div class="font-size-sm text-muted font-weight-bold">
              Ganancia total en pesos
            </div>
            <div class="font-size-h4 font-weight-bolder">COP {{formatPrice(this.total_cop)}}</div>
          </div>
          <div class="col px-8 py-6">
            <div class="font-size-sm text-muted font-weight-bold">
              Ganancia total en dolares
            </div>
            <div class="font-size-h4 font-weight-bolder">USD {{formatPrice(this.total_usd)}}</div>
            
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Mixed Widget 5-->
</template>

<script>
import Dropdown2 from "../../../src/view/content/dropdown/Dropdown2.vue";
import { mapGetters } from "vuex";

export default {
  name: "widget-10",
  props: [
    'total_cop',
    'total_usd',
    'usd_mensual',
    'cop_mensual',
    'meses'
  ],
  created(){
    console.log(Math.max(...this.cop_mensual))
  },
  components: {
    Dropdown2
  },
  methods: {
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  data() {
    return {
      chartOptions: {},
      series: [
        {
          name: "USD",
          data: this.usd_mensual
        },
        {
          name: "COP",
          data: this.cop_mensual
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"])
  },
  mounted() {
    // reference; kt_mixed_widget_1_chart
    this.chartOptions = {
      chart: {
        type: "bar",
        height: 200,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["30%"],
          endingShape: "rounded"
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"]
      },
      xaxis: {
        categories: this.meses,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      yaxis: {
        min: 0,
        max: Math.max(...this.cop_mensual),
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: this.layoutConfig("colors.gray.gray-500"),
            fontSize: "12px",
            fontFamily: this.layoutConfig("font-family")
          }
        }
      },
      fill: {
        opacity: 1
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: this.layoutConfig("font-family")
        },
        y: {
          formatter: function(val) {
            return val ;
          }
        }
      },
      colors: [
        this.layoutConfig("colors.theme.light.danger"),
        this.layoutConfig("colors.theme.base.white")
      ],
      grid: {
        borderColor: this.layoutConfig("colors.gray.gray-200"),
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: false
          }
        }
      }
    };
  }
};
</script>
