const show = document.querySelector("#showing")


document.addEventListener("DOMContentLoaded",()=>{
    show.innerHTML=""
    const getData = async () => {
        const dataApi = await fetch("https://dummyjson.com/quotes")
        const dataChange = await dataApi.json()
        console.log(dataChange.quotes)
        const result = dataChange.quotes

        result.forEach((e)=>{
            show.innerHTML +=`
            <p>${e.quote}<p/>
            <p>${e.author}<p/>`
        })
    }
    getData()
})