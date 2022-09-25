<template>
  <div id="app">
    {{name}}
    {{arr[0]}}
    {{arr[1].id}}
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue';
export default {
  name: 'app',
  data () {
    return {
      name: 'a',
      arr: [1, {id: 2}]
    }
  },
  components: {
     Header
  }
}
</script>

<style>
#app {
  padding-top:40px;
}
</style>
