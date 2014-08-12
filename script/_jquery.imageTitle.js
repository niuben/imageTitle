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
			speed: 300,
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
				
				var _height = $(obj).height();
				if(defaults.type == "noTitle" || defaults.type == "showTitle"){
					var _coverObj = $(obj).find(".caption");
				}else{
					var _coverObj = $(obj).find("img");
				}

				var _coverHeight = _coverObj.outerHeight(),
				_coverWidth = _coverObj.outerWidth();

				switch(defaults.type){
					case "noTitle":						
						overObj = {
							top: (_height - _coverHeight) + 'px'
						};
						outObj = {
							top: _height + 'px'
						};
					break;

					case "showTitle":
						var _titleHeight = _coverObj.find(".title").outerHeight(),
						_outHeight = _height - _titleHeight ;
						_coverObj.css("top", _outHeight + "px");
						overObj = {
							top: (_height - _coverHeight) + 'px'
						};
						outObj = {
							top: _outHeight + 'px'
						};
					break;
					case "slideRight":
						
						overObj = {
							left: _coverWidth + 'px'
						};
						outObj = {
							left: '0px'
						};
					break;					
					case "slideTop":
						overObj = {
							top: -_coverHeight + 'px'
						};
						outObj = {
							top: '0px'
						};
					break;
					case "corner":
						overObj = {
							top: _coverHeight + 'px', 
							left: _coverWidth + 'px'
						};
						outObj = {
							top: '0px', 
							left: '0px'
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