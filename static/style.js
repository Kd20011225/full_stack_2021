/*!
 * Start Bootstrap - Clean Blog v4.0.0-beta (https://startbootstrap.com/template-overviews/clean-blog)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)
 */
!function(i){"use strict";i("body").on("input propertychange",".floating-label-form-group",function(o){i(this).toggleClass("floating-label-form-group-with-value",!!i(o.target).val())}).on("focus",".floating-label-form-group",function(){i(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){i(this).removeClass("floating-label-form-group-with-focus")});if(i(window).width()>1170){var o=i("#mainNav").height();i(window).on("scroll",{previousTop:0},function(){var s=i(window).scrollTop();s<this.previousTop?s>0&&i("#mainNav").hasClass("is-fixed")?i("#mainNav").addClass("is-visible"):i("#mainNav").removeClass("is-visible is-fixed"):s>this.previousTop&&(i("#mainNav").removeClass("is-visible"),s>o&&!i("#mainNav").hasClass("is-fixed")&&i("#mainNav").addClass("is-fixed")),this.previousTop=s})}}(jQuery);
