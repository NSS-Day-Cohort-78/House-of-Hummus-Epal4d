export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases").then(res => res.json())

    let salesDivs = await sales.map()

    salesDivs = salesDivs.join("")

    return salesDivs
}

