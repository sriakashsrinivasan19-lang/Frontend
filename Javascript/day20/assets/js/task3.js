const show = document.querySelector("#showing")


document.addEventListener("DOMContentLoaded",()=>{
    show.innerHTML=""
    const getData = async () => {
        const dataApi = await fetch("https://dummyjson.com/users")
        const dataChange = await dataApi.json()
        console.log(dataChange.users)
        const result = dataChange.users

        result.forEach((e)=>{
            show.innerHTML +=`
            <p>${e.firstName}<p/>
            <p>${e.age}<p/>`
        })
    }
    getData()
})