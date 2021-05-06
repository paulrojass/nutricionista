<template>
  <ControlList
  :monthControls = 'this.monthControls'
  :weekControls = 'this.weekControls'
  :dayControls = 'this.dayControls'
  ></ControlList>
</template>

<script>
import Layout from "../src/view/layout/Layout"
import ControlList from "./list/Controls"

export default{
  name: "Home",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Inicio`
    }
  },
  props: [
    'monthControls',
    'weekControls',
    'dayControls'
  ],
  components: {
    ControlList
  }
}
</script>
