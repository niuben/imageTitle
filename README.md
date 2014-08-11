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
type			captionfull    动画类型
speed        500    	动画时间单位为ms
</pre>



代码示例
---------
 **Html**
 <pre>
  &lt;div class="captionfull"&gt;
	&lt;img src="images/3.jpg"/&gt;
	&lt;div class="cover boxcaption"&gt;
		&lt;div class="boxgrid_title"&gt;图片标题&lt;/div&gt;
		&lt;div class="boxgrid_con"&gt;这里是图片文字说明部分&lt;br /&gt;这里是图片文字说明部分&lt;/div&gt;
	&lt;/div&gt;		
&lt;/div&gt; 
	</pre>


**Javascript**
<pre>
	$(".captionfull").imageTitle({
		type:"captionfull"
	}); 
</pre>

版本历史
--------
v 0.0.1     beta    2014-8-11
