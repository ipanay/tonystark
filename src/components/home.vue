<template>
  <div class='homepage'>
    <h1>此处正在ss思考。。。</h1>
    <section class="layout float">
      <artical class="left-right-center">
        <div class="left"></div>
        <div class="right"></div>
        <div class="center">
          float
        </div>
      </artical>
    </section>
    <section class="layout position">
      <artical class="left-center-right">
        <div class="left"></div>
        <div class="center">
          absolute
        </div>
        <div class="right"></div>
      </artical>
    </section>
    <section class="layout flexbox">
      <artical class="left-center-right">
        <div class="left"></div>
        <div class="center">
          flex
        </div>
        <div class="right"></div>
      </artical>
    </section>
    <section class="layout table">
      <artical class="left-center-right">
        <div class="left"></div>
        <div class="center">
          table
        f</div>
        <div class="right"></div>
      </artical>
    </section>
    <section class="layout grid">
      <artical class="left-center-right">
        <div class="left"></div>
        <div class="center">grid</div>
        <div class="right"></div>
      </artical>
    </section>
    <section class="layout inline-block">
      <artical class="left-center-right">
        <div class="left"></div>
        <div class="center">inline-blcok</div>
        <div class="right"></div>
      </artical>
    </section>
    <div id="father" style="background:yellow;height:500px;border:10px solid yellow">
      father
      <div id="son" style="background:grey;height:200px;border: 10px solid grey">
        son
      </div>
      <div id="brother" style="background:red;height:200px;border: 10px solid red">
        brother
        <div id="grandson" style="background:green;height:100px;border: 10px solid green">
          grandson
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data: function(){
    return {
    }
  },
  mounted () {
    const father = document.getElementById('father')
    const son = document.getElementById('son')
    const brother = document.getElementById('brother')
    const grandson = document.getElementById('grandson')
    father.addEventListener('click', this.fatherFn, true)
    son.addEventListener('click', this.sonFn, true)
    brother.addEventListener('click', this.brotherFn, true)
    grandson.addEventListener('click', this.grandsonFn, true)
    father.addEventListener('click', this.fatherFnBuddle, false)
    son.addEventListener('click', this.sonFnBuddle, false)
    brother.addEventListener('click', this.brotherFnBuddle, false)
    grandson.addEventListener('click', this.grandsonFnBuddle, false)
  },
  methods: {
    fatherFn (e) {
      // eslint-disable-next-line no-console
      console.log('father captrue')
      // e.stopPropagation()
    },
    sonFn () {
      // eslint-disable-next-line no-console
      console.log('son captrue')
    },
    brotherFn (e) {
      e.preventDefault()
      // eslint-disable-next-line no-console
      console.log('brother captrue')
      // eslint-disable-next-line no-console
      console.log(e)
      e.stopPropagation()
    },
    grandsonFn () {
      // eslint-disable-next-line no-console
      console.log('grandso captrue')
    },
    fatherFnBuddle () {
      // eslint-disable-next-line no-console
      console.log('father Buddle')
    },
    sonFnBuddle () {
      // eslint-disable-next-line no-console
      console.log('son Buddle')
    },
    brotherFnBuddle () {
      // eslint-disable-next-line no-console
      console.log('brother Buddle')
    },
    grandsonFnBuddle () {
      // eslint-disable-next-line no-console
      console.log('grandso Buddle')
    },
  }
}
</script>
<style>
.homepage{
  height:100vh;
  /* background-image:url(../../public/tonybg.jpg); */
}
.layout {
  margin-top: 20px;
}
.layout div {
  min-height: 100px;
  height: 100px;
}
.layout .left {
  width: 300px;
  background: red
}
.layout .right {
  width: 300px;
  background: blue
}
.layout .center {
  background: green
}
.float.layout .left {
  float: left;
}
.float.layout .right {
  float: right;
}
.position.layout div {
  position: absolute
}
.position.layout .left {
  left: 0;
}
.position.layout .center {
  left: 300px;
  right: 300px;
}
.position.layout .right {
  right: 0
}
.flexbox.layout {
  margin-top: 140px;
}
.flexbox.layout .left-center-right {
  display: flex;
}
.flexbox.layout .center {
  flex: 1;
}
.table.layout .left-center-right {
  display: table;
  width: 100%;
}
.table.layout div {
  display: table-cell;
}
.grid.layout .left-center-right {
  display: grid;
  width: 100%;
  grid-template-rows: 100px;
  grid-template-columns: 300px auto 300px;
}
.inline-block.layout div {
  display: inline-block;
  vertical-align: top;
}
.inline-block.layout .center {
  width: calc(100% - 600px)
}
</style>