console.log("this is my script")

let result =

{
    "tag": "",
    "free": true,
    "role": false,
    "user": "twinkleshreyaa",
    "email": "twinkleshreyaa@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}
submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultcont.innerHTML =`<img src="Spinner@1x-1.0s-200px-200px.svg">`
    let key = "ema_live_fWseNMAE52bUpoGIvd73hZEaJX9jLQoiQg2mxGkG"

    let email = document.getElementById("exampleFormControlInput1").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result =await res.json()

    let str = ``
for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " "){
        str = str + `<div><strong>${key}</strong>: ${result[key]}</div>`;
        // used strong to show bold letter 

}
}

console.log(str)
resultcont.innerHTML = str
})






