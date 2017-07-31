"use strict";

$(function()
 {
    //efekty wbudowane w jQuery
    //hide show
    //$("#test").hide(2000).show(2000);
    
    //$("#test").fadeOut(3000).fadeIn(3000);
    
    //$("#test").slideUp(2000).delay(2000).slideDown(2000).delay(2000);
    
    
    /*$("h1").on("click",function()
    {
        $("p").toggle(10000); 
    });*/

    $("#wiecej").click(function()
    {
        $("#all").fadeIn(3000);
        $("#all").fadeOut(500);
    });
    
    //animacja niestandardowa
    function animacja2()
    {
        console.log("Teraz ja");
        $("h3").animate({"font-size":"1em", "margin-left":"0px"},2000, animacja2);
    }
    $("h3").animate({"font-size":"3em", "margin-left":"100px"},2000, animacja2);
    
    
    
    
    
});