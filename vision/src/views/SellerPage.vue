<!-- 针对于 /sellerpage 这条路径 
在这个组件中，通过子组件注册的方式，要显示出 Seller.vue 这个组件 
-->

<template>
  <div class="com-page">
    <seller></seller>
  </div>
</template>

<script>
import seller from "../components/Seller.vue"

export default {
    name:"sellerpage",
    components:{
        seller
    }
}
</script>

<style>

</style>