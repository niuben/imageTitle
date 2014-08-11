/*
	version: 0.0.1
	author: niuben
	data: 2013-8-11

*/
(function($){

	$.fn.imageTitle = function (option) {
		
		var defaults={
			//动画类型
			type: "captionfull",
			//显示速度
			speed: 500 		 		 				 
		 }
		 
		var obj = this;	 
		$.extend(defaults, option);	 	 	
		  
		$.extend(this, {
			install: function(){
				var overObj,
				outObj,
				settingObj={
					queue:false,
					duration:defaults.speed
				};
							
				if(defaults.type == "captionfull"){
					overObj = {
						top:'80px'
					};
					outObj = {
						top:'160px'
					};
				}else if(defaults.type == "caption"){
					overObj = {
						top:'80px'
					};
					outObj = {
						top:'125px'
					};
				}else if(defaults.type == "slideright"){
					overObj = {
						left:'325px'
					};
					outObj = {
						left:'0px'
					};
				}else if(defaults.type == "thecombo"){
					overObj = {
						top:'260px', 
						left:'325px'
					};
					outObj = {
						top:'0px', 
						left:'0px'
					};
				}else{
					overObj = {
						top:'-260px'
					};
					outObj = {
						top:'0px'
					};
				};
							
				$(obj).hover(function(){
					$(this).find(".cover").stop().animate(overObj, settingObj);
				}, function() {
					$(this).find(".cover").stop().animate(outObj, settingObj);
				});
			}		
		});
			
		this.install();		 
	}
})(jQuery);