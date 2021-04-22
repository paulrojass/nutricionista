<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Notas</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Anotaciones y recordatorios sobre el paciente</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-info font-weight-bolder font-size-sm"
        >Agregar</a
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      
    </div>
    <!--end::Body-->
  </div>
  <!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "widget-2",
  data() {
    return {
      checked: false,
      list: [
        {
          order_id: "56037-XDER",
          country: "Brasil",
          country_desc: "Code: BR",
          date: "05/28/2020",
          date_desc: "Paid",
          company: "Intertico",
          company_desc: "Web, UI/UX Design",
          class: "primary",
          status: "Approved"
        },
        {
          order_id: "05822-FXSP",
          country: "Belarus",
          country_desc: "Code: BY",
          date: "02/04/2020",
          date_desc: "Rejected",
          company: "Agoda",
          company_desc: "Houses & Hotels",
          class: "warning",
          status: "In Progress"
        },
        {
          order_id: "00347-BCLQ",
          country: "Phillipines",
          country_desc: "Code: PH",
          date: "23/12/2020",
          date_desc: "Paid",
          company: "RoadGee",
          company_desc: "Transportation",
          class: "success",
          status: "Success"
        },
        {
          order_id: "4472-QREX",
          country: "Argentina",
          country_desc: "Code: AR",
          date: "17/09/2021",
          date_desc: "Pending",
          company: "The Hill",
          company_desc: "Insurance",
          class: "danger",
          status: "Danger"
        }
      ]
    };
  },
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
