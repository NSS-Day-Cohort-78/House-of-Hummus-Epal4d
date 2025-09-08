import { FoodTruck } from "./FoodTruck.js"
import { addSideListeners } from "./SideDishes.js"
import { saveOrderSubmission } from "./TransientState.js"
import { addVegetableListeners } from "./Vegetables.js"
import { addEntreeListener } from "./Entrees.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const foodTruckHTML =  await FoodTruck()
    mainContainer.innerHTML = foodTruckHTML

    addSideListeners()
    addVegetableListeners()
    addEntreeListener()

    const purchaseButton = document.getElementById("purchase")
    purchaseButton.removeEventListener("click", saveOrderSubmission)
    purchaseButton.addEventListener("click", saveOrderSubmission)

}
renderAllHTML()

document.addEventListener("newOrderSubmitted", renderAllHTML)

