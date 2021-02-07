<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ comments }}</p>
    <p>{{ day }}</p>
    <p>{{ place }}</p>
    <p>{{ money }}</p>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: `◇ About us`,
      comments: `​Ensemble Nixは、２０２０年春、大学生を中心に結成されたユース合唱団です。団員同士で知識を共有しながら高い精度の音楽を目指して練習しています。入団、随時お待ちしております！！
      
      現在、九州大学、佐賀大学、広島大学、福岡教育大学、その他関東圏の大学、県内の高校などに通う学生が在籍しています。
      
      Ensemble Nixでは、練習会場や自治体の感染症対策指針をもとに、団独自のガイドラインを策定し、十分な感染対策のもとで対面練習を実施しています。
      
      練習見学や情報宣伝等でお越しになる場合は、人数管理のため前もってご連絡いただきますようお願いいたします。`,
      day: `◯練習日
      隔週の土曜日１８：００～２１：００と、
      月に１回の強化練習として日曜日の９：３０～１７：００
      に練習を行います。
      ※時間は変更になる可能性があります。
      ※本番前はイレギュラーになります。`,
      place: `◯練習場所
      福岡市内の公共施設等`,
      money: `◯団費
      入団費　２５００円（一律）
      大学生以上・・・・・・・・・・・月額２０００円
      遠隔地（福岡県外居住）団員・・・月額１５００円
      高校生・・・・・・・・・・・・・月額１０００円
      
      ​※その他、行事への参加費や演奏会費用、楽譜代等がかかります。
      ※遠隔地団員の内、練習に参加できない月があった場合の月団費は５００円とします。`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  text-align: left;
}
p{
    white-space: pre-line;
    text-align: left;
}

</style>