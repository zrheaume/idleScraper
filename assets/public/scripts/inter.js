// CLIENT SCRIPT <inter.js>
// Allows to:
// GET new articles
// append to screen
// set [save] event listeners
// POST article(s) to save
// confirm save


$(function () {
    $(".modal").modal()
    $(".trigger-saveNew").off()
    $(".trigger-saveNew").on("click", function() {
        console.log($(this).attr("title"))
        console.log($(this).attr("link"))
        let toSave = {
            title: $(this).attr("title"),
            link: $(this).attr("link")
        }
        $("#save-prompt").modal("open")
        $("#save-article-info").html("")
        $("#save-article-info").append($("<b>").text(toSave.title))
        $("#save-article-info").append($("<hr>"))
        $("#save-article-info").append($("<em>").text(toSave.link))
        $("#save-submit").click(function () {
            // console.log("click!")
            try {
                console.log("posting!")
                $.post("/api/savearticle", toSave)
                    .then((res) => {
                        console.log(res)
                        // window.location.reload()
                    })
                    .catch((err) => {
                        console.log(err)
                    })

            } catch (err){
                throw err
            } finally {
                $("#save-submit").off()
                $("#save-disregard").off()
                $("#save-article-info").html("")
                $("#save-prompt").modal("close")
            }
        })
        $("#save-disregard").click(() => {
            $("#save-prompt").modal("close")
            toSave = null
        })
    })
})        
