!function(e){e.fn.linedtextarea=function(i){var t=e.extend({},e.fn.linedtextarea.defaults,i),n=function(e,i,n){for(;e.height()-i<=0;)n==t.selectedLine?e.append("<div class='lineno lineselect'>"+n+"</div>"):e.append("<div class='lineno'>"+n+"</div>"),n++;return n};return this.each(function(){var i=1,s=e(this);s.attr("wrap","off"),s.css({resize:"none"});var a=s.outerWidth();s.wrap("<div class='linedtextarea'></div>");var d=s.parent().wrap("<div class='linedwrap' style='width:"+a+"px'></div>").parent();d.prepend("<div class='lines' style='width:50px'></div>");var r=d.find(".lines");r.height(s.height()+6),r.append("<div class='codelines'></div>");var l=r.find(".codelines");if(i=n(l,r.height(),1),-1!=t.selectedLine&&!isNaN(t.selectedLine)){var c=parseInt(s.height()/(i-2)),h=parseInt(c*t.selectedLine)-s.height()/2;s[0].scrollTop=h}var p=r.outerWidth(),o=parseInt(d.css("border-left-width"))+parseInt(d.css("border-right-width"))+parseInt(d.css("padding-left"))+parseInt(d.css("padding-right")),v=a-o,f=a-p-o-20;s.width(f),d.width(v),s.scroll(function(t){var s=e(this)[0],a=s.scrollTop,d=s.clientHeight;l.css({"margin-top":-1*a+"px"}),i=n(l,a+d,i)}),s.resize(function(i){var t=e(this)[0];r.height(t.clientHeight+6)})})},e.fn.linedtextarea.defaults={selectedLine:-1,selectedClass:"lineselect"}}(jQuery);
