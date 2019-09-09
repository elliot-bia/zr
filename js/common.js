var commonApp = function () {
    //主导航
    var mainNav = function () {
        if($(window).width()<1025){
            // $('.header').removeClass('header-hover');
        }
        $('#j_search_trigger').on('click', function () {
            $(this).toggleClass('active');
            $('.search-form-w').fadeToggle();
        });
        $('#j_menu_trigger').on('click', function () {
            $(this).toggleClass('active');
            $('.do-lang').fadeToggle();
            $('.do-top-nav').fadeToggle();
            // $(".header").toggleClass("header-hover");
        });
        /*$('.header').hover(function () {
         $(this).addClass('header-hover');
         },function () {
         $(this).removeClass('header-hover');
         });*/
        var mainNavItem = $('.do-top-nav>li>a');

        if ($(window).width() < 1025) {
            mainNavItem.each(function () {
                var $this = $(this);
                if ($this.next().length) {
                    $this.on('click', function (e) {
                        e.preventDefault();
                    })
                }
            })
        }else{
            mainNavItem.hover(function () {
                $(this).parent().addClass('show-sub').siblings().removeClass('show-sub');
            })
        }
    };
    var indexAnimation = function () {
        $("#dmdwpt").waypoint(function (direction){
            $("#dmdwpt").find('h4').animateCss("fadeInDown")
            $("#dmdwpt").find('img').animateCss("fadeInUp")
            this.destroy()
        },{
            offset: '50%',
            context: document.getElementById('overflow-scroll')
        })
    };

    var slider = function () {
        $('#j_banner').bxSlider({
            pagerCustom: '#bx-pager',
            controls: false,
            mode: 'fade',
            auto: 1
        });
        $('#j_team_list').bxSlider({
            pagerCustom: '#bx-pager',
            controls: false,
            mode: 'fade',
            touchEnabled: false
        });

        // var list_dev = $('#j_list_dev');
        // var dev_slide = list_dev.bxSlider({
        //     minSlides: 3,
        //     maxSlides: 3,
        //     pause: 2500,
        //     moveSlides: 1,
        //     mode: 'vertical',
        //     auto: 1,
        //     slideMargin: 30,
        //     pager: 0,
        //     autoHover: 1,
        //     touchEnabled: false,
        //     onSliderLoad: function (index) {
        //         list_dev.find('li').addClass('light-text');
        //         list_dev.find('li:not(".bx-clone")').first().next().removeClass('light-text');
        //     },
        //     onSlideAfter: function ($slideElement, oldIndex, newIndex) {
        //         console.log($slideElement.index());
        //         $slideElement.addClass('light-text').next().removeClass('light-text');
        //     }
        // });

        //产品页swiper
        // var swiperContainer = $('#swiper-container-pro');
        // if (swiperContainer.length) {
        //     var swiper = new Swiper('#swiper-container-pro', {
        //         pagination: '.swiper-pagination',
        //         direction: 'vertical',
        //         //height: '100%',
        //         effect: 'slide',
        //         autoHeight: true,
        //         mousewheelControl: true,
        //         paginationClickable: true,
        //         speed: 800,
        //         onSlideChangeEnd: function (swiper) {
        //             if (swiper.activeIndex) {
        //                 $('.header').addClass('none');
        //                 if ($(window).width() < 769) {
        //                     var navIcon = $('<i class="iconfont icon-daohang do-sub-nav-icon"></i>');
        //                     $('body').append(navIcon);
        //                     navIcon.on('click', function () {
        //                         $('.pro-nav-w').toggleClass('show');
        //                     })
        //                 } else {
        //                     $('.pro-nav-w').addClass('show');
        //                 }
        //                 if(swiper.activeIndex==3){
        //                     $('.j_animation_box').addClass('active');
        //                 }
        //                 if(swiper.activeIndex==2){
        //                     $('.dk-s8-box').addClass('active');
        //                     setTimeout(function () {
        //                         $('.do-flash-point').addClass('active');
        //                     },3000)
        //                 }
        //                 if(swiper.activeIndex==1){
        //                     $('.dk-s7-box').addClass('active');
        //                 }
        //                 if(swiper.activeIndex==7){
        //                     $(".dk-s4-box").addClass("active")
        //                 }
        //             } else {
        //                 $('.header').removeClass('none');
        //                 if ($(window).width() < 769) {
        //                     $('.do-sub-nav-icon').hide();
        //                 } else {
        //                     $('.pro-nav-w').removeClass('show');
        //                 }
        //             }
        //             if (swiper.isEnd) {
        //                 $(".dk-s4-box").addClass("active");
        //                 var slidePara = $('.slide-para');
        //                 swiper.disableMousewheelControl();
        //                 $('.pro-nav-w').addClass('border-bd');
        //                 slidePara.scroll(function () {
        //                     if(slidePara.scrollTop()==0){
        //                         swiper.enableMousewheelControl();
        //                     }else{
        //                         swiper.disableMousewheelControl();
        //                     }
        //                 })
        //             }
        //         },
        //         onSlideChangeStart: function(){
        //             $('.pro-nav-w').removeClass('border-bd');
        //         }
        //     });
        //     $(".j_dk-slide-a a").on('click',function (e) {
        //         e.preventDefault();
        //         var index=$(this).parent().index()+3;
        //         swiper.slideTo(index,1000,false);
        //     });
        //     $(".j_rang").on('click',function (e) {
        //         e.preventDefault();
        //         var index=$(this).data("rang");
        //         swiper.slideTo(index,1000,false);
        //         if(index==1){
        //             $('.dk-s7-box').addClass('active');
        //         }
        //     });
        // }
        var swiperMore = $('#swiper-more');
        if (swiperMore.length) {
            var swiper = new Swiper(swiperMore, {
                pagination: '.sub-pagination',
                direction: 'vertical',
                //height: '100%',
                effect: 'slide',
                autoHeight: true,
                mousewheelControl: true,
                paginationClickable: true,
                speed: 800
            });
        }

        var swiperContainer = $('#swiper-container-pro');
        if (swiperContainer.length) {
            var $header = $('.header');
            $('.swiper-wrapper').first().append($header);

            var proNav = $('.pro-nav-w'),
                currentTop = swiperContainer.offset().top;
            var proNavTop = proNav.offset().top;

            var animationBox = $('.j_animation_box');
            animationBox.each(function () {
                var $this = $(this);
                var slideTop = $this.parents('.swiper-slide').offset().top;
                // console.log(slideTop);
                $('.swiper-wrapper').scroll(function () {
                    var docScroll = $('.swiper-wrapper').scrollTop()+$(window).height()/3;
                    if(docScroll>slideTop){
                        $this.addClass('active');
                        setTimeout(function () {
                            $('.do-flash-point').addClass('active');
                        },3000);
                    }else{
                        // $this.removeClass('active');
                        // $('.do-flash-point').removeClass('active')
                    }
                });
            });

            $('.swiper-wrapper').scroll(function () {
                var docScroll = $('.swiper-wrapper').scrollTop();
                // if(docScroll>currentTop){
                //     $('.header').addClass('none');
                //     // $('.pro-nav-w').addClass('show');
                // }else{
                //     $('.header').removeClass('none');
                //     // $('.pro-nav-w').removeClass('show');
                // }
                //滚动到相应高度后添加动效

                // 导航浮顶
                if(proNav.length){
                    if ($(window).width() < 1024) {
                        var navIcon = $('#j_pro_nav');
                        if(docScroll>proNavTop){
                            navIcon.css({
                                display:'block',
                                width:'32px',
                                height:'32px'
                            });

                        }else{
                            navIcon.fadeOut();
                        }
                    } else {
                        if(docScroll>proNavTop){
                            proNav.addClass('show');
                        }else{
                            proNav.removeClass('show');
                        }
                    }

                }
            });
            $('#j_pro_nav').on('click',function () {
                proNav.toggleClass('show');
            });
        }

    };

    var recruitList = function () {
        $('#j_recuit_list a.j_recuit').on('click', function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('active').siblings().removeClass('active');
        });
        $('#j_list_q li').on('click', function () {
            $(this).toggleClass('active').siblings().removeClass('active');
        })
    };

    // tab切换
    var tab = function () {
        $('.j_tab a').on('click', function (e) {
            e.preventDefault();
            var id = "#" + $(this).data('tab');
            $(this).parent().addClass('active').siblings().removeClass('active');
            $(id).addClass('active').siblings().removeClass('active');
        });
        $('#j_toggle_trigger a').on('click', function () {
            var $cnt = $('.do-control-tab'),
                $close = $cnt.find('.icon-close');

            if($close.length < 1){
                $close = $('<i class="iconfont icon-close close-iframe">');
                $cnt.append($close);
                $close.on('click', function () {
                    $cnt.fadeOut();
                });
            }
            $cnt.fadeIn();
        });
        if ($(window).width() < 769) {
            $('.do-control-tab').children().first().addClass('active');
        }
    };

    //表单点击
    var radiobox = function () {
        $(".radiobox").on("click", function () {
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
            $(this).find("i").css("background-color", "#ea2127");
            $(this).parent().siblings().find("i").css("background-color", "#cccccc");
        })
    };

    var Layer = function () {
        var myOptions = {
            "nativeControlsForTouch": false,
            controls: true,
            autoplay: true,
            width: "640",
            height: "400",
        };

        $('.j_video_trigger').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            // 调用video.js播放视频
            $('#j_v_w').fadeIn();
            $('#j_close_v').on('click',function () {
                $('#j_v_w').fadeOut();
                $('video').trigger('pause');
            });
        });


        $('.j_iframe_order').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            var $url = $this.data('iframe');
            console.log($url);

            var iframe = layer.open({
                type: 2,
                title: 0,
                skin: 'iframe-w',
                scrollbar: 0,
                content: $url,
                // area: ['1920px', '100%'],
                success: function (layero, index) {
                    var body = layer.getChildFrame('body', index);
                    var closeIcon = $('<i class="iconfont icon-close close-iframe"></i>');
                    body.append(closeIcon);
                    closeIcon.on('click', function () {
                        layer.close(index);
                        $(this).remove();
                    });
                    body.find('.do-left-video').parent().addClass('do-i-v-w');
                }
            });
            var winH = $(window).height();
            var winW = $(window).width();
            layer.style(iframe,{
                height:winH,
                width: winW,
                top: 0,
                left: 0
            })
        });
        $('.j_iframe_trigger').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.parents('.swiper-slide').next().toggleClass('none');
            $this.find('.iconfont').toggleClass('rotate');
            // var knowMore = $('#j_more_w').bxSlider({
            //     controls: false,
            //     mode: 'vertical',
            // });
        });
    };

    //调整svg大小
    var svgAdjust = function () {
        var svg = $('svg');
        svg.each(function () {
            var size = $(this).attr('viewBox').split(" ");
            var ratio = size[3]/size[2];
            var svgWidth = $(this).parent().width();
            $(this).parent().height(svgWidth*ratio);
        });
        //如果是IE,隐藏svg的动画元素，隐藏360选择文字
        var a1 = navigator.userAgent;
        var yesIE = a1.search(/Trident/i);
        if (yesIE>0){
            $('svg').find('g').hide();
            $('.laser-section5').find('.img-tip').addClass('none');
        }
    };

    var tabTarget = function () {
        $('.j_rang').each(function () {
            var that = $('#'+$(this).data('rang'));
            if(that.length < 1){
                return ;
            }
            var targetTop = that.offset().top;
            $(this).on('click',function (e) {
                e.preventDefault();
                $('.swiper-wrapper').animate({scrollTop: targetTop},200);
            });
        })
    };

    //产品导航参数跳转和返回顶部
    var paraLink = function () {

        if($('.pro-nav-list').length){
            if($('.slide-para').length > 0){
                var slideParaTop = $('.slide-para').offset().top;
                    $('.pro-nav-list').find('a').first().on('click',function (e) {
                    e.preventDefault();
                    $('.swiper-wrapper').animate({scrollTop: slideParaTop},600);
                });
            }
            if($("#yee-example").length > 0){
                var exampleCardTop = $("#yee-example").offset().top;
                $('.j_to_example').on('click',function (e) {
                    e.preventDefault();
                    $('.swiper-wrapper').animate({scrollTop:exampleCardTop },600);
                })
            }
            $('.j_back_top a').on('click',function (e) {
                e.preventDefault();
                $('.swiper-wrapper').animate({scrollTop: 0},600);
                if($(window).width()<769){
                    $('.pro-nav-w').removeClass('show');
                    $('#j_pro_nav').fadeOut();
                }
            })
        }
    };
    var heightAdjust = function () {
        if($(window).width()>1025){
            var h = $('.do-about-text').height();
            $('.do-about').find('.do-img-w').height(h);
        }
    };

    $("#j_video").on("click",function(e){
        e.preventDefault();
        $(".j_video_trigger").eq(0).trigger("click");
    });


    var browserTip = function () {
        $('#browserModal').on('click',function () {
            $(this).fadeOut();
        });
        $('.modal-body').on('click',function (e) {
            e.stopPropagation();
        })
    };

    return {
        init: function () {
            heightAdjust();
            mainNav();
            slider();
            recruitList();
            tab();
            indexAnimation();
            Layer();
            // radiobox();
            paraLink();
            svgAdjust();
            tabTarget();
            browserTip();
        }
    }
}();