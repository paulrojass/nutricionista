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
          Configuración
        </inertia-link>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0">
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      <div class="row">
        <div class="col-xl-6">
          <div class="form-group row">
            <label class="col-xl-6 col-lg-6 col-form-label text-right"
            >Fotografía</label
            >
            <div class="col-lg-6 col-xl-6">
              <div class="image-input image-input-outline" id="kt_avatar">
                <div
                class="image-input-wrapper"
                :style="{ backgroundImage: `url(${photo})` }"
                ></div>
                <label
                class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                data-action="change"
                data-toggle="tooltip"
                title=""
                data-original-title="Change avatar"
                >
                <!-- <i class="fa fa-pen icon-sm text-muted"></i> -->
                <i class="fa fa-pencil icon-sm text-muted" aria-hidden="true"></i>
                <input
                type="file"
                name="avatar"
                accept=".png, .jpg, .jpeg"
                @change="submitAvatar($event)"
                />
                <input type="hidden" name="avatar_remove" />
              </label>
              <span
              class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
              data-action="cancel"
              data-toggle="tooltip"
              title="Cancel avatar"
              >
              <i class="fa fa-times icon-sm text-muted" aria-hidden="true"></i>
            </span>
            <span
            class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="remove"
            data-toggle="tooltip"
            title="Remove avatar"
            @click="deleteAvatar"
            >
            <i class="fa fa-times icon-sm text-muted" aria-hidden="true"></i>
          </span>
        </div>
        <span class="form-text text-muted"
        >formatos permitidos: png, jpg, jpeg.</span
        >
      </div>
    </div>
  </div>
  <div class="col-lx-6">
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
import Swal from "sweetalert2";

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
      },
      form_avatar: this.$inertia.form({
        //_method: 'put',
        avatar : this.$page.props.auth_user.avatar,
        default_photo: "/storage/avatars/users/default.jpg",
        
        current_photo:  `/storage/avatars/users/${this.$page.props.auth_user.avatar}`,
      })
    }
  },
  methods: {
    submit() {
      this.$inertia.post(route('change-password'), this.form).then(response => {
        this.$bvModal.hide('modal-1')
      })
    },
    submitAvatar(e){
      this.form_avatar.avatar = e.target.files[0]
      this.form_avatar.post(route('change-avatar'),
      {
        forceFormData: true,
        onSuccess: (response) => {
          if (typeof FileReader === "function") {
            const reader = new FileReader();
            
            reader.onload = event => {
              this.form_avatar.current_photo = event.target.result;
            };
            
            reader.readAsDataURL(this.form_avatar.avatar);
          } else {
            alert("Sorry, FileReader API not supported");
          }
          Swal.fire({
            title: "",
            text: "La imagen de perfil fue actualizada",
            icon: "success",
            confirmButtonClass: "btn btn-secondary"
          })
        },
        onError: (response) =>{
          Swal.fire({
            title: "",
            text: "Formato no permitido",
            icon: "warning",
            confirmButtonClass: "btn btn-secondary"
          })
        }
      })
    },
    // onFileChange(e) {
    //   this.form_avatar.avatar = e.target.files[0]
    //
    //   if (typeof FileReader === "function") {
    //     const reader = new FileReader();
    //
    //     reader.onload = event => {
    //       this.form_avatar.current_photo = event.target.result;
    //     };
    //
    //     reader.readAsDataURL(this.form_avatar.avatar);
    //
    //     this.submitAvatar();
    //
    //   } else {
    //     alert("Sorry, FileReader API not supported");
    //   }
    // },
    deleteAvatar(){
      this.$inertia.post(route('delete-avatar'))
      this.form_avatar.current_photo = null
      this.form_avatar.avatar = null
    }
  },
  computed: {
    //...mapGetters(["currentUserPersonalInfo"]),
    photo() {
      return this.form_avatar.current_photo == null
      ? this.form_avatar.default_photo
      : this.form_avatar.current_photo;
    }
  }
}
</script>
