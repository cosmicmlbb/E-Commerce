$(document).ready(function() {
    $("#carouselExampleIndicators").carousel({
        interval: 3000
    });

    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        var $nextItem = $(".carousel-item.active").next(".carousel-item");
        if (!$nextItem.length) {
            $nextItem = $(".carousel-item:first");
        }

        $(".carousel-item.active").removeClass("active");
        $nextItem.addClass("active");

        var dotIndex = $nextItem.index();
        $(".carousel-dot.active").removeClass("active");
        $(".carousel-dot").eq(dotIndex).addClass("active");
    });

    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        var $prevItem = $(".carousel-item.active").prev(".carousel-item");
        if (!$prevItem.length) {
            $prevItem = $(".carousel-item:last");
        }

        $(".carousel-item.active").removeClass("active");
        $prevItem.addClass("active");

        var dotIndex = $prevItem.index();
        $(".carousel-dot.active").removeClass("active");
        $(".carousel-dot").eq(dotIndex).addClass("active");
    });

    $(".carousel-dot").click(function(e) {
        e.preventDefault();
        var dotIndex = $(this).index();
        $(".carousel-dot.active").removeClass("active");
        $(this).addClass("active");

        $(".carousel-item.active").removeClass("active");
        $(".carousel-item").eq(dotIndex).addClass("active");
    });
});

