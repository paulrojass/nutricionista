<template>
  <Login :errors="errors"></Login>
</template>

<script>
import Login from '../../src/view/pages/auth/login_pages/Login-1.vue'

export default{
  props: {
    errors: Object,
  },
  // data() {
  //   return {
  //     form : {
  //       email : 'user@email.com',
  //
  //       password: '12345678'
  //     }
  //   }
  // },
  components:{
    Login
  },
  // methods: {
  //   submit() {
  //     this.$inertia.post('/login', {
  //       email: this.form.email,
  //       password: this.form.password
  //     }).then(console.log("Hello"));
  //   }
  // }
}
</script>
