const departmentsUrl = "https://collectionapi.metmuseum.org/public/collection/v1/departments"
const objectsUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
console.log(departmentsURL)

function getDepartments(objectID) {
    const url=`${objectsUrl}${objectID}`
    $.ajax(url)
    .then((response) => {
        console.log(response);
        const objectIDs = response.objectIDs.slice(0, 10);
        const $main = $("main");
        $main.empty();
        objectIDs.forEach((objectID) => {
            const url = `${objectsUrl}/${objectID}`;
            console.log(url);
            $.ajax(url2)
            .then((object) => {
                console.log(object);
                const div = $("<div>");
                div.html(`
                <img src="${object.primaryImage}">
                <h2>${object.medium}</h2>
                <h2>${object.dynasty}</h2>
                <h2>${object.culture}</h2>
                <h2>${object.title}
                <h2>${object.department}</h2>
                `);
                $main.append(div);
            });
        });
    });
}

$("input[type=submit]").on("click", (event)=>
{   //prevent the refresh
    event.preventDefault()
    const inputText=$("input[type=text]").val()
    getDepartments(inputText)
})

