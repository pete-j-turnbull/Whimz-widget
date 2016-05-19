
var initFrame = function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:8080/whims-widget/app_frame.html';

    iframe.style.display = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 0;
    iframe.style.left = 0;
    iframe.style.top = 0;
    iframe.style.zIndex = 9999;
    iframe.style.position = 'absolute';

    iframe.allowTransparency = true;

    iframe.id = 'whims-widget';
    document.body.appendChild(iframe);
};

var toggleFrame = function () {
    var hidden = document.getElementById('whims-widget').style.display == "none";
    if (hidden) {
        document.getElementById('whims-widget').style.display = "block";
    } else {
        document.getElementById('whims-widget').style.display = "none";
    }
};

initFrame();