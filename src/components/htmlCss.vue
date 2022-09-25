<template>
  <div>
    <h1 ref="runingHorseBox" style="display: flex;justify-content: space-between;">
      <span ref="usersee">所见</span>
      <a title="点击查看下方代码效果" @mouseenter="runingHorseRun" @click="getResult"><span ref="runingHorseFontSize" style="display:inline-block;color:green">=</span>
        <span v-html="runingHorseText"></span>
      </a>
      <!-- 跑马灯效果 -->
      <span ref="userget" style="float:right">所得</span>
    </h1>
    <div class="htmlCssSee" title="可编辑您的idea">
      <div class="htmlAndCssBox">
        <div class="htmlBox">
          <h2>html</h2>
          <textarea 
          style="width:100%"
          cols="30" rows="10"
          v-model="htmlContent">
          </textarea>
        </div>
        <div class="cssBox">
          <h2>css</h2>
          <textarea 
          style="width:100%"
          cols="30" rows="10"
          v-model="cssContent">
          </textarea>
        </div>
      </div>
    </div>
    <div ref="result" class="htmlCssGet">
    </div>
  </div>
</template>
<script lang="ts">
export default {
    data () {
      return {
        htmlContent: `
<label class="pay" for="pay">
      <span>pay</span>
        <input id="pay" type="checkbox"/>
        <svg width="400" height="400">
             <circle  class="circle" fill="none" stroke="green" stroke-width="20" cx="200" cy="200" r="190" 
                  transform="rotate(-90 200 200)"stroke-linecap="round">
             </circle>
             <polyline class="tick" fill="none" stroke="green" stroke-width="24" 
                  points="88,214 173,284 304,138" stroke-linecap="round" stroke-linejoin="round">
             </polyline>
      </svg>
</label>
<label class="agentCheck" for="agentCheck">
  <input id="agentCheck" type="checkbox">
  <span></span>
</label>`,
        cssContent: `

:root{
  --button-width: 300px;
  --button-height: 150px;
  --color-grey: #e9e9ea;
  --color-dark-grey: #39393d;
  --circle-width: 130px;
  --circle-offset: calc((var(--button-height) - var(--circle-width))/2);
  --circle-longer: 170px;
}
.agentCheck span{
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height)/2);
  position: relative;
  transition: .3s all ease-in-out
}
.agentCheck span::after{
  content: '';
  display: inline-block;
  width: var(--circle-width);
  height: var(--circle-width);
  border-radius: calc(var(--circle-width)/2);
  background-color: #fff;
  position: absolute;
  top: var(--circle-offset);
  transform: translateX(var(--circle-offset));
  box-shadow: var(--circle-offset) 0 calc(var(--circle-offset) * 4) rgba(0,0,0,0.1);
  transition: .3s all ease-in-out
}
input {
  display: none
}
.agentCheck input[type='checkbox']:checked + span {
  background-color: green;
}
.agentCheck input[type='checkbox']:checked + span::after {
  transform: translateX(calc(var(--button-width) - var(--circle-width) - var(--circle-offset)));
  box-shadow: calc(var(--circle-offset) * -1) 0 calc(var(--circle-offset) * 4) rgba(0,0,0,0.1);
}
.agentCheck input[type='checkbox']:active + span::after {
  width: var(--circle-longer)
}
.agentCheck input[type='checkbox']:checked:active + span::after {
  transform: translateX(calc(var(--button-width) - var(--circle-longer) - var(--circle-offset)));
}
@media(prefers-color-scheme: dark) {
  body {
    background-color: #1c1c1c;
  }
  .agentCheck span {
    background-color: var(--color-dark-grey)
  }
}
.pay span {
position:absolute;
top:200px;
right:510px;
}
.circle{
 stroke-dasharray:1194;
 stroke-dashoffset:1194
}
input[type="checkbox"]:checked + svg .circle {
 animation: circle 1s ease-in-out;
 animation-fill-mode:forwards
}
.tick{
 stroke-dasharray:350;
 stroke-dashoffset:350
}

input[type="checkbox"]:checked + svg .tick {
 animation: tick .8s ease-out;
 animation-fill-mode:forwards;
 animation-dely:.95s
}

@keyframes circle {
 from {
  stroke-dashoffset:1194
 }
 to {
  stroke-dashoffset:2388
 }
}
@keyframes tick {
 from {
  stroke-dashoffset:350
 }
 to {
  stroke-dashoffset:0
 }
}`,
        runingHorseText: ''
      }
    },
    mounted () {
      this.renderruningHorse()
      window.onresize = () => {
        this.renderruningHorse()
      };
    },
    methods: {
      renderruningHorse () {
        this.runingHorseText = ''
        const boxSize = this.$refs.runingHorseBox.clientWidth
        const itemSize = this.$refs.runingHorseFontSize.clientWidth
        const tipSize = this.$refs.usersee.clientWidth * 2
        const itemSum = Math.floor((boxSize - tipSize) / itemSize) - 2
        for (let i = 0; i < itemSum; i++) {
          this.runingHorseText += '<span class="runingitem">=</span>'
        }
        this.runingHorseText += '<span class="runingitem">></span>'
      },
      getResult () {
        this.$refs.result.innerHTML = this.htmlContent
        let userStyle
        const head = document.getElementsByTagName('head')[0]
        const reg = /<!--.*-->/ig
        if (!document.querySelector('#userCss')) {
          userStyle = document.createElement('style')
          userStyle.setAttribute('id', 'userCss')
          head.appendChild(userStyle)
        }
        const cssContent = this.cssContent.replace(reg, '')
        document.getElementById('userCss').innerHTML = cssContent
      },
      runingHorseRun (e, init) {
        const list = document.querySelectorAll('.runingitem')
        for (let i = 0; i < list.length; i++) {
          setTimeout(() => {
            const colorChi = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
            let color = '#'
            for (let ci = 0; ci < 6; ci++) {
              color += !init ? colorChi[Math.floor(Math.random() * 16)] : 'e'
            }
            list[i].setAttribute('style', 'color:' + color)
            list[i].setAttribute('title', '此处颜色为：' + color)
          }, (i + 1) * 20);
        }
      }
    },
    watch: {
      'htmlContent': {
        handler() {
          this.runingHorseRun(null, true)
        }
      }
    }
}
</script>
<style scoped>
a{
  color:#eee!important
}
a:hover{
  cursor: pointer;
  /* color:green!important */
}
.htmlCssSee{
  width: 50%;
  float: left;
  background-color: #777;
}
.htmlCssGet{
  float: left;

  width: 50%;
  height: 600px;
  background-color: #aaa;
}
.htmlBox,.cssBox{
  min-height: 300px;
}
</style>