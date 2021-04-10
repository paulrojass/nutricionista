<template>
    <div>
        <b-card :title="patient.first_name_1+' '+patient.first_name_2" :sub-title="calcularEdad(patient.birth_date)+' años'">
            <b-card-text>
                <em>{{patient.goal| truncate(20, '...') }}</em>
            </b-card-text>
            <b-card-text>
                <strong>Fecha:</strong> {{patient.birth_date}}
            </b-card-text>
            <b-card-text>
                <strong>Ubicación: </strong>{{patient.city.name}}
            </b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
    </div>
</template>

<script>
export default {
  props: ['patient'],
  methods: {
        calcularEdad(fecha) {
            var hoy = new Date()
            var cumpleanos = new Date(fecha)
            var edad = hoy.getFullYear() - cumpleanos.getFullYear()
            var m = hoy.getMonth() - cumpleanos.getMonth()
            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--
            }
            return edad
        }
    }
};
</script>
