<template>
  <div id="">
    
  </div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
export default {
  name: "Settings4",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Pacientes`,
    }
  },
}
</script>
