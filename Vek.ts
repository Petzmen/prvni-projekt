let mojeNarozeni = new Date("1989-10-01")

function spocitejVek(narozeni: Date): number {
    let dnes = new Date()
    let vek = dnes.getFullYear() - narozeni.getFullYear();

    if (dnes.getMonth() < narozeni.getMonth())
    {
    vek--;
    }
    
    return vek
}

console.log (spocitejVek(mojeNarozeni))