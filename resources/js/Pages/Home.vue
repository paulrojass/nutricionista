<template>
  <layout>
    <h1>Welcome</h1>
  </layout>
</template>

<script>
import Layout from "../src/view/layout/Layout"
export default{
    name: "Home",
    // Using a render function
    layout: (h, page) => h(Layout, [page]),
    metaInfo() {
      return {
        title: `Panel de Inicio`,
      }
    },

    // Using the shorthand
    //layout: Layout,
}
</script>
