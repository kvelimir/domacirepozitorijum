// 2. Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање\
// Уноси се колико пице поједете на месечном нивоу, и колико година имате
// (Рачуна се да је довољно достављати до стоте године)


function lifeSupply(numPerMonth, age) {
    let numPerYear = numPerMonth * 12;
    let pizzaTimeLeft = 100 - age;
    return numPerYear * pizzaTimeLeft;

}
console.log(lifeSupply(10, 29));