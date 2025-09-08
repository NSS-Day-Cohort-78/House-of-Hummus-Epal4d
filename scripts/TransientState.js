const transientState = {
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

