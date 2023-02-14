// API
const API = 'https://fakestoreapi.com/products'

async function getData() {
    const response = await fetch(API)
    const data = await response.json()

    //forEach é usado quando um dado for uma array  
    data.forEach((obj) => {
        console.log(obj)
    })
    
    const price100 = data.filter((obj)=> {
        if(obj.price > 100) return true
        else return false
    })
    //.filter retornar todos os objs   
    const eletronics = data.filter((obj)=>{
        if(obj.category === "electronics") return true
        else return false
    })
    //.find retornar o somente o primeiro obj
    const obj1 = data.find((obj)=>{
        if (obj.category === "electronics") return true
        else return false
    })
    //.map altera o obj  
    const newData = data.map((obj)=> {
        //retornou o titulo do obj
        return {title: obj.title}
    })
    const newDataTitle = data.map((obj)=> {
        return {...obj, title: `PROMOÇÃO ${obj.title}`}
    })

    let soma = 0
    data.forEach((obj)=>{
        soma +=obj.price
    })

    //.reduce reduz o array pra alguma coisa menor
    const soma2 = data.reduce((valorAnterior, obj)=> {
        return valorAnterior+obj.price
    }, 0)

    //Logs das constantes
    console.log(price100)
    console.log(eletronics)
    console.log(obj1)
    console.log(newData)
    console.log(soma)
    console.log(soma2)
}

getData()


//Find e Filter só é usado dentro de array
//Find retornar um obj e o filter um array
