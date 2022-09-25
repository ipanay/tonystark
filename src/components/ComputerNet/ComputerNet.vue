<template>
      <div class="mume markdown-preview  ">
      <h1 style="text-align:center">&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x539F;&#x7406;</h1>
```
--&#x5357;&#x822A;
---2012&#x897F;&#x5B89;&#x4EA4;&#x901A;&#x5927;&#x5B66;&#x89C6;&#x9891; &#x4E3B;&#x8BB2;&#x4EBA;&#xFF1A;&#x9648;&#x598D;
&#x54D4;&#x54E9;&#x54D4;&#x54E9;&#x7F51;&#x5740;&#xFF1A;<a href="https://www.bilibili.com/video/av14649323" target="blank">bilibili</a>
```
<br />
<a id="countlumn" hidden href>&#x76EE;&#x5F55;</a>
&#x4E00;&#x3001;<a href="#basicKnowledge">&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x8DEF;&#x57FA;&#x7840;&#x77E5;&#x8BC6;</a>
&#x4E8C;&#x3001;<a href="#networkSystemStructure">&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;</a>
&#x4E09;&#x3001;<a href="#dataConnect">&#x6570;&#x636E;&#x901A;&#x4FE1;&#x6280;&#x672F;</a>
<hr>
<h4 class="mume-header" id="%E4%B8%80-a-idbasicknowledge%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86a-a-hrefcountlumn%E7%9B%AE%E5%BD%95a">&#x4E00; <a id="basicKnowledge" href>&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x57FA;&#x7840;&#x77E5;&#x8BC6;</a> #<a href="#countlumn">&#x76EE;&#x5F55;</a></h4>

<pre class="language-text">&#x8BFE;&#x7A0B;&#x6027;&#x8D28;&#xFF1A;
&#x4E86;&#x89E3;&#x6709;&#x5173;&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x57FA;&#x672C;&#x6982;&#x5FF5;
&#x7406;&#x89E3;&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;&#x7684;&#x5206;&#x5C42;&#x6A21;&#x578B;
&#x638C;&#x63E1;&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x57FA;&#x672C;&#x5DE5;&#x4F5C;&#x539F;&#x7406;&#x548C;&#x4E3B;&#x8981;&#x6280;&#x672F;
&#x638C;&#x63E1;&#x4EE5;TCP/IP&#x534F;&#x8BAE;&#x96C6;&#x4E3A;&#x57FA;&#x7840;&#x7684;Internet&#x7F51;&#x7EDC;
&#x4E86;&#x89E3;&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x65B0;&#x6280;&#x672F;&#x548C;&#x65B0;&#x5E94;&#x7528;
&#x638C;&#x63E1;&#x5206;&#x6790;&#x95EE;&#x9898;&#x548C;&#x89E3;&#x51B3;&#x95EE;&#x9898;&#x7684;&#x80FD;&#x529B;&#xFF0C;&#x4E3A;&#x4EE5;&#x540E;&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x53CA;&#x5176;&#x5E94;&#x7528;&#x7684;&#x4E13;&#x9898;&#x5B66;&#x4E60;&#x548C;&#x7814;&#x7A76;&#x6253;&#x4E0B;&#x57FA;&#x7840;
</pre>
<blockquote>
<ul>
<li>&#x7B2C;&#x4E00;&#x7AE0;&#x6982;&#x8FF0;&#xFF1A;<br>
&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x5B9A;&#x4E49;<br>
&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x53D1;&#x5C55;&#x5386;&#x7A0B;<br>
&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x5206;&#x7C7B;<br>
&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x7ED3;&#x6784;<br>
&#x6807;&#x51C6;&#x5316;&#x7EC4;&#x7EC7;</li>
</ul>
</blockquote>
<hr>
<h6 class="mume-header" id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%9A%84%E5%AE%9A%E4%B9%89">&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x5B9A;&#x4E49;</h6>

<blockquote>
<p>1.&#x73B0;&#x4EE3;&#x7684;&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x4E3B;&#x6D41;&#x91C7;&#x7528;&#x96C6;&#x4E2D;&#x5F0F;<br>
2.&#x4FDD;&#x8BC1;&#x7F51;&#x7EDC;&#x7075;&#x6D3B;&#x6027; &#x4FDD;&#x8BC1;&#x7ED3;&#x6784;&#x66F4;&#x5927;&#x8303;&#x56F4;&#x6269;&#x5C55; &#x4FDD;&#x8BC1;&#x4E3B;&#x673A;&#x628A;&#x6CE8;&#x610F;&#x529B;&#x96C6;&#x4E2D;&#x5728;&#x4FE1;&#x606F;&#x5904;&#x7406;&#x4E0A; &#x5206;&#x4E3A;&#x8D44;&#x6E90;&#x5B50;&#x7F51;&#x548C;&#x901A;&#x4FE1;&#x5B50;&#x7F51;<br>
3.&#x5206;&#x7EC4;&#x4EA4;&#x6362;&#x7F51; &#x6570;&#x636E;&#x4E0D;&#x662F;&#x76F4;&#x63A5;&#x53D1;&#x9001; &#x662F;&#x8981;&#x5206;&#x7EC4;&#x4E3A;&#x6709;&#x4E00;&#x5B9A;&#x957F; &#x5EA6;&#x4E0A;&#x9650;&#x7684;&#x6570;&#x636E;&#x5355;&#x5143; &#x5B58;&#x50A8;&#x8F6C;&#x53D1;&#x65B9;&#x5F0F;</p>
</blockquote>
<p>1.&#x6536;&#x53D1;&#x8BBE;&#x5907;&#xFF08;&#x63A5;&#x53E3;&#xFF1A;&#x6709;&#x7EBF;&#x3001;&#x65E0;&#x7EBF;&#xFF08;Wi-Fi&#x3001;&#x84DD;&#x7259;&#xFF09;&#xFF09;<br>
2.&#x7269;&#x7406;&#x8FDE;&#x63A5;&#xFF08;&#x53CC;&#x7EDE;&#x7EBF;&#x3001;&#x5149;&#x7EA4;&#xFF09;<br>
3.TCP/IP&#x534F;&#x8BAE;&#x96C6;<br>
&#x5B9A;&#x4E49;&#xFF1A;&#x4EE5;&#x80FD;&#x591F;&#x76F8;&#x4E92;&#x5171;&#x4EAB;&#x8D44;&#x6E90;&#x7684;&#x65B9;&#x5F0F;&#x4E92;&#x8054;&#x8D77;&#x6765;&#x7684;&#x81EA;&#x6CBB;&#x8BA1;&#x7B97;&#x673A;&#x7CFB;&#x7EDF;&#x7684;&#x96C6;&#x5408;<br>
&#x7279;&#x5F81;&#xFF1A;&#x8D44;&#x6E90;&#x5171;&#x4EAB;&#x3001;&#x5206;&#x5E03;&#x5728;&#x4E0D;&#x540C;&#x5730;&#x7406;&#x4F4D;&#x7F6E;&#x7684;&#x2018;&#x81EA;&#x6CBB;&#x7CFB;&#x7EDF;&#x2019;&#x3001;&#x9075;&#x5FAA;&#x4E00;&#x5B9A;&#x7684;&#x89C4;&#x5219;--&#x2018;&#x534F;&#x8BAE;&#x2019;</p>
<h6 class="mume-header" id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%9A%84%E5%8F%91%E5%B1%95%E5%8E%86%E7%A8%8B">&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x53D1;&#x5C55;&#x5386;&#x7A0B;</h6>

<p>&#x7B2C;&#x4E00;&#x53F0;&#x8BA1;&#x7B97;&#x673A;1946 &#x7B2C;&#x4E8C;&#x6B21;&#x4E16;&#x754C;&#x5927;&#x6218;&#x519B;&#x4E8B;&#x63A8;&#x52A8; &#x4F53;&#x79EF;&#x5927;&#x3001;&#x4EF7;&#x683C;&#x8D35;<br>
&#x7EC8;&#x7AEF;&#xFF1A;&#x8FDC;&#x7A0B;&#x7684;&#x8F93;&#x5165;/&#x8F93;&#x51FA;&#x8BBE;&#x5907;<br>
<img src="./imgs/longagoSys.png" alt="&#x6700;&#x65E9;&#x7684;&#x8BA1;&#x7B97;&#x673A;&#x7CFB;&#x7EDF;"><br>
&#x6709;&#x4E9B;&#x95EE;&#x9898;&#x5F97;&#x5230;&#x89E3;&#x51B3;<br>
<img src="./imgs/jiejuewenti.png" alt="&#x6700;&#x65E9;&#x7684;&#x8BA1;&#x7B97;&#x673A;&#x7CFB;&#x7EDF;&#x89E3;&#x51B3;"><br>
&#x5F7B;&#x5E95;&#x89E3;&#x51B3;&#x96C6;&#x4E2D;&#x5F0F;&#x4E0D;&#x53EF;&#x9760;&#x95EE;&#x9898;--&gt;<br>
ARPAnet&#x7F51;&#x7EDC;&#x8BDE;&#x751F; &#x91CC;&#x7A0B;&#x7891;&#x4F5C;&#x7528; &#x5206;&#x7EC4;&#x4EA4;&#x6362;&#x7F51;&#x7EDC;--&gt;&#x5206;&#x5E03;&#x5F0F;<br>
<img src="./imgs/fenbushi.png" alt="&#x5206;&#x7EC4;&#x4EA4;&#x6362;&#x7F51;&#x7EDC;"><br>
&#x989D;&#x5916;&#x589E;&#x52A0;&#x4E86;&#x4E3B;&#x673A;&#x4E0E;&#x4E3B;&#x673A;&#x4E4B;&#x95F4;&#x7684;&#x901A;&#x4FE1;&#x95EE;&#x9898;--&gt;&#x901A;&#x4FE1;&#x5B50;&#x7F51;&#x3001;&#x8D44;&#x6E90;&#x5B50;&#x7F51;<br>
<img src="./imgs/fenbushijiejue.png" alt="&#x5206;&#x7EC4;&#x4EA4;&#x6362;&#x7F51;&#x7EDC;"><br>
&#x5168;&#x8FDE;&#x63A5; &#x6BCF;&#x4E24;&#x4E2A;&#x8282;&#x70B9;&#x4E92;&#x8FDE;--&gt;<br>
<img src="./imgs/kuoda.png" alt="&#x5206;&#x7EC4;&#x4EA4;&#x6362;&#x7F51;&#x7EDC;"></p>
<blockquote>
<p>&#x4E0D;&#x52A0;&#x5176;&#x4ED6;&#x4FE1;&#x606F;&#x53D1;&#x9001;&#x88F8;&#x6570;&#x636E;&#xFF1F;<br>
&#x627E;&#x4E0D;&#x5230;&#x76EE;&#x7684;&#x5730;<br>
&#x4E00;&#x6B21;&#x6027;&#x53D1;&#x9001;&#x5168;&#x90E8;&#x6570;&#x636E;&#xFF1F;<br>
2&#x4E2A;G&#x7684;&#x6587;&#x4EF6;&#x4E00;&#x65E6;&#x51FA;&#x9519;&#x8981;&#x91CD;&#x4F20;&#x3001;&#x5360;&#x7528;&#x901A;&#x4FE1;&#x901A;&#x9053;&#x8D44;&#x6E90;<br>
--&gt;&#x5206;&#x6BB5; &#x5206;&#x7EC4;<br>
ATM&#x7F51;&#x7EDC; &#x7B49;&#x957F;&#x7684;53B = 5&#xFF08;&#x63A7;&#x5236;&#x4FE1;&#x606F;&#xFF09; + 48&#xFF08;&#x6709;&#x6548;&#x8D44;&#x6E90; &#x4E0D;&#x8DB3;&#x8865;&#x957F;&#xFF09;<br>
&#x5206;&#x7EC4;&#xFF1A;&#x5C3D;&#x53EF;&#x80FD;&#x591A;&#x7684;&#x670D;&#x52A1;&#x7528;&#x6237;<br>
&#x4E2D;&#x95F4;&#x8282;&#x70B9;&#xFF08;&#x8DEF;&#x7531;&#x5668;&#xFF09;&#xFF1A;&#x5B58;&#x50A8;&#x3001;&#x5BFB;&#x5740;&#xFF08;&#x8DEF;&#x7531;&#x9009;&#x62E9;&#xFF09;&#x3001;&#x7EA0;&#x9519;&#x3001;&#x8F6C;&#x53D1;</p>
</blockquote>
<p>&#x6807;&#x51C6;&#x5316;&#x9636;&#x6BB5;<br>
&#x5F00;&#x653E;&#x7CFB;&#x7EDF;&#x4E92;&#x8054;&#x53C2;&#x8003;&#x6A21;&#x578B;--&gt; TCP/IP&#x534F;&#x8BAE;&#x96C6;</p>
<h6 class="mume-header" id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%9A%84%E5%88%86%E7%B1%BB">&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x5206;&#x7C7B;</h6>

<p>&#x8986;&#x76D6;&#x8303;&#x56F4;&#xFF1A;<br>
LAN&#x3001;WAN<br>
&#x4F20;&#x8F93;&#x4ECB;&#x8D28;&#xFF1A;<br>
&#x6709;&#x7EBF;&#x3001;&#x65E0;&#x7EBF;<br>
&#x901F;&#x7387;&#xFF1A;<br>
&#x5BBD;&#x5E26;&#x3001;&#x7A84;&#x5E26;<br>
&#x7528;&#x6237;&#xFF1A;<br>
&#x516C;&#x7528;&#x3001;&#x4E13;&#x7528;<br>
&#x94F6;&#x884C;&#x3001;&#x98DE;&#x673A;&#x8BA2;&#x7968;&#x7528;&#x7684;&#x662F;&#x96C6;&#x4E2D;&#x5F0F; &#x56E0;&#x4E3A;&#x5206;&#x5E03;&#x5F0F;&#x7F51;&#x7EDC;&#x7684;&#x6570;&#x636E;&#x5E93;&#x540C;&#x6B65;&#x56F0;&#x96BE;</p>
<h6 class="mume-header" id="%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%9A%84%E7%BB%93%E6%9E%84">&#x8BA1;&#x7B97;&#x673A;&#x7F51;&#x7EDC;&#x7684;&#x7ED3;&#x6784;</h6>

<blockquote>
<p>&#x4F20;&#x8F93;&#x4ECB;&#x8D28;&#x4E0E;&#x4F20;&#x8F93;&#x901A;&#x9053;&#xFF1A;<br>
&#x7269;&#x7406;&#x7ED3;&#x6784;&#x4E0E;&#x903B;&#x8F91;&#x7ED3;&#x6784;</p>
</blockquote>
<blockquote>
<p><em>&#x62D3;&#x6251;&#x7ED3;&#x6784;</em><br>
1.&#x603B;&#x7EBF;&#x578B;&#xFF1A;&#x53CC;&#x5411;&#x4F20;&#x8F93;<br>
&#x51B2;&#x7A81;&#xFF1A;&#x4E24;&#x4E2A;&#x4EE5;&#x4E0A;&#x8282;&#x70B9;&#x540C;&#x65F6;&#x53D1;&#x9001;&#x4FE1;&#x53F7;&#xFF0C;&#x4F1A;&#x91CD;&#x53E0;<br>
<img src="./imgs/zonxianxing.png" alt="&#x603B;&#x7EBF;&#x578B;&#x62D3;&#x6251;&#x7ED3;&#x6784;"><br>
2.&#x73AF;&#x5F62;&#xFF1A;&#x5355;&#x5411;&#xFF0C;&#x53D1;&#x9001;&#x65B9;&#x53D1;&#x6570;&#x636E;&#x53D1;&#x9001;&#x65B9;&#x5220;&#x6570;&#x636E;<br>
&#xFF08;&#x5149;&#x7EA4;&#x5355;&#x5411;&#x4F20;&#x8F93;&#xFF09;<br>
FDDI&#x7F51;&#x7EDC;<br>
&#x9996;&#x5C3E;&#x76F8;&#x8FDE;&#x7684;&#x603B;&#x7EBF;&#x578B;<br>
<!-- <img src="./imgs/huanxing.png" alt="&#x603B;&#x7EBF;&#x578B;&#x62D3;&#x6251;&#x7ED3;&#x6784;"><br> -->
3.&#x661F;&#x578B;<br>
<img src="./imgs/xingxing.png" alt="&#x603B;&#x7EBF;&#x578B;&#x62D3;&#x6251;&#x7ED3;&#x6784;"><br>
4.&#x6811;&#x578B;&#xFF1A;&#x4E3B;&#x8981;&#x4F9D;&#x9644;&#x4E8E;&#x5176;&#x4ED6;&#x62D3;&#x6251;&#x7ED3;&#x6784;&#x4E2D;<br>
<img src="./imgs/shuxing.png" alt="&#x603B;&#x7EBF;&#x578B;&#x62D3;&#x6251;&#x7ED3;&#x6784;"><br>
4.&#x7F51;&#x72B6;&#x578B;<br>
<img src="./imgs/wangzhuangxing.png" alt="&#x603B;&#x7EBF;&#x578B;&#x62D3;&#x6251;&#x7ED3;&#x6784;"></p>
</blockquote>
<p>&#x903B;&#x8F91;&#x7ED3;&#x6784;<br>
&#x5E7F;&#x64AD;&#x9700;&#x89E3;&#x51B3;&#x51B2;&#x7A81;&#xFF1A;&#x8BB2;&#x524D;&#x5148;&#x542C;&#x3001;&#x8FB9;&#x8BB2;&#x8FB9;&#x542C;&#x673A;&#x5236;&#xFF08;&#x4E0D;&#x80FD;&#x5B8C;&#x7F8E;&#x5B9E;&#x73B0;&#x76D1;&#x542C;&#xFF0C;&#x5BF9;&#x7F51;&#x7EDC;&#x8DE8;&#x5EA6;&#x6709;&#x8981;&#x6C42;&#xFF09;<br>
&#x96C6;&#x7EBF;&#x5668;&#xFF1A;&#x591A;&#x8DEF;&#x5F00;&#x5173;&#xFF0C;&#x5373;&#x6536;&#x5373;&#x53D1;&#xFF0C;&#x5E73;&#x5747;&#x5E26;&#x5BBD; &#x53EA;&#x80FD;&#x53D1;&#x9001;&#x7ED9;&#x56FA;&#x5B9A;&#x6570;&#x636E;&#x63A5;&#x6536;&#x901F;&#x7387;&#x7684;&#x7EC8;&#x7AEF;</p>
<blockquote>
<p>&#x4EF2;&#x88C1;&#x3001;&#x9884;&#x7EA6;&#x673A;&#x5236;&#xFF08;1.&#x8FDD;&#x80CC;&#x7B80;&#x5355;&#x6027;&#x539F;&#x5219;&#xFF0C;&#x9700;&#x8981;&#x534F;&#x5546;&#xFF0C;&#x4F20;&#x8F93;&#x6548;&#x7387;&#x4F4E;&#x3002;2.&#x5165;&#x7F51;&#x65F6;&#x5EF6;&#x589E;&#x52A0;&#xFF0C;&#x5360;&#x7528;&#x4FE1;&#x9053;</p>
</blockquote>
<p>&#x70B9;&#x5230;&#x70B9;<br>
&#x5E7F;&#x57DF;&#x7F51;&#x4E2D;&#x4E0D;&#x7528;&#x5E7F;&#x64AD;&#x65B9;&#x5F0F;<br>
<img src="./imgs/poittopoint.png" alt="&#x603B;&#x7EBF;&#x578B;&#x62D3;&#x6251;&#x7ED3;&#x6784;"><br>
&#x9009;&#x62E9;&#x8DEF;&#x5F84;&#xFF1A;&#x8981;&#x6C42;&#x6709;&#x4E00;&#x5F20;&#x8DB3;&#x591F;&#x8BE6;&#x5C3D; &#x6240;&#x6709;&#x7684;&#x76EE;&#x7684;&#x8282;&#x70B9;&#x90FD;&#x8981;&#x6709;&#x6240;&#x53CD;&#x5E94; &#x7684;&#x8DEF;&#x7531;&#x8868;<br>
&#x76EE;&#x7684; &#xFF5C; &#x4E0B;&#x4E00;&#x4E2A;&#x8282;&#x70B9;&#x5730;&#x5740;<br>
&#x7F51;&#x7EDC;/&#x8303;&#x56F4; &#xFF5C; &#x4E0B;&#x4E00;&#x4E2A;&#x8282;&#x70B9;<br>
&#x4EA4;&#x6362;&#x673A;&#xFF1A;&#x4E5F;&#x4F1A;&#x751F;&#x6210;&#x4E00;&#x5F20;&#x8868; &#x67E5;&#x8868;&#x8F6C;&#x53D1;<br>
&#x5E26;&#x5BBD;&#x5229;&#x7528;&#x7387;&#x9AD8;<br>
&#x5B89;&#x5168;<br>
&#x56E0;&#x4E3A;&#x6709;&#x7F13;&#x5B58;&#x53EF;&#x4EE5;&#x53D1;&#x9001;&#x7ED9;&#x4EFB;&#x610F;&#x6570;&#x636E;&#x63A5;&#x6536;&#x901F;&#x7387;&#x7684;&#x7EC8;&#x7AEF;<br>
&#x5168;&#x53CC;&#x5DE5;<br>
&#x7AEF;&#x53E3; &#xFF5C; &#x7EC8;&#x7AEF;&#x5730;&#x5740;<br>
&#x5F53;&#x8868;&#x4E2D;&#x627E;&#x4E0D;&#x5230;&#x76EE;&#x7684;&#x5730;&#x5740;&#x5BF9;&#x5E94;&#x7684;&#x7AEF;&#x53E3;&#x5219;&#x91C7;&#x7528;&#x5E7F;&#x64AD;&#x7684;&#x5F62;&#x5F0F;</p>
<blockquote>
<p>&#x7F51;&#x5361;&#xFF1A; &#x666E;&#x901A;&#x6A21;&#x5F0F;&#xFF08;&#x53EA;&#x63A5;&#x6536;&#x76EE;&#x7684;&#x5730;&#x5740;&#x548C;&#x81EA;&#x5DF1;&#x4E00;&#x6837;&#x7684;&#x6570;&#x636E;&#xFF09;/&#x6DF7;&#x6742;&#x6A21;&#x5F0F;&#xFF08;&#x63A5;&#x6536;&#x6240;&#x6709;&#xFF09;</p>
</blockquote>
<p>&#x603B;&#x7EBF;&#x578B;&#xFF1A;&#x5E7F;&#x64AD;<br>
&#x661F;&#x578B;&#xFF1A;&#x5E7F;&#x64AD;/&#x70B9;&#x5230;&#x70B9;</p>
<hr>
<h4 class="mume-header" id="%E4%BA%8C-a-idnetworksystemstructure%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84a-a-hrefcountlumn%E7%9B%AE%E5%BD%95a">&#x4E8C; <a id="networkSystemStructure" href>&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;</a> #<a href="#countlumn">&#x76EE;&#x5F55;</a></h4>

<pre class="language-text">&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;
&#x63A5;&#x53E3;&#x3001;&#x670D;&#x52A1;&#x4E0E;&#x534F;&#x8BAE;
&#x7F51;&#x7EDC;&#x53C2;&#x8003;&#x6A21;&#x578B;
</pre>
<h6 class="mume-header" id="%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;</h6>

<p>&#x5C42;&#xFF1A;&#x7075;&#x6D3B;&#x6027;&#x597D;&#xFF0C;&#x6BCF;&#x5C42;&#x9009;&#x62E9;&#x6700;&#x597D;&#x7684;&#x6280;&#x672F;<br>
&#x670D;&#x52A1;&#xFF1A;&#x5C42;&#x5B58;&#x5728;&#x7684;&#x5B9E;&#x8D28;&#x4E3A;&#x5BF9;&#x7B49;&#x4E0A;&#x5C42;&#x63D0;&#x4F9B;&#x76F8;&#x4E92;&#x901A;&#x4FE1;&#x7684;&#x80FD;&#x529B;<br>
&#x534F;&#x8BAE;&#xFF1A;&#x4E09;&#x8981;&#x7D20;&#xFF1A;&#x8BED;&#x6CD5;&#x8BED;&#x4E49;&#x65F6;&#x5E8F;</p>
<blockquote>
<p>&#x670D;&#x52A1;&#x4E0E;&#x534F;&#x8BAE;<br>
&#x670D;&#x52A1;&#xFF1A;&#x670D;&#x52A1;&#x662F;&#x5404;&#x5C42;&#x5411;&#x4E0A;&#x5C42;&#x63D0;&#x4F9B;&#x7684;&#x4E00;&#x7EC4;&#x539F;&#x8BED;&#xFF08;&#x64CD;&#x4F5C;&#xFF09;&#xFF0C;&#x53EA;&#x5B9A;&#x4E49;&#x63A5;&#x53E3;&#x4E0D;&#x6D89;&#x53CA;&#x5177;&#x4F53;&#x5B9E;&#x73B0;&#xFF1B;<br>
&#x534F;&#x8BAE;&#xFF1A;&#x534F;&#x8BAE;&#x5B9A;&#x4E49;&#x540C;&#x5C42;&#x5BF9;&#x7B49;&#x5B9E;&#x4F53;&#x7684;&#x5177;&#x4F53;&#x89C4;&#x5219;&#xFF1B;<br>
&#x4E8C;&#x8005;&#x5173;&#x7CFB;&#xFF1A;&#x5B9E;&#x4F53;&#x5229;&#x7528;&#x534F;&#x8BAE;&#x5B9E;&#x73B0;&#x670D;&#x52A1;&#x5B9A;&#x4E49;&#x7684;&#x63A5;&#x53E3;&#xFF1B;&#x53EA;&#x8981;&#x670D;&#x52A1;&#x4E0D;&#x53D8;&#xFF0C;&#x53EF;&#x4EE5;&#x4EFB;&#x610F;&#x6539;&#x53D8;&#x534F;&#x8BAE;&#x3002;</p>
</blockquote>
<blockquote>
<p>&#x539F;&#x5219;&#xFF1A;1.&#x53CC;&#x65B9;&#x5FC5;&#x987B;&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;&#x4E00;&#x6837;&#xFF08;&#x4E0D;&#x540C;&#x7C7B;&#x578B;&#x901A;&#x8FC7;&#x8F6C;&#x6362;&#x8282;&#x70B9;&#x8F6C;&#x6362;&#xFF09;<br>
2.&#x540C;&#x4E00;&#x5C42;&#x4F7F;&#x7528;&#x4E00;&#x81F4;&#x7684;&#x534F;&#x8BAE;<br>
3.&#x6700;&#x5E95;&#x5C42;&#x7B2C;&#x4E00;&#x5C42;&#x4F7F;&#x7528;&#x7269;&#x7406;&#x4ECB;&#x8D28;&#x4F20;&#x8F93;&#x6570;&#x636E;</p>
</blockquote>
<p>&#x534F;&#x8BAE;&#x6570;&#x636E;&#x5355;&#x5143;<br>
&#x63A5;&#x53E3;&#x6570;&#x636E;&#x5355;&#x5143;<br>
&#x670D;&#x52A1;&#x6570;&#x636E;&#x5355;&#x4F4D;</p>
<p><img src="./imgs/networkSystemstructure.png" alt="&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;"><br>
<img src="./imgs/osi.png" alt="&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;"><br>
<img src="./imgs/osiAsysic.png" alt="&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;"><br>
<img src="./imgs/compareRange.png" alt="&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;"></p>
<p>&#x4F4E;&#x4E09;&#x5C42;&#x662F;&#x901A;&#x4FE1;&#x5B50;&#x7F51;<br>
&#x9AD8;&#x4E09;&#x5C42;&#x8D44;&#x6E90;&#x5B50;&#x7F51;<br>
&#x4F20;&#x8F93;&#x5C42;&#x627F;&#x4E0A;&#x542F;&#x4E0B; &#x5F25;&#x8865;&#x9700;&#x6C42;&#x548C;&#x529F;&#x80FD;&#x7684;&#x5DEE;&#x5F02;&#x63D0;&#x4F9B;&#x7EDF;&#x4E00;&#x7684;&#x63A5;&#x53E3;</p>
<h5 class="mume-header" id="tcpip%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B">TCP/IP&#x53C2;&#x8003;&#x6A21;&#x578B;</h5>

<p>&#x65E9;&#x4E8E;OSI &#x4EE5;TCP&#x548C;IP&#x4E3A;&#x4EE3;&#x8868;&#x7684;&#x7F51;&#x7EDC;&#x4F53;&#x7CFB;&#x7ED3;&#x6784;<br>
<img src="./imgs/TCPIP.png" alt="TCP/IP&#x53C2;&#x8003;&#x6A21;&#x578B;"></p>
<hr>
<h4 class="mume-header" id="%E4%B8%89-a-iddataconnect%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%8A%80%E6%9C%AFa-a-hrefcountlumn%E7%9B%AE%E5%BD%95a">&#x4E09; <a id="dataConnect" href>&#x6570;&#x636E;&#x901A;&#x4FE1;&#x6280;&#x672F;</a> #<a href="#countlumn">&#x76EE;&#x5F55;</a></h4>

<blockquote>
<p>&#x6570;&#x636E;&#x901A;&#x4FE1;&#x7684;&#x7406;&#x8BBA;&#x57FA;&#x7840;<br>
&#x4F20;&#x8F93;&#x4ECB;&#x8D28;<br>
&#x6570;&#x636E;&#x7F16;&#x7801;<br>
&#x4FE1;&#x9053;&#x590D;&#x7528;&#x6280;&#x672F;<br>
&#x6570;&#x636E;&#x4EA4;&#x6362;&#x6280;&#x672F;<br>
&#x7269;&#x7406;&#x5C42;&#x89C4;&#x7A0B;</p>
</blockquote>
<h5 class="mume-header" id="%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E7%9A%84%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80">&#x6570;&#x636E;&#x901A;&#x4FE1;&#x7684;&#x7406;&#x8BBA;&#x57FA;&#x7840;</h5>

<p>&#x4E32;&#x884C;&#x4E8C;&#x8FDB;&#x5236;&#x6D41;<br>
&#x901A;&#x4FE1;&#x7CFB;&#x7EDF;&#x5E26;&#x5BBD;&#x65E0;&#x7EBF;&#x5BBD;&#x7684;&#x7406;&#x60F3;&#x72B6;&#x6001;&#x4E0B; &#x63A5;&#x6536;&#x7684;&#x4FE1;&#x53F7;&#x6CE2;&#x5F62;&#x548C;&#x539F;&#x59CB;&#x7684;&#x53D1;&#x9001;&#x6CE2;&#x5F62;&#x662F;&#x4E00;&#x81F4;&#x7684;</p>
<h5 class="mume-header" id="%E7%AC%AC%E4%B9%9D%E8%AF%BE">&#x7B2C;&#x4E5D;&#x8BFE;</h5>


      </div>
</template>
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
}html body{font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;color:#333;background-color:#fff;overflow:initial;box-sizing:border-box;word-wrap:break-word}html body>:first-child{margin-top:0}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{line-height:1.2;margin-top:1em;margin-bottom:16px;color:#000}html body h1{font-size:2.25em;font-weight:300;padding-bottom:.3em}html body h2{font-size:1.75em;font-weight:400;padding-bottom:.3em}html body h3{font-size:1.5em;font-weight:500}html body h4{font-size:1.25em;font-weight:600}html body h5{font-size:1.1em;font-weight:600}html body h6{font-size:1em;font-weight:600}html body h1,html body h2,html body h3,html body h4,html body h5{font-weight:600}html body h5{font-size:1em}html body h6{color:#5c5c5c}html body strong{color:#000}html body del{color:#5c5c5c}html body a:not([href]){color:inherit;text-decoration:none}html body a{color:#08c;text-decoration:none}html body a:hover{color:#00a3f5;text-decoration:none}html body img{max-width:100%}html body>p{margin-top:0;margin-bottom:16px;word-wrap:break-word}html body>ul,html body>ol{margin-bottom:16px}html body ul,html body ol{padding-left:2em}html body ul.no-list,html body ol.no-list{padding:0;list-style-type:none}html body ul ul,html body ul ol,html body ol ol,html body ol ul{margin-top:0;margin-bottom:0}html body li{margin-bottom:0}html body li.task-list-item{list-style:none}html body li>p{margin-top:0;margin-bottom:0}html body .task-list-item-checkbox{margin:0 .2em .25em -1.8em;vertical-align:middle}html body .task-list-item-checkbox:hover{cursor:pointer}html body blockquote{margin:16px 0;font-size:inherit;padding:0 15px;color:#5c5c5c;border-left:4px solid #d6d6d6}html body blockquote>:first-child{margin-top:0}html body blockquote>:last-child{margin-bottom:0}html body hr{height:4px;margin:32px 0;background-color:#d6d6d6;border:0 none}html body table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}html body table th{font-weight:bold;color:#000}html body table td,html body table th{border:1px solid #d6d6d6;padding:6px 13px}html body dl{padding:0}html body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:bold}html body dl dd{padding:0 16px;margin-bottom:16px}html body code{font-family:Menlo,Monaco,Consolas,'Courier New',monospace;font-size:.85em !important;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}html body code::before,html body code::after{letter-spacing:-0.2em;content:"\00a0"}html body pre>code{padding:0;margin:0;font-size:.85em !important;word-break:normal;white-space:pre;background:transparent;border:0}html body .highlight{margin-bottom:16px}html body .highlight pre,html body pre{padding:1em;overflow:auto;font-size:.85em !important;line-height:1.45;border:#d6d6d6;border-radius:3px}html body .highlight pre{margin-bottom:0;word-break:normal}html body pre code,html body pre tt{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}html body pre code:before,html body pre tt:before,html body pre code:after,html body pre tt:after{content:normal}html body p,html body blockquote,html body ul,html body ol,html body dl,html body pre{margin-top:0;margin-bottom:16px}html body kbd{color:#000;border:1px solid #d6d6d6;border-bottom:2px solid #c7c7c7;padding:2px 4px;background-color:#f0f0f0;border-radius:3px}@media print{html body{background-color:#fff}html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{color:#000;page-break-after:avoid}html body blockquote{color:#5c5c5c}html body pre{page-break-inside:avoid}html body table{display:table}html body img{display:block;max-width:100%;max-height:100%}html body pre,html body code{word-wrap:break-word;white-space:pre}}.markdown-preview{width:100%;height:100%;box-sizing:border-box}.markdown-preview .pagebreak,.markdown-preview .newpage{page-break-before:always}.markdown-preview pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}.markdown-preview pre.line-numbers>code{position:relative}.markdown-preview pre.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:1em;font-size:100%;left:0;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-preview pre.line-numbers .line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.markdown-preview pre.line-numbers .line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}.markdown-preview .mathjax-exps .MathJax_Display{text-align:center !important}.markdown-preview:not([for="preview"]) .code-chunk .btn-group{display:none}.markdown-preview:not([for="preview"]) .code-chunk .status{display:none}.markdown-preview:not([for="preview"]) .code-chunk .output-div{margin-bottom:16px}.scrollbar-style::-webkit-scrollbar{width:8px}.scrollbar-style::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}.scrollbar-style::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode]){position:relative;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow:auto}html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{position:relative;top:0}@media screen and (min-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em calc(50% - 457px + 2em)}}@media screen and (max-width:914px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode]) .markdown-preview{font-size:14px !important;padding:1em}}@media print{html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{display:none}}html body[for="html-export"]:not([data-presentation-mode]) #sidebar-toc-btn{position:fixed;bottom:8px;left:8px;font-size:28px;cursor:pointer;color:inherit;z-index:99;width:32px;text-align:center;opacity:.4}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] #sidebar-toc-btn{opacity:1}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc{position:fixed;top:0;left:0;width:300px;height:100%;padding:32px 0 48px 0;font-size:14px;box-shadow:0 0 4px rgba(150,150,150,0.33);box-sizing:border-box;overflow:auto;background-color:inherit}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar{width:8px}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,0.66);border:4px solid rgba(150,150,150,0.66);background-clip:content-box}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc a{text-decoration:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{padding:0 1.6em;margin-top:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc li{margin-bottom:.8em}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .md-sidebar-toc ul{list-style-type:none}html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{left:300px;width:calc(100% -  300px);padding:2em calc(50% - 457px -  150px);margin:0;box-sizing:border-box}@media screen and (max-width:1274px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{padding:2em}}@media screen and (max-width:450px){html body[for="html-export"]:not([data-presentation-mode])[html-show-sidebar-toc] .markdown-preview{width:100%}}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .markdown-preview{left:50%;transform:translateX(-50%)}html body[for="html-export"]:not([data-presentation-mode]):not([html-show-sidebar-toc]) .md-sidebar-toc{display:none}
/* Please visit the URL below for more information: */
/*   https://shd101wyy.github.io/markdown-preview-enhanced/#/customize-css */

      </style>