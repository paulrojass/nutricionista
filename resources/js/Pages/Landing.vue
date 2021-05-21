<template>
  <Landing></Landing>
</template>

<script>
import Landing from '../src/view/pages/auth/login_pages/Landing.vue'

export default{
  components:{
    Landing
  },
  methods: {
    // submit() {
    //   this.$inertia.post('/login', {
    //     email: this.form.email,
    //     password: this.form.password
    //   }).then(console.log("Hello"));
    // }
  }
}
</script>
