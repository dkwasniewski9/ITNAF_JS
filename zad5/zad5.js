function fibonnaci(a){
   let tab = []
   if(a > 0) tab.push(0)
   if(a >= 1) tab.push(1)
   for(i = 2; i < a; ++i){
    tab.push(tab[i-1] + tab[i-2])
    }
    return tab
}


console.log(fibonnaci(9))