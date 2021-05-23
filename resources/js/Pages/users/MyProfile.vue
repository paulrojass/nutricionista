<template>
  <div >
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
      <div class="border-bottom mb-5 pb-5">
        <div class="font-weight-bold mb-3">
          Datos de usuario:
        </div>
        <div class="line-height-xl">
          <strong>Nombre: </strong> {{user.name}}
          <br />
          <strong>Correo electrónico: {{user.email}}</strong>
          <br />
          <strong>Tipo de usuario: </strong> <span v-if="user.admin == 1">Administrador</span> <span v-if="user.admin == 0">Estandar</span>
          <br />
        </div>
        <div class="pt-5">
          <b-button
          type="button"
          class="btn btn-primary font-weight-bolder font-size-sm"
          v-b-modal.modal-1
          >Cambiar contraseña</b-button>
        </div>
      </div>
    </div>
  </div>
  <b-modal id="modal-1" title="Cambiar contraseña">
    <b-form-group id="input-group-2" label="Contraseña nueva (mayor a 7 caracteres):" label-for="password">
      <b-form-input
      id="password"
      type="password"
      v-model="form.password"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-3" label="Repetir contraseña:" label-for="password_confirm">
      <b-form-input
      id="password_confirm"
      type="password"
      v-model="form.password_confirm"
      ></b-form-input>
    </b-form-group>
    
    <template #modal-footer="{ ok, hide }">
      <b-button class="btn btn-success" v-if="form.password.length >= 8 && form.password == form.password_confirm" @click="submit()">
        Cambiar
      </b-button>
      <b-button @click="hide('forget')">
        Cancelar
      </b-button>
    </template>
    
    <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
      Hello, world! This is a toast message.
    </b-toast>
    
    
  </b-modal>
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
  data(){
    return {
      user: this.$page.props.auth_user,
      form: {
        password: '',
        password_confirm: '',
        user_id: this.$page.props.auth_user.id
      }
    }
  },
  methods: {
    submit() {
      this.$inertia.post(route('change-password'), this.form).then(response => {
        this.$bvModal.hide('modal-1')
      }
    );
  }
}
}
</script>
