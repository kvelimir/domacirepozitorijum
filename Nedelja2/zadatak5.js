let cena = 640;
let precnik = 32;
let poluprecnik = precnik / 2;
let povrsina = Math.pow(poluprecnik, 2) * Math.PI;
console.log(`Povrsina pice je ${povrsina} cm kvadratnih`);
console.log(`Cena pice po centimetru kvadratnom je ${cena / povrsina} RSD`);