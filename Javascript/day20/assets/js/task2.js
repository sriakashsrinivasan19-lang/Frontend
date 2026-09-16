const show = document.querySelector("#showing")


document.addEventListener("DOMContentLoaded",()=>{
    show.innerHTML=""
    const getData = async () => {
        const dataApi = await fetch("https://dummyjson.com/carts")
        const dataChange = await dataApi.json()
        console.log(dataChange.carts)
        const result = dataChange.carts

        result.forEach((e)=>{
            show.innerHTML +=`
            <p>${e.quantity}<p/>
            <p>${e.total}<p/>`
        })
    }
    getData()
})