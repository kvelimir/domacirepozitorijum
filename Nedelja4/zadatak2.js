// 2. Направити функцију која прима низ горе направљених објеката 
//и исписује оне рецепте који су Почетни или Лаки (не исписује остале)

//     ```
//     <ime-recepta>
//     Тежина: <Лаки || Почетни>
//     Састојци: [<...>,...]
//     ```
let recept1 = {
    ime: 'Spagete u belom sosu',
    tezina: 'tezina: Srednji',
    sastojci: 'sastojci: Spagete, Pavlaka za kuvanje, Beli luk, Curece meso, Maslac, Jaja, Biber, So'
}
let recept2 = {
    ime: 'Tost sendvic sa sirom',
    tezina: 'tezina: Pocetni',
    sastojci: 'sastojci: Hleb, Sir trapist'

}
let recept3 = {
    ime: 'Prase na raznju',
    tezina: 'tezina: Lak',
    sastojci: 'sastojci: Prase, so, Flasa piva'

}
let recept4 = {
    ime: 'Sufle od sira',
    tezina: 'tezina: Tezak',
    sastojci: 'sastojci: Brasno, Maslac, Mleko, Tvrdi sir, Parmezan, Jaja, So, Biber'
}
let recept5 = {
    ime: 'Supa od kornjace',
    tezina: 'tezina: Majstor',
    sastojci: 'sastojci: Meso od kornjace, Voda, Luk, Lovor, Kajenski biber, So, Maslac, Brasno, Paradajz pire, Vorcester sos, Pileci bujon, Jaja, Limun, Persun'
}
let recepti = [recept1, recept2, recept3, recept4, recept5];

function ispis(recept) {
    let ispis = '';
    for (i = 0; i < recept.length; i++) {
        if (recept[i].tezina === 'tezina: Pocetni' || recept[i].tezina === 'tezina: Lak') {
            ispis = ispis + recept[i].ime + '\n' + recept[i].tezina + '\n' + recept[i].sastojci + '\n';
        }
   }
   return ispis;
}
console.log(ispis(recepti));