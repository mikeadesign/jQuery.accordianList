/*
 * Accordian List Plugin 
 * Version 0.5 [2/17/2010]
 * Copyright (c) 2009 Mike Avello
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
	$.fn.accordianList = function() {
		this.find("dt").each(function() {
			var dt = $(this);
			var dl = $(this).next();
			dl.hide();
			dt.addClass("al-close")
				.wrapInner('<span />')
				.prepend('<span class="indicatorIcon">&nbsp;</span>')
				.find("span").css("cursor","pointer").toggle(function(){
					dl.slideDown('fast');
					dt.removeClass("al-close").addClass("al-open");
				}, function(){
					dl.slideUp('fast');
					dt.removeClass("al-open").addClass("al-close");
				});
		});
	}
})(jQuery);