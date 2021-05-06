<template>
  <ControlList
  :monthControls = 'this.monthControls'
  :weekControls = 'this.weekControls'
  :dayControls = 'this.dayControls'
  ></ControlList>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
import ControlList from "../list/ControlsDetail"

export default {
  name: "ListaControles",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Lista de Conroles`,
    }
  },
  data: () => ({
    
  }),
  props: [
    'monthControls',
    'weekControls',
    'dayControls',
  ],
  components: {
    ControlList
  }
}
</script>
<style lang="scss" scoped>
</style>
