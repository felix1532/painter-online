<template>
  <div v-if="isLoading"><Loader /></div>
  <div v-else className="login-page">
    <div className="container-button">
      <div id="btn-login"></div>
      <button type="button" className="toggle-button">
        LogIn
      </button>
      <button
        type="button"
        className="toggle-button"
        @click="handleClickRegister"
      >
        Register
      </button>
    </div>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/views/login/login-form/form.vue';
import './style';
import router from '@/router';
import Loader from '@/components/loader/loader.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: { LoginForm, Loader },
  methods: {
    handleClickRegister() {
      router.push('/register');
    }
  },
  computed: mapGetters(['isLoading'])
});
</script>
