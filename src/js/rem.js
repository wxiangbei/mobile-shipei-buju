!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width = width < 320 ? 320 : width;
            width = width > 640 ? 640 : width;
            width && (docEle.style.fontSize = 100 * (width / 640) + "px");
            setTimeout(function () { 
                var width = docEle.clientWidth;
                width = width < 320 ? 320 : width;
                width = width > 640 ? 640 : width;
                width && (docEle.style.fontSize = 100 * (width / 640) + "px");
             },333)
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));