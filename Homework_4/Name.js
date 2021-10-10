
let n = '   Harry    Potter   ';
const trimming = (str) => {
    let arr = [];
    for (const item of str.split(' ')) {

        arr.push(item);
    }
    return arr.join(' ')
};
console.log(trimming(n));