<template>
  <div class="content">
    <mininav />
    <navbar />
    <mainhome />
    <companies />
    <selectedcourses />
    <contactus />
    <copyprogram />
    <aboutus />
    <footers />
    <router-view />
  </div>
</template>

<script>
import Aboutus from "../components/aboutus.vue";
import Companies from "../components/companies.vue";
import Contactus from "../components/contactus.vue";
import Copyprogram from "../components/copyprogram.vue";
import Footers from '../components/footers.vue';
// @ is an alias to /src
import Mainhome from "../components/mainhome.vue";
import Mininav from "../components/mininav.vue";
import Navbar from "../components/navbar.vue";
import Selectedcourses from "../components/selectedcourses.vue";

export default {
  name: "Home",
  components: {
    Mininav,
    Navbar,
    Mainhome,
    Companies,
    Selectedcourses,
    Contactus,
    Copyprogram,
    Aboutus,
    Footers,

  },
};
</script>
