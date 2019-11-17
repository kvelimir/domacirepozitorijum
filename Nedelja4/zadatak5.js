// 5. Направити функцију која рачуна укупну цену рецепта (функција је везана за објекат (this)) 
//(За сваки састојак из рецепта одредити цену,па сабрати то 
//(цена у самом објекту је написана за Количину 1, па укупну цену за један састојак рачунамо са количина*цена))

//     ```
//     recept = {
//         ...
//     }

//     recept.cena = function(){
//         ...
//     }
//     ```
let recept = {

    ime: 'Sendvic sa sirom i sunkom',
    tezina: 'Srednji',
    sastojak1: {
        ime: 'hleb',
        kolicina: 2,
        cena: 50,
        ukupnaCena: function () {
            return this.kolicina * this.cena
        }
    },
    sastojak2: {
        ime: 'Paradajz',
        kolicina: 1,
        cena: 70,
        ukupnaCena: function () {
            return this.kolicina * this.cena
        }
    },
    sastojak3: {
        ime: 'Sunka',
        kolicina: 5,
        cena: 60,
        ukupnaCena: function () {
            return this.kolicina * this.cena
        }
    },
    sastojak4: {
        ime: 'Cedar',
        kolicina: 4,
        cena: 120,
        ukupnaCena: function () {
            return this.kolicina * this.cena
        }
    },
    ukupnaCena: function () {
        return this.sastojak1.ukupnaCena() + this.sastojak2.ukupnaCena() + this.sastojak3.ukupnaCena() + this.sastojak4.ukupnaCena();
    }


}
console.log(recept.ukupnaCena());