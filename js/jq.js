$(document).ready(function(){
   $("#changeMode").click(function(){
    if($("#changeMode").children("span").hasClass('fa-moon-o')){
        $("#changeMode").children("span").removeClass('fa-moon-o');
        $("#changeMode").children("span").addClass('fa-sun-o');
        $("#changeMode").children("span").addClass('fa-inverse');
        $("nav").removeClass('bg-light');
        $("nav").addClass('bg-dark');
        $("nav").removeClass('navbar-light');
        $("nav").addClass('navbar-dark');
        $("#changeMode").removeClass('btn-outline-dark');
        $("#changeMode").addClass('btn-outline-light');
        $("body").addClass('dark-mode');
        $(".card").removeClass('bg-light');
        $(".card").addClass('bg-dark');
        $(".footer").addClass('bg-dark');
        $("thead").removeClass('thead-light');
        $("thead").addClass('thead-dark');
    }
    else{
        $("#changeMode").children("span").removeClass('fa-sun-o');
        $("#changeMode").children("span").addClass('fa-moon-o');
        $("#changeMode").children("span").removeClass('fa-inverse');
        $("nav").removeClass('bg-dark');
        $("nav").addClass('bg-light');
        $("nav").removeClass('navbar-dark');
        $("nav").addClass('navbar-light');
        $("#changeMode").removeClass('btn-outline-light');
        $("#changeMode").addClass('btn-outline-dark');
        $("body").removeClass('dark-mode');
        $(".card").addClass('bg-light');
        $(".card").removeClass('bg-dark');
        $(".footer").removeClass('bg-dark');
        $(".footer").addClass('bg-light');
        $("thead").addClass('thead-light');
        $("thead").removeClass('thead-dark');
       }
    
   })
})
function timer()
{
    var rel=new Date("Jan 25, 2021 23:15:20").getTime();
    var today=new Date().getTime();
    deff=rel-today;
    var sec=1000;
    var min=sec*60;
    var hrs=min*60;
    var day=hrs*24;
    var d=Math.floor(deff/(day));
    var h=Math.floor((deff%day)/hrs);
    var m=Math.floor((deff%hrs)/min);
    var s=Math.floor((deff%min)/sec);
    document.getElementById('day').innerText=d +" Days ";
    document.getElementById('hrs').innerText=h +" Hours ";
    document.getElementById('min').innerText=m +" Minutes";
    document.getElementById('sec').innerText=s +" Second";
}
setInterval(function(){
  timer();
},1000)
