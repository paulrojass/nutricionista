<template>
    <Login></Login>


<!--
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Correo Electrónico</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" v-model="form.email" class="form-control" name="email" value="" required autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" v-model="form.password" class="form-control" name="password" required autocomplete="current-password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            recuerdame
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
-->
</template>

<script>
    import Login from '../../src/view/pages/auth/login_pages/Login-1.vue'

    export default{
        data() {
            return {
                form : {
                    email : 'user@email.com',

                    password: '12345678'
                }
            }
        },
        components:{
            Login
        },
        methods: {
            submit() {
                this.$inertia.post('/login', {
                    email: this.form.email,
                    password: this.form.password
                }).then(console.log("Hello"));
            }
        }
    }
</script>
