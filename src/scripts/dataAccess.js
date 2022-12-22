const applicationState = {}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const getData = (data) => {
    return applicationState[data].map(arr =>({...arr}))
 }

export const sendData = (data, to) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
}
    return fetch(`${API}/${to}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
       mainContainer.dispatchEvent( new CustomEvent("stateChanged"))
})

}

export const fetchData = (data) => {
    return fetch(`${API}/${data}`)
        .then(response => response.json())
        .then(
            (dataReturned) => {
                // Store the external state in application state
                applicationState[data] = dataReturned
            }
        )
}

export const deleteRecord = (id,data) => {
    return fetch(`${API}/${data}/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}