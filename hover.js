$(document).ready(function(){

    $(".pics").hover(function () {
        var oldImg = $(this).attr('src');
        var newImg = $(this).attr('data-alt-src');
        $(this).attr("data-alt-src", oldImg);
        $(this).attr("src", newImg);
    }, function(){
        var oldImg = $(this).attr('src');
        var newImg = $(this).attr('data-alt-src');
        $(this).attr("data-alt-src", oldImg);
        $(this).attr("src", newImg);
    })

    // function swapper(){
    //     var newImg = $(this).attr('data-alt-src');
    //     var oldImg = $(this).attr('src')
    //     $(this).attr('data-alt-src', oldImg);
    //     $(this).attr('src', newImg);
    // }
    // $("img.pics").hover(function () {
    //     swapper();
    // }, function () {
    //   swapper();
    // })

    // $("button").click(function(){
    //     $("img").show();
    // })
})
