let n = 5;

for (let counter = 1; counter <= n; counter++) {
    let str = '';
    for (let i = 1; i <= n - counter; i++) {
        str += ' ';
    }
    for (let j = 1; j <= counter; j++) {
        str += '#';
    }
    console.log(str);
}