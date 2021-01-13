<template>
  <body class="bg-purple">
    <div class="stars">
      <router-view></router-view>
      <div class="objects">
        <img
          class="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="70px"
        />
        <div class="earth-moon">
          <img
            class="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="150px"
          />
          <img
            class="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="100px"
          />
        </div>
        <div class="box_astronaut">
          <img
            class="object_astronaut"
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="160px"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import './style';

export default defineComponent({
  store
});
</script>
