"use strict";

$(function()
{
    //pobieranie tekstu
    var tekst1=$("#first").text();
    console.log(tekst1);
    
    $('#first').html('<strong>Pogrubiony tekst</strong>').css({"color":"red" });
    
    $("#first").before("Fragment tekstu z before");
    $("#first").after("Fragment tekstu z after");
    
    //czyszczenie zawartości
    $("#first").empty();
    
    //czyszczenie zawartości
    //$("#first").remove();
    
    //przypisywanie właściwości CSS
    $("#lastp").css({"font-weight":"bold", "font-size":"40px"});
    
    //pobieranie wartości pola input val()
    //var login=document.getElementById('login').value;
    var login=$('#login').val();
    console.log(login);
    
    $("#login").val("Podmiana");
        
    //usuwanie klasy
    $('#third').removeClass("blue");
    
    //dodawanie klasy
    $("#lastp").addClass("blue");
    
    
    
});