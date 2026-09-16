const show = document.querySelector("#showing")


document.addEventListener("DOMContentLoaded",()=>{
    show.innerHTML=""
    const getData = async () => {
        const dataApi = await fetch("https://dummyjson.com/posts")
        const dataChange = await dataApi.json()
        console.log(dataChange.posts)
        const result = dataChange.posts

        result.forEach((e)=>{
            show.innerHTML +=`
            <p>${e.tags}<p/>
            <p>${e.body}<p/>`
        })
    }
    getData()
})