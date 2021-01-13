<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');

@-moz-keyframes rocket-movement {
  100% {
    -moz-transform: translate(1200px, -600px);
  }
}
@-webkit-keyframes rocket-movement {
  100% {
    -webkit-transform: translate(1200px, -600px);
  }
}
@keyframes rocket-movement {
  100% {
    transform: translate(1200px, -600px);
  }
}
@-moz-keyframes spin-earth {
  100% {
    -moz-transform: rotate(-360deg);
    transition: transform 20s;
  }
}
@-webkit-keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transition: transform 20s;
  }
}
@keyframes spin-earth {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    transition: transform 20s;
  }
}

@-moz-keyframes move-astronaut {
  100% {
    -moz-transform: translate(-160px, -160px);
  }
}
@-webkit-keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
  }
}
@keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
    transform: translate(-160px, -160px);
  }
}
@-moz-keyframes rotate-astronaut {
  100% {
    -moz-transform: rotate(-720deg);
  }
}
@-webkit-keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
  }
}
@keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
    transform: rotate(-720deg);
  }
}

.spin-earth-on-hover {
  transition: ease 200s !important;
  transform: rotate(-3600deg) !important;
}

#app {
  background: url(http://salehriaz.com/404Page/img/bg_purple.png);
  background-repeat: repeat-x;
  background-size: cover;
  background-position: left top;
  height: 100%;
  overflow: hidden;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Dosis', sans-serif;
  font-weight: 300;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.bg-purple {
  height: 100%;
  overflow: hidden;
}

.objects img {
  z-index: 10;
  pointer-events: none;
}

.object_rocket {
  z-index: 15;
  position: absolute;
  transform: translateX(-50px);
  top: 75%;
  pointer-events: none;
  animation: rocket-movement 200s linear infinite both running;
}

.object_earth {
  position: absolute;
  top: 20%;
  left: 15%;
  z-index: 10;
  animation: spin-earth 100s infinite linear both;
}

.object_moon {
  position: absolute;
  top: 12%;
  left: 25%;

  transform: rotate(0deg);
  transition: transform ease-in 10s;
}

.object_astronaut {
  animation: rotate-astronaut 200s infinite linear both alternate;
}

.box_astronaut {
  z-index: 20 !important;
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
}

.stars {
  background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
  background-repeat: repeat;
  background-size: contain;
  background-position: left top;
  height: 100%;
}

.glowing_stars .star {
  position: absolute;
  border-radius: 100%;
  background-color: #fff;
  width: 6px;
  height: 6px;
  opacity: 0.3;
  will-change: opacity;
}

@media only screen and (max-width: 600px) {
  .navbar-links {
    display: none;
  }

  .custom-navbar {
    text-align: center;
  }

  .brand-logo img {
    width: 120px;
  }

  .box_astronaut {
    top: 70%;
  }

  .central-body {
    padding-top: 25%;
  }
}
</style>
