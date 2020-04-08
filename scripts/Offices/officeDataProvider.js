let offices = []

export const useOffices = () => offices.slice()

export const getOffices = () => fetch("http://localhost:3000/offices")
    .then(res => res.json())
    .then (data => offices = data)