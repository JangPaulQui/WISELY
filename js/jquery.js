$(function(){
    //보여지는 배너를 체크할 변수
    let showBanner = 0;
    let moveX = 0;
    
    //복사
    let cloneObj = $(".banner>li").eq(0).clone();
    $(".banner").append(cloneObj);
    let liWidth = $(".banner>li").eq(0).width();

    //배너의 개수
    let count = $(".banner>li").length;
    console.log(count);

    //자동으로 이동
    let timer;

    function moveSlide(){
        moveX = -liWidth * showBanner;
        $(".banner").stop().animate({
            "margin-left":moveX+"px",
        },500);
        
        if(showBanner === 3){
            $(".pager>li").eq(0).addClass("active")
                .siblings("li").removeClass("active");
        }else{

            $(".pager>li").eq(showBanner).addClass("active")
                .siblings("li").removeClass("active");
        }
    }

    //오른쪽 버튼 클릭하면 배너한개를 왼쪽으로 이동
    $(".rightBtn").on("click", function(){
        console.log(showBanner);
        if(showBanner === count-1){
            showBanner = 0;
            $(".banner").css("margin-left", 0);
        }
        showBanner++;
        moveSlide();
    });

    //왼쪽 버튼 클릭하면 배너한개를 오은쪽으로 이동
    $(".leftBtn").on("click", function(){
        if(showBanner === 0){
            showBanner = count-1;
            $(".banner").css("margin-left", -(count-1)*liWidth);
        }
        showBanner--;
        moveSlide();
    });
    
    //버튼을 클릭하면 해당하는 배너가 슬라이딩 되면서 보이도록
    $(".pager>li").on("click", function(){
        console.log($(this).index());
        showBanner = $(this).index();
        moveSlide();
    });

    //3초마다 배너가 하나씩 이동하도록
    //오른쪽 버튼을 클릭한것처럼 한개씩 왼쪽으로
    timer = setInterval(()=>{
        $(".rightBtn").trigger("click");
    },3000)

    //배너위에 마우스를 올리면 setInterval 중지
    //마우스가 벗어나면 자동실행
    $("#mainBanner").on({
        "mouseover":function(){
            clearInterval(timer);
        },
        "mouseout":function(){
            timer = setInterval(()=>{
                $(".rightBtn").trigger("click");
            },3000)
        }
    })

});