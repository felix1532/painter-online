<template>
  <div className="container-register-form">
    <form className="input-form-register" @submit.prevent>
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
      <button type="submit" className="submit-button" @click="handleClickLogin">
        Register
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
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    handleClickLogin() {
      console.log(
        `${this.name}  ${this.surname}  ${this.email}  ${this.password}  ${this.repeatPassword}`
      );
    }
  }
});
</script>
