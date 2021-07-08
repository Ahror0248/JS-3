const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    // 'Ethiopia',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
var borakan;

for(let i=0; i<countries.length; i++){
    if(countries[i] === 'Ethiopia'){
        countries[i]=countries[i].toUpperCase();
        console.log("bor ekan");
        borakan=true;
    }
}

if(!borakan){
    countries.push("Ethiopia")
    console.log("qoshildi")
}     

console.log(countries);