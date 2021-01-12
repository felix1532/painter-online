<template>
  <div className="login-page">
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

export default defineComponent({
  name: 'Home',
  components: { LoginForm },
  methods: {
    handleClickRegister() {
      router.push('/register');
    }
  }
});
</script>
