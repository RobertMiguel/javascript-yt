const brinquedo = [
    {
        cor : "vermelho",
        tipo : "carro de controle remoto",
        distribuidora : "Brinquedo01",
        id : 01
    },
    {
        cor : "verde",
        tipo : "Boneco",
        distribuidora : "Brinquedo02",
        id : 02
    },
    {
        cor : "azul",
        tipo : "Montar peças",
        distribuidora : "Brinquedo03",
        id : 03
    }
]

// forEach
brinquedo.forEach((brinquedo)=>{
    //console.log(brinquedo.tipo)
})
// forEach
brinquedo.forEach(({ cor })=>{
    //console.log(cor)
})

// Find
const find = brinquedo.find(( { cor } )=>{
    return cor
})
const find02 = brinquedo.find((brinc)=>{
    return brinc.cor
})

/* console.log(find)
console.log(find02) */

//Filter

const filter = brinquedo.filter((brinc)=>{
    return brinc.id > 1
})

const filter02 = brinquedo.filter((brinc)=>{
    return brinc.distribuidora
})

//console.log(filter02[1].distribuidora)

// Map

const brinquedoModificado = brinquedo.map((brinc)=>{
    return {
        distribuidora : "Distro mudou",
        id : brinc.id + 1
    }
})

console.log(brinquedoModificado[1])
console.log(brinquedoModificado)