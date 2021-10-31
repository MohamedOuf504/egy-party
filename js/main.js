/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

  
$(document).ready(function(){

    particlesJS.load('particles-js', '../js/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

})
//--------------------------------------------------------------------
//--------------------------------------------------------------------
let navwidth = $(".nav").innerWidth();

$(".open-nav").click(()=>{
    // $(".open-nav").css("marginLeft","15%")
    $(".open-nav").animate( {"left":`${navwidth}`},1000)
    $(".nav").animate( {"left":`0px`},1000)
})
//--------------------------------------------------------------------
//--------------------------------------------------------------------
$(".fa-times").click(()=>{
    $(".open-nav").animate( {"left":"0%"},1000)
    $(".nav").animate( {"left":`-${navwidth}`},1000)
})
//--------------------------------------------------------------------
//--------------------------------------------------------------------
$(".accordion h4 ").click(function(e){
    $(this).next().slideToggle(500,function(){
        $(".accordion p").not($(this)).slideUp(500);
    })
})
//--------------------------------------------------------------------
//--------------------------------------------------------------------

let countDownDate = new Date(`January 1 , 2022 00:00:00`);
function upDataCountDown()
{
    let currantTime = new Date()
    let diff =  countDownDate - currantTime ;
    let d = Math.floor(diff /1000/60/60/24) ;
    let h = Math.floor(diff /1000/60/60) %24;
    let m = Math.floor(diff /1000/60) %60;
    let s = Math.floor(diff /1000) %60;
    $("#days").html(d)
    $("#hours").html(h)
    $("#minutes").html(m)
    $("#seconde").html(s)
}
 var countdown = setInterval(() => {
    upDataCountDown()
 }, 1000);
 //--------------------------------------------------------------------
//--------------------------------------------------------------------
let count = 100;
$("#area").keyup(function(e){
   
    var length=$(this).val().length;
    var character = count - length;

    if(character<=0)
    {
         $(".q").html("your available character finished"); 
    }
else{
    $("#numChar").html(character)
}
})

    
// $("a").click(function(e){
//     let x = e.target.getAttribute('href');
//     let secOffset = $(x).offset().top ;
//     console.log(secOffset);
//     $("html , body").animate({scrollTop:secOffset } ,3000)
// })

