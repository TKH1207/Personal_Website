$(document).ready(function(){
    $(".after").hide();
    $(".loginBtn").click(function(){
        $(".beginning").hide("slide", { direction: "left"  }, 400);
        // $(".after").show("slide", { direction: "right"  }, 1000);
        $(".after").delay(1000).fadeIn(2000);
    });
});