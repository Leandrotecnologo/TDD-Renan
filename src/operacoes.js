function soma(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 + num2
}

function subi(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 - num2
}

function divi(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 / num2
}

function multi(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 * num2
}

function poti(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw 'Não é um número';
    }

    return num1 ** num2
}

function raiz(num1) {
    console.log(num1)
    if(isNaN(num1)) {
        throw 'Não é um número';
    }

    return num1 = Math.sqrt(num1)
}


module.exports = {
    soma,
    subi,
    multi,
    divi,
    poti,
    raiz
}