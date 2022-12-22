import { sendData } from "./dataAccess.js"

export const ReservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="partyParentName">Parent Name</label>
            <input type="text" name="partyParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyChildName">Childs Name</label>
            <input text" name="partyChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyNumber">Party People</label>
            <input type="number" name="partyNumber" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Duration of Party in Hours</label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Party Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>

        <button class="button" id="submitPartyReservation">Reserve Party</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitPartyReservation") {
        // Get what the user typed into the form fields
        const partyParentName = document.querySelector("input[name='partyParentName']").value
        const partyAddress = document.querySelector("input[name='partyAddress']").value
        const partyNumber = document.querySelector("input[name='partyNumber']").value
        const partyChildName = document.querySelector("input[name='partyChildName']").value
        const partyLength = document.querySelector("input[name='partyLength']").value
        const partyDate= document.querySelector("input[name='partyDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            partyParentName: partyParentName,
            partyAddress: partyAddress,
            partyChildName: partyChildName,
            partyDate: partyDate,
            partyLength: partyLength,
            partyNumber: partyNumber
        }

        // Send the data to the API for permanent storage
        sendData(dataToSendToAPI,"reservations")
    }
})

/*
partyLength
partyNumber
partyParentName
partyAddress
partyChildName
partyDate
*/
