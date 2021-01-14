<template>
  <div className="container-register-form">
    <form
      className="input-form-register"
      @submit.prevent
      @keydown.enter="registerHandler()"
    >
      <input
        type="text"
        className="input-field "
        placeholder="Name..."
        name="name"
        v-model="name"
        required
      />
      <input
        type="text"
        className="input-field"
        placeholder="Surname..."
        name="surname"
        v-model="surname"
        required
      />
      <input
        type="text"
        className="input-field "
        placeholder="Email..."
        name="email"
        v-model="email"
        required
      />
      <input
        type="password"
        className="input-field "
        placeholder="Password..."
        name="password"
        v-model="password"
        required
      />
      <input
        type="password"
        className="input-field "
        placeholder="Repeat password..."
        name="repeatPassword"
        v-model="repeatPassword"
        required
      />
      <button
        type="button"
        className="submit-button"
        @click="registerHandler()"
      >
        Register
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
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    ...mapActions(['register']),
    registerHandler() {
      this.register({
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password
      });
    }
  }
});
</script>
