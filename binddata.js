;(function($){
	'use strict';
	function binddata(){
		$('binddata')
		.not('[binddata=true]')
		.each(function(i,element){
			var selector = $(element).attr('selector') || $(element).next()
			, data = $(element).attr('src') || $(element).html()
			, type = typeof $(element).attr('src') == "undefined"? "inline" : "external"
			;

			if(typeof selector == "undefined")
				throw "Databind: A Selector is required, to bind this data to.";
			else
				selector = $(selector);
			
			if(typeof $(element).attr('binddata') == "undefined"){
				$(element).attr('binddata',true);
				if(type === "external") {
					var url = data;
					$.getJSON(url, function(response){
						data = response
						$(selector).data('binddata',data);
						$(selector).trigger('binddata');
					})
				}else{
					data = JSON.parse($.trim(data));
					$(selector).data('binddata',data);
				}
			}else{
				try { console.warn("Binddata: only binds once.")} catch(e){ }
			}
		})
	}
	window.binddata = binddata;
	binddata();
	$(function(){
		binddata();
	})
})(jQuery);
