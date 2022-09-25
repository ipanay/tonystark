<template>
  <div class='navbar'>
    <router-link class='item' to='/'>首页</router-link>
    <router-link class='item' to="/jarvis">贾维斯</router-link>
    <router-link class='item' to='/you3000'>爱你三千遍</router-link>
    <router-link class='item' to='itLeaning'>learning</router-link>
    <router-link class='item' to="/canvas">canvas</router-link>
    <router-link class='item' to="/htmlCss">htmlCss</router-link>
    <!-- <router-link class='item' to="/luo">luo</router-link> -->
  </div>
</template>
<script>
export default {
  name: 'Header',
  data: function(){
    return {
      isCalled: true
    }
  },
  methods: {
  }
}
</script>
<style>
.navbar{
    padding:5px;
    position: fixed!important;
    top:0;
    width:100%;
    z-index: 1000000;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
</style>