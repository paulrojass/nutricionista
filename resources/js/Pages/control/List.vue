<template>
  <ControlList
  :controls= 'this.controls'
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
    'controls',
  ],
  components: {
    ControlList
  }
}
</script>
