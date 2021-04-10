<template>
  <div>
    <b-button variant="dark">
      <inertia-link :href="route('patients.create')">
        <span class="menu-text" style="color:white">Nuevo Paciente</span>
      </inertia-link>
    </b-button>
    <b-button variant="dark">
      <inertia-link :href="route('patients.create')">
        <span class="menu-text" style="color:white">Crear Cita</span>
      </inertia-link>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "dropdown-1",
  components: {},
  mounted() {}
};
</script>
