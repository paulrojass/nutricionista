<template>
  <div class="d-flex flex-column flex-root">
    <div
    class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
    :class="{
      'login-signin-on': this.state == 'signin',
      'login-signup-on': this.state == 'signup',
      'login-forgot-on': this.state == 'forgot'
      }"
      id="kt_login"
      >
      <!--begin::Aside-->
      <div
      class="login-aside d-flex flex-column flex-row-auto"
      style="background-color: #FFFFFF;"
      >
    <div
    class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }" style="background-size: cover"
    ></div>
  </div>
  <!--begin::Aside-->
  <!--begin::Content-->
  <div
  class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
  >
  <div class="d-flex flex-column-fluid flex-center">
    <!--begin::Signin-->
    <div class="pb-13 pt-lg-0 pt-5">
      <h4 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
        La solicitud de consulta se ha enviado exitosamente, luego lo contactaremos para concretar.
      </h4>
      <inertia-link
      :href="route('landing')"
      class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-5 mr-3"
      >
      Realizar otra solicitud
    </inertia-link>
      <h4 class="font-weight-bolder text-dark font-size-h5 font-size-h3-lg">
        Sígueme en instagram <a href="https://instagram.com/drtheofit">@drtheofit</a>
      </h4>
  </div>
  
  <!--end::Signin-->
</div>
<!--end::Content-->
</div>
</div>
</div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "../../../../assets/sass/pages/login/login-1.scss";
</style>

<script>
import formValidation from "../../../../assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
// import Trigger from "../../../../assets/plugins/formvalidation/dist/es6/plugins/Trigger";
// import Bootstrap from "../../../../assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
// import SubmitButton from "../../../../assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
//
// import KTUtil from "../../../../assets/js/components/util";
// import { mapGetters, mapState } from "vuex";
//
// import { LOGIN, LOGOUT, REGISTER } from "../../../../core/services/store/auth.module";
import Swal from "sweetalert2";

export default {
  name: "solicitud-successfully",
  computed: {
    backgroundImage() {
      return (
        // "/media/svg/illustrations/working.svg"
        "/media/theo/theo.jpg"
      );
    }
  },
  methods: {
    // showForm(form) {
    //   this.state = form;
    //   var form_name = "kt_login_" + form + "_form";
    //   KTUtil.animateClass(
    //     KTUtil.getById(form_name),
    //     "animate__animated animate__backInUp"
    //   );
    // },
    // onSubmit(evt) {
    //   evt.preventDefault()
    //   this.$inertia.post(route('landing-store-candidate', this.form))
    // }
  }
};
</script>
