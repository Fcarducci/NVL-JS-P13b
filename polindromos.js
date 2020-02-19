function texto(cadena) {
    var palabra = cadena.length

    if (cadena.length == 0) {
        return false
    }

    for (var i = 0; i < palabra / 2; i++) {
        if (cadena[i] != cadena[palabra - i - 1]) {
            return false;
        }

    }
    return true
}

document.write(texto("reconocer"));