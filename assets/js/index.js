$(document).ready(function() {

    $("a").click(function () {
        var scroll = this.hash
        
        $("html, body").animate(
        {
            scrollTop: $(scroll).offset().top -110
        },
        1000
        )
    })
})