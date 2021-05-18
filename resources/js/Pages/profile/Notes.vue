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
        <button @click="sendNote" class="btn btn-info font-weight-bolder font-size-sm"
        >Agregar</button
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-0 pb-10">
      <div class="form-group">
        <textarea
        v-model="form.body"
        type="text"
        class="form-control"
        name="aspiration"
        placeholder="Redacte una nota y haga clic en Agregar para guardarla"
        
        ></textarea>
      </div>
      
      <div class="mb-5">
        <div class="border-top p-0" v-for="note in patient.notes" :key="note.key" >
          <div class="row pb-4 pt-4">
            <div class="col-12" align="right">
              {{note.created_at | formatDate}}
              <inertia-link
              method="delete"
              :href="route('notes.destroy', note.id)">
              eliminar
            </inertia-link>
          </div>
        </div>
        <p align="justify">
          {{note.body}}
        </p>
      </div>
    </div>
    
  </div>
  <!--end::Body-->
</div>
<!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "Widget-notes",
  props: ['patient'],
  data() {
    return {
      form:{
        body: '',
        patient_id: this.patient.id,
      }
    };
  },
  components: {},
  methods: {
    sendNote(){
      if(this.form.body != ''){
        this.$inertia.post(route('notes.store', this.form))
        this.form.body = ''
      }
    }
  }
};
</script>
