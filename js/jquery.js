$(function () {
    //보여지는 배너를 체크할 변수
    let showBanner = 0;
    let moveX = 0;

    //복사
    let cloneObj = $(".banner>li").eq(0).clone();
    $(".banner").append(cloneObj);
    let liWidth = $(".banner>li").eq(0).width();
    let mliWidth = $(".mo_banner>li").eq(0).outerWidth();
    let mcloneObj = $(".mo_banner>li").eq(0).clone();
    $(".mo_banner").append(mcloneObj);
    let wWidth = $(window).width();

    //배너의 개수
    let count = $(".banner>li").length;
    console.log(count);

    //자동으로 이동
    let timer;

    function moveSlide() {
        if (wWidth >= 767) {
            moveX = -liWidth * showBanner;
        }
        else {
            moveX = -mliWidth * showBanner;
        }
        console.log(moveX, liWidth, mliWidth)
        $(".banner,.mo_banner").stop().animate({
            "margin-left": moveX + "px",
        }, 500);

        if (wWidth >= 767) {
            if (showBanner === 3) {
                $(".pager>li").eq(0).addClass("active")
                    .siblings("li").removeClass("active");
            } else {

                $(".pager>li").eq(showBanner).addClass("active")
                    .siblings("li").removeClass("active");
            }
        }
        else {
            if (showBanner === 3) {
                $(".m_pager>li").eq(0).addClass("active")
                    .siblings("li").removeClass("active");
            } else {

                $(".m_pager>li").eq(showBanner).addClass("active")
                    .siblings("li").removeClass("active");
            }
        }
    }

    //오른쪽 버튼 클릭하면 배너한개를 왼쪽으로 이동
    $(".rightBtn").on("click", function (e) {
        e.preventDefault();
        console.log(showBanner);
        if (showBanner === count - 1) {
            showBanner = 0;
            $(".banner,.mo_banner").css("margin-left", 0);
        }
        showBanner++;
        moveSlide();
    });

    //왼쪽 버튼 클릭하면 배너한개를 오은쪽으로 이동
    $(".leftBtn").on("click", function (e) {
        e.preventDefault();
        if (wWidth >= 767) {
            x = -liWidth
        }
        else {
            x = -mliWidth
        }
        if (showBanner === 0) {
            showBanner = count - 1;
            $(".banner,.mo_banner").css("margin-left", -(count - 1) * x);
        }
        showBanner--;
        moveSlide();
    });

    //버튼을 클릭하면 해당하는 배너가 슬라이딩 되면서 보이도록
    $(".pager>li,.m_pager>li").on("click", function (e) {
        e.preventDefault();
        console.log($(this).index());
        showBanner = $(this).index();
        moveSlide();
    });

    // 팝업
    $(function () {
        var overlay = $('<div id="overlay"></div>');
        overlay.show();
        overlay.appendTo(document.body);
        $('.popup').show();
        $('.close').click(function () {
            $('.popup').hide();
            overlay.appendTo(document.body).remove();
            return false;
        });




        $('.x').click(function () {
            $('.popup').hide();
            overlay.appendTo(document.body).remove();
            return false;
        });
    });

    function initSize(){
        wWidth=$(window).width();
        liWidth=wWidth;
        mliWidth=wWidth;
        showBanner=0;
        moveX=0;
        $(".banner,.mo_banner").css("margin-left", moveX + "px");
        console.log(wWidth);
    }
    //resize
    $(window).on("resize",function(){
        initSize();
    })
});