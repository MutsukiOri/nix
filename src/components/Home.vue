<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="@/assets/nix_info.jpg">
      <p>{{ commments }}</p>
      <p class=signature>{{ signature }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '◇ Information',
      commments: `上記の画像の通り、Ensemble Nix Concert#1は延期となりました。福岡県でも緊急事態宣言が発出され、演奏会のための準備や、ご来場される皆様の安全を確保する体制を整えることが難しいと判断したためです。
      
      ご来場を予定していた方々には大変なご迷惑をおかけしますが、7月10日、ぜひご来場ください。

      まだまだ感染症収束については先行きが不透明ではありますが、いつの日か収束する日を願って、そして、福岡県で、大学生によるユース合唱の熱を冷ますことのないようこれからも歩みを進めて参りますので、これからも変わらぬご支援ご協力賜りますようどうぞよろしくお願いいたします。
      
      7月10日、およそ4ヶ月の延期を経てパワーアップしたEnsemble Nixのアツい演奏をお届けいたします。皆様のご来場を心よりお待ちしております。`,
      signature:`
      Ensemble Nix 代表 中川`,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin-left: 10%;
  margin-right: 10%;
  
}
.signature {
  text-align: right;
}
p {
  /* white-space: pre-line; */
  text-align: left;
}
img {
    margin-bottom: 4%;
}

@keyframes fadeIn { /*animetion-nameで設定した値を書く*/

  0% {opacity: 0} /*アニメーション開始時は不透明度0%*/

  100% {opacity: 1} /*アニメーション終了時は不透明度100%*/

}
</style>
