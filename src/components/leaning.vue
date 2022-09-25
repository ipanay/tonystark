/* eslint-disable no-console */
<template>
  <div class="leaning">
    <div class="side_bar">
      <div class="leaning_header">
        <a href="index.html" class="logo">ipan</a>
        <div class="intro">小学生。。。</div>
      </div>
      <div class="nav">
        <a href="#" class="css">css</a>
        <a href="#JavaScript5" class="js">js</a>
        <a href="#" class="webpack">webpack</a>
        <a href="#" class="webpack">计算机</a>
      </div>
        <div class="tag_list">
          <a href="http://ipanmock.cn">ipanmock</a>
          <a href="#">关于我</a>
          <a href="#">联系我</a>
          <a href="#">找到我</a>
        </div>
      </div>
      <div class="main">
        <div class="artical_list">
          <div :style="showClass" class="editPlantMarkdown">
            <h1 class="title" style="background:#777">
              <span>add here！</span>
              <a @click="editOrhide">展开/收起</a>
            </h1>
            <div v-show="showOrhide" class="addBox">
              <div  class="TitleAndTag">
                <label for="basic-url">标题</label>
                <div class="input-group">
                  <input v-model="itemTitle" type="text" class="form-control">
                </div>
                <label for="basic-url">标签</label>
                <div class="input-group">
                  <input v-model="itemTag" type="text" class="form-control">
                </div>
                <input v-model="originCode" type="checkbox" />源代码
              </div>
              <div class="contant">
                <mavon-editor @save="renderHtml"/>
              </div>
            </div>
          </div>
          <div class="itemBox" :style="{'margin-top': showOrhide?'580px':'100px'}">
            <Item
              v-if="isShow"
              :itemTitle="itemTitle"
              :itemTag="itemTag"
              :originCode="originCode"
              :itemContent="itemContent"
            ></Item>
            <div class="item">
              <a class="title">xxx</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | xxx</div>
              <div class="contant">
              </div>
            </div>
            <div class="item">
              <a class="title">virtul dom</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | vdom</div>
              <div class="contant">
                <p>
                  虚拟dom,用js模拟dom结构.dom渲染很昂贵
                </p>
              </div>
            </div>
            <div class="item">
              <a class="title">单线程</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | 单线程 js单线程</div>
              <div class="contant">
                单线程,同一时间只能做一件事.为了避免dom渲染冲突,js的webwoker支持多线程,但不能访问dom
              </div>
            </div>
            <div class="item">
              <a class="title">JQuery</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | JQuery</div>
              <div class="contant">
                <div class="html">
                  <h6>html</h6>
                  <p>
                    <pre>
                      <p>first</p>
                      <p>second</p>
                      <p>third</p>
                      <div>
                        <p>fourth</p>
                      </div>
                      &lt;script src="jquery.js"&lt;&gt;&lt;/script&gt;
                      &lt;script&gt;
                        var $p = $('p')
                        $p.css('background', 'red')
                        var pHtml = p.html()
                        var $div = $('div')
                        $div.css('background', 'blue')
                        var divHtml = $div.html()
                      &lt;/script&gt;
                    </pre>
                  </p>
                </div>
                <div class="jquery">
                  <h6>jquery</h6>
                  <p>
                    (function (window) {
                      var $ = function (selector) {
                        return new $.fn.init(selector)
                      }
                      $.fn = {}
                      var init = $.fn.init = function (selector) {
                        var slice = Array.prototype.slice
                        var dom = slice.call(document.querySelectorAll(selector))
                        var len = selector ? dom.length : 0
                        for (var i = 0; i &lt; len; i++) {
                          this[i] = dom[0]
                        }
                      }
                      $.fn.init.portotype = $.Fn = {
                        constructor: $.fn.init,
                        css () {

                        },
                        html () {

                        }
                      }
                      window.$ = window.jquery = $
                    })(window)
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">浏览器缓存:提升页面性能</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | 浏览器缓存 提升页面性能</div>
              <div class="contant">
                <div>
                  <h5>强缓存</h5>
                  <p>
                    当有服务器响应头部的俩强缓存字段时,浏览器再次请求时根据这个字段直接使用缓存,Cache-Control优先级高于Expirse
                    <ul>
                      <li>Expires:Sat, 24 Jul 2021 07:50:47 GMT 以服务器时间为基准的未来一个时刻</li>
                      <li>Cache-Control:max-age=604800 资源所能存活的时长</li>
                    </ul>
                  </p>
                </div>
                <div>
                  <h5>协商缓存</h5>
                  <p>
                    强缓存失效的情况下,再次请求头部会带上上一次响应头部的俩协商缓存字段 <br/>
                    请求头带上Last-Modified服务器告知的最后一次修改时间,作为If-Modified_Since的值,还有以唯一的Etage作为资源的标识,通过If-None-Match给服务器,
                    由服务器对比判断资源是否修改
                    <ul>
                      <li>Last-Modified/If-Modified-Since:Thu, 21 Jun 2018 06:51:02 GMT</li>
                      <li>Etage/If-None-Match:字符串</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">AJAX</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | AJAX</div>
              <div class="contant">
                <div>
                  <h6>Asynchronous Javascript And XML</h6>
                  <div>
                    <ul>
                      <li>
                        第一步:创建. IE5、IE6: ActiveXObject; Other: XMLHttpRequest
                        <p>
                          const xml = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHTTP')
                        </p>
                      </li>
                      <li>
                        第二步:绑定回调
                        <p>
                          xml的三个重要属性: onreadystatechange、readyState、status
                        </p>
                        <p>
                          readyState:0请求未初始化 1服务器已连接 2请求已接收 3请求正在处理 4请求处理完成,响应就绪
                        </p>
                        <p>
                          status: 200/206/304
                        </p>
                      </li>
                      <li>
                        第三步:规定请求类型
                        <p>
                          xml.open(methods, url, boolean)
                          boolean为true异步 不阻塞其他js执行 readyState发生变化触发第二步
                          boolean为false同步 阻塞后面代码执行 readyState发生变化触发第二步 执行后面代码
                        </p>
                      </li>
                      <li>
                          第四步:发起请求
                          <p>
                            xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
                            xml.send(string)
                          </p>
                          <p>
                            响应:xml.responseText/xml.responseXML
                          </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">OPP 继承</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | OPP继承</div>
              <div class="contant">
                <pre>
                  function Father (name) {
                    this.name = name
                  }
                  function Son (age, name) {
                    Father.call(this, name)
                    this.age = age
                  }
                  Son.porototype = {
                    constructor: Son // 需要指明constructor
                  }
                  //Object.setPrototypeOf(Son.prototype, Father.prototype)
                  Son.prototype = Father.prototype
                  const son = new Son(12, 'coco')
                  son instanceof Father // true
                  son instanceof Son // true 这里需要留意 此时s.constructor = Father 使用Object.setPrototypeOf没有此问题
                </pre>
              </div>
            </div>
            <div class="item">
              <a class="title">原型</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | 原型</div>
              <div class="contant">
                对象的prototype是undefined
                函数的__proto__是函数
                Function.prototype===Function.__proto__是函数
              </div>
            </div>
            <div class="item">
              <a class="title">Get&Post</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | http get post</div>
              <div class="contant">
                <div>
                  <p>
                    使用get方法,查询字符串是附加在URL后面一起发送到服务器,所以:
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">网易云音乐歌单转移到Apple Music</a>
              <div class="status">发布于：2021/7/7 | 阅读：1.000 | 网易云音乐歌单转移到Apple Music</div>
              <div class="contant">
                <div>
                  <div>
                    <h6>1.选择歌单复制链接获得列表id <a href="https://music.163.com/">去网易云</a></h6>
                    <p>
                      <img @click="amplifier" src="../assets/image/music/wangyiyunmysiclist.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/getlistId.png" alt="">
                    </p>
                  </div>
                  <div>
                    <h6>2.生成歌单文本 <a href="https://yyrcd.com/2018/11/14/n2s-zh/">去生成</a></h6>
                    <p>
                      <img @click="amplifier" src="../assets/image/music/creattextlistbyId.png" alt="">
                    </p>
                  </div>
                  <div>
                    <h6>3.拿到歌单文本去转移 <a href="https://www.tunemymusic.com/zh-cn/">去转移</a></h6>
                    <p>
                      <img @click="amplifier" src="../assets/image/music/translateliststart.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/chooselistsource.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/offertextlist&tranform.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/choosetarget.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/thetargets.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/translatestart.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/translating.png" alt="">
                      <img @click="amplifier" src="../assets/image/music/complatetranslate.png" alt="">
                    </p>
                  </div>
                  <div>
                    <h6>4.Apple Music检查</h6>
                    <p>
                      <img @click="amplifier" src="../assets/image/music/checklist.png" alt="">
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">DOM事件</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | DOM事件</div>
                <div class="contant">
                  <a href="https://www.jianshu.com/p/622d994906f7">来源</a>
                  <div>
                    <p>
                      事件是javascript与html交互的基础,任何文档或浏览器窗口发生的交互,都需要通过绑定事件进行交互,比如鼠标点击、敲击键盘等.
                    </p>
                    <div>
                      <h6>DOM级别与DOM事件级别</h6>
                      <p>
                        DOM级别分为DOM0、DOM1、DOM2、DOM3
                        DOM事件分为DOM0、DOM2、DOM3
                        DOM0之前是标签的&lt;any onclick="fn"&gt;属性绑定事件
                        DOM0:js与html解耦dom.onclick=fn
                        DOM2:dom.addEventListener('click',fn,boolean)
                        DOM3:在DOM2的基础性添加很多事件类型
                      </p>
                    </div>
                    <div>
                      <h6>DOM事件模型</h6>
                      <p>
                        DOM事件模型分为:捕获、冒泡
                        dom.addEventListener('click',fn,boolean)
                        boolean为true是为捕获
                        boolean为false是为冒泡
                      </p>
                    </div>
                    <div>
                      <h6>DOM事件流</h6>
                      <p>
                        <img @click="amplifier" width="50%" src="../assets/image/eventmodel.png" alt="">
                        <img @click="amplifier" width="50%" src="../assets/image/eventmodel2.png" alt="">
                        事件流分为三个阶段:捕获-->目标元素-->冒泡
                        事件通过捕获到达目标元素然后冒泡
                      </p>
                      <p>
                        捕获的具体流程:window-->doucument-->html-->body-->...-->目标元素
                      </p>
                    </div>
                    <div>
                      <h6>事件常见应用</h6>
                      <p>
                        event.preventDefault() 阻止默认事件
                        event.stopPropagation()阻止捕获和冒泡
                        event.stopImmediatePropagation()阻止后面绑定的同一事件类型的回调
                        event.currentTarget 绑定事件的对象
                        event.target  目标对象
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="item">
              <a class="title">BFC</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | css BFC 块级格式化上下文</div>
                <div class="contant">
                  BFC:block formatting context
                  <p>
                    块级格式化上下文, 使块级元素不会对上下文元素产生影响:不会产生margin重叠;清除浮动元素影响
                  </p>
                </div>
            </div>
            <div class="item">
              <a class="title">js获取元素盒模型宽高</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | js 获取元素width、height</div>
                <div class="contant">
                  dom.style.width/height 获取内联元素宽高
                  dom.currentStyle.width/height IE
                  window.getComputedStyle(dom).width/height Firfox&Chrome
                  dom.getBoundingClientRect().width/height
                </div>
            </div>
            <div class="item">
              <a class="title">浏览器工作过程</a>
                <div class="status">发布于：2020/8/25 | 阅读：1.000 | 浏览器工作过程</div>
                <div class="contant">
                  <a href="https://kb.cnblogs.com/page/129756/">来源</a>
                  <div>
                    <h5>浏览器组成</h5>
                    <div>
                      <p>用户界面、浏览器引擎、渲染引擎、网络、js引擎、UI后端、数据存储</p>
                      <p>
                        <img @click="amplifier" src="../assets/image/browser.png" alt="">
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5>主要过程:加载、解析、渲染</h5>
                    <div>
                      <p>加载:外部样式文件、js文件放到合适的位置,使浏览器快速加载完成</p>
                      <p>解析:构建DOM、组织css选择器时,选择最优的写法,提高解析速度</p>
                      <p>渲染:设置元素、编写js时,明白了渲染就要减少回流和重绘的消耗</p>
                    </div>
                    <div>
                      <h5>加载</h5>
                      <p>
                        html页面从上往下加载解析,css在head中,同步加载css阻塞后面html解析,
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="item">
              <a class="title">dns</a>
                <div class="status">发布于：2020/8/25 | 阅读：1.000 | dns</div>
                <div class="contant">
                  dns解析过程:
                  浏览器dns缓存
                  系统dns缓存
                  路由器dns缓存
                  网络运营商dns缓存
                  递归搜索:
                    
                  <img @click="amplifier" src="../assets/image/dns.png" alt="">
                </div>
            </div>
            <div class="item">
              <a class="title">水平垂直居中</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | 水平垂直居中</div>
                <div class="contant">
                  <div class="centerItemWrap" style="position:relative;">
                    <div class="centerItemBox" style="position:absolute;left:calc(50% - 100px);top:calc(50% - 100px)">left:calc(50% - 100px);top:calc(50% - 100px)</div>
                  </div>
                  <div class="centerItemWrap" style="position:relative;">
                    <div class="centerItemBox" style="position:absolute;left:50%;top:50%;margin-left:-100px;margin-top:-100px">left:50%;top:50%;margin-left:-100px;margin-top:-100px</div>
                  </div>
                  <div class="centerItemWrap" style="position:relative;">
                    <div class="centerItemBox" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)">left:50%;top:50%;transform:translate(-50% -50%)</div>
                  </div>
                  <div class="centerItemWrap" style="position:relative;">
                    <div class="centerItemBox" style="position:absolute;inset:0;margin:auto">inset:0;margin:auto</div>
                  </div>
                  <div style="position:relative">
                    <div style="position:absolute">
                      Wrap:display:flex;justify-content:center;align-items:center;
                      display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center
                    </div>
                    <div style="display:flex;justify-content:center;align-items:center;
                      width:500px;height:500px;background:grey;margin-bottom: 20px">
                      <div style="width:200px;height:200px;background:pink"></div>
                    </div>
                  </div>
                  <div style="position:relative">
                    <div style="position:absolute">
                      Wrap: font-size: 0;text-align: center;
                      Wrap::before {
                        content: '';
                        height: 100%;
                        display: inline-block;
                        vertical-align: middle;
                      }
                      Box: display:inline-block;vertical-align:middle
                    </div>
                    <div class="alignVerticalCenter centerItemWrap">
                      <div class="centerItemBox" style="display:inline-block;vertical-align:middle"></div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="item">
              <a class="title">用css画三角形</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | 多边形</div>
                <div class="contant">
                  <div style="border:10px solid transparent;border-top-color:red;width:0px"></div>
                </div>
            </div>
            <div class="item">
              <a class="title">new Fn().fn()</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | new 优先级</div>
                <div class="contant">
                  new Fn().fn() => (new Fn()).fn()
                </div>
            </div>
            <div class="item">
              <a class="title">函数防抖</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | 函数防抖</div>
                <div class="contant">
                  <button @click="nobounce(function () {consolelog(9)},200)">函数防抖</button>
                  <button id="btn">函数防抖</button>
                </div>
            </div>
            <div class="item">
              <a class="title">viewport</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | 移动端viewport meta的name=viewport</div>
                <div class="contant">
                  <a href="https://www.cnblogs.com/gaogch/p/10628613.html">来源</a>
                  <p> 
                    移动端的网页重构或开发 用到&lt;meta name="viewport"&gt;,只有明白viewport的概念和弄清楚name为viewport的meta标签的使用,才能更好的让网页适配和响应各种不同分辨率的移动设备.
                    移动端默认的viewport是layout viewport
                  </p>
                  <h6> 不影响布局显示的尺寸layout viewport: {{ layoutViewport }} 即 document.documentElement.clientWidth</h6>
                  <h6> 浏览器的可视区域visual viewport: {{ visualViewport }} 即 window.innerWidth</h6>
                  <h6> 无论屏幕分辨率是多少 不出现滚动条 都能正常显示ideal viewport: {{ layoutViewport }} 即 设备的硬件屏幕尺寸</h6>
                  <div>
                    <p>移动设备默认的是layout viewport</p>
                    <p>
                      viewport为ideal viewport
                      &lt;meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"&gt;
                    </p>
                  </div>
                </div>
            </div>
            <div class="item">
              <a class="title">window.devicePixelRatio</a>
                <div class="status">发布于：2021/7/7 | 阅读：1.000 | 像素比 window.devicePixelRatio</div>
                <div class="contant">
                  <a href="https://www.cnblogs.com/gaogch/p/10628613.html">来源</a>
                  <p> 像素比 = 设备物理像素 / 设备独立像素即css像素 </p>
                  <h6>背景:css中的1px不等于设备的1px</h6>
                  <p>
                    在早先的移动设备中，屏幕像素密度都比较低，如iphone3，它的分辨率为320x480，在iphone3上，
                    一个css像素确实是等于一个屏幕物理像素的。后来随着技术的发展，移动设备的屏幕像素密度越来越高，
                    从iphone4开始，苹果公司便推出了所谓的Retina屏，分辨率提高了一倍，变成640x960，但屏幕尺寸却没变化，
                    这就意味着同样大小的屏幕上，像素却多了一倍，这时，一个css像素是等于两个物理像素的。
                    你分辨率越大，css中1px代表的物理像素就会越多，devicePixelRatio的值也越大，
                    这很好理解，因为你分辨率增大了，但屏幕尺寸并没有变大多少，必须让css中的1px代表更多的物理像素，
                    才能让1px的东西在屏幕上的大小与那些低分辨率的设备差不多，不然就会因为太小而看不清。
                  </p>
                  <h6> 这台设备的devicePixelRatio值为: {{ devicePixelRatio }} </h6>
                </div>
            </div>
            <div class="item">
              <a class="title">form</a>
                <div class="status">发布于：2020/8/7 | 阅读：1.000 | js</div>
                <div class="contant">
                  <p>k&nbsp;l</p>
                  <form ref="form" action="adf.com" method="post">
                    name: <input type="text" name="name" required>
                    name: <input type="text" name="name">
                    age: <input type="text" name="age" required>
                    <button>submit</button>
                  </form>
                </div>
            </div>
            <div class="item">
              <a class="title">web</a>
                <div class="status">发布于：2021/7/1 | 阅读：1.000 | web</div>
                <div class="contant">
                  <a href="https://blog.csdn.net/qq_41923771/article/details/81358927">来源</a>
                  <p>
                    web  即world wide web
                    web是网页的意思,它用于表示Internet主机上供外界访问的资源.
                    web服务器
                    提供网上信息(资源)浏览,被动的服务程序
                    web服务器与应用服务器:https://blog.csdn.net/jameswuang/article/details/80986789
                    应用服务器处理业务逻辑,web服务器则主要是让客户可以通过浏览器进行访问,处理html文件,web服务器通常比应用服务器简单
                    web服务器:Apache,IIS,Nginx
                    应用服务器:Tomcat,Weblogic,Jboss
                  </p>
                </div>
            </div>
            <div class="item">
              <a class="title">form</a>
                <div class="status">发布于：2021/7/1 | 阅读：1.000 | 内存</div>
                <div class="contant">
                  大致分为 栈内存 和 堆内存
                  栈中存储值类型
                  堆内存存储复杂类型数据
                  栈内存存放堆内存数据的地址
                </div>
            </div>
            <div class="item">
              <a class="title">弹性盒模型 flex</a>
              <div class="status">发布于：2019/6/21 | 阅读：1.000 | 标签：css相关</div>
              <div class="contant">
                <pre>
                布局：
                &lt;div class='flex_container'&gt;
                &lt;div class="flex_item"&gt;flex item1&lt;/div&gt;
                &lt;div class="flex_item"&gt;flex item2&lt;/div&gt;
                &lt;div class="flex_item"&gt;flex item3&lt;/div&gt;
                &lt;/div&gt;
                </pre>
                  <div>
                    <h5>父级：</h5>
                    <div>
                        <div>
                            flex
                        </div>
                        <div>
                            flex-direction
                        </div>
                        <div>
                            flex-wrap
                        </div>
                        <div>
                            flex-flow:row nowrap(默认);是flex-direction和flex-wrap的缩写
                        </div>
                        <div>
                            justify-content
                        </div>
                        <div>
                            align-items
                        </div>
                        <div>
                            align-content
                        </div>
                    </div>
                    <div>
                        display : flex | inline-flex
                    </div>
                    <div>
                        flex-direction : row(默认) | row-reverse | column | column-reverse<br/>
                        子元素的排版：横向、横向倒序、纵向、纵向倒序
                    </div>
                    <div>
                        justify-content : flex-start(默认) | flex-end | center | space-between | space-around<br/>
                        子元素的横向排版：集中在水流开始处 集中在水流结尾处 集中在水平中间 水平平均分配且周围无空隙 水平平均分配且首位占一半空隙 
                    </div>
                    <div>
                        align-items ：flex-start(默认) | flex-end | center | baseline | stretch<br/>
                        子元素的纵向对齐排版：集中在水流垂直开始处 集中在垂直水流结尾处 集中在垂直中间 垂直平均分配且周围无空隙 垂直平均分配且首位占一半空隙 
                    </div>
                    <div>
                        flex-wrap : nowrap(默认) | wrap | wrap-reverse | initial | inherit<br/>
                        子元素的换行方式：容器内单行（溢出） 多行 折行往反方向
                    </div>
                    <div>
                        align-content : flex-start(默认) | flex-end | center | space-between | space-around | stretch<br/>
                        作用于多行垂直方向的排版（单行不起作用）：
                    </div>
                  </div>
                <div>
                  <h5>子级：子级的float clear vertical-align失效</h5>
                  <div>
                      order ：intger值小的往前排，可为负值
                  </div>
                  <div>
                      margin:auto : 自动占据剩余空间，
                      有3个flex item第一个设置margin-right:auto其他值默认，剩余两个元素将排版在容器右侧，左侧全部给第一个元素
                  </div>
                  <div>
                      align-self : auto | flex-start | flex-end | center | baseline | stretch<br/>
                      作用于单个元素的align-items
                  </div>
                  <div>
                      flex : &lt;number&gt; 子元素如何分配空间，按当前元素flex属性值比所有值之和与容器所给空间之积。
                  </div>
                  <div>
                      flex-grow : &lt;number&gt;0(默认) <br/>
                      项目的放大比例：存在剩余空间0也不放大按^1放大
                  </div>
                  <div>
                      flex-shrink : &lt;number&gt;1(默认)
                      项目的缩小比例：存在空间^1按比例缩小0不变
                  </div>
                  <div>
                      flex-basis : &lt;length&gt;auto(默认)
                      优先级高于width
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">正则</a>
              <div class="status">发布于：2019/3/27 | 阅读：1.000 | 标签：js相关</div>
              <div class="contant">
                <div>
                    字符集 + 量词（图形化正则网站https://regexper.com<a target="_blank" href='https://regexper.com'>go to look</a>）<br/>
                    默认：量词仅修饰相邻的前一个字符集<br/>
                    分组：一个量词修饰多个字符集
                </div>
                <div>
                    字符集：规定字符串中一位字符可用的备选字符列表<br/>
                    1#[这里一连串字符中的一位待被匹配字符]<br/>
                    2#预定义字符集：<br/>
                        \w 一位字母/数字/下划线<br/>
                        .任意一位字符<br/>
                        \d一位数字 \D一位非数字<br/>
                        \s一位空格/tap键/断行 \S非空白<br/>
                    3#[^47]除了4和7的任意一位字符 
                </div>
                <div>
                    量词：<br/>
                    1#有明确边界的：{min,max}  {min,}  {digest}<br/>
                    2#无明确边界的：?修饰0-1 *修饰0-∞ +修饰1-∞<br/>
                </div>
                <div>
                    分组：<br/>
                    (字符集字符集)量词, 思考方式先整体，后内部个体<br/>
                    我(了个?)?去
                </div>
                <div>
                    选择<br/>
                    | 或<br/>
                    (微|w(ei)?)\s*(信|x(in)?)
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title">优盘修复</a>
              <div class="status">发布于：2019/3/22 | 阅读：1.000 | 标签：计算机相关</div>
              <div class="contant">
                  问题描述：windows接入优盘，显示盘符（如G）但不显示存储条<br/>
                  解决：命令行修复：chkdsk /f g:<br/>
                                  checkdisk
              </div>
            </div>
            <div class="item">
              <a class="title">vue vue-router ...</a>
              <div class="status">发布于：2019/6/23 | 阅读：1.000 | 标签：vue相关</div>
              <div class="contant">
                  
              </div>
            </div>
            <div class="item">
              <a class="title">vue lifecircle</a>
              <div class="status">发布于：2019/6/23 | 阅读：1.000 | 标签：vue相关</div>
              <div class="contant">
                生命周期钩子==生命周期函数==生命周期事件
              </div>
            </div>
            <div class="item">
              <a class="title">new Date()</a>
              <div class="status">发布于：2019/6/23 | 阅读：1.000 | 标签：js相关</div>
              <div class="contant">
                  new Date(n);n是数字，如果传入字符串，不会隐式转成数字吗
              </div>
            </div>
            <div class="item">
              <a class="title">webpack</a>
              <div class="status">发布于：2019/7/12 | 阅读：1.000 | 标签：js相关</div>
              <div class="contant">
              浏览器运行js文件没有模块化，文件共享数据或代码一个文件引用另一个文件的内容，导致每一个文件必须暴露出一个全局变量,
              将后端（node.js)代码前端化,使用浏览器认识后端的方式。跑在node环境下，安装：npm i webpack -g全局 任何目录下运行 webpack a.js bundle.js.<hr />
              1.webpack能够处理js文件之间的互相依赖关系，开发的时候只有一个main.js这里面引用各种需要的js,开发方便 <br/>
              2.Webpack能够处理高级的、浏览器不识别的高级语法，使得浏览器可以运行<br/>
              <h5>过程：全局安装webpack</h5>
              <h6>1. webpack ./src/main.js -o ./dist/bundle.js将入口文件打包成浏览器可运行的bundle.js，这样index.html里面引入bundle.js，每次更改main.js文件后都要webpack ./src/main.js -o ./dist/bundle.js重新打包，然后运行index.html。
                webpack ./src/main.js -o ./dist/bundle.js这种打包方式略繁琐，如果就命令webpack就直接打包就更方便了
              </h6> 
              <p>
                <h6> 2. 所以要进行webpack.config.js配置：这个配置文件，起始就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象</h6>
                <pre>
                  Const path = require(“path”)
                  module.exports = {
                    entry:path.join(__dirname,'./src/main.js'),//入口 表示 webpack打包哪个文件
                    output: {
                      path : path.join(__dirname,'./dist'),//指定 打包好的文件，输出到哪个目录中去
                      filename：‘bundle.js',
                      publicPath: 'dist' // 指定程序中引入资源的根位置 一旦使用了htmlWebpackPlugin 就不要此配置
                    }
                  }
                </pre>
                这时候直接在控制台webpack就可以打包：这时候，首先，webpack发现，我们并没有通过命令的形式，给他指定入口和出口，，，
                webpack就会去 项目的 根目录下找webpack.config.js的配置文件，，，
                当找到配置文件后，webpack会去解析这个 配置文件，当解析执行完配置文件后，就得到了 配置文件中 导出的 配置对象，，，
                当webpack拿到配置对象后，就拿到了配置对象中指定的 入口 和 出口 ，然后打包构建<br>
                到目前为止，开发过程是，修改main.js代码后就要webpack打包，然后刷新浏览器---》<br>
              </p>
              <p>
                <h6> 3. 懒惰社会进步---想让webpack监听只要代码发生变化就要自动打包，我们只需要刷新即可，webpack-dev-server工具来帮忙</h6>
              项目本地安装webpack-dev-server 依赖于webpack,本地必须安装webpack, 因为本地安装的 所以 无法把它当作脚本命令，
              在powershell终端中直接运行（只有全局-g安装的工具，才能在 终端上正常执行）而package.json里的“script”可以配置脚本命令，<br>
              “script”:{dev:”webpack-dev-server”},<br>
              然后npm run dev 此时监听代码变化，变化就打包，而且此时他给了我们一个起了简单服务的项目http://local host:8080,
              访问此地址，显示的是根目录里问路径结构，而且她在根目录下电脑内存里存放了一个看不见的bundle.js（并没有把他放到list下，list下的bundle.js并没有更新），
              我们的src里的index.html就在默认页面上src里面，稍加配置即可将我们指定的index.html为默认展示文件，在package.json如下配置：<br>
              ”dev”:”webpack-dev-server --open(起服务就打开) --port 3000(端口) --contentBase src（我们的index.html文件在src里面）”，<br>
              这时候浏览器显示的是根目录下物理磁盘中的我们编写的index.html（注意此时是根目录下的与虚拟bundle.js同目录）,
              那么既然同目录下也有打包好的bundle.js那就直接引用，
              （？？？而且一旦index.html文件指定到根目录其只能访问同目录的bundle.js，未指定的index.html引用dist/bundle.js。？？？），<br>
              此时index.html是物理磁盘上的文件，需要将其放到内存中，理用插件html-webpack-plugin，项目安装此插件，webpack.config.js引入并配置：<br>
                <pre>
                const htmlWebpackPlugin = require(‘html-webpack-plugin')
                Module.exports = {
                  Plugins: [
                    New htmlWebpackPlugin({
                      Template: path.join(__dirname,”./src/index.html”),
                      Filename: ‘index.html'
                    })
                  ]
                }
                </pre>
              此插件根据模板路径文件在内存中生成index.html文件，并把bundle.js引入其中
                <pre>
                Module: {
                  Rules: [
                    {test: /\.css$/,use:[‘style-loader','css-loader']}, // cssloader只负责加载css style-loader将模块导出添加到dom中
                    {test:/\.scss$/,use:[‘style-loader','css-loader','scss-loader'},
                    {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=xxx'}//xxx是图片转为base64格式的最	小值，大于这个值的图片将不会转为base64格式
                    当目前这样引用图片的时候，编译之后会给编译过程中引用图片的代码处自动生成一个hash值作为图片名称，小心，是没经过一处代码就生成一个唯一的hash值，意思是说就算两个地方引了同一张图片，它都会编译两次到项目根目录下，所以要如下配置：
                    {test:/\.(jpg|png|gif)$/,use:'url-loader?name=[name].[ext]'}这样之后，图片的名称就是原名称，但是，还有但是，当两个路径下有同一个名称的图片时，最后代码引用图片的路径会覆盖前几次，解决方法就是：
                    {test:/\.(jpg|png|gif)$/,use:'url-loader?name=[hash:8]-[name].[ext]'}
                  ]
                }
                </pre>
                <pre>
                Webpack默认只能打包处理js文件，如果要引入css，需要俩loader：
                style-loader和css-loader
                cnpm i style-loader css-loader -D
                cnpm i less-loader less -D
                cnpm i sass-loader node-sass -D
                cnpm i url-loader file-loader -D
                </pre>
                <p>
                  1.webpack中，默认只能处理一部分 es6 的新语法，需要第三方loader来转码---babel <br>
                  1.1第一套：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D <br>
                  第二套：cnpm i babel-preset-env babel-preset-stage-0 -D <br>
                  1.2{test:/\.js$/,use:'babel-loader',exclude:/node_modules /} <br>
                  <pre>
                  1.3根目录创建.bablerc文件，配置{
                    “presets”: [“env”,”stage-0”],
                    “plugins”: [“transform”]
                  }
                  </pre>
                </p>
              </p>
              </div>
            </div>
            <div class="item">
              <a class="title">字符串的substr和substring</a>
              <div class="status">发布于：2019/7/12 | 阅读：1.000 | 标签：js相关</div>
              <div class="contant">
                  字符串等基础类型值本身不能被修改
                  str.substr(indexi,length)
                  str.substring(indexi,endexi)
              </div>
            </div>
            <div class="item">
              <a class="title">数组的部分迭代函数</a>
              <div class="status">发布于：2019/7/14 | 阅读：1.000 | 标签：js相关</div>
              <div class="contant">
                  var bool=[].some(function(item){...return true;}) <br/>
                  var bool=[].every (function(item){...return true;}) <br/>
                  var index=[].findIndex (function(item){...return true;})<br/>
                  var newArr=[].filter (function(item){...return true;})<br/>
                  some和every返回值是boolean类型，some内部条件满足时 return true终止迭代 bool得到返回值true；<br/>
                  every内部迭代所有，只有所有条件满足都返回true，最终bool才返回true，否则迭代终止返回false；<br/>
                  findIndex返回满足内部条件的下标，并终止迭代。filter过滤器，返回满足条件的元素组成的新数组。
              </div>
            </div>
            <div class="item" id="JavaScript5">
                <a class="title">锚点连接</a>
                <div class="status">发布于：2019/7/27 | 阅读：1.000 | 标签：html</div>
                <div class="contant">
                    触发者：&lt;a href='#xxx'&gt;<br>
                    响应者：两种方式 1.a元素的name='xxx'<br/>
                                2.非a元素的id='xxx'
                    <a id="ATest" href="./JavaScript5/imgs/compile.png">下载图片</a>
                </div>
            </div>
            <div class="item">
              <a class="title">js</a>
                <div class="status">发布于：2020/3/5 | 阅读：1.000 | 标签：js</div>
                <div class="contant">
                  <JS></JS>
                </div>
            </div>
            <div class="item">
              <a class="title">计算机网络原理</a>
                <div class="status">发布于：2020/3/5 | 阅读：1.000 | 标签：计算机</div>
                <div class="contant">
                  <ComputerNet></ComputerNet>
                </div>
            </div>
            <div class="item">
              <a class="title">PhotoShop</a>
                <div class="status">发布于：2020/3/5 | 阅读：1.000 | 标签：ps</div>
                <div class="contant">
                  <PhotoShop></PhotoShop>
                </div>
            </div>
            <div class="item">
              <a class="title">电话怎么把声音发送出去</a>
                <div class="status">发布于：2020/3/5 | 阅读：1.000 | 标签：声音</div>
                <div class="contant">
                  
                </div>
            </div>
            <div class="item">
              <a class="title">npx</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：npm</div>
                <div class="contant">
                  在项目目录下webpack打包命令实现的前提是全局安装webpack
                  npm@5.2以后
                  npx出现后 在项目目录下执行npx webpack 会去找项目下的node_modules里面的webpack-cli 如果找不到会尝试下载

                  
                  eval()执行字符串代码
                </div>
            </div>
            <div class="item">
              <a class="title">brew</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：mac</div>
                <div class="contant">
                  brew
                </div>
            </div>
            <div class="item">
              <a class="title">vue</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：node</div>
                <div class="contant">
                  <VueLearing></VueLearing>
                </div>
            </div>
            <div class="item">
              <a class="title">vue子组件</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：node</div>
                <div class="contant">
                  子组件通过$emit多次调用父组件方法 只会执行一次
                </div>
            </div>
            <div class="item">
              <a class="title">css</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：css</div>
                <div class="contant">
                  <img @click="amplifier" src="../mmp/css.png" alt="">
                </div>
            </div>
            <div class="item">
              <a class="title">http</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：http</div>
                <div class="contant">
                  <img @click="amplifier" src="../mmp/Http.png" alt="">
                </div>
            </div>
            <div class="item">
              <a class="title">v-model与props、$emit</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | 标签：node</div>
                <div class="contant">
                  v-model是props、$emit的变相？？？？？
                </div>
            </div>
            <div class="item">
              <a class="title">表达式、语句</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | js</div>
                <div class="contant">
                  我看很多网上的文章都把表达式和语句的区别，说成是表达式有值，而语句不总有，我个人不同意这个观点。我认为，纠结于这两个概念的区别和联系没有意义，思维方式的重点应该是在于观察视角和维度的区别。表达式是从数学、计算的视角来看待问题。它关注的是算法的效率（空间和时间复杂度）。而语句是从计算机执行的视角来看问题，这个视角关注的是代码的逻辑和架构。
                  （从这个视角来看，表达式也是语句）我们写代码的时候，需要在这两个视角之间不断的切换，而不是拘泥于去区分这两个概念。
                  链接：https://www.zhihu.com/question/20750344/answer/487107831
                </div>
            </div>
            <div class="item">
              <a class="title">homebrew</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | homebrew</div>
                <div class="contant">
                  /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"</div>
            </div>
            <div class="item">
              <a class="title">homebrew install</a>
                <div class="status">发布于：2020/4/13 | 阅读：1.000 | homebrew</div>
                <div class="contant">
                  安装失败报：
                  Error: The following directories are not writable by your user:
                  /usr/local/share/man/man8
                  You should change the ownership of these directories to your user.
                  sudo chown -R $(whoami) /usr/local/share/man/man8
                  这是权限问题导致的，解决方式是收回权限，就可以正常的安装下载：
                  sudo chown -R `whoami`:admin /usr/local/bin
                  sudo chown -R `whoami`:admin /usr/local/share</div>
            </div>
            <div class="item">
              <a class="title">NaN</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | js</div>
                <div class="contant">
                  NaN狠起来连自己都不认
                </div>
            </div>
            <div class="item">
              <a class="title">obj.hasOwnProperty、in、for...in、Object.keys(obj)、Object.getPropertyNames(obj)</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | js</div>
                <div class="contant">
                  obj.hasOwnProperty('属性'): obj中是否有此属性
                  in 属性 in obj: 整个prototype链中是否存在属性
                  for...in: 遍历prototype链可枚举属性
                  Object.keys(obj): 只查obj的可枚举属性 返回数组
                  Object.getPropertyNames(obj): 只查obj的所有属性
                </div>
            </div>
            <div class="item">
              <a class="title">new polyfill</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | new</div>
                <div class="contant">
                  function new (Fn) {
                    const o = Object.create(Fn.prototype)
                    const r = Fn.call(o)
                    return typeof r === 'object' && r !== null ? r : o
                  }
                </div>
            </div>
            <div class="item">
              <a class="title">Object.create() polyfill</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | js</div>
                <div class="contant">
                  简单：
                  if (!Object.create) {
                    Object.create = function (o) {
                      function Fn() {}
                      Fn.prototype = o
                      return new Fn()
                    }
                  }
                </div>
            </div>
            <div class="item">
              <a class="title">同源策略 跨域</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | js 同源策略 跨域</div>
                <div class="contant">
                  <p>
                   同源策略限制从一个源获取的文档或脚本如何与另一个源的资源进行交互.这是一个用于隔离潜在的恶意文件的安全机制.
                  </p>
                  <p>
                    相同协议、域名、端口就是同源
                  </p>
                  <p>
                    限制: cookie localstorage indexdb无法获取;dom无法操作;ajax不能请求
                  </p>
                  <div>
                    <h6>如何跨域</h6>
                    <p>
                      <ul>
                        <li>jsonp</li>
                        <li>cors</li>
                        <li></li>
                      </ul>
                    </p>
                  </div>
                </div>
            </div>
            <!-- <div class="item">
              <a class="title">jsonp</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | js</div>
                <div class="contant">
                  jsonp只适用于get方法
                </div>
            </div> -->
            <div class="item">
              <a class="title">parseInt</a>
                <div class="status">发布于：2020/5/30 | 阅读：1.000 | js</div>
                <div class="contant">
                  parseInt(string, radix)
                  string以radix来解析 省略或值为0 string将作为十进制解析或以string自身判断
                  radix的作用是 判断string的数字身份
                  最终返回的是十进制数
                </div>
            </div>
            <div class="item">
              <a class="title">围棋 go</a>
                <div class="status">发布于：2020/8/25 | 阅读：1.000 | 围棋</div>
                <div class="contant">
                  围棋的奥秘
                  <img @click="amplifier" src="../assets/image/weiqi.jpeg" alt="">
                </div>
            </div>
            <div class="item">
              <a class="title">ASCll、Unicode、utf-8</a>
                <div class="status">发布于：2020/8/31 | 阅读：1.000 | 编码</div>
                <div class="contant">
                  一个字节8bit
                  美国人发明计算机：大小写英文字母、符号、数字等127个字符被编到ASCll编码表里 每个字符用一个字节表示
                  其他各国需要用计算机，将各国编码表整合到一起：Unicode编码表 通常用两个字节表示，偏僻字4个字节 英文字母前补0
                  代码里通常英文字母较多，如果用Unicode编码，原本一个字节就可以表示的英文字母扩展成两个占用空间更多 所以出现
                  可变长编码utf-8编码表：英文字母一个字节，汉字通常3个字节，生僻字4-6个字节
                  学习于<a href="https://www.liaoxuefeng.com/wiki/1016959663602400/1017075323632896">liaoxuefeng</a>
                </div>
            </div>
            <div class="item">
              <a class="title">char->code、code->char</a>
                <div class="status">发布于：2020/8/31 | 阅读：1.000 | 围棋</div>
                <div class="contant">
                  JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。
                  String.fromCharCode(code) | char.charCodeAt().toString(16)//默认返回十进制
                  String.fromCodePoint(codePoint) | char.codePointAt().toString(16)//默认返回十进制
                </div>
            </div>
          </div>
          <div v-show="bigImgShow" class="imgAmplifier">
            <h6 style="overflow:hidden;height:20px">
              <span @click="closeBigImg" class="closeBigImg">X</span>
            </h6>
            <img @click="closeBigImg" width="100%" :src="imgSrc" alt="">
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Item from './learningItem/item'
import JS from '../components/JavaScript5/JavaScript5'
import ComputerNet from '../components/ComputerNet/ComputerNet'
import VueLearing from '../components/vueLearning/VueLearing.vue'
import PhotoShop from '../components/PhotoShop/photoshop.vue'
let i = 0
function nobounceFn (fn, delay) {
      let timer = null
      // eslint-disable-next-line no-console
      console.log(8)
      i++
      return function () {
        // eslint-disable-next-line no-console
        console.log(i)
        clearTimeout(timer)
        timer = setTimeout (
          fn
        , delay)
      }
    }
export default {
  name: 'leaning',
  components: {
    Item,
    JS,
    ComputerNet,
    VueLearing,
    PhotoShop
  },
  data () {
    return {
      showOrhide: true,
      isShow: false,
      originCode: false,
      itemTitle: '',
      itemTag: '',
      itemContent: '',
      showClass: {position:'fixed',width:'52%',background:'#777',padding:'10px 10px 24px 10px','z-index:':100000},
      devicePixelRatio: 0,
      layoutViewport: 0,
      visualViewport: 0,
      consolelog: window.console.log,
      timer: null,
      imgSrc: null,
      bigImgShow: false
    }
  },
  created() {
    this.$refs.form.onsubmit = function (e) {
      e.preventDefault()
    // eslint-disable-next-line no-console
console.log(9)
    return false
  }
    this.devicePixelRatio = window.devicePixelRatio
    this.layoutViewport = document.documentElement.clientWidth
    this.visualViewport = window.innerWidth
  },
  mounted () {
    // eslint-disable-next-line no-console
    document.getElementById('btn').onclick = nobounceFn(function () { console.log(9) }, 1000)
    // eslint-disable-next-line no-console
    console.log(document.getElementById('btn').coclick)
  },
  methods: {
    amplifier (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      this.imgSrc = e.target.currentSrc
      this.bigImgShow = !this.bigImgShow
    },
    closeBigImg () {
      this.bigImgShow = !this.bigImgShow
    },
    renderHtml (val, render) {
      // eslint-disable-next-line no-console
      this.itemContent = render
      this.isShow = true
    },
    editOrhide () {
      this.showOrhide = !this.showOrhide
      if (!this.showOrhide) {
        this.showClass = {position:'fixed',right:0,background:'#777',padding:'10px 10px 24px 10px','z-index:':100000}
      } else {
        this.showClass = {position:'fixed',width:'52%',background:'#777',padding:'10px 10px 24px 10px','z-index:':100000}
      }
    },
    nobounce (fn, delay) {
      // eslint-disable-next-line no-console
      console.log(8)
      clearTimeout(this.timer)
      this.timer = setTimeout (
        fn
      , delay)
    }
  }

}
</script>
<style>
input:valid{
  border:1px solid green
}
input:invalid{
  border:1px solid red
}
input{
  border:1px solid blue
}
.leaning{
    /* height: 100vh; */
    overflow: hidden;
    background:#454545;
    line-height: 1.7;
}
a:hover{
    text-decoration:none;
}
a,.leaning{
    color:#eee;
}
.side_bar{
    position: fixed;
    /* float:left; */
    width:20%
}
.side_bar>*{
    padding:10px 15px
}
.side_bar .nav{display:block}
.side_bar .nav a{
    font-weight: 700;
}
.side_bar .nav a,
.side_bar .tag_list a{
    display:block;
    padding:5px;
    color:#777;
    transition: color 200ms;
}
.side_bar .nav a:hover,
.side_bar .tag_list a:hover{
    color:#ccc;
}
.main{
    float:right;
    width:80%;
    color:#454545;
}
.leaning_header .logo{
    line-height: 1;
    border:5px solid #eee;
    padding: 10px 20px;
    font-size: 30px;
    display:inline-block;
    margin-bottom:10px;
}
.artical_list{
    margin-right: 30%;
    background:#fff;
    padding:20px 30px;
    box-shadow: 0 0 3px 2px rgba(0,0,0,0.2)
}
.artical_list .item>*{
    margin:10px 0;
}
.artical_list .item{
    margin-bottom: 25px;
}

.artical_list .item .title{
    color:#454545;
    font-size: 22px;
    font-weight: 700;
}
.artical_list .item .status{
    font-size: 13px;
    color:#ccc;
}
.editPlantMarkdown {
  z-index: 9;
}
.centerItemWrap {
  width:500px;
  height:500px;
  background:grey;
  margin-bottom: 20px
} 
.centerItemBox {
  width:200px;
  height:200px;
  background:pink;
}
.centerItemBox::before {
  content: 'width:200px;height:200px;position:absolute;'
}
.centerItemWrap::before {
  content: 'width:500px;height:500px;position:relative'
}
.centerItemWrap.alignVerticalCenter {
  font-size: 0;
  text-align: center;
}
.centerItemWrap.alignVerticalCenter::before {
  content: '';
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
.imgAmplifier {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #777;
  padding: 80px;
  background: rgba(100,100,100,0.8);
  z-index: 99;
  overflow: auto;
}
.closeBigImg {
  position: absolute;
  right: 20px;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
}
</style>