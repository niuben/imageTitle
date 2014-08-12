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
			speed: 500,
		 }
		 
		var obj = this;	 
		$.extend(defaults, option);	 	 	
		  
		$.extend(this, {
			install: function(){
				var overObj,
				outObj,
				settingObj = {
					queue: false,
					duration: defaults.speed
				};
				
				var _height = $(this).outHeight(),
				_coverObj = $(this).find(".caption"),
				_coverHeight = _coverObj.outHeight();

				switch(defaults.type){

					case "captionfull":						
						overObj = {
							top: (_height - _coverHeight) + 'px'
						};
						outObj = {
							top: _coverHeight + 'px'
						};
					break;
					case "caption":
						overObj = {
							top: '80px'
						};
						outObj = {
							top: '125px'
						};
					break;
					case "slideright":
						overObj = {
							left: '325px'
						};
						outObj = {
							left: '0px'
						};
					break;
					case "thecombo":
						overObj = {
							top: '260px', 
							left: '325px'
						};
						outObj = {
							top: '0px', 
							left: '0px'
						};
					break;
					case "slideleft":
						overObj = {
							top: '-260px'
						};
						outObj = {
							top: '0px'
						};
					};
					break;
				}

				$(obj).hover(function(){
					_coverObj.stop().animate(overObj, settingObj);
				}, function() {
					_coverObj.stop().animate(outObj, settingObj);
				});
			}		
		});
			
		this.install();		 
	}
})(jQuery);