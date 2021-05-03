<template>
  <div class="card card-custom gutter-b">
    <div class="card-body">
      <iframe
      src="https://calendar.google.com/calendar/embed?src=hn7s0ek35jvo9dafn2jjl52os4%40group.calendar.google.com&ctz=America%2FCaracas"
      style="border: 0"
      width="700"
      height="550"
      frameborder="0"
      scrolling="no"
      ></iframe>
    </div>
  </div>
</template>
<script>
import Layout from "../../src/view/layout/Layout"
export default {
  name: "Calendar",
  // Using a render function
  layout: (h, page) => h(Layout, [page]),
  metaInfo() {
    return {
      title: `Calendario de Citas`,
    }
  },
}
</script>
