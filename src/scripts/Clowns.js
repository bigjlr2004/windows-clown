
import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"

export const ClownParty = () => {
    return `
    <h1>Buttons the Clown</h1>

    ${ReservationForm()}

    <h2>Reservations Requested</h2>
    ${Reservations()}



    
    `
}