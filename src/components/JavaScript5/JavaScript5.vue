<template>
  <div class="body" for="html-export">
    <button @click="pusharr"> push arr </button>
    <div class="mume markdown-preview  ">
    <h1 style="text-align:center">JavaScript5</h1>
&#x672C;&#x4EBA;&#x4E8E;2016&#x5E74;&#x56FD;&#x5E86;&#x671F;&#x95F4;&#xFF0C;&#x5728;&#x96BE;&#x4EE5;&#x6291;&#x5236;&#x8BBE;&#x8BA1;&#x7F51;&#x9875;&#x7684;&#x70ED;&#x60C5;&#x9A71;&#x4F7F;&#x4E0B;&#x8D70;&#x8FDB;&#x4E86;&#x8FBE;&#x5185;&#x57F9;&#x8BAD;&#x673A;&#x6784;&#xFF0C;&#x5C31;&#x6B64;&#x62C9;&#x5F00;&#x4E86;&#x6211;&#x7F16;&#x7A0B;&#x4E4B;&#x8DEF;&#x7684;&#x65B0;&#x7BC7;&#x7AE0;&#xFF01;
---------------*&#x6574;&#x7406;&#x4E8E;&#x516C;&#x5143;2020&#x5E74;2&#x6708;1&#x65E5;&#x8FDE;&#x4E91;&#x6E2F;&#xFF0C;&#x65B0;&#x578B;&#x51A0;&#x72B6;&#x80BA;&#x708E;&#x8086;&#x8650;&#x4E4B;&#x65F6;&#x3002;
<h4 class="mume-header" id="%E4%BB%80%E4%B9%88%E6%98%AFjavascript%E8%AF%AD%E8%A8%80">&#x4EC0;&#x4E48;&#x662F;JavaScript&#x8BED;&#x8A00;&#xFF1F;</h4>

<pre class="language-text">JavaScript&#x662F;&#x8F7B;&#x91CF;&#x7684;&#x811A;&#x672C;&#x8BED;&#x8A00;&#x3002;
</pre>
<blockquote>
<p>&#x811A;&#x672C;&#x8BED;&#x8A00;&#xFF1A;&#x4E0D;&#x5177;&#x5907;&#x5F00;&#x53D1;&#x64CD;&#x4F5C;&#x7CFB;&#x7EDF;&#x7684;&#x80FD;&#x529B;&#xFF0C;&#x800C;&#x662F;&#x53EA;&#x7528;&#x6765;&#x7F16;&#x5199;&#x63A7;&#x5236;&#x5176;&#x4ED6;&#x5927;&#x578B;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#xFF08;&#x5982;&#x6D4F;&#x89C8;&#x5668;&#xFF09;&#x7684;&#x811A;&#x672C;&#x3002;</p>
</blockquote>
<pre class="language-text">JavaScript&#x662F;&#x5D4C;&#x5165;&#x5F0F;&#x8BED;&#x8A00;&#xFF0C;&#x672C;&#x8EAB;&#x6838;&#x5FC3;&#x8BED;&#x6CD5;&#x4E0D;&#x591A;&#xFF0C;&#x53EA;&#x7528;&#x6765;&#x505A;&#x4E00;&#x4E9B;&#x6570;&#x5B66;&#x548C;&#x903B;&#x8F91;&#x8FD0;&#x7B97;&#x3002;&#x672C;&#x8EAB;&#x4E0D;&#x63D0;&#x4F9B;&#x4EFB;&#x4F55;&#x4E0E;I/O&#x76F8;&#x5173;&#x7684;API&#xFF0C;&#x90FD;&#x662F;&#x9760;&#x5BBF;&#x4E3B;&#x73AF;&#x5883;&#x63D0;&#x4F9B;&#xFF0C;&#x6240;&#x4EE5;&#x5B83;&#x9002;&#x5408;&#x5D4C;&#x5165;&#x5230;&#x66F4;&#x5927;&#x7684;&#x5E94;&#x7528;&#x7A0B;&#x5E8F;&#x4E2D;&#xFF0C;&#x53BB;&#x8C03;&#x7528;&#x5BBF;&#x4E3B;&#x73AF;&#x5883;&#x63D0;&#x4F9B;&#x7684;&#x5E95;&#x5C42;API&#x3002;
</pre>
<blockquote>
<ul>
<li>&#x6838;&#x5FC3;&#x8BED;&#x6CD5;&#xFF1A;<br>
1.&#x57FA;&#x672C;&#x7684;&#x8BED;&#x6CD5;&#x6784;&#x9020;&#xFF08;&#x64CD;&#x4F5C;&#x7B26;&#xFF0C;&#x63A7;&#x5236;&#x7ED3;&#x6784;&#xFF0C;&#x8BED;&#x53E5;&#xFF09;<br>
2.&#x6807;&#x51C6;&#x5E93;&#xFF08;&#x4E00;&#x7CFB;&#x5217;&#x5177;&#x6709;&#x5404;&#x79CD;&#x529F;&#x80FD;&#x7684;&#x5BF9;&#x8C61;&#xFF1A;Math&#xFF0C;Array&#xFF0C;Date...&#xFF09;</li>
<li>&#x5BBF;&#x4E3B;&#x73AF;&#x5883;&#xFF08;&#x5185;&#x7F6E;&#x4E86;JavaScript&#x5F15;&#x64CE;&#xFF09;&#xFF1A;<br>
1.&#x6D4F;&#x89C8;&#x5668;&#x73AF;&#x5883;&#x3002;&#xFF08;&#x6D4F;&#x89C8;&#x5668;&#x63A7;&#x5236;&#x7C7B;&#xFF1A;&#x64CD;&#x4F5C;&#x6D4F;&#x89C8;&#x5668;&#x3002;DOM&#x7C7B;&#xFF1A;&#x64CD;&#x4F5C;&#x7F51;&#x9875;&#x7684;&#x5404;&#x79CD;&#x5143;&#x7D20;&#x3002;Web&#x7C7B;&#xFF1A;&#x5B9E;&#x73B0;&#x4E92;&#x8054;&#x7F51;&#x7684;&#x5404;&#x79CD;&#x529F;&#x80FD;&#xFF09;<br>
2.&#x670D;&#x52A1;&#x5668;&#x73AF;&#x5883;&#xFF0C;&#x4E5F;&#x5C31;&#x662F;Node&#x9879;&#x76EE;&#xFF08;&#x6587;&#x4EF6;&#x64CD;&#x4F5C;API&#xFF0C;&#x7F51;&#x7EDC;&#x901A;&#x4FE1;API...&#xFF09;</li>
</ul>
</blockquote>
<pre class="language-text">&#x4ECE;&#x8BED;&#x6CD5;&#x89D2;&#x5EA6;&#xFF0C;JavaScript&#x662F;&#x201C;&#x5BF9;&#x8C61;&#x6A21;&#x578B;&#x201D;&#x8BED;&#x8A00;&#x3002;&#x5404;&#x79CD;&#x5BBF;&#x4E3B;&#x73AF;&#x5883;&#x901A;&#x8FC7;&#x8FD9;&#x79CD;&#x6A21;&#x578B;&#xFF0C;&#x63CF;&#x8FF0;&#x81EA;&#x5DF1;&#x7684;&#x529F;&#x80FD;&#x548C;&#x64CD;&#x4F5C;&#x63A5;&#x53E3;&#xFF0C;&#x4ECE;&#x800C;&#x901A;&#x8FC7;JavaScript&#x63A7;&#x5236;&#x8FD9;&#x4E9B;&#x529F;&#x80FD;&#x3002;
&#x4F46;&#x662F;JavaScript&#x5E76;&#x4E0D;&#x662F;&#x7EAF;&#x7CB9;&#x7684;&#x9762;&#x5411;&#x5BF9;&#x8C61;&#x8BED;&#x8A00;&#xFF0C;&#x8FD8;&#x652F;&#x6301;&#x5176;&#x4ED6;&#x7F16;&#x7A0B;&#x8303;&#x5F0F;&#xFF08;&#x5982;&#x51FD;&#x6570;&#x5F0F;&#x7F16;&#x7A0B;&#xFF09;&#xFF0C;&#x8FD9;&#x5BFC;&#x81F4;&#x540C;&#x4E00;&#x4E2A;&#x95EE;&#x9898;&#xFF0C;&#x53EF;&#x4EE5;&#x6709;&#x4E0D;&#x540C;&#x7684;&#x5904;&#x7406;&#x65B9;&#x5F0F;&#x3002;~
</pre>
<hr>
<h4 class="mume-header" id="javascript%E5%BC%95%E6%93%8E%E8%BF%90%E8%A1%8C%E4%BB%A3%E7%A0%81">JavaScript&#x5F15;&#x64CE;&#x8FD0;&#x884C;&#x4EE3;&#x7801;</h4>

<ul>
<li>
<h5>&#x89E3;&#x91CA;&#x4E0E;&#x7F16;&#x8BD1;</h5>
</li>
</ul>
<p>&#x4E00;&#x4E2A;&#x7B80;&#x5355;&#x7684;js&#x5F15;&#x64CE;&#xFF1A;<br>
JavaScript&#x4EE3;&#x7801;&#x5757; =&gt; &#x8BCD;&#x6CD5;&#x5206;&#x6790;&#x5668;--&#x539F;&#x5B50;&#x5355;&#x5143; =&gt; &#x89E3;&#x6790;&#x5668;--&#x8BED;&#x6CD5;&#x6811; =&gt; &#x7FFB;&#x8BD1;&#x5668;--&#x5B57;&#x8282;&#x7801; =&gt; &#x89E3;&#x91CA;&#x5668;--&#x673A;&#x5668;&#x7801;</p>
<p>&#x5728;&#x7F16;&#x7A0B;&#x4E2D;&#x6709;&#x4E24;&#x79CD;&#x65B9;&#x5F0F;&#x5C06;&#x4EE3;&#x7801;&#x7FFB;&#x8BD1;&#x6210;&#x673A;&#x5668;&#x8BED;&#x8A00;:<em>&#x89E3;&#x91CA;&#x5668;&#x3001;&#x7F16;&#x8BD1;&#x5668;</em><br>
&#x8BE6;&#x7EC6;&#x53C2;&#x89C1;<a href="https://blog.csdn.net/chenqiuge1984/article/details/80128715">WebAssembly</a></p>
<blockquote>
<p>&#x89E3;&#x91CA;&#x5668;&#xFF1A;&#x7FFB;&#x8BD1;&#x7684;&#x8FC7;&#x7A0B;&#x662F;&#x4E00;&#x884C;&#x4E00;&#x884C;&#x8FB9;&#x89E3;&#x91CA;&#x8FB9;&#x6267;&#x884C;&#xFF0C;&#x542F;&#x52A8;&#x5FEB;&#x901F;&#xFF0C;&#x968F;&#x5373;&#x770B;&#x5230;&#x7ED3;&#x679C;&#xFF0C;&#x5BF9;&#x4E8E;&#x5F00;&#x53D1;&#x8005;&#x6765;&#x8BF4;&#x5F88;&#x53CA;&#x65F6;&#x3002;<br>
&#x4F46;&#x662F;&#x540C;&#x65F6;&#x5BFC;&#x81F4;&#x6CA1;&#x6709;&#x8DB3;&#x591F;&#x65F6;&#x95F4;&#x6765;&#x8FDB;&#x884C;&#x4EE3;&#x7801;&#x7684;&#x4F18;&#x5316;&#xFF0C;&#x4E14;&#x5F53;&#x9047;&#x5230;&#x5FAA;&#x73AF;&#x8BED;&#x53E5;&#x65F6;&#xFF0C;&#x51E0;&#x4E4E;&#x76F8;&#x540C;&#x7684;&#x4EE3;&#x7801;&#x8981;&#x91CD;&#x590D;&#x76F8;&#x540C;&#x7684;&#x8BCD;&#x6CD5;&#x5206;&#x6790;&#x89E3;&#x6790;&#x7FFB;&#x8BD1;&#x89E3;&#x91CA;&#x6210;&#x673A;&#x5668;&#x7801;<br>
<img src="./imgs/explain.png" alt="explain"></p>
</blockquote>
<blockquote>
<p>&#x7F16;&#x8BD1;&#x5668;&#xFF1A;&#x5728;&#x6267;&#x884C;&#x524D;&#x82B1;&#x4E00;&#x4E9B;&#x65F6;&#x95F4;&#x7FFB;&#x8BD1;&#x6210;&#x4E2D;&#x95F4;&#x4EE3;&#x7801;&#xFF0C;&#x8FD9;&#x4E2A;&#x8FC7;&#x7A0B;&#x8FDB;&#x884C;&#x4E86;&#x5F88;&#x597D;&#x7684;&#x4EE3;&#x7801;&#x4F18;&#x5316;&#xFF0C;&#x7136;&#x540E;&#x653E;&#x5230;&#x5E26;&#x6709;&#x865A;&#x62DF;&#x673A;&#x7684;&#x5E73;&#x53F0;&#x4E0A;&#x6267;&#x884C;<br>
<img src="./imgs/compile.png" alt="compile"><br>
<strong>&#x53D1;&#x5C55;</strong>&#xFF1A;<em>WebAssembly&#x7684;&#x51FA;&#x73B0;</em><br>
WebAssembly&#x4E0E;JavaScript&#x6BD4;&#x8F83;</p>
</blockquote>
<p>|&#x5404;&#x9879;|WebAssembly|JavaScript|</p>
<p>|&#x4F20;&#x8F93;|&#x5FEB;|&#x6162;|</p>
<hr>
<h4 class="mume-header" id="%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84javascript">&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x7684;javascript</h4>

<p>&#x8BE6;&#x7EC6;&#x53C2;&#x89C1;<a href="https://wangdoc.com/javascript/bom/engine.html#%E4%BB%A3%E7%A0%81%E5%B5%8C%E5%85%A5%E7%BD%91%E9%A1%B5%E7%9A%84%E6%96%B9%E6%B3%95">&#x962E;&#x4E00;&#x5CF0;js</a></p>
<pre class="language-text">&#x6B63;&#x5E38;&#x7684;&#x7F51;&#x9875;&#x52A0;&#x8F7D;&#x8FC7;&#x7A0B;&#xFF1A;
1.&#x6D4F;&#x89C8;&#x5668;&#x4E00;&#x8FB9;&#x4E0B;&#x8F7D;HTML&#x7F51;&#x9875;&#xFF0C;&#x4E00;&#x8FB9;&#x5F00;&#x59CB;&#x89E3;&#x6790;
2.&#x89E3;&#x6790;&#x8FC7;&#x7A0B;&#x53D1;&#x73B0;&lt;script&gt;&#x5143;&#x7D20;&#xFF0C;&#x6682;&#x505C;&#x89E3;&#x6790;&#xFF0C;JavaScript&#x5F15;&#x64CE;&#x638C;&#x63A7;&#x7F51;&#x9875;&#x6E32;&#x67D3;
3.&#x4E0B;&#x8F7D;&#x5916;&#x90E8;&#x811A;&#x672C;&#xFF08;&#x591A;&#x4E2A;&lt;script&gt;&#x5E76;&#x884C;&#x4E0B;&#x8F7D;&#x4F46;&#x6309;&#x5E8F;&#x6267;&#x884C;&#xFF09;/&#x76F4;&#x63A5;&#x6267;&#x884C;&#x5185;&#x7F6E;&#x811A;&#x672C;
4.JavaScript&#x5F15;&#x64CE;&#x6267;&#x884C;&#x5B8C;&#x6BD5;&#xFF0C;&#x6E32;&#x67D3;&#x5F15;&#x64CE;&#x638C;&#x63A7;&#xFF0C;&#x7EE7;&#x7EED;&#x89E3;&#x6790;&#x7F51;&#x9875;
</pre>
<h5 class="mume-header" id="%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BB%84%E6%88%90">&#x6D4F;&#x89C8;&#x5668;&#x7EC4;&#x6210;&#xFF1A;</h5>

<ul>
<li>&#x6838;&#x5FC3;&#x90E8;&#x5206;&#xFF1A;<em>&#x6E32;&#x67D3;&#x5F15;&#x64CE;</em>&#x3001;<em>JavaScript&#x89E3;&#x91CA;&#x5668;&#xFF08;JavaScript&#x5F15;&#x64CE;&#xFF09;</em></li>
</ul>
<blockquote>
<p><strong>&#x6E32;&#x67D3;&#x5F15;&#x64CE;</strong>&#xFF1A;&#x5904;&#x7406;&#x9875;&#x9762;&#x5206;&#x56DB;&#x6B65;&#xFF0C;&#x5E76;&#x975E;&#x4E25;&#x683C;&#x6309;&#x5E8F;<br>
1.&#x89E3;&#x6790;&#x4EE3;&#x7801;&#xFF1A;HTML-&gt;DOM&#xFF0C;CSS-&gt;CSSOM<br>
2.&#x5BF9;&#x8C61;&#x5408;&#x6210;&#xFF1A;&#x5C06;DOM&#x548C;CSSOM&#x5408;&#x6210;&#x4E00;&#x9897;&#x6E32;&#x67D3;&#x6811;<br>
3.&#x5E03;&#x5C40;&#xFF1A;&#x8BA1;&#x7B97;&#x51FA;&#x6E32;&#x67D3;&#x6811;&#x7684;&#x5E03;&#x5C40;---<em>&#x5E03;&#x5C40;&#x6D41;</em><br>
4.&#x7ED8;&#x5236;&#xFF1A;&#x6E32;&#x67D3;&#x6811;&#x7ED8;&#x5236;&#x5230;&#x5C4F;&#x5E55;<br>
<em>&#x811A;&#x672C;&#x64CD;&#x4F5C;&#x548C;&#x6837;&#x5F0F;&#x8868;&#x64CD;&#x4F5C;&#x4F1A;&#x5BFC;&#x81F4;&#x91CD;&#x6D41;&#x548C;&#x91CD;&#x7ED8;</em><br>
<strong>JavaScript&#x5F15;&#x64CE;</strong>&#xFF08;<em>&#x53C2;&#x7167;&#x4E0A;&#x65B9;JavaScript&#x5F15;&#x64CE;&#x8FD0;&#x884C;&#x4EE3;&#x7801;</em>&#xFF09;<br>
JavaScript&#x662F;&#x4E00;&#x79CD;&#x89E3;&#x91CA;&#x578B;&#x8BED;&#x8A00;&#xFF0C;&#x4E0D;&#x9700;&#x8981;&#x7F16;&#x8BD1;&#xFF0C;&#x7531;&#x89E3;&#x91CA;&#x5668;&#x5B9E;&#x65F6;&#x6267;&#x884C;&#x3002;<br>
<em>&#x597D;&#x5904;</em>&#xFF1A;&#x8FD0;&#x884C;&#x548C;&#x4FEE;&#x6539;&#x65B9;&#x4FBF;&#xFF0C;&#x5237;&#x65B0;&#x9875;&#x9762;&#x5C31;&#x91CD;&#x65B0;&#x89E3;&#x91CA;<br>
<em>&#x7F3A;&#x70B9;</em>&#xFF1A;&#x6BCF;&#x6B21;&#x8FD0;&#x884C;&#x90FD;&#x8981;&#x8C03;&#x7528;&#x89E3;&#x91CA;&#x5668; &#xFF0C;&#x7CFB;&#x7EDF;&#x5F00;&#x9500;&#x8F83;&#x5927;&#xFF0C;&#x8FD0;&#x884C;&#x901F;&#x5EA6;&#x6162;&#x4E8E;&#x7F16;&#x8BD1;&#x578B;&#x8BED;&#x8A00;&#x3002;<br>
<strong>Just-in-time&#x7F16;&#x8BD1;&#x5668;</strong><br>
&#x4E3A;&#x4E86;&#x89E3;&#x51B3;&#x89E3;&#x91CA;&#x5668;&#x7684;&#x4F4E;&#x6548;&#x95EE;&#x9898;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x5F15;&#x5165;&#x4E86;jim&#x7F16;&#x8BD1;&#x5668;<br>
&#x4E0D;&#x540C;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x5B9E;&#x73B0;&#x8FD9;&#x4E00;&#x529F;&#x80FD;&#x7684;&#x65B9;&#x5F0F;&#x4E0D;&#x540C;&#xFF0C;&#x57FA;&#x672C;&#x601D;&#x60F3;&#x662F;&#x4E00;&#x81F4;&#x7684;</p>
</blockquote>
<ul>
<li>&#x6D4F;&#x89C8;&#x5668;&#x7684;&#x4E3B;&#x8981;&#x7EC4;&#x4EF6;&#xFF1A;js&#x5F15;&#x64CE;&#x3001;&#x8C03;&#x7528;&#x5806;&#x6808;&#x3001;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x3001;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x3001;Web API</li>
</ul>
<blockquote>
<p>Web API&#xFF1A;&#x5305;&#x542B;setTimeout&#x3001;setInterval&#x3001;Promise&#x3001;DOM<br>
Q&#xFF1A;<strong>JavaScript&#x5982;&#x4F55;&#x5355;&#x7EBF;&#x7A0B;&#x5B9E;&#x73B0;&#x5F02;&#x6B65;&#xFF1F;</strong><br>
JavaScript&#x672C;&#x8EAB;&#x662F;&#x5355;&#x7EBF;&#x7A0B;&#x7684;&#xFF0C;&#x5979;&#x662F;&#x4F9D;&#x9760;&#x6D4F;&#x89C8;&#x5668;&#x5B8C;&#x6210;&#x7684;&#x5F02;&#x6B65;&#x64CD;&#x4F5C;</p>
</blockquote>
<ol>
<li>&#x4E3B;&#x7EBF;&#x7A0B; &#x6267;&#x884C;js&#x4E2D;&#x6240;&#x6709;&#x7684;&#x4EE3;&#x7801;</li>
<li>&#x4E3B;&#x7EBF;&#x7A0B; &#x5728;&#x6267;&#x884C;&#x8FC7;&#x7A0B;&#x4E2D;&#x53D1;&#x73B0;&#x4E86;&#x9700;&#x8981;&#x5F02;&#x6B65;&#x7684;&#x4EFB;&#x52A1;&#x6254;&#x7ED9;&#x6D4F;&#x89C8;&#x5668;&#xFF08;&#x6D4F;&#x89C8;&#x5668;&#x521B;&#x5EFA;&#x591A;&#x4E2A;&#x7EBF;&#x7A0B;&#x6267;&#x884C;&#xFF09;&#xFF0C;&#x5E76;&#x5728;callback queue&#x4E2D;&#x521B;&#x5EFA;&#x5BF9;&#x5E94;&#x7684;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#xFF08;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5BF9;&#x8C61;&#xFF0C;&#x5305;&#x542B;&#x8BE5;&#x51FD;&#x6570;&#x662F;&#x5426;&#x6267;&#x884C;&#x5B8C;&#x6BD5;&#x7B49;&#xFF09;</li>
<li>&#x4E3B;&#x7EBF;&#x7A0B; &#x5DF2;&#x7ECF;&#x6267;&#x884C;&#x5B8C;&#x6BD5;&#x6240;&#x6709;&#x540C;&#x6B65;&#x4EE3;&#x7801;&#x3002;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x5F00;&#x59CB;&#x76D1;&#x542C;callback queue&#xFF0C;&#x4E00;&#x65E6;&#x6D4F;&#x89C8;&#x5668;&#x4E2D;&#x67D0;&#x4E2A;&#x7EBF;&#x7A0B;&#x4EFB;&#x52A1;&#x5B8C;&#x6210;&#xFF0C;&#x5C06;&#x4F1A;&#xFF0C;&#x6539;&#x53D8;&#x56DE;&#x8C03;&#x51FD;&#x6570;&#x7684;&#x72B6;&#x6001;&#x3002;&#x4E3B;&#x7EBF;&#x7A0B;&#x67E5;&#x770B;&#x5230;&#x67D0;&#x4E2A;&#x51FD;&#x6570;&#x7684;&#x72B6;&#x6001;&#x4E3A;&#x5DF2;&#x5B8C;&#x6210;&#xFF0C;&#x5C31;&#x4F1A;&#x6267;&#x884C;&#x8BE5;&#x51FD;&#x6570;&#x3002;<br>
<strong>&#x53D1;&#x5C55;</strong>&#xFF1A;<em>&#x4E3A;&#x4E86;&#x5229;&#x7528;&#x591A;&#x6838;CPU&#x7684;&#x8BA1;&#x7B97;&#x80FD;&#x529B;&#xFF0C;HTML5&#x63D0;&#x51FA;Web Worker&#x6807;&#x51C6;&#xFF0C;&#x5141;&#x8BB8;JavaScript&#x811A;&#x672C;&#x521B;&#x5EFA;&#x591A;&#x4E2A;&#x7EBF;&#x7A0B;&#xFF0C;&#x4F46;&#x662F;&#x5B50;&#x7EBF;&#x7A0B;&#x5B8C;&#x5168;&#x53D7;&#x4E3B;&#x7EBF;&#x7A0B;&#x63A7;&#x5236;&#xFF0C;&#x4E14;&#x4E0D;&#x5F97;&#x64CD;&#x4F5C;DOM&#xFF0C;&#x6240;&#x4EE5;&#xFF0C;&#x8FD9;&#x4E2A;&#x6807;&#x51C6;&#x6CA1;&#x6709;&#x6539;&#x53D8;JavaScript&#x5355;&#x7EBF;&#x7A0B;&#x7684;&#x672C;&#x8D28;</em></li>
</ol>
<p><img src="./imgs/browser_run_js.jpg" alt="js&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x53EF;&#x89C6;&#x5316;"></p>
<ul>
<li>JavaScript&#x8C03;&#x7528;&#x6808;&#x662F;&#x540E;&#x8FDB;&#x5148;&#x51FA;&#x7684;&#xFF08;LIFO&#xFF09;&#xFF0C;&#x5F15;&#x64CE;&#x6BCF;&#x6B21;&#x4ECE;&#x6808;&#x4E2D;&#x53D6;&#x51FA;&#x4E00;&#x4E2A;&#x51FD;&#x6570;&#xFF0C;&#x4ECE;&#x4E0A;&#x5230;&#x4E0B;&#x6267;&#x884C;&#xFF0C;&#x5F53;&#x6267;&#x884C;&#x5230;&#x4E00;&#x4E9B;&#x5F02;&#x6B65;&#x4EE3;&#x7801;&#x5982;setTimeout&#xFF0C;&#x5C31;&#x628A;&#x5B83;&#x4EA4;&#x7ED9;Web API&#x3002;&#x4E8B;&#x4EF6;&#x89E6;&#x53D1;&#x4E86;callback&#x5C31;&#x4F1A;&#x88AB;&#x73AF;&#x5883;&#x53D1;&#x9001;&#x5230;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#xFF08;&#x548C;&#x4F60;&#x7684;&#x7A0B;&#x5E8F;&#x4E0D;&#x76F4;&#x63A5;&#x76F8;&#x5173;&#x7684;&#x5176;&#x4ED6;&#x4E8B;&#x4EF6;&#x4E5F;&#x4F1A;&#x63D2;&#x5165;&#x5230;&#x961F;&#x5217;&#x4E2D;&#xFF09;&#x3002;</li>
<li>&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x4E0D;&#x65AD;&#x76D1;&#x89C6;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#xFF0C;&#x8C03;&#x7528;&#x6808;&#x4E00;&#x65E6;&#x4E3A;&#x7A7A;&#xFF0C;&#x5C31;&#x4F1A;&#x5FAA;&#x73AF;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x91CC;&#x7684;&#x56DE;&#x8C03;&#x6309;&#x5E8F;&#x628A;&#x6BCF;&#x4E00;&#x4E2A;tick&#xFF08;&#x4E00;&#x4E2A;&#x7A0B;&#x5E8F;&#x5C31;&#x662F;&#x4E00;&#x4E2A;&#x5927;tick&#xFF09;&#x653E;&#x5230;&#x5806;&#x6808;&#x4E2D;&#x5904;&#x7406;&#x3002;</li>
<li>task queue&#x53EF;&#x6709;&#x591A;&#x4E2A;&#xFF0C;&#x6D4F;&#x89C8;&#x5668;&#x9009;&#x62E9;&#x4E00;&#x4E2A;&#x961F;&#x5217;&#xFF0C;&#x5FAA;&#x73AF;&#x5176;&#x4E2D;&#x7684;&#x56DE;&#x8C03;&#xFF0C;&#x5168;&#x90E8;&#x5904;&#x7406;&#x5B8C;&#x518D;&#x9009;&#x62E9;&#x4E0B;&#x4E00;&#x4E2A;&#x961F;&#x5217;&#xFF1A;<em>&#x6240;&#x4EE5;&#x867D;&#x7136;&#x8BF4;ajax&#x662F;&#x5F02;&#x6B65;&#xFF0C;&#x4E3B;&#x7EBF;&#x7A0B;&#x5904;&#x7406;&#x8FD4;&#x56DE;&#x7684;&#x6570;&#x636E;&#x65F6;&#xFF0C;&#x5176;&#x4ED6;&#x5F02;&#x6B65;&#x9700;&#x8981;&#x7B49;&#x5F85;&#x5982;&#x9875;&#x9762;&#x6EDA;&#x52A8;&#xFF0C;&#x6B64;&#x65F6;&#x5982;&#x679C;&#x6570;&#x636E;&#x6D41;&#x592A;&#x5927;&#xFF0C;&#x9875;&#x9762;&#x5C31;&#x5361;&#x4F4F;&#xFF0C;&#x65E0;&#x6CD5;&#x5904;&#x7406;&#x5176;&#x4ED6;&#x4E8B;&#x4EF6;&#x3002;&#x7531;&#x6B64;&#x300A;&#x4F60;&#x4E0D;&#x77E5;&#x9053;&#x7684;JavaScript&#x4E2D;&#x5377;p154&#x300B;&#x4E2D;&#x6709;&#x5E76;&#x53D1;&#x534F;&#x4F5C;&#x4E00;&#x8BF4;&#xFF0C;&#x5373;&#x4E00;&#x4E2A;&#x6F2B;&#x957F;&#x7684;&#x201C;&#x8FDB;&#x7A0B;&#x201D;&#xFF0C;&#x88AB;&#x5206;&#x5272;&#x6210;&#x591A;&#x4E2A;&#x6B65;&#x9AA4;&#x6216;&#x591A;&#x6279;&#x4EFB;&#x52A1;&#xFF0C;&#x4F7F;&#x5F97;&#x5176;&#x4ED6;&#x5E76;&#x53D1;&#x201C;&#x8FDB;&#x7A0B;&#x201D;&#x6709;&#x673A;&#x4F1A;&#x5C06;&#x81EA;&#x5DF1;&#x7684;&#x8FD0;&#x7B97;&#x63D2;&#x5165;&#x5230;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x961F;&#x5217;&#x4E2D;&#x4EA4;&#x66FF;&#x8FD0;&#x884C;</em><br>
<img src="./imgs/bingfaxiezuo.jpg" alt="&#x5E76;&#x53D1;&#x534F;&#x4F5C;&#x4F8B;&#x5B50;"><br>
<strong>&#x53D1;&#x5C55;</strong>&#xFF1A;<em>&#x5728;&#x6B64;&#x4E4B;&#x524D;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x5B8C;&#x5168;&#x662F;&#x5BBF;&#x4E3B;&#x73AF;&#x5883;&#x51B3;&#x5B9A;&#xFF0C;es6&#x7CBE;&#x786E;&#x6307;&#x5B9A;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x7684;&#x5DE5;&#x4F5C;&#x7EC6;&#x8282;&#xFF0C;promise&#x4F7F;&#x5F97;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x961F;&#x5217;&#x7684;&#x8C03;&#x5EA6;&#x7CBE;&#x7EC6;&#x63A7;&#x5236;</em>
<blockquote>
<p>&#x4EFB;&#x52A1;&#xFF1A;es6&#x7684;promise&#x662F;&#x57FA;&#x4E8E;&#x4EFB;&#x52A1;&#x7684;&#xFF0C;&#x4E8B;&#x4EF6;&#x5FAA;&#x73AF;&#x4E2D;&#x7684;&#x6BCF;&#x4E2A;tick&#x540E;&#x9762;&#x6709;&#x4E00;&#x4E2A;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#xFF0C;&#x6B64;&#x4EFB;&#x52A1;&#x961F;&#x5217;&#x5B8C;&#x6210;&#x624D;&#x80FD;&#x5FAA;&#x73AF;&#x4E0B;&#x4E00;&#x4E2A;tick</p>
</blockquote>
</li>
</ul>

    </div>
  </div>
</template>
<script>
export default {
  name: 'leaning',
  components: {
  },
  props: {
    arr: {
      type: Array,
      default: () => []
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.arr)
  },
  methods: {
    pusharr () {
      this.arr = [8]
    }
  }

}
</script>
<style>
      /**
 * prism.js Github theme based on GitHub's theme.
 * @author Sam Clarke
 */
code[class*="language-"],
pre[class*="language-"] {
  color: #333;
  background: none;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.4;

  -moz-tab-size: 8;
  -o-tab-size: 8;
  tab-size: 8;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: .8em;
  overflow: auto;
  /* border: 1px solid #ddd; */
  border-radius: 3px;
  /* background: #fff; */
  background: #f5f5f5;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
  background: #f5f5f5;
}

.token.comment,
.token.blockquote {
  color: #969896;
}

.token.cdata {
  color: #183691;
}

.token.doctype,
.token.punctuation,
.token.variable,
.token.macro.property {
  color: #333;
}

.token.operator,
.token.important,
.token.keyword,
.token.rule,
.token.builtin {
  color: #a71d5d;
}

.token.string,
.token.url,
.token.regex,
.token.attr-value {
  color: #183691;
}

.token.property,
.token.number,
.token.boolean,
.token.entity,
.token.atrule,
.token.constant,
.token.symbol,
.token.command,
.token.code {
  color: #0086b3;
}

.token.tag,
.token.selector,
.token.prolog {
  color: #63a35c;
}

.token.function,
.token.namespace,
.token.pseudo-element,
.token.class,
.token.class-name,
.token.pseudo-class,
.token.id,
.token.url-reference .token.variable,
.token.attr-name {
  color: #795da3;
}

.token.entity {
  cursor: help;
}

.token.title,
.token.title .token.punctuation {
  font-weight: bold;
  color: #1d3e81;
}

.token.list {
  color: #ed6a43;
}

.token.inserted {
  background-color: #eaffea;
  color: #55a532;
}

.token.deleted {
  background-color: #ffecec;
  color: #bd2c00;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}


/* JSON */
.language-json .token.property {
  color: #183691;
}

.language-markup .token.tag .token.punctuation {
  color: #333;
}

/* CSS */
code.language-css,
.language-css .token.function {
  color: #0086b3;
}

/* YAML */
.language-yaml .token.atrule {
  color: #63a35c;
}

code.language-yaml {
  color: #183691;
}

/* Ruby */
.language-ruby .token.function {
  color: #333;
}

/* Markdown */
.language-markdown .token.url {
  color: #795da3;
}

/* Makefile */
.language-makefile .token.symbol {
  color: #795da3;
}

.language-makefile .token.variable {
  color: #183691;
}

.language-makefile .token.builtin {
  color: #0086b3;
}

/* Bash */
.language-bash .token.keyword {
  color: #0086b3;
}

/* highlight */
pre[data-line] {
  position: relative;
  padding: 1em 0 1em 3em;
}
pre[data-line] .line-highlight-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  display: block;
  width: 100%;
}

pre[data-line] .line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: hsla(24, 20%, 50%,.08);
  background: linear-gradient(to right, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}

pre[data-line] .line-highlight:before, 
pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-start);
  position: absolute;
  top: .4em;
  left: .6em;
  min-width: 1em;
  padding: 0 .5em;
  background-color: hsla(24, 20%, 50%,.4);
  color: hsl(24, 20%, 95%);
  font: bold 65%/1.5 sans-serif;
  text-align: center;
  vertical-align: .3em;
  border-radius: 999px;
  text-shadow: none;
  box-shadow: 0 1px white;
}

pre[data-line] .line-highlight[data-end]:after {
  content: attr(data-end);
  top: auto;
  bottom: .4em;
}.body{font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;color:#333;background-color:#fff;overflow:initial;box-sizing:border-box;word-wrap:break-word}.body>:first-child{margin-top:0}.body h1,.body h2,.body h3,.body h4,.body h5,.body h6{line-height:1.2;margin-top:1em;margin-bottom:16px;color:#000}.body h1{font-size:2.25em;font-weight:300;padding-bottom:.3em}.body h2{font-size:1.75em;font-weight:400;padding-bottom:.3em}.body h3{font-size:1.5em;font-weight:500}.body h4{font-size:1.25em;font-weight:600}.body h5{font-size:1.1em;font-weight:600}.body h6{font-size:1em;font-weight:600}.body h1,.body h2,.body h3,.body h4,.body h5{font-weight:600}.body h5{font-size:1em}.body h6{color:#5c5c5c}.body strong{color:#000}.body del{color:#5c5c5c}.body a:not([href]){color:inherit;text-decoration:none}.body a{color:#08c;text-decoration:none}.body a:hover{color:#00a3f5;text-decoration:none}.body img{max-width:100%}.body>p{margin-top:0;margin-bottom:16px;word-wrap:break-word}.body>ul,.body>ol{margin-bottom:16px}.body ul,.body ol{padding-left:2em}.body ul.no-list,.body ol.no-list{padding:0;list-style-type:none}.body ul ul,.body ul ol,.body ol ol,.body ol ul{margin-top:0;margin-bottom:0}.body li{margin-bottom:0}.body li.task-list-item{list-style:none}.body li>p{margin-top:0;margin-bottom:0}.body .task-list-item-checkbox{margin:0 .2em .25em -1.8em;vertical-align:middle}.body .task-list-item-checkbox:hover{cursor:pointer}.body blockquote{margin:16px 0;font-size:inherit;padding:0 15px;color:#5c5c5c;border-left:4px solid #d6d6d6}.body blockquote>:first-child{margin-top:0}.body blockquote>:last-child{margin-bottom:0}.body hr{height:4px;margin:32px 0;background-color:#d6d6d6;border:0 none}.body table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.body table th{font-weight:bold;color:#000}.body table td,.body table th{border:1px solid #d6d6d6;padding:6px 13px}.body dl{padding:0}.body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:bold}.body dl dd{padding:0 16px;margin-bottom:16px}.body code{font-family:Menlo,Monaco,Consolas,'Courier New',monospace;font-size:.85em !important;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}.body code::before,.body code::after{letter-spacing:-0.2em;content:"\00a0"}.body pre>code{padding:0;margin:0;font-size:.85em !important;word-break:normal;white-space:pre;background:transparent;border:0}.body .highlight{margin-bottom:16px}.body .highlight pre,.body pre{padding:1em;overflow:auto;font-size:.85em !important;line-height:1.45;border:#d6d6d6;border-radius:3px}.body .highlight pre{margin-bottom:0;word-break:normal}.body pre code,.body pre tt{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.body pre code:before,.body pre tt:before,.body pre code:after,.body pre tt:after{content:normal}.body p,.body blockquote,.body ul,.body ol,.body dl,.body pre{margin-top:0;margin-bottom:16px}.body kbd{color:#000;border:1px solid #d6d6d6;border-bottom:2px solid #c7c7c7;padding:2px 4px;background-color:#f0f0f0;border-radius:3px}@media print{.body{background-color:#fff}.body h1,.body h2,.body h3,.body h4,.body h5,.body h6{color:#000;page-break-after:avoid}.body blockquote{color:#5c5c5c}.body pre{page-break-inside:avoid}.body table{display:table}.body img{display:block;max-width:100%;max-height:100%}.body pre,.body code{word-wrap:break-word;white-space:pre}}.markdown-preview{width:100%;height:100%;box-sizing:border-box}.markdown-preview .pagebreak,.markdown-preview .newpage{page-break-before:always}.markdown-preview pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}.markdown-preview pre.line-numbers>code{position:relative}.markdown-preview pre.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:1em;font-size:100%;left:0;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-preview pre.line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.markdown-preview pre.line-numbers .line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.markdown-preview .mathjax-exps .MathJax_Display{text-align:center !important}.markdown-preview:not([for="preview"]) .code-chunk .btn-group{display:none}.markdown-preview:not([for="preview"]) .code-chunk .status{display:none}.markdown-preview:not([for="preview"]) .code-chunk .output-div{margin-bottom:16px}.scrollbar-style::-webkit-scrollbar{width:8px}.scrollbar-style::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.scrollbar-style::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}.body[for="html-export"]:not([data-presentation-mode]){position:relative;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow:auto}.body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{position:relative;top:0}@media screen and (min-width:914px){.body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em calc(50% - 457px + 2em)}}@media screen and (max-width:914px){.body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em}}@media screen and (max-width:450px){.body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{font-size:14px !important;padding:1em}}@media print{.body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{display:none}}.body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{position:fixed;bottom:8px;left:8px;font-size:28px;cursor:pointer;color:inherit;z-index:99;width:32px;text-align:center;opacity:.4}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] #sidebar-toc-btn{opacity:1}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc{position:fixed;top:0;left:0;width:300px;height:100%;padding:32px 0 48px 0;font-size:14px;box-shadow:0 0 4px rgba(150,150,150,0.33);box-sizing:border-box;overflow:auto;background-color:inherit}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar{width:8px}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc a{text-decoration:none}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{padding:0 1.6em;margin-top:.8em}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc li{margin-bottom:.8em}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{list-style-type:none}.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{left:300px;width:calc(100% -  300px);padding:2em calc(50% - 457px -  150px);margin:0;box-sizing:border-box}@media screen and (max-width:1274px){.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{padding:2em}}@media screen and (max-width:450px){.body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{width:100%}}.body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .markdown-preview{left:50%;transform:translateX(-50%)}.body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .md-sidebar-toc{display:none}
/* Please visit the URL below for more information: */
/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */

      </style>
