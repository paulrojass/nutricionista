<template>
    <div>
        <b-card title="Card title" sub-title="Card subtitle">
            <b-card-text>
                <em>{{patient.goal| truncate(60, '...') }}</em>
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
};
</script>
