// Написати функцију која исписује све елементе низа који су дељиви са 5


function divisibleByFive(arr) {

    var array = [];
    var j = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0) {
            array[j] = arr[i];
            j++;
        }
    }
    console.log(array);
}
divisibleByFive([1, 2, 3, 4, 5, 10, 15, 23, 1, 5])