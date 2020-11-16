function openNav() {
    const windowsize = $(window).width();
    if (windowsize < 576) {
        $("#mySidenav").css("width", "80%");
    } else {
        $("#mySidenav").css("width", "50%");
    }
    $("#mySidenav").css("padding", "100px 24px");

    $(".container").append("<div class='overlay' onclick='closeNav()'></div>");
    $(".menu-content, .sidebar-title").fadeIn(500);
}

function closeNav() {
    $(".menu-content, .sidebar-title").fadeOut(100);
    $("#mySidenav").css("width", "0");
    $("#mySidenav").css("padding", "100px 0");
    $(".overlay").remove();
}