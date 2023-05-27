const objectsIdURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"
const objectsUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
console.log(departmentsURL)

function departmentSearch(objectID){
    const url=`${objectsUrl}${objectID}`
    $.ajax(url)
    .then((objectIDs) => {
        console.log(objectIDs)
        const $main = $("main")
        $main.empty()
        objectIDs.objectIDs.slice(0,10).forEach((id)=>{
            console.log(id)
    const url2 =`${objectsIdURL}/${id}`
    console.log(url2)
    $.ajax(url2)
    .then((artwork)=> {
        console.log(artwork)
        const div=$("<div>")
        div.html(`
        <img src="${artwork.primaryImage}">
        <h2>${artwork.title}</h2>
        <h2>${artwork.dynasty}</h2>
        <h2>${artwork.medium}</h2>
        <h2>${artwork.geographyType}</h2>
        `)
    })
        })
    })
}

$("input[type=submit]").on("click", (event)=>
{   //prevent the refresh
    event.preventDefault()
    const inputText=$("input[type=text]").val()
    getDepartments(inputText)
})

