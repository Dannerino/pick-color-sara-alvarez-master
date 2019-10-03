function hex(h) {
    h = h.toString().toUpperCase();
    var ñ = h.charAt(0) + h.charAt(1);
    var r = h.charAt(2) + h.charAt(3);
    var g = h.charAt(4) + h.charAt(5);
    var b = h.charAt(6) + h.charAt(7);
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    //if (r > 0 && r < 255 && g > 0 && g < 255 && b > 0 && b < 255)

    return r + '' + g + '' + b;

}