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
    })
})        
