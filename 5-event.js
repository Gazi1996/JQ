"use strict";
//alert();

$(function()
{
    $("#klawisz").click(function()
    {
        var tekst=$("#login").val();
        $('form').append(tekst);   
    });
    
    $("#klawisz").on(
    {
         "click": function()
        {
            $('form').append("Kliknąłeś raz");
        },
        
        "mouseover": function()
        {
            $("form").append("Najechałeś myszką");
        },
        
        "click": function()
        {
            $(this).css("background-color", "orange");
        }
        
        
    });
    
    $("p").on("click",function()
    {
        $(this).toggleClass("blue");
    });
    
    $("h1").on("click",function()
    {
        $("p").toggle(10000); 
    });
    
    //kilka zdarzeń
    $('h1').on
    ({
        "mouseover": function()
        {
            $(this).css('background-color', 'red');
        },
        "mouseleave": function()
        {
            $(this).css("background-color", "inherit");
        }
    });
        
    
    
});