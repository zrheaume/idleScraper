function index() {
    $(".container").hide()
    $().off()
    $("#index-main").show()
    $(window).on("scroll", function (event) {
        var scrollPos = $(window).scrollTop();
        var zoom = scrollPos / 2
        // console.log(scrollPos)
        $(".header-img").css("background-size", `${100 + zoom}%`)
    })
    $(".info-vis-info").hide()
    $(".info-vis-img").hover(
        (event) => {
            console.log("Mouseover")
            $(event.target).find(".info-vis-info").show()
            $(".info-vis-info").mouseout(() => {
                $(".info-vis-info").hide()
            })
        },
        (event) => {
            console.log("Mouseoff")
            $(event.target).find(".info-vis-info").hide()
        }
    )
    $("#link-guestbook").click(() => {
        guestbook()
    })
}

function guestbook() {
    $(".container").hide()
    $().off()
    $("#index-guestbook").show()
}

$(function () {
    $(".container").hide()
    index()
})