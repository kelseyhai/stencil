window.Stencil=window.Stencil||{},Stencil.verticalAlign=function(){var t=$(window).width();$("[data-valign]").each(function(){var i=$(this),a=$(this).attr("data-valign"),n=$(this).attr("data-valign-to"),r=$(this).attr("data-valign-from"),o=$(this).attr("data-valign-property");if(void 0==a&&(a=window),void 0==n&&(n=$(window).width()),void 0==r&&(r=0),void 0==o&&(o="margin-top"),t<=parseInt(n)&&t>=parseInt(r)){var d=$(a).outerHeight(),e=$(i).outerHeight();if(d>e)return $(i).css(o,(d-e)/2)}return $(i).css(o,0)})};