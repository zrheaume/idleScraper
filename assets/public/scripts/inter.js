$("#scrape-init").click(() => {
    $.get("/api/scrape").then((res) => {
        console.log(res)
        $("#results-section").html("")

        for (let q = 0; q < res.length; q++){
            if (res[q].title !== null && res[q].title !== undefined) {
                $("#results-section").append($("<h3>").text(res[q].title))
                $("#results-section").append($("<a class='waves-effect waves-light btn'>").attr("href", res[q].link ).text("View Article"))
            }
        }
    })
})