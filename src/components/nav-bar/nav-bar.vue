<template>
  <div class="custom-navbar">
    <div class="brand-logo">
      <img src="http://salehriaz.com/404Page/img/logo.svg" width="80px" />
    </div>
    <div class="navbar-links">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
        <li>
          <a class="btn-request" @click="logOutHandler">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    logOutHandler: {
      type: Function
    }
  }
});
</script>

<style lang="scss">
.custom-navbar {
  padding-top: 15px;
}

.brand-logo {
  margin-left: 25px;
  margin-top: 5px;
  display: inline-block;
}

.navbar-links {
  display: inline-block;
  float: right;
  margin-right: 15px;
  text-transform: uppercase;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

li {
  float: left;
  padding: 0px 15px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: bold;

  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -ms-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

li a:hover {
  color: #5bcbf5;
}

.btn-request {
  padding: 10px 25px;
  border: 1px solid #5bcbf5;
  border-radius: 100px;
  font-weight: 400;
  font-weight: bold;
}

.btn-request:hover {
  background-color: #5bcbf5;
  color: #fff;
  font-weight: bold;
  transform: scale(1.05);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 600px) {
  .navbar-links {
    display: none;
  }

  .custom-navbar {
    text-align: center;
  }
}
</style>
