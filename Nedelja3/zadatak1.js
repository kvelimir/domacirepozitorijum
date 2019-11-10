// 1. Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)

function maksimum(a, b, c) {

    if (a >= b && a >= c) {

        return a;

    }
    if (b >= a && b >= c) {

        return b;
    }
    if (c >= a && c >= b) {

        return c;
    }


}
console.log(maksimum(459, 12, 125 ));