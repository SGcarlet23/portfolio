$(function(){
    $('.slider').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        autoplaySpeed: 3000,//スライドのスピード。初期値は300。
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
    /*
    $('a[href^=#]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false
    }); 
    $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;	//idの上部の距離を取得
        $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
    }); */
    $('a[href^="#"]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
