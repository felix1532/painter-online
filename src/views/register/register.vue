<template>
  <div v-if="isLoading"><Loader /></div>
  <div v-else className="register-page">
    <div className="container-button">
      <div id="btn-register"></div>
      <button type="button" className="toggle-button" @click="handleClickLogin">
        Log In
      </button>
      <button type="button" className="toggle-button">
        Register
      </button>
    </div>
    <RegisterForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RegisterForm from '@/views/register/register-form/form.vue';
import './style';
import router from '@/router';
import { mapGetters } from 'vuex';
import Loader from '@/components/loader/loader.vue';

export default defineComponent({
  components: { RegisterForm, Loader },
  methods: {
    handleClickLogin() {
      router.push('/login');
    }
  },
  computed: mapGetters(['isLoading'])
});
</script>
