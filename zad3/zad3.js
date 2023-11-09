function range(a,b){
    let tab = []
    while(a <= b){
        tab.push(a)
        a += 1
    }
    return tab
}
console.log(range(1,4))
