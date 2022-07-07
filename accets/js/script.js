$(function(){
    $('.slider').slick({
        autoplay: true,//自動的に動き出すか。
        infinite: true,//スライドをループさせるかどうか。
        autoplaySpeed: 3000,//スライドのスピード。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                }
            }
        ],
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえにする
        variableWidth: true,//幅の違う画像の高さを揃えて表示
        dots: true,//下部ドットナビゲーションの表示
    });

    $('a[href^="#"]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 80;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });

    $('.burger').click(function(){
        const burger = document.querySelector(".burger")
        const nav = document.querySelector(".navi")
        const navi = document.querySelectorAll(".navi li")

        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active")

            //forwards　アニメーションをとどまらせる
            navi.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinksFade 0.5s ease forwards ${index/7 + 0.4}s`;
                }
            });
            burger.classList.toggle("toggle");
        });
    });

    lightbox.option({
        'resizeDuration': 300,//時間
        'wrapAround': true,//写真ループ
    })
    
});
