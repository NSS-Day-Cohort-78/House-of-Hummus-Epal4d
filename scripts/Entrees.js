import { setEntreeId } from "./TransientState.js"

const entreeChoiceHandler = (changeEvnt) => {
    if (changeEvnt.target.name === "entree") {
        const entreeId = parseInt(changeEvnt.target.value)
        setEntreeId(entreeId)
        
    }
}

export const EntreeOptions = async () => {
    const entrees = await fetch ("http://localhost:8088/entrees").then(res => res.json())
    
    let html = `
        <div class= 'customer-input'> 
        <h3> What entree would you like </h3>

    `



const divStringArray = entrees.map(
    (entree) => {
        return `<div> 
            <input type ='radio' name='entree' value='${entree.id}' /> ${entree.name} -- $${entree.price}
            </div>`
        }
    )

html += divStringArray.join("")
html += `</div>`

    return html 
}
export const addEntreeListener = () => {
    document.removeEventListener("change", entreeChoiceHandler)  // Remove old
    document.addEventListener("change", entreeChoiceHandler)     // Add new
}
