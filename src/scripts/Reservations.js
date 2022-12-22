import { getData } from "./dataAccess.js";
const clownDropDown = (reservation) =>{
    
return `
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
        getData("clowns").map(
            clown => {
                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
            }
        ).join("")
    }
</select>`
}
const convertCompletion = (data) => {
    const completed = getData("completions")
     const completionSet = completed.find(complete => complete.reservationId === data.id)
    if(completionSet){
    return `<li class="request-row" id="completion">Party Date: ${data.partyDate} 
    Parent: ${data.partyParentName}
            <button class="request__delete"
                id="request--${data.id}">Delete
            </button></li>`
}}

const reservationList = (reservation) => {
    const completed = getData("completions")
     const completionSet = completed.find(complete => complete.reservationId === reservation.id)
    if (!completionSet) {
        return ` 
    <li class="request-row request">Party Date:${reservation.partyDate} Parent: 
    ${reservation.partyParentName} Hours Requested: ${reservation.partyLength}
    ${clownDropDown(reservation)}
    <button class="reservation__delete"
        id="deleteReservation--${reservation.id}">Delete
    </button></li>`
}}

export const Reservations = () => {
const reservations = getData("reservations")
let html = `
<ul>
    ${reservations.map(reservation => reservationList(reservation)).join("")}
    ${reservations.map(reservation => convertCompletion(reservation)).join("")}
</ul>
`
return html
}

