<template>
  <div id="app">
    <sentence></sentence>
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import sentence from "./components/sentence"

export default {
  name: 'App',
  components: {
    sentence
  }
}
</script>

<style>

</style>
