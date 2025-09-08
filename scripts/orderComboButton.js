import { saveOrderSubmission } from "./TransientState.js";

 export const handleOrderSubmission = (clickEvnt) => { 
if (clickEvnt.target.id === "purchase") {
    console.log("Submit Clicked")
    saveOrderSubmission()
}
}

