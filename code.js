/*
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

function Traveler (name) {
    // this = {}
    this.name = name
    this.food = 1
    this.isHealthy = true
    // return this
}

Traveler.prototype.hunt = function () {
    this.food += 2
    return this.food
}

Traveler.prototype.eat = function () {
    if (this.food <= 0) {
        this.isHealthy = false
        return false
    }

    this.food -= 1
    return this.food
}



function Wagon (capacity) {
    this.capacity = capacity
    this.passengers = []
}

Wagon.prototype.getAvailableSeatCount = function () {
    return this.capacity - this.passengers.length
}

Wagon.prototype.join = function (traveler) {
    if (this.passengers.length >= this.capacity) return false

    this.passengers.push(traveler)
    return true
}

Wagon.prototype.shouldQuarantine = function () {
    return this.passengers.some(traveler => traveler.isHealthy === false)

    // This code will be ignored, since the return statement above will 
    // always run and will make this code here unreachable.

    for (let index = 0; index < this.passengers.length; index += 1) {
        let currentTraveler = this.passengers[index]

        if (currentTraveler.isHealthy === false) {
            return true
        }
    }

    return false
}

Wagon.prototype.totalFood = function () {
    return this
        .passengers
        .reduce((total, currTraveler) => total + currTraveler.food, 0)
}

const pikachusWagon = new Wagon(3)
console.log(pikachusWagon)
console.log(pikachusWagon.getAvailableSeatCount())
console.log(pikachusWagon.isAshPresent)

export { Traveler, Wagon };