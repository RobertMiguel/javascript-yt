const buscarAlbumThen = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    .then((response) => {
        return response.json()
    })
    .then((album) => {
        console.log(album)
    })
}

const buscarAlbum = async (id) => {
    try{
        const result = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        const album = await result.json()
        const albumUser = await fetch(`https://jsonplaceholder.typicode.com/albums/${album.userId}`)
        const user = await albumUser.json()
        console.log(user)
        console.log(album)

    } catch(err) {
        console.log('erro')
    }

}

buscarAlbum(11)