<template>
  <NavBar :logOutHandler="logOut" active="profile" />
  <div>
    PROFILE PAGE
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/nav-bar/nav-bar.vue';
import { mapActions } from 'vuex';

export default defineComponent({
  components: {
    NavBar
  },
  methods: {
    ...mapActions(['logOut'])
  }
});
</script>
