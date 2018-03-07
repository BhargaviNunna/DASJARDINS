 $(document).ready(function() {
     //payments block
     $("#product-info").on("hide.bs.collapse", function() {
        $("#payments-expand-collapse").addClass('iconClosed');
        $("#payments-expand-collapse").removeClass('iconOpen');
    });
    $("#product-info").on("show.bs.collapse", function() {
        $("#payments-expand-collapse").addClass('iconOpen');
        $("#payments-expand-collapse").removeClass('iconClosed');
    });

      $("#Activities-info").on("hide.bs.collapse", function() {
        $("#Activities-expand-collapse").addClass('iconClosed');
        $("#Activities-expand-collapse").removeClass('iconOpen');
    });
    $("#Activities-info").on("show.bs.collapse", function() {
        $("#Activities-expand-collapse").addClass('iconOpen');
        $("#Activities-expand-collapse").removeClass('iconClosed');
    });


      $("#Remarks-info").on("hide.bs.collapse", function() {
        $("#Remarks-expand-collapse").addClass('iconClosed');
        $("#Remarks-expand-collapse").removeClass('iconOpen');
    });
    $("#Remarks-info").on("show.bs.collapse", function() {
        $("#Remarks-expand-collapse").addClass('iconOpen');
        $("#Remarks-expand-collapse").removeClass('iconClosed');
    });
        $("#SC-profile").click(function() {
        $(".SC-Profile-container").toggle();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('#SC-profile, .SC-Profile-container').length) {
            $(".SC-Profile-container").hide();
        }
    });

     $("#CD-dropdown-content").click(function(){
        $("#CD-dropdown-content").attr("src", "../images/Desjardins-close-icone.png");
        $("#Contact-details-menu-1-hide").toggle();
         
    });
     function updateDonutChart (el, percent, donut) {
    percent = Math.round(percent);
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    var deg = Math.round(360 * (percent / 100));

    if (percent > 50) {
        $(el + ' .pie').css('clip', 'rect(auto, auto, auto, auto)');
        $(el + ' .right-side').css('transform', 'rotate(180deg)');
    } else {
        $(el + ' .pie').css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $(el + ' .right-side').css('transform', 'rotate(0deg)');
    }
    if (donut) {
        $(el + ' .right-side').css('border-width', '0.1em');
        $(el + ' .left-side').css('border-width', '0.1em');
        $(el + ' .shadow').css('border-width', '0.1em');
    } else {
        $(el + ' .right-side').css('border-width', '0.5em');
        $(el + ' .left-side').css('border-width', '0.5em');
        $(el + ' .shadow').css('border-width', '0.5em');
    }
    $(el + ' .num').text(percent);
    $(el + ' .left-side').css('transform', 'rotate(' + deg + 'deg)');
}

// Pass in a number for the percent
updateDonutChart('#specificChart', 0, true);

$('#percent').change(function () {
    var percent = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart('#specificChart', percent, donut);
}).keyup(function () {
    var percent = $(this).val();
    var donut = $('#donut input').is(':checked');
    updateDonutChart('#specificChart', percent, donut);
});;

$('#donut input').change(function () {
    var donut = $('#donut input').is(':checked');
    var percent = $("#percent").val();
    if (donut) {
        $('#donut span').html('Donut');
    } else {
        $('#donut span').html('Pie');
    }
    updateDonutChart('#specificChart', percent, donut);
});
});

