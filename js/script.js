window.onload = function(){
    //햄버거 버튼
    const menuWrap = document.querySelector(".menuWrap");
    const ham = document.querySelector(".hamClose>a");

    function toggleMenu(){
        if(ham.classList.contains("on")){
            ham.classList.remove("on");
            menuWrap.classList.remove("activeMenu");
        }
        else{
            ham.classList.add("on");
            menuWrap.classList.add("activeMenu");
        }
    }

    ham.addEventListener("click", toggleMenu)

    

}