<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ contact }}</p>
    <v-card class="mx-auto">
    <v-flex xs12>
      <Timeline :id="user_id" sourceType="'profile'" :options="{ 
        'height': 'twitter_height',
        'width': 'twitter_width'
        }"/>
    </v-flex>
  </v-card>
    <a class="twitter-timeline" data-width="360" data-height="730" href="https://twitter.com/EnsembleNix?ref_src=twsrc%5Etfw">Tweets by EnsembleNix</a> 
  </div>

</template>


<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
import { Timeline } from 'vue-tweet-embed'

export default {
    components: {
      Timeline
    },
  name: 'HelloWorld',
  data () {
    return {
      msg: '◇ Contact',
      contact: `入団希望、見学、演奏依頼、ジョイントコンサートのお申込み、その他質問等ございましたら、下記メールアドレスまたはTwitterのDMよりお願いいたします。
      
      メールアドレス　EnsembleNix@gmail.com　（代表：中川)
      Twitter　＠EnsembleNix`,
      user_id: 'EnsembleNix',
      twitter_heigt: 700,
      twitter_width: 360,
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
a {
  background-color: aquamarine;
}
</style>

