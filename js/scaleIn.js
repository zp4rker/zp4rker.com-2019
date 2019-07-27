function scaleIn(query, initial, diff, animation) {
    var elems = document.querySelectorAll(query);

    for (var i = 1; i <= elems.length; i++) {
        var elem = elems.item(i-1);
        elem.style.animation = animation;
        var delay = initial + i * diff;
        elem.style.animationDelay = delay + "s";
    }
}