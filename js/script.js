// This code for crosbrauser
$(document).ready(function () {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isFirefox) $('body').addClass('isFirefox');
    if (isSafari) $('body').addClass('isSafari');
    if (isIE) {
        $('body').addClass('isIE');
        $('.navbar-default, .blockPlay, #wrapper').removeClass('wow flipInX bounceInDown');
        $('.navbar-default').removeAttr('data-wow-delay')
        $('.ninja-start').css('display', 'none');
    }
    if (isEdge) {
        $('body').addClass('isEdge');
        $('.ninja-start').css('display', 'none');
    }
});
function detectmob() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}
$(document).ready(function () {
    new WOW().init();
/*menu*/

    $(".dropdown").on('mouseenter', function () {
        $(this).children("span").toggleClass("glyphicon-menu-up glyphicon-menu-down")
    });
    $(".dropdown").on('mouseleave', function () {
        $(this).children("span").toggleClass("glyphicon-menu-up glyphicon-menu-down")
    });

/*end menu*/
/*slider*/
$('.carousel').carousel({
    interval: 7000,
    pause: null
})
    
const textBlock = document.querySelector('.block_h3');
var getReplaceText = document.querySelector('.for_block_h3');
var newText = getReplaceText ? getReplaceText.innerText : '';

function replaceText() {
    $('.block_h3').addClass('active');
    if (textBlock)
    TweenMax.to(textBlock, 2, {
        text: {
            value:newText
        }
    });
}
var bodyHeight = $(document).height();
if (device.ipad()) {
    setTimeout(replaceText, 1000);
    /*
        $('body').addClass('isipad');
        $('body').css('height', bodyHeight - 57);
    */

} else {
    if ($(document).width() < 768) {
        setTimeout(replaceText, 1000);
    } else {
        setTimeout(replaceText, 3000);
    }
}

$('#slider1').on('slide.bs.carousel', function (e) {

    if (e.relatedTarget.classList[1] == 'item_2') {
        const textBlock2 = document.querySelector('.block_h3_2');
        var getReplaceText2 = document.querySelector('.for_block_h3_2');
        const newText2 = getReplaceText2.innerText;

        function replaceText2() {
            TweenMax.to(textBlock2, 2, {
                text: {
                    value: newText2
                }
            });
        }
        setTimeout(replaceText2, 3000);
        setTimeout(function () {
            $('.item_2 h2').addClass('active');
        }, 2500);
    }
    if (e.relatedTarget.classList[1] == 'item_3') {
        setTimeout(function () {
            $('.sl3_').addClass('active');
        }, 1000)

        const textBlock3 = document.querySelector('.item_3_h4');
        var getReplaceText3 = document.querySelector('.for_item_3_h4');
        const newText3 = getReplaceText3.innerText;
        function replaceText3() {
            TweenMax.to(textBlock3, 2, {
                text: {
                    value: newText3
                }
            });
        }
        setTimeout(replaceText3, 3500);
    }
    
    if (e.relatedTarget.classList[1] == 'item_4') {
        setTimeout(function () {
            $('#text_block_pyramid_h2').addClass('active');
    }, 3500);
    const textBlock4 = document.querySelector('.text_block_pyramid_h4');
    var getReplaceText4 = document.querySelector('.for_text_block_pyramid_h4');
    const newText4 = getReplaceText4.innerText;
    function replaceText4() {
        TweenMax.to(textBlock4, 2, {
            text: {
                value: newText4
            }
        });
    }
    setTimeout(replaceText4, 4000);

    setTimeout(function () {
        $('.text_block_pyramid_2 h4').addClass('active');
    }, 4500);
    }
});
});
/*end slider*/
/*code for Game page*/
if ($('#games').length) {

var line_for_svg = {
    "line_for_svg": {
        "strokepath": [
             {
                 "path": "M23.9,275.2H2V239",
                 "duration": 1000
             },
            {
                "path": "M2,116.8V1.8h256v17.8",
                "duration": 1000
            },
            {
                "path": "M258,196.5v54.8",
                "duration": 1000
            }
        ],
        "dimensions": {
            "width": 260,
            "height": 277
        }
    }
};
var line_for_svg2 = {
    "line_for_svg2": {
        "strokepath": [
             {
                 "path": "M23.9,275.2H2V239",
                 "duration": 1000
             },
            {
                "path": "M2,116.8V1.8h256v17.8",
                "duration": 1000
            },
            {
                "path": "M258,196.5v54.8",
                "duration": 1000
            }
        ],
        "dimensions": {
            "width": 260,
            "height": 277
        }
    }
};
var line_for_svg3 = {
    "line_for_svg3": {
        "strokepath": [
             {
                 "path": "M23.9,275.2H2V239",
                 "duration": 1000
             },
            {
                "path": "M2,116.8V1.8h256v17.8",
                "duration": 1000
            },
            {
                "path": "M258,196.5v54.8",
                "duration": 1000
            }
        ],
        "dimensions": {
            "width": 260,
            "height": 277
        }
    }
};

$(document).ready(function () {
    $('#line_for_svg').lazylinepainter(
    {
        "svgData": line_for_svg,
        "strokeWidth": 3,
        "strokeColor": "#000",
        drawSequential: false
    });
    setTimeout(function () {
        $('#line_for_svg').lazylinepainter('paint')
    }, 200);
    
});
$(document).ready(function () {
    $('#line_for_svg2').lazylinepainter(
    {
        "svgData": line_for_svg2,
        "strokeWidth": 3,
        "strokeColor": "#000",
        drawSequential: false
    });
    setTimeout(function () {
        $('#line_for_svg2').lazylinepainter('paint')
    }, 400);
});
$(document).ready(function () {
    $('#line_for_svg3').lazylinepainter(
    {
        "svgData": line_for_svg3,
        "strokeWidth": 3,
        "strokeColor": "#000",
        drawSequential: false
    });
    setTimeout(function () {
        $('#line_for_svg3').lazylinepainter('paint')
    }, 600);
});
}

$('.playBlock').on('mouseover', '.games_playe', function () {
    var pathLength = $(this).siblings('.svg_line').find('path');
    var strokeDasharray = $(this).siblings('.svg_line').find('path');
    for (i = 0; i <= pathLength.length - 1 ; i++) {
        var count;
        count = parseInt($(strokeDasharray[i]).css('stroke-dasharray'));
        $(strokeDasharray[i]).css('stroke-dashoffset', -count);
        $(strokeDasharray[i]).css('stroke', '#f13600');
    }
});

$('.playBlock').on('mouseout', '.games_playe', function () {
    var pathLength = $(this).siblings('.svg_line').find('path');
    var strokeDasharray = $(this).siblings('.svg_line').find('path');
    for (i = 0; i <= pathLength.length - 1 ; i++) {
        //console.log(strokeDasharray[i]);
        $(strokeDasharray[i]).css('stroke', '#000');
        $(strokeDasharray[i]).css('stroke-dashoffset', 0);
    }
});
/*end code for Game page*/

/*code for Roulette page*/
$(document).ready(function () {
    $('.innerTimeIcon').addClass('active');
    $('.seconds60_count').prop('test', 60).animate({
        test: 0
    }, {
        duration: 60000,
        easing: 'linear',
        step: function (now) {
            $('.seconds60_count').text(Math.ceil(now))
        }
    });
})
$(document).ready(function () {
    if ($(document).height() > 630) {
        var docHeight = $(document).height();
        docHeight = docHeight / 1000;
        $('#one').css('transform', 'scale(' + docHeight + ')');
    }
});
$(window).resize(function () {
    if ($(document).height() > 630) {
        var docHeight = $(document).height();
        docHeight = docHeight / 1000;
        $('#one').css('transform', 'scale(' + docHeight + ')');
    }
});

/*end code for Roulette page*/

/*duel*/
$(document).ready(function () {
    setTimeout(function () {
        $('.duel_bg').addClass('active');
    }, 100);

    $('.duel_vs').on('mouseenter', function () {
        $('.duel').addClass('right_win active'); //left_win  ||  right_win
        $('.duel_vs').addClass('active');
        setTimeout(function () {
            $('.winner_block').addClass('active');
        }, 7000);
        
    });
});
/*end duel*/
/*cash_roulette*/
$(document).ready(function () {

    $('.take_this_place').on('mouseenter', 'a', function () {
        $('.cash_roulette_game').addClass('active');
        setTimeout(function () {
            $('.suriken_cash_roulette').addClass('active4');
        }, 2000);
    });
});
/*
var winWidth;
$(document).ready(function () {
    if ($(document).innerWidth() < 1200) {
        winWidth = $(document).innerWidth() / 1200;
        $('.resize').css('transform', 'scale(' + winWidth + ')');
    }
});
$(window).resize(function () {
    if ($(document).innerWidth() < 1200) {
        winWidth = $(document).innerWidth() / 1200;
        $('.resize').css('transform', 'scale(' + winWidth + ')');
        //console.log(winWidth);
    }
});
*/
/* end cash_roulette*/

/*cells*/
$('.c-ava-block').on('mouseenter', function () {
    $(this).addClass('active active8');
    if ($('.c-ava-block').has('active8')) {
        for (i = 0; i <= $('.c-ninja').length; i++) {
            (function (ind) {
                setTimeout(
                    function () {
                        
                        $('.c-ninja').eq(ind).addClass('active');
                        $('.sub-c-ninja8').removeClass('active');
                    },
                    parseInt(Math.random() * 7000));
            })(i);

        }
    }
});
$('.cells-winner-close').on('click', function () {
    $('.cells-winner').css('display', 'none');
})


/*end cells*/

/*pyramid game*/
$('.pg-center-row button').on('mouseenter', function () {
    if (!$(this).hasClass('disabled')) {
        $(this).addClass('hover');
    }
})
$('.pg-center-row button').on('mouseleave', function () {
    $(this).removeClass('hover');
})


$('.pg-center-row button').on('click', function () {
    if (!$(this).hasClass('disabled')){
        $(this).addClass('active');
    }
     
})


if ($(document).innerWidth() > 991){
    setTimeout(function () {
        $('.ninja-start ').addClass('active');
        function mySetTimeout(numberKey, time) {
            setTimeout(function () {
                $('.pg-center-row button').each(function (key, value) {
                    if (key == numberKey) {
                        $(value).addClass('rotate active');
                    }
                });
            }, time);
        }
   
        mySetTimeout(28, 500);
        mySetTimeout(26, 700);
        mySetTimeout(21, 1700);
        mySetTimeout(19, 1800);
        mySetTimeout(17, 2700);
        mySetTimeout(12, 2800);
        mySetTimeout(10, 3700);
        mySetTimeout(7, 3800);
        mySetTimeout(4, 4700);
        mySetTimeout(2, 4800);
   
        setTimeout(function () {
            $('.pg-center-winer').addClass('active');
        }, 6000);
        setTimeout(function () {
            $('.pg-center-winer').removeClass('active');
            $('.pg-center-row button').removeClass('rotate active');
            $('.ninja-start').css('display', 'none');
        }, 9000);
    }, 500);
} else {
    $('.ninja-start').css('display', 'none');
}



/*end pyramid game*/