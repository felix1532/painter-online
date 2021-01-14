<template>
  <div className="container-login-form">
    <form className="input-form-login" @keydown.enter="logInHandler()">
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
      <button type="button" className="submit-button" @click="logInHandler()">
        Log In
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import './style';

export default defineComponent({
  data() {
    return {
      login: '',
      password: ''
    };
  },
  methods: {
    ...mapActions(['signIn']),
    logInHandler() {
      this.signIn({
        login: this.login,
        password: this.password
      });
      this.login = '';
      this.password = '';
    }
  }
});
</script>
