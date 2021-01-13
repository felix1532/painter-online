<template>
  <div className="register-page">
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

export default defineComponent({
  components: { RegisterForm },
  methods: {
    handleClickLogin() {
      router.push('/login');
    }
  }
});
</script>
