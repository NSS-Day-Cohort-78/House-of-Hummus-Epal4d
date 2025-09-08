export const EntreeOptions = async () => {
    const response = await fetch ("http://localhost:8088/entrees")
    const entrees = await response.json();

    let html = `
        <div class= 'customer-input'> 
        <h3> What entree would you like </h3>

    `



const divStringArray = entrees.map(
    (entree) => {
        return `<div> 
            <input type ='radio' name='entree' value='${entree.id}' /> ${entree.name} -- $${entree.price}` 
        }
    )

html += divStringArray.join("")

    return html 
}