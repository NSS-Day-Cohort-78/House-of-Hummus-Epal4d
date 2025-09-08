import { setEntreeId } from "./TransientState.js"

const vegetableChoiceHandler = (changeEvnt) => {
    if (changeEvnt.target.name === "vegetable") {
        const vegetableId = parseInt(changeEvnt.target.value)
        setEntreeId(vegetableId)
        
    }
}

export const veggiesOptions = async () => {
    const veggies = await fetch("http://localhost:8088/vegetables").then(res => res.json())
    document.addEventListener("change", vegetableChoiceHandler)
    let html = `
        <div class='customer-input'>
            <h3>What vegetables would you like</h3>  
    `
    const divStringArray = veggies.map(
        (veggie) => {
            return `<div>
            <input type='radio' name='vegetable' value='${veggie.id}'/> ${veggie.type} $${veggie.price} 
            </div> `
        }
    )

    html += divStringArray.join("")
    html += `</div>`
    return html
}
