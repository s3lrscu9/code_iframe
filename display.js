window.onload = function () {
    var url = new URL(location.href);
    var params = url.searchParams;
    var content = params.get("content");
    var path = params.get("src");
    var lang = params.get("lang");

    $(".path").html(path);
    $("body").append("<pre><code></code></pre>");
    var arr = content.split("\n")
    for (var i = 0; i < arr.length; i ++) {
        $("code").append("<dl><dt>" + (i + 1) + "</dt><dd>" + arr [i] + "</dd></dl>");
    }
    hljs.initHighlighting();
}