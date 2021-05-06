<template>
  <ul class="menu-nav">
    <li
    aria-haspopup="true"
    data-menu-toggle="hover"
    class="menu-item menu-item-active"
    :class="route().current('home') && 'menu-item-active'"
    >
    <inertia-link :href="$route('home')" class="menu-link">
      <span class="menu-text"> Inicio </span>
    </inertia-link>
  </li>
  <li
  aria-haspopup="true"
  data-menu-toggle="hover"
  class="menu-item menu-item-active"
  :class="route().current('patients.*') && 'menu-item-active'"
  >
  <inertia-link :href="$route('patients.index')" class="menu-link">
    <span class="menu-text"> Pacientes </span>
  </inertia-link>
</li>
<li
aria-haspopup="true"
data-menu-toggle="hover"
class="menu-item menu-item-active"
:class="route().current('calendar') && 'menu-item-active'"
>
<inertia-link :href="$route('calendar')" class="menu-link">
  <span class="menu-text"> Citas </span>
</inertia-link>
</li>


</ul>
</template>

<script>
export default {
  name: "KTMenu",
  created(){
    console.log('La ruta')
    console.log(route().current())
  },
  methods: {
    // hasActiveChildren(match) {
    //   return this.$route["path"].indexOf(match) !== -1;
    // }
  }
};
</script>
