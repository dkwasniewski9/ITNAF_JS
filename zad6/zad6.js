function palindrom(a){
    let end = ''
    if(a.length % 2 == 0) end = a.slice(a.length / 2, a.length)
    else end = a.slice(a.length / 2 + 1, a.length)
    end = end.split('')
    end = end.reverse().toString()
    end = end.replace(',', '')
    return a.startsWith(end)
}



console.log(palindrom("kajak"))
console.log(palindrom("anna"))