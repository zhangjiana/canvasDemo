(function($){
	$.fn.drawTool=function(opt){
		//alert(this[0]);
		var userOpt={
			id:this.attr("id"),
			data:opt.data,
			width:opt.width,
			height:opt.height,
			size:opt.size
		};
		var pin=new Pan(userOpt);
		pin.draw();
		return this;
	}
	
	
})(jQuery);