const { database } = require("./database.js")

const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        if (!drovers.some(a => a.id === randomHerderId)){
            drovers.push(allDrovers[randomHerderId])
        } else {
            counter -= 1
        }
    }
    return drovers
}
module.exports = { hireDrovers }