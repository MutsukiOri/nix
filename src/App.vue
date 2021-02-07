<template>
  <div id="app">
    <img src="./assets/ensemble_nix_header.jpg">
    <tab-menu></tab-menu>
    <router-view/>
  </div>
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
  name: 'App',
  components: {
    TabMenu
  }
}
</script>

<style>
@font-face {
  font-family: 'M2C Light';
  src: url(./assets/m2c/mplus-2c-light.ttf);
  /* font-family: 'M2C Thin J'; */
  /* src: url(./assets/m2c/mplus-2-thin-sub.ttf); */
  /* font-family: 'MC2 Thin';
  src: url(./assets/m2c/mplus-2c-thin.ttf); */
}
@font-face {
	font-family: 'M2C Light J';
	src: url(./assets/m2c/mplus-2-light-sub.ttf);
}

#app {
  font-family: 'M2C Light','M2C Light J','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 10%;
}

img {
  width: 100%;
}

h1 {
  font-size: 40px;
  font-weight: normal;
  text-align: left;
}

p{
  white-space: pre-line;
  text-align: left;
}
body {
  margin-left: 10%;
  margin-right: 10%;
  
}
</style>
