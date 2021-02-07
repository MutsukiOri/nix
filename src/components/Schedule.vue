<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ schedule }}</p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '◇ Schedule',
      schedule: `2021年
      未定
      
      
​
★急な変更等がありましたらTwitterでもアナウンスします。
​
​★見学・情報宣伝等でお越しになる場合は、感染症対策の観点から予めご連絡いただきますようお願いします。
　当日の練習参加人数によってはお断りさせていただくこともありますので、ご了承ください。`
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