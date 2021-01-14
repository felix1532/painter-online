<template>
  <div class="central-body">
    <img
      class="image-404"
      src="http://salehriaz.com/404Page/img/404.svg"
      width="250px"
    />
    <router-link to="/">
      <a class="btn-go-home">GO BACK HOME</a>
    </router-link>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
.btn-go-home {
  position: relative;
  z-index: 200;
  margin: 15px auto;
  width: 200px;
  padding: 10px 15px;
  border: 1px solid #5bcbf5;
  border-radius: 100px;
  font-weight: 700;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 18px;

  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -ms-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.btn-go-home:hover {
  background-color: #5bcbf5;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
}

.central-body {
  padding: 0% 5% 10% 5%;
  text-align: center;
}

.image-404 {
  position: relative;
  z-index: 2;
  width: 500px;
  height: 500px;
  pointer-events: none;
}

@media only screen and (max-width: 600px) {
  .central-body {
    padding-top: 25%;
  }
}
</style>
