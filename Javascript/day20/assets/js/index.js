const show = document.querySelector("#copy")


document.addEventListener("DOMContentLoaded",()=>{
    show.innerHTML=""
    const getData = async () => {
        const dataApi = await fetch("https://dummyjson.com/products")
        const dataChange = await dataApi.json()
        console.log(dataChange.products)
        const result = dataChange.products

        result.forEach((e)=>{
            show.innerHTML +=`
            <p>${e.title}<p/>
            <p>${e.price}<p/>`
        })
    }
    getData()
})