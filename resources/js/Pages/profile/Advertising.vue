<template>
  <div class="card card-custom card-stretch gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Anuncios</span
        >
      </h3>
    </div>
    <div class="card-body py-0">

      <p v-if="nextControl == null"> No tiene citas asignadas</p>


        <p v-else>Proxima cita: {{nextControl.date | formatDate}}</p>


    </div>
    
  </div>
</template>

<script>
export default {
  props : ['nextControl']
};
</script>
