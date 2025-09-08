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
            <input type ='radio' name='side' value='${side.id}' /> ${side.title} -- $${side.price}` 
        }
    )

html += divStringArray.join("")

    return html 
}

