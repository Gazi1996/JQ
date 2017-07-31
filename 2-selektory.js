"use strict";
$(function()
{
    //selektor znacznika HTML
    var p=$("p");
    console.log(p[0]);
    
    //selektor id
    var firstid=$("#first");
    console.log(firstid);
    
    var firstclass=$(".test");
    console.log(firstclass);
    
    //kolekcja selektorów - selektor grupowy
    var grupa = $("p, div, #test");
    var divy=grupa[1];
    console.log(divy);
    var divdrugi = divy[1];
    
});