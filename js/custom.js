$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._mv').each(function () {
            if (sct + $(window).innerHeight() - 100 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');

    });


    $('.gnb').on('wheel touchmove', function (e) {
        e.preventDefault();
    });
    $('.Main__content').fullpage({
        anchors: ['MAIN', 'COLLECTION', 'SECTION01', 'SECTION02', 'BEST', 'NEW'],
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        scrollOverflow: true,

        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.side_gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        }
    });


    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub_menu').slideUp();
    });

    $(window).on('resize', function () {
        $('.gnb .sub_menu').removeAttr('style');
    })

})
