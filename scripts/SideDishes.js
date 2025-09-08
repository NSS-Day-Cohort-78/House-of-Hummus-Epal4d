import { setSideId } from "./TransientState.js"

const sideChoiceHandler = (changeEvnt) => {
    if (changeEvnt.target.name === "side") {
        const sideId = parseInt(changeEvnt.target.value)
        setSideId(sideId)
    }
}
export const sideOptions = async () => {
    const response = await fetch ("http://localhost:8088/sides")
    const sides = await response.json();
    let html = `
        <div class= 'customer-input'> 
        <h3> What side would you like </h3>

    `



const divStringArray = sides.map(
    (side) => {
        return `<div> 
            <input type ='radio' name='side' value='${side.id}' /> ${side.title} -- $${side.price}
            </div>` 
        }
    )

html += divStringArray.join("")
html += `</div>`

    return html 
}
export const addSideListeners = () => {
    document.removeEventListener("change", sideChoiceHandler)  // Remove old
    document.addEventListener("change", sideChoiceHandler)     // Add new
}
