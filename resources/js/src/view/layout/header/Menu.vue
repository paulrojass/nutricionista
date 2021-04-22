<template>
  <ul class="menu-nav">
    <li
    aria-haspopup="true"
    data-menu-toggle="hover"
    class="menu-item"
    >
    <inertia-link :href="route('home')" class="menu-link">
      <span class="menu-text"> Inicio </span>
    </inertia-link>
  </li>
  <li
  aria-haspopup="true"
  data-menu-toggle="hover"
  class="menu-item"
  >
  <inertia-link :href="route('patients.index')" class="menu-link">
    <span class="menu-text"> Pacientes </span>
  </inertia-link>
</li>
</ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      console.log(route().current())
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
