function swapImgToSvg(e){var o=$(e),t=o.attr("src"),i=o.attr("id");$.get(t,function(e){var t=$(e).find("svg");void 0!==i&&(t=t.attr("id",i)),t=t.removeAttr("xmlns:a"),o.replaceWith(t)},"xml")}swapImgToSvg(".custom-logo-link img"),function($){function e(){var e=wp.customize("header_image")();return""!==e&&"remove-header"!==e}function o(){var e=wp.customize("external_header_video")(),o=wp.customize("header_video")();return""!==e||0!==o&&""!==o}$(".site-top .custom-logo-link").is(":visible")&&$(".site-top .site-title").hide(),wp.customize("blogname",function(e){e.bind(function(e){$(".site-title a").text(e)})}),wp.customize("blogdescription",function(e){e.bind(function(e){$(".site-description").text(e)})}),wp.customize("site_top_wrap",function(e){e.bind(function(e){$(".site-top-inner-container").removeClass("wrap"),$(".site-top-inner-container").addClass(e)})}),wp.customize("site_top_layout",function(e){e.bind(function(e){$(".site-top .flex").removeClass("no-logo logo-left logo-right logo-center logo-in-middle logo-center-under"),$(".site-top .flex").addClass(e),"logo-in-middle"==e&&$(document).trigger("resize"),"logo-in-middle"!=e&&$(".li-logo-holder").length&&($(".site-logo").prependTo(".site-top-inner-container"),$(".li-logo-holder").remove())})}),wp.customize("custom_logo",function(e){e.bind(function(e){""!=e?$(".site-top .site-title").hide():$(".site-top .site-title").show()})}),wp.customize("header_textcolor",function(e){e.bind(function(e){"blank"===e?($(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}),$("body").addClass("title-tagline-hidden")):(e.length||$("#seasaltpress-custom-header-styles").remove(),$(".site-title, .site-description").css({clip:"auto",position:"relative"}),$(".site-branding, .site-branding a, .site-description, .site-description a").css({color:e}),$("body").removeClass("title-tagline-hidden"))})}),wp.customize("colorscheme",function(e){e.bind(function(e){$("body").removeClass("colors-light colors-dark colors-custom").addClass("colors-"+e)})}),wp.customize("colorscheme_hue",function(e){e.bind(function(e){var o=$("#custom-theme-colors"),t=o.data("hue"),i=o.html();i=i.split(t+",").join(e+","),o.html(i).data("hue",e)})}),wp.customize("page_layout",function(e){e.bind(function(e){"one-column"===e?$("body").addClass("page-one-column").removeClass("page-two-column"):$("body").removeClass("page-one-column").addClass("page-two-column")})}),$.each(["external_header_video","header_image","header_video"],function(t,i){wp.customize(i,function(t){t.bind(function(){e()?$(document.body).addClass("has-header-image"):$(document.body).removeClass("has-header-image"),o()||$(document.body).removeClass("has-header-video")})})})}(jQuery);