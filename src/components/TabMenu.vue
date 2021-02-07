<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'Home', path: '/' },
        { title: 'About us', path: '/about-us' },
        { title: 'Schedule', path: '/schedule' },
        { title: 'Memory', path: '/memory' },
        { title: 'Contact', path: '/contact'}
      ]
    }
  }
}
</script>

<style scoped>

ol {
  /* margin-right: auto; */
  /* margin-left: 5%; */
  margin-right: 5%;
  width: 1el;
  display:flex;
  justify-content: left;
  padding-left: 0px;
  list-style: none;
  /* background-color: yellowgreen; */
}

li {
  width: 120px;
  height: 50px;
  /* margin-left:0px;
  margin-right:10px; */
  font-size: 17px;
  position: relative;
  /* background-color: skyblue; */
  border-radius: 10px;
  transition: 1s;
}

li:hover {
  /* background-color: yellowgreen; */
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  line-height: 50px;
  transition: 1s;
}

a:hover {
  color: red;
}

</style>