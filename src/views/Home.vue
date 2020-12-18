<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Ezflycard></Ezflycard>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Ezflycard from '@/components/Ezflycard.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Ezflycard
  }
}
</script>
