$(function(){

    $("#col-md-4-1").click(function(){
        $(".hidden1").slideToggle(1600) 
        $(".img1").slideToggle(1600)       
    });

    $("#col-md-4-2").click(function(){
        $(".hidden2").slideToggle(1600)
        $(".img2").slideToggle(1600)
    });
    
    $("#col-md-4-3").click(function(){
        $(".hidden3").slideToggle(1600)
        $(".img3").slideToggle(1600)
    });
});



$("#portfolio1").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'DARK PAGE PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio2").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'ONTARIO PAGE PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio3").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'BROWN IMAGE PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio4").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'JIM CARREY PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio5").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'HAVE A GOOD DAY PAGE');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio6").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'FORM ENTRY PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio7").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'BURNED PAGE PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

$("#portfolio8").hover(function() {
    $(this).css('cursor','pointer').attr('title', 'BAILEY WONGER PROJECT');
}, function() {
    $(this).css('cursor','auto');
});

