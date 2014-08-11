$.fn.imageTitle = function (option) {
	
	var defaults={
		 //type:captionfull(全部显示或者消失),caption(显示标题),slideright(向右滑动),thecombo（向左下角滑动）,slidedown（向下滑动）
		 type:"captionfull",		 
		 //图片高度
		 height:"rightArrow",		 		 
		 //图片的宽度
		 width:"firstMenu",		 		 		 
		 //默认top
		 top:0,		 
		 //左边位置
		 left:0,		 
		 //显示高度
		 showTop:180,		
		 //显示的左边位置
		 showLeft:200,		 
		 //显示速度
		 speed:300 		 		 				 
	 }
	 
	 var obj = this;	 
	 $.extend(defaults, option);	 	 	
	  
	 function install(option){
		var overObj;
		var outObj;
		var settingObj={queue:false,duration:defaults.speed}
					
		if(defaults.type=="captionfull"){
			overObj={top:'80px'};
			outObj={top:'160px'};
			$(obj).find(".cover").stop().animate(outObj,{duration:160});											
		}else if(defaults.type=="caption"){
			overObj={top:'80px'};
			outObj={top:'125px'};
			$(obj).find(".cover").stop().animate(outObj,{duration:160});											
		}else if(defaults.type=="slideright"){
			overObj={left:'325px'};
			outObj={left:'0px'};
		}else if(defaults.type=="thecombo"){
			overObj={top:'260px', left:'325px'};
			outObj={top:'0px', left:'0px'};
		}else{
			overObj={top:'-260px'};
			outObj={top:'0px'};
		}
		
							
		$(obj).hover(function(){
			$(this).find(".cover").stop().animate(overObj,settingObj);
		}, function() {
			$(this).find(".cover").stop().animate(outObj,settingObj);
		});
					
	}
		
	install();		 
}