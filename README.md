dialog
======

### 一个显示图片标题和详情的插件。

  插件介绍：鼠标滑动到图片上，显示图标的详细信息。
  
  运用场景：图片展示，显示相应信息
  
  引用文件： _jquery.imageTitle.js


参数配置
---------
**参数**

<pre>
参数名称      默认值  	描述
type		  noTitle   动画类型 
						toTitle: 初始不显示标题 
						showTitle: 初始显示标题 
						slideRight: 图片向左滑动后显示标题 
						slideTop:  图片向上滑动后显示标题 
						corner: 图片向左下方移动
speed        500    	动画时间单位为ms
</pre>



代码示例
---------
 **Html**
 <pre>
  &lt;div class="noTitle"&gt;
	&lt;img src="images/3.jpg"/&gt;
	&lt;div class="caption"&gt;
		&lt;h2 class="title"&gt;图片标题&lt;/h2&gt;
		&lt;div class="content"&gt;
			这里是图片文字说明部分&lt;br /&gt;
			这里是图片文字说明部分
		&lt;/div&gt;
	&lt;/div&gt;		
&lt;/div&gt;</pre>


**Javascript**
<pre>
	$(".noTitle").imageTitle({
		type:"noTitle"
	}); 
</pre>

版本历史
--------
v 0.0.1   2014-8-11 创建
v 0.0.2   2014-8-13 梳理组件样式，增加对图片高度和宽度的自动判断
