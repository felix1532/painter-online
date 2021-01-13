<template>
  <div><NavBar :logOutHandler="logOutHandler" /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/nav-bar/nav-bar.vue';
import { mapActions } from 'vuex';
import Loader from '@/components/loader/loader.vue';

export default defineComponent({
  components: {
    NavBar,
    Loader
  },
  methods: {
    ...mapActions(['logOut']),
    logOutHandler() {
      this.logOut();
    }
  }
});
</script>
