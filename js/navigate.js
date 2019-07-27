/*function navigate(elem) {
    var content = document.querySelector(".content");
    content.style.animation = "scaleOut ease-in .5s 0s forwards";
    setTimeout(function() {
        document.location.assign(elem.dataset.link);
    }, 500);
}*/

function navigate(elem, query) {
    var content = document.querySelector(query);
    content.style.animation = "scaleOut ease-in .5s 0s forwards";
    setTimeout(function() {
        document.location.assign(elem.dataset.link);
    }, 500);
}