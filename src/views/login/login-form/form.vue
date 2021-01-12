<template>
  <div className="container-login-form">
    <form className="input-form-login" @submit.prevent>
      <input
        type="text"
        className="input-field"
        placeholder="Login..."
        name="login"
        v-model="login"
        required
      />
      <input
        type="password"
        className="input-field"
        name="password"
        placeholder="Password..."
        v-model="password"
        required
      />
      <button
        type="submit"
        className="submit-button"
        @click="logInBtnHandler()"
      >
        Log In
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style';

export default defineComponent({
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {
    logInBtnHandler() {
      console.log(this.login + '\n' + this.password);
    }
  }
});
</script>
