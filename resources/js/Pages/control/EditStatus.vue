<template>
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Cambiar estado del control para {{control.patient.first_name_1}} {{control.patient.last_name_1}}
        </span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Ingrese la informacion solicitada para el registro del control</span>
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('controls.index')" class="btn btn-primary font-weight-bolder font-size-sm">
        volver al listado
      </inertia-link>
    </div>
  </div>
  <!-- end::Header -->
  <div class="card-body pt-2 pb-0">
    <div class="table-responsive">
      <table class="table table-borderless table-vertical-center">
        <thead>
          <tr>
            <th class="p-0" style="width: 10%"></th>
            <th class="p-0" style="width: 10%"></th>
            <th class="p-0" style="width: 80%"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <inline-svg v-if="control.status == 'flamenco'" src="/media/svg/icons/Navigation/check.svg" />
            </td>
            <td>
              <b-button
              @click="cambiarEstado(control.id, 'flamenco')"
              class="btn btn-icon btn-sm control-flamenco"
              >
            </b-button>
          </td>
          <td>
            <p>Agendado sin confirmar</p>
          </td>
        </tr>
        <tr>
          <td>
            <inline-svg v-if="control.status == 'lavanda'" src="/media/svg/icons/Navigation/check.svg" />
          </td>
          <td>
            <b-button
            @click="cambiarEstado(control.id, 'lavanda')"
            class="btn btn-icon btn-sm control-lavanda"
            >
          </b-button>
        </td>
        <td>
          <p>Confirmado</p>
        </td>
      </tr>
      <tr>
        <td>
          <inline-svg v-if="control.status == 'albahaca'" src="/media/svg/icons/Navigation/check.svg" />
        </td>
        <td>
          <b-button
          @click="cambiarEstado(control.id, 'albahaca')"
          class="btn btn-icon btn-sm control-albahaca"
          >
        </b-button>
      </td>
      <td>
        <p>Pagó</p>
      </td>
    </tr>
    <tr>
      <td>
        <inline-svg v-if="control.status == 'naranja'" src="/media/svg/icons/Navigation/check.svg" />
      </td>
      <td>
        <b-button
        @click="cambiarEstado(control.id, 'naranja')"
        class="btn btn-icon btn-sm control-naranja"
        >
      </b-button>
    </td>
    <td>
      <p>Pidió cambio</p>
    </td>
  </tr>
  <tr>
    <td>
      <inline-svg v-if="control.status == 'rojo'" src="/media/svg/icons/Navigation/check.svg" />
    </td>
    <td>
      <b-button
      @click="cambiarEstado(control.id, 'rojo')"
      class="btn btn-icon btn-sm control-rojo"
      >
    </b-button>
  </td>
  <td>
    <p>No llegó / Canceló</p>
  </td>
</tr>
<tr>
  <td>
    <inline-svg v-if="control.status == 'verde'" src="/media/svg/icons/Navigation/check.svg" />
  </td>
  <td>
    <b-button
    @click="cambiarEstado(control.id, 'verde')"
    class="btn btn-icon btn-sm control-verde"
    >
  </b-button>
</td>
<td>
  <p>Se le entregó el plan o ajustes</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</template>

<script>
import Layout from "../../src/view/layout/Layout"

export default {
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: 'Editar Estado del control',
    }
  },
  props: ['control','cities'],
  methods: {
    cambiarEstado(id, status) {
      this.$inertia.post(route('controls.change-status', {id : id, status: status}),
      {
        onSuccess: (response) => {
          Swal.fire({
            title: "",
            text: "La información fue actualizada exitosamente",
            icon: "success",
            confirmButtonClass: "btn btn-secondary"
          })
        },
        onError: (response) =>{
          Swal.fire({
            title: "",
            text: "Debe llenar todos los campos obligatorios",
            icon: "warning",
            confirmButtonClass: "btn btn-secondary"
          })
        }
      })
    }
  }
};
</script>
