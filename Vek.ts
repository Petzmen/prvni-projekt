let mojeNarozeni = new Date("1989-10-01")

function spocitejVek(narozeni: Date): number {
    let aktualníRok = new Date().getFullYear()

    return aktualníRok - narozeni.getFullYear()
}

console.log(
    spocitejVek(mojeNarozeni)
)