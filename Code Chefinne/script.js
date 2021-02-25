let count = 0

document.getElementById("KontaktGo").addEventListener("click", () => {
    count = count +1
    //alert(`Ouch, you clicked me ${count} times!`)


/***Die Linie count = count +1 kann auch als count += 1 angegeben werden */

document.getElementById("output").innerHTML = (`Ouch, you clicked me ${count} times!`)
})


/***document.getElementById("countryDropdown").addEventListener("change", () => {
    //1. we will be selecting the select countryDropdown
    //2. we need to get the value (is it spain, is it italy?)
    const value = document.getElementById("countryDropdown").value
    //3. we need to update the dom
    const outputh1 = document.getElementById("countryOutput")
    outputh1.innerHTML = `You selected ${value}!`
}) ***/

//oder beim Eventlistener das Argument "Event" reinnehmen, console log event schreiben und bei Punkt 1&2 target anwhälen: 

document.getElementById("countryDropdown").addEventListener("change", (event) => {
    console.log(event)
    //wir nennen es einfach event, es kann auch anders heissen.
    const value = event.target.value
    //3. we need to update the dom
    const outputh1 = document.getElementById("countryOutput")
    outputh1.innerHTML = `You selected ${value}!`
})
