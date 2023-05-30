const objectsIdURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"
const locationURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
console.log(objectsIdURL)

const $main = $("main")
function artworkSearch(objectID){
    const url=`${locationURL}${objectID}`
    $.ajax(url)
    .then((objectIDs) => {
        console.log(objectIDs)
        $main.empty()
        objectIDs.objectIDs.slice(0,20).forEach((id)=>{
            console.log(id)
            const url2 =`${objectsIdURL}/${id}`
            console.log(url2)
            $.ajax(url2)
                .then((location)=> {
                    console.log(location)
                    const $div=$("<div>")
                    $div.html(`
                    <img src=${location.primaryImage}>
                    <h2>${location.title}</h2>
                    <h2>${location.dynasty}</h2>
                    <h2>${location.medium}</h2>
                    <h2>${location.geographyType}</h2>
                    `)
                    $main.append($div)
            })
        })
    })
}

$("input[type=submit]").on("click", (event)=>
{   //prevent the refresh
    event.preventDefault()
    const inputText=$("input[type=text]").val()
    artworkSearch(inputText)
})

