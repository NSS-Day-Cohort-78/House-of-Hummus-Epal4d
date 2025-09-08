const transientState = {
    total: 0.00,
    vegetableId:0,
    entreeId: 0,
    sideId: 0
}

export const setSideId = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(`updated side id State${transientState.sideId}`)
}

export const setVegetableId = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(`updated Vegetable id State${transientState.vegetableId}`)
}

export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(`updated Entree id State${transientState.entreeId}`)
}
export const setTotal = (calculatedTotal) => {
    transientState.total = calculatedTotal
    console.log(`updated total State $${transientState.total}`)
}
let isSubmitting = false

export const saveOrderSubmission = async () => { 
    if (isSubmitting) {
        console.log("Already submitting, ignoring duplicate call")
        return  
    }
    
    isSubmitting = true  
    console.log("=== saveOrderSubmission called ===")
    console.log("=== PURCHASE BUTTON CLICKED ===")
    console.log("Current transient state:", transientState)
    console.log("entreeId:", transientState.entreeId)
    console.log("vegetableId:", transientState.vegetableId) 
    console.log("sideId:", transientState.sideId)
    
    const isEntreeValid = transientState.entreeId > 0;
    const isVegetableValid = transientState.vegetableId > 0;
    const isSideValid = transientState.sideId > 0;

        if (!isEntreeValid || !isSideValid || !isVegetableValid) {
            alert("please complete order fully by selecting each of the catagories before submitting")
                return;
            
        }
        const orderTotal = await calculateOrderTotal()
        setTotal(orderTotal)
        

    const postOrder = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(transientState)
}
    const response = await fetch("http://localhost:8088/purchases", postOrder)

    const newOrderEvent = new CustomEvent("newOrderSubmitted")
    document.dispatchEvent(newOrderEvent)
}

export const calculateOrderTotal = async () => {
    const [entrees, vegetables, sides] = await Promise.all([
        fetch("http://localhost:8088/entrees").then(res => res.json()),
        fetch("http://localhost:8088/vegetables").then(res => res.json()),
        fetch("http://localhost:8088/sides").then(res => res.json())
    ])
    
    const selectedEntree = entrees.find(entree => entree.id === transientState.entreeId)
    const selectedVegetable = vegetables.find(veggie => veggie.id === transientState.vegetableId)
    const selectedSide = sides.find(side => side.id === transientState.sideId)

    const total = selectedEntree.price + selectedVegetable.price + selectedSide.price

    return Math.round(total * 100) / 100
}
