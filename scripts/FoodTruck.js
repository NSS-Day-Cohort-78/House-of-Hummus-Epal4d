import { Sales } from "./Sales.js"
import { EntreeOptions } from "./Entrees.js"
import { sideOptions } from "./SideDishes.js"
import { veggiesOptions } from "./Vegetables.js"
import { handleOrderSubmission } from "./orderComboButton.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await EntreeOptions()
    const sideHTML = await sideOptions()
    const veggiesHTML = await veggiesOptions()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class='Choices'>
            <section class='choices_entree options'>
                <h2>Entree Choice</h2>
                    ${entreeHTML}
            </section>
            <section class='choices_side options'>
                <h2>Side Choice</h2>
                    ${sideHTML}
            </section>
            <section class='choices_vegetable options'>
                <h2>Vegetable Choice</h2>
                    ${veggiesHTML}
            </section>
        </article>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>`
}

 document.addEventListener("click", handleOrderSubmission)