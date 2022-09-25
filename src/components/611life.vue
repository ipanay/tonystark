<template>
  <div class='jarvis'>
    <div class="food container">
      <div class="header">食物（food）</div>
      <audio id="jarvisCall" ref="jarvisCall" src="jarvis.mp3"  hidden ></audio>
      <div class="greens">
        <div class="greens_dateline">
          <h2>市场行情</h2>
          <form @submit.prevent='addFood' class="name_price form text-center">
              <div class="input-group">
                  <input class='form-control' v-model='food' type="text" placeholder='品目-单价：备注'>
                  <!-- <span class="input-group-addon">+</span> -->
              </div>
          </form>
          <table class='table table-bordered table-hover' style='table-layout:fixed;display:table'>
            <thead>
              <th>品目</th>
              <th>单价</th>
              <th>详情</th>
            </thead>
            <tbody>
              <tr v-for='(food,index) in foods' :key="index">
                <td>{{food.name}}</td>
                <td>{{food.price | priceformat()}}</td>
                <td v-on='{mouseenter:()=>show_hide(food.id),mouseleave:()=>hide_show(food.id)}'>
                  <div v-show='food.btn_show'>
                    <button @click='adjust_food(food.id)'><span v-show='!food.btn_show'>调整</span><span v-show='food.btn_show'>*</span></button>
                    <button @click='delete_food(food.id)'><span v-show='!food.btn_show'>删除</span><span v-show='food.btn_show'>-</span></button>
                    <button @click='add_food_pic(food.id)'><span v-show='!food.btn_show'>+图片</span><span v-show='food.btn_show'>+</span></button>
                    <input hidden :ref="'key'+food.id" multiple type="file">
                  </div>
                  <span class="detial">{{food.detial || '暂无详情'}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="today">
            <h2>今日消费</h2>
        </div>
        <div class="dailybill">
            <h2>日常消费</h2>
            <div class="dateline">
                <span @click='getprev_month' class='prev active'>&lt;&lt;</span>
                <span :class={active:index==5} v-for='(month,index) in current_datebox'>{{month}}</span>
                <span @click='getnext_month' class='next'>&gt;&gt;</span>
            </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue/dist/vue.js';
import {setLocal,getLocal} from '../util';
import 'bootstrap/dist/css/bootstrap.css';//引入modules中css文件
export default {
  name: '611life',
  data: function(){
    return {
      list :'s',
      obj: {},
      food: '',
      foods: [],
      food_id: 0,
      input_id: false,
      detial: null,
      datebox: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      current_datebox: [],
      current_month: '',
      file_input_files: null
    }
  },
  created () {
    
  },
  mounted: function(){
    this.$refs.jarvisCall.play()
    var me = this
    this.foods = getLocal('foods') || this.foods
    //获得当前月份
    this.current_month = new Date().getMonth()+1;
    var index = this.datebox.findIndex(function(item){
        return parseInt(item.substr(0,1)) == parseInt(me.current_month);
    })
    if(index < 6){
        this.datebox = this.datebox.splice(-(6-(index+1))).concat(this.datebox);
        this.current_datebox = this.datebox.slice(0,6);
    }else{
        this.current_datebox = this.datebox.slice(index,index+6);
    }
  },
  methods: {
    called(){
    },
    _isMobile: function() {//判断是否是手机
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    addFood: function(){
      let hasDetial = true;
      //验证输入有误
      var reg = /^[^-:：]+-(\d*(\.\d*)?(([:：](.*)?)?)?)?$/ig;
      var bool = reg.test(this.food);
      if(!bool){
        alert("请输入正确格式！");
        return;
      }
      var food_msg = this.food.split("-");
      var food_msgDetial;
      
      if(food_msg[1].indexOf(":") !==-1 ){
        food_msgDetial = food_msg[1].split(":");
      }else if(food_msg[1].indexOf("：") !==-1 ){
        food_msgDetial = food_msg[1].split("：");
      }else{
        hasDetial = false;
      }
      var id_obj = {id:this.next_id()};
      if(!this.input_id){//添加
        this.obj.id = Object.assign({},id_obj).id;
        this.obj.name = food_msg[0];
        if(this._isMobile()){
            this.obj.btn_show = true;
        }
        if(hasDetial) {
            this.obj.price = (food_msgDetial[0]?parseFloat(food_msgDetial[0]):"");
            this.obj.detial = food_msgDetial[1];
        }else{
            this.obj.price = (food_msg[1]?parseFloat(food_msg[1]):"");
        } 
        this.foods.push(Object.assign({},this.obj));
      }else{//更新
        var index = this.find_index(this.input_id);
        Vue.set(this.foods[index],'name',food_msg[0]);
        if(hasDetial){
            Vue.set(this.foods[index],'price',parseFloat(food_msgDetial[0]));
            Vue.set(this.foods[index],'detial',food_msgDetial[1]);
        }else{
            Vue.set(this.foods[index],'price',parseFloat(food_msg[1]));
        }
        if(this._isMobile()){
            Vue.set(this.foods[index],'btn_show',true);
        }else{
            Vue.set(this.foods[index],'btn_show',false);
        }
      }
      this.reset();
    },
    adjust_food: function(id){
      var food = this.foods[this.find_index(id)];
      this.food = food.name + '-' + (food.price?food.price:"") + "：" + (food.detial?food.detial:"");
      // this.food = food.name + '-' +food.price + "：" + (food.detial?food.detial:"");
      this.input_id = food.id;
    },
    delete_food: function(id){
      var index = this.find_index(id);
      this.foods.splice(index,1);
      this.reset();
    },
    reset: function(){
      this.food = '';
      this.input_id = null;
      this.obj = {};
    },
    next_id: function(){
      return this.foods.length+1;
    },
    find_index: function(id){
      return this.foods.findIndex(function(item){
        return item.id == id;
      })
    },
    getprev_month: function(){
        
    },
    getnext_month: function(){

    },
    show_hide: function(id){
      var index = this.find_index(id);
      Vue.set(this.foods[index],'btn_show',true);
    },
    hide_show: function(id){
      var index = this.find_index(id);
      if(this._isMobile()){
        Vue.set(this.foods[index],'btn_show',true);
      }else{
        Vue.set(this.foods[index],'btn_show',false);
      }
    },
    add_food_pic: function(id){
      var key = 'key'+id;
      this.file_input = this.$refs[key][0];
      this.file_input.click();
      //console.log(this.$refs[key][0].files)
    },
  },
  watch: {
    foods: {
      deep: true,
      handler: function(n,o){
        if(o) {
          setLocal('foods',n);
        }else {
          setLocal('foods',[]);
        }
      }
    },
    file_input: {
      deep: true,
      // handler: function(n,o){
      //     console.log(n,o)
      // }
    }
  }
}
</script>
<style>
.navbar{
    background:#54cead;
    /* text-align:center; 没作用*/ 
}
.navbar h1{
    margin:0 auto
}
.container{    
    margin: 30px auto;
    background:rgba(255,255,255,.6)
}
.form{margin:10px}
.header{    
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}
/* .dateline:after{
    content:"";
    display:inline-block;
    width:100%;
} 动态加载的month内容不能实现左右两端对齐*/
.dateline{
    text-align: center;
}
.dateline span{
    display:inline-block;
    font-size:30px;
    width:12%
}
.dateline span:hover{
    color:red;
    cursor:pointer
}
.dateline span.active{
    color:#3ee23e
}
</style>