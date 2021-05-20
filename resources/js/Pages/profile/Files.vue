<template>
  <!--begin::Advance Table Widget 10-->
  <div class="card card-custom gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
        >Adjuntos</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
        >Lista de archivos e imágenes del paciente</span
        >
      </h3>
      <div class="card-toolbar">
        <inertia-link
        :href="$route('attachments.create', this.patient)"
        class="btn btn-info font-weight-bolder font-size-sm"
        >Agregar
      </inertia-link>
    </div>
  </div>
  <!--end::Header-->
  <!--begin::Body-->
  <div class="card-body py-0">
    
    
    
    <!-- <h6 align="center">Documentos</h6> -->
    
    <!--begin::Table-->
    <div class="table-responsive">
      <table class="table table-borderless table-vertical-center">
        <thead>
          <tr>
            <th class="p-0" style="width: 8%"></th>
            <th class="p-0" style="width: 20%"></th>
            <th class="p-0" style="width: 64%"></th>
            <th class="p-0" style="width: 8%"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(file, i) in patient.attachments">
            <tr v-bind:key="i"
            v-if="(file.format === 'txt') ||
            (file.format === 'xls') ||
            (file.format === 'xlsx') ||
            (file.format === 'doc') ||
            (file.format === 'docx') ||
            (file.format === 'pdf')"
            >
            <td class="pr-0">
              
              <!--begin::Symbol-->
              <div
              v-bind:class="`symbol-light-success`"
              class="symbol symbol-40 mr-5"
              >
              <span class="symbol-label">
                <a
                :href="route('attachments.show', file.id)">
                <span class="svg-icon svg-icon-lg" v-bind:class="`svg-icon-success`">
                  <!--begin::Svg Icon-->
                  <inline-svg src="/media/svg/icons/Files/File.svg"></inline-svg>
                  <!--end::Svg Icon-->
                </span>
              </a>
            </span>
          </div>
          <!--end::Symbol-->
        </td>
        <td class="pl-0">
          <a
          :href="route('attachments.show', file.id)"
          class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
          >
          {{file.name}}
        </a>
        <span class="text-muted font-weight-bold d-block">
          {{file.format}}
        </span>
      </td>
      <td>
        <span class="text-muted font-weight-bold">
          {{file.description}}
        </span>
      </td>
      <td class="text-right pr-0">
        <inertia-link
        :href="route('attachments.destroy', file.id)"
        method="delete"
        class="btn btn-icon btn-light btn-sm">
        <span class="svg-icon svg-icon-md svg-icon-danger">
          <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg-->
          <inline-svg
          src="/media/svg/icons/General/Trash.svg"
          ></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </inertia-link>
    </td>
  </tr>
</template>
</tbody>
</table>
</div>
<!--end::Table-->


<!-- <h6 align="center">Imágenes</h6> -->

<!--begin::Table-->
<div class="table-responsive">
  <table class="table table-borderless table-vertical-center">
    <thead>
      <tr>
        <th class="p-0" style="width: 20%"></th>
        <th class="p-0" style="width: 20%"></th>
        <th class="p-0" style="width: 52%"></th>
        <th class="p-0" style="width: 8%"></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(file, i) in patient.attachments">
        <tr v-bind:key="i" v-if="file.format === 'png' || file.format === 'jpg' || file.format === 'jpeg'">
          <td class="pr-0">
            <a
            :href="route('attachments.show', file.id)">
            <b-media>
              <template #aside>
                <b-img
                :src="`/${file.location}`" width="92" alt="placeholder"
                >
                
              </b-img>
            </template>
          </b-media>
        </a>
      </td>
      <td class="pl-0">
        <a
        :href="route('attachments.show', file.id)"
        class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
        >
        {{file.name}}
      </a>
      <span class="text-muted font-weight-bold d-block">
        {{file.format}}
      </span>
    </td>
    <td>
      <span class="text-muted font-weight-bold">
        {{file.description}}
      </span>
    </td>
    <td class="text-right pr-0">
      <inertia-link
      :href="route('attachments.destroy', file.id)"
      method="delete"
      class="btn btn-icon btn-light btn-sm">
      <span class="svg-icon svg-icon-md svg-icon-danger">
        <!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Arrow-right.svg-->
        <inline-svg
        src="/media/svg/icons/General/Trash.svg"
        ></inline-svg>
        <!--end::Svg Icon-->
      </span>
    </inertia-link>
  </td>
</tr>
</template>
</tbody>
</table>
</div>
<!--end::Table-->






</div>
<!--end::Body-->
</div>
<!--end::Advance Table Widget 10-->
</template>

<script>
export default {
  name: "widget-files",
  props: ['patient'],
  created() {
    //do something after creating vue instance
    console.log(this.patient.attachments)
  },
  data() {
    return {
      checked: false,
    };
  },
  components: {},
  methods: {
    setCheck(check) {
      if (check) {
        this.checked = check;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
