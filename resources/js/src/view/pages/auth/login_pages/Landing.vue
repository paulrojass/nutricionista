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
      style="background-color: #F2C98A;"
      >
      <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
        <a href="#" class="text-center mb-10">
          <img
          src="/media/logos/logo-letter-1.png"
          class="max-h-70px"
          alt=""
          />
        </a>
        <h3
        class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
        style="color: #986923;"
        >
        Discover Amazing Metronic <br />with great build tools
      </h3>
    </div>
    <div
    class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>
  </div>
  <!--begin::Aside-->
  <!--begin::Content-->
  <div
  class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
  >
  <div class="d-flex flex-column-fluid flex-center">
    <!--begin::Signin-->
    <div class="login-form login-signin">
      <form
      class="form"
      novalidate="novalidate"
      @submit.prevent="onSubmit"
      >
      <div class="pb-13 pt-lg-0 pt-5">
        <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
          Solicite su consulta
        </h3>
      </div>
      
      
      <b-form-group id="input-group-1" label="Primer nombre:" label-for="input-1">
        <b-form-input
        id="input-1"
        v-model="form.first_name_1"
        required
        placeholder="Ingrese un nombre"
        ></b-form-input>
      </b-form-group>
      
      
      <b-form-group id="input-group-2" label="Segundo nombre:" label-for="input-2">
        <b-form-input
        id="input-2"
        v-model="form.first_name_2"
        placeholder="Ingrese un nombre"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-3" label="Primer apellido:" label-for="input-3">
        <b-form-input
        id="input-3"
        v-model="form.last_name_1"
        required
        placeholder="Ingrese un apellido"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-4" label="Segundo apellido:" label-for="input-4">
        <b-form-input
        id="input-4"
        v-model="form.last_name_2"
        placeholder="Ingrese un apellido"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-date" label="Fecha de nacimiento:" label-for="date">
        <b-form-input
        :type="`date`"
        id="date"
        v-model="form.birth_date"
        required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-5" label="Teléfono:" label-for="input-5">
        <b-form-input
        id="input-5"
        v-model="form.phone"
        required
        placeholder="ej. 123456789"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
      id="input-group-6"
      label="Correo electónico:"
      label-for="input-6"
      required
      description="El campo email debe ser válido.">
      <b-form-input
      id="input-6"
      v-model="form.email"
      type="email"
      required
      placeholder="ej: usuario@correo.com"
      ></b-form-input>
    </b-form-group>
    
    <b-form-group>
      <label>Describa las aspiraciones o motivo de la consulta</label>
      <textarea
      type="text"
      v-model="form.aspiration"
      class="form-control"
      name="aspiration"
      required
      ></textarea>
    </b-form-group>
    
    <div class="pb-lg-0 pb-5">
      <button
      class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
      >
      Enviar
    </button>
  </div>
</form>
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
  name: "solicitud",
  
  data() {
    return {
      state: 'signin',
      form: {
        first_name_1: '',
        first_name_2: '',
        last_name_1: '',
        last_name_2: '',
        birth_date: '',
        city_id: null,
        phone: '',
        email: '',
        aspiration: ''
      },
      show: true,
    };
  },
  computed: {
    backgroundImage() {
      return (
        "/media/svg/illustrations/working.svg"
      );
    }
  },
  mounted() {
    //const signin_form = KTUtil.getById("kt_login_signin_form");
    
    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Correo es un campo obligatorio"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Contraseña es un campo obligatorio"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });
    
    // this.fv.on("core.form.valid", () => {
    //   var email = this.form.email;
    //   var password = this.form.password;
    //
    //   // clear existing errors
    //   this.$store.dispatch(LOGOUT);
    
    // set spinner to submit button
    //   const submitButton = this.$refs["kt_login_signin_submit"];
    //   submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    //
    //   // dummy delay
    //   setTimeout(() => {
    //     // send login request
    //     this.$store
    //     .dispatch(LOGIN, { email, password })
    //     // go to which page after successfully login
    //     .then(() => this.$router.push({ name: "dashboard" }))
    //     .catch(() => {});
    //
    //     submitButton.classList.remove(
    //       "spinner",
    //       "spinner-light",
    //       "spinner-right"
    //     );
    //   }, 2000);
    // });
    
    // this.fv.on("core.form.invalid", () => {
    //   Swal.fire({
    //     title: "",
    //     text: "Por favor, ingrese los datos correctos",
    //     icon: "error",
    //     confirmButtonClass: "btn btn-secondary",
    //     heightAuto: false
    //   });
    // });
    
    // this.fv1.on("core.form.valid", () => {
    //   const email = this.$refs.remail.value;
    //   const password = this.$refs.rpassword.value;
    //
    //   // clear existing errors
    //   this.$store.dispatch(LOGOUT);
    
    // set spinner to submit button
    //const submitButton = this.$refs["kt_login_signup_submit"];
    //submitButton.classList.add("spinner", "spinner-light", "spinner-right");
    
    // dummy delay
    // setTimeout(() => {
    //   // send register request
    //   this.$store
    //   .dispatch(REGISTER, {
    //     email: email,
    //     password: password
    //   })
    //   .then(() => this.$router.push({ name: "dashboard" }));
    //
    // submitButton.classList.remove(
    //  "spinner",
    //  "spinner-light",
    //  "spinner-right"
    // );
    //   }, 2000);
    // });
    
    this.fv1.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Por favor ingrese los datos!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
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
    onSubmit(evt) {
      evt.preventDefault()
      this.$inertia.post(route('landing-store-candidate', this.form))
    }
  }
};
</script>
