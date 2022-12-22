import { ClownParty } from "./Clowns.js"
import { fetchData, deleteRecord, sendData } from "./dataAccess.js"
const mainContainer =document.querySelector("#container")


mainContainer.addEventListener( "stateChanged", customEvent => {render()})

const render = () => {
    fetchData("completions").then(() =>
    fetchData("clowns")).then(() => 
    fetchData("reservations")).then(() => {
    mainContainer.innerHTML = ClownParty()
        }
    )
}

render()

//event listener for deleting reservations

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("deleteReservation--")) {
       const [,reservationId] = click.target.id.split("--")
       deleteRecord(parseInt(reservationId),"reservations")
   }
})

//event listener for selecting a clown and completing a party

mainContainer.addEventListener("change", event => {
    if (event.target.id ==="clowns"){
        const [reservationId,clownId] = event.target.value.split("--")
 
        const dataToSendToAPI = {
            clownId: parseInt(clownId),
            reservationId: parseInt(reservationId),
            dateCompleted: Date.now()
        }
        sendData(dataToSendToAPI,"completions")
    }
    }
)