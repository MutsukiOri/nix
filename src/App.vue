<template>
    
  <div id="app">
    <mq-layout mq="sp">
      <Slide :closeOnNavigation="true"><tab-side></tab-side></Slide>
    </mq-layout>
    <div id="page-wrap">
      <router-link to="/" exact>
        <img src="./assets/ensemble_nix_header.jpg">
      </router-link>
      <mq-layout mq="pc+">
        <tab-menu></tab-menu>
      </mq-layout>
      <router-view/>
    </div>
  </div>
</template>


<script>

import TabMenu from '@/components/TabMenu'
import TabSide from '@/components/TabSide'
import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    TabMenu,
    TabSide,
    Slide
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
.bm-burger-button {
  position: fixed;
}
.bm-menu {
  background-color: grey;
  opacity: 0.8;
}
</style>
