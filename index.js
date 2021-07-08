const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sorted = ages.sort((a,b)=>a-b)
let minsort = sorted[0]
maxsort = sorted.length - 1
maxall = sorted[maxsort]
console.log(maxall);


let sum = 0
ages.forEach((value)=>{
    sum+=value
})

console.log('Orta qiymat:', sum/10);

console.log('MaxMinQiymati:', maxall-minsort );