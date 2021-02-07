<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ memory }}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '◇ Memory',
      memory:`省略させてちょ`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  /* font-size: 70%; */
  text-align: left;
  /* background-color: blue; */
  /* margin-left: 5%; */
  
}

</style>