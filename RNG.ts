function NahodneCislo (RozsahDo:number):number{
    let cislo:number = Math.floor(Math.random()*RozsahDo)+1
    return cislo;
}

console.log (NahodneCislo(1000));