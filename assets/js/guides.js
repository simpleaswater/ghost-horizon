var data = {
    "guides": [
        {
            "title": "IPFS: Complete Guide",
            "excerpt": "Whether you’re just learning how to build peer-to-peer systems with ipfs, want to dive into peer-to-peer concepts and solutions, or are looking for ready-to-use examples, this is the place to start.",
            "tags": ["ipfs", "guide"],
            "type": "GUIDE",
            "primary_tag": "primary_tag",
            "url": "/ipfs",
            "img_url": "https://i.pinimg.com/originals/f8/56/0b/f8560bbec7c9c4b8916a61068c05a3dc.png",
            "feature_image": true
        }
    ]
}

$(document).ready(function () {
    var guideTemplate = $("#guides-template").html();
    console.log(guideTemplate)
    var compiledGuideTemplate = Handlebars.compile(guideTemplate);
    console.log(compiledGuideTemplate({ title: "hello" }))
    $(".post-feed").html(compiledGuideTemplate({ title: "hello" }))
})