function sum(a){
    sum = 0
    a.forEach(element => {
        sum += element;
    });
    return sum
}

console.log(sum([3, 5, 7]))