$.ajax("https://api.mfapi.in/mf/100066")
    .then((data) => {
        console.log(data)
        console.log(data.meta.scheme_name)
    })