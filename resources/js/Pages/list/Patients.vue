<template>
  <div>
    <!-- <b-card :title="patient.first_name_1+' '+patient.first_name_2" :sub-title="calcularEdad(patient.birth_date)+' años'"> -->
    <b-card >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            <h3>
              {{`${patient.first_name_1} ${patient.last_name_1}`}}
            </h3>
          </div>
          <v-list-item-title class="headline mb-1">
            {{`${calcularEdad(patient.birth_date)} años`}}
          </v-list-item-title>
          <v-list-item-subtitle>
            <em>{{patient.goal| truncate(20, '...') }}</em>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>
      <b-card-text>
          <strong>Ubicación: </strong>{{patient.city.name}}
      </b-card-text>

      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn text small color="primary" :href="route('patients.show', patient.id)">Ver más</v-btn>
        </div>
      </v-col>
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
