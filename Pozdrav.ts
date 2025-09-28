function Pozdrav(jmeno: string):string {
    let zprava:string = "Ahoj," + jmeno + "!";
    return zprava
}
console.log(Pozdrav("Tomas"));