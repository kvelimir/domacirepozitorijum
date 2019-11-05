//2. Написати функцију која израчунава цену пице по 
//квадратном центиметру (уносе се цена и полупречник)

function cenaPicePoCm2(cena, poluprecnik) {

    let povrsina = Math.pow(poluprecnik, 2) * Math.PI;
    return cena / povrsina;

}
console.log(`Cena pice po kvadratnom centimetru je ${(cenaPicePoCm2(640, 16))} dinara.`);