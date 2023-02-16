const usuario = {
    nome : "Robert",
    idade : 16,
    escola : "EEEP Manoel Mano"
}

const usuarios = [
    {
        nome : "Robert",
        idade : 16,
        escola : "EEEP Manoel Mano"
    },
    {
        nome : "Finch",
        idade : 16,
        escola : "EEEP Manoel Mano"
    }
]

const videos = [
    {
        nome : "Video 01",
        duracao : 120,
        data : "00000000",
        usuario : "01"
    },
    {
        nome : "Video 02",
        duracao : 90,
        data : "11111111",
        usuario : "02"
    },
    {
        nome : "Video 03",
        duracao : 150,
        data : "222222222",
        usuario : "03"
    }
]

videos.forEach((video)=>{
    console.log(video.nome)
})

videos.forEach(({ usuario })=> {
 console.log(usuario)
})

videos.forEach(({ duracao, data })=>{
    console.log(duracao)
    console.log(data)
})

const videosModificados = videos.map((video)=>{
    return {
        duracao : video.duracao * 2,
        usuario : video.usuario,
        ...video,
        nome : "Qualquer nome"
    }
})

const find = videos.find((video)=>{
    return video.nome === "Video 01"
})

console.log(find)

const filter = videos.filter((video)=>{
    return video.duracao >= 121
})

const filter02 = videos.filter((video)=>{
    return video.duracao < 121
})

console.log(filter02)
console.log(filter02[1].nome)

console.log(filter[0].nome)

/*
    forEach, map, filter, find
*/

