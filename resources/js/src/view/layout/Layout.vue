<template>
  <div class="d-flex flex-column flex-root">
    <!-- begin:: Header Mobile -->
    <KTHeaderMobile></KTHeaderMobile>
    <!-- end:: Header Mobile -->
    
    <Loader v-if="loaderEnabled" v-bind:logo="loaderLogo"></Loader>
    
    <div class="d-flex flex-row flex-column-fluid page">
      <!--begin::Aside-->
      <KTAside></KTAside>
      <!--end::Aside-->
      
      <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
        <!--begin::Header-->
        <KTHeader></KTHeader>
        <!--end::Header-->
        <!--begin::Content-->
        <div
        class="content d-flex flex-column flex-column-fluid"
        id="kt_content"
        >
        <!-- begin:: Content Head -->
        <!--
        <KTSubheader
        v-if="subheaderDisplay && displaySubheaderOnDashboard"
        v-bind:breadcrumbs="breadcrumbs"
        v-bind:title="pageTitle"
        />
      -->
      <!-- end:: Content Head -->
      
      <div class="d-flex container-fluid">
        <div
        :class="{
          'container-fluid px-0': contentFluid,
          container: !contentFluid
          }"
          >
          
          <transition name="fade-in-up">
            <!--<router-view />-->
            <article>
              <slot />
            </article>
          </transition>
          
        </div>
      </div>
    </div>
    <!--end::Content-->
    <!--begin::Footer-->
    <KTFooter></KTFooter>
    <!--end::Footer-->
    <!-- <KTStickyToolbar v-if="toolbarDisplay"></KTStickyToolbar> -->
    <KTScrollTop></KTScrollTop>
  </div>
  
  <KTSidebar></KTSidebar>
</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import HtmlClass from "../../core/services/htmlclass.service";
import KTAside from "./aside/Aside.vue";
import KTSubheader from "./subheader/Subheader.vue";
import KTSidebar from "./aside/Sidebar.vue";
import KTHeaderMobile from "./header/HeaderMobile";
import Loader from "./content/Loader";
import KTHeader from "./header/Header";
import KTFooter from "./footer/Footer";
import KTStickyToolbar from "./extras/StickyToolbar.vue";
import KTScrollTop from "./extras/ScrollTop";
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME
} from "../../core/services/store/htmlclass.module.js";

export default {
  name: "Layout",
  props: [
    'title'
  ],
  components: {
    KTAside,
    KTSubheader,
    KTHeaderMobile,
    Loader,
    KTHeader,
    KTFooter,
    KTStickyToolbar,
    KTScrollTop,
    KTSidebar
  },
  beforeMount() {
    // show page loading
    this.$store.dispatch(ADD_BODY_CLASSNAME, "page-loading");
    
    // initialize html element classes
    HtmlClass.init(this.layoutConfig());
  },
  mounted() {
    // check if current user is authenticated
    // if (!this.isAuthenticated) {
    //   this.$router.push({ name: "login" });
    // }
    
    // Simulate the delay page loading
    setTimeout(() => {
      // Remove page loader after some time
      this.$store.dispatch(REMOVE_BODY_CLASSNAME, "page-loading");
    }, 2000);
  },
  computed: {
    ...mapGetters([
      "isAuthenticated",
      "breadcrumbs",
      "pageTitle",
      "layoutConfig"
    ]),
    /**
    * Check if the page loader is enabled
    * @returns {boolean}
    */
    loaderEnabled() {
      return !/false/.test(this.layoutConfig("loader.type"));
    },
    
    /**
    * Check if container width is fluid
    * @returns {boolean}
    */
    contentFluid() {
      // return this.layoutConfig("content.width") === "fluid";
      return true;
    },
    
    /**
    * Page loader logo image using require() function
    * @returns {string}
    */
    loaderLogo() {
      return this.layoutConfig("loader.logo");
    },
    
    /**
    * Set the right toolbar display
    * @returns {boolean}
    */
    toolbarDisplay() {
      // return !!this.layoutConfig("toolbar.display");
      return true;
    },
    
    /**
    * Set the subheader display
    * @returns {boolean}
    */
    subheaderDisplay() {
      return !!this.layoutConfig("subheader.display");
    },
    auth_user() {
      return this.$page.props.auth_user
    }
    
    /**
    * Set the subheader display on dashboard page
    * @returns {boolean}
    displaySubheaderOnDashboard() {
    return this.$route.name !== "panel";
  }
  */
}
};
</script>
