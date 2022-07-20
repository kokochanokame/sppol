//画像切り替え
$(window).on("load", function () {
    $(".js-thumnail img").on("click", function () {
        let img_src = $(this).attr("src");
        $("#slideshow-img img").attr("src", img_src);
    });
});


//アコーディオン
$(function(){
    $('#accordion').click(function(){
        $(this).next('.accordion__wrapper').slideToggle();
        $(this).toggleClass("open");
    });
});


//マウスストーカー
var
    cursor = $(".cursor"),
    follower = $(".follower"),
    cWidth = 8, //カーソルの大きさ
    fWidth = 40, //フォロワーの大きさ
    delay = 20, //数字を大きくするとフォロワーがより遅れて来る
    mouseX = 20, //マウスのX座標
    mouseY = 20, //マウスのY座標
    posX = 0, //フォロワーのX座標
    posY = 0; //フォロワーのX座標

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / delay;
        posY += (mouseY - posY) / delay;

        TweenMax.set(follower, {
            css: {
                left: posX - (fWidth / 2),
                top: posY - (fWidth / 2)
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX - (cWidth / 2),
                top: mouseY - (cWidth / 2)
            }
        });
    }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});


//スムーススクロール
$('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $('body,html').animate({
        scrollTop: position
    }, speed, 'swing');
    return false;
});