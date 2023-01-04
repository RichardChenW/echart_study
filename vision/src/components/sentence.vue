<template>
  <div>
    <h2>{{sentence}}</h2>
    <hr>
  </div>
</template>

<script>

export default {
    name:"sentenceVc",
    data() {
        return {
            sentence:""
        }
    },
    mounted(){
        this.$http.get("https://api.oick.cn/dutang/api.php").then((res)=>{
                this.sentence = res.data
            })
    }
}
</script>

<style>
    h2 {
        text-align: center;
    }
</style>