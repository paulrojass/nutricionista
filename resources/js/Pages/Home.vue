<template>
  <layout
    Title = "Panel de inicio"
    :active = "active"
    :inactive = "inactive"
  >
    <div>
        <ControlList
        :monthControls = 'this.monthControls'
        :weekControls = 'this.weekControls'
        :dayControls = 'this.dayControls'
        ></ControlList>
    </div>
  </layout>
</template>

<script>
import Layout from "../src/view/layout/Layout"
import ControlList from "./list/Controls"

export default{
    name: "Home",
    props: [
      'monthControls',
      'weekControls',
      'dayControls',
      'active',
      'inactive'
    ],
    data(){
      return {
        'active': this.active,
        'inactive': this.inactive
      }
    },
    created(){
        console.log('inactive '+this.inactive)
    },
    components: {
        ControlList
    },
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    metaInfo() {
      return {
        title: 'Panel de Inicio',
      }
    },
}

</script>
