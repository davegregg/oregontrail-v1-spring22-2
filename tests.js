/**
 * TESTS -----------------------------------------------------------
 * Do not modify these, but use them to verify that your code works.
 */

import { Traveler, Wagon } from "./code.js";

function kenzieAssert(paramObject) {
	let actual = paramObject.actual;
	let expected = paramObject.expected;
	if (actual === expected) {
		console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
	} else {
		console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
			test: paramObject.failureMessage,
			expected: expected,
			actual: actual,
		});
	}
}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");

let actual = wagon.getAvailableSeatCount();
kenzieAssert({
	actual: actual,
	expected: 2,
	testNumber: 1,
	testFunction: "getAvailableSeatCount",
	failureMessage:
		"There should be two available seats left in the empty wagon",
});

wagon.join(henrietta);
actual = wagon.getAvailableSeatCount();
kenzieAssert({
	actual: actual,
	expected: 1,
	testNumber: 2,
	testFunction: "getAvailableSeatCount",
	failureMessage:
		"There should be one available seat left after henrietta joins",
});

wagon.join(juan);
wagon.join(maude); // There isn't room for her!

actual = wagon.getAvailableSeatCount();
kenzieAssert({
	actual: actual,
	expected: 0,
	testNumber: 3,
	testFunction: "getAvailableSeatCount",
	failureMessage: "There should be no available seats left",
});

henrietta.hunt(); // Gathers more food

juan.eat(); // After eating, Juan now has 0 food BUT is healthy
actual = wagon.shouldQuarantine();
kenzieAssert({
	actual: actual,
	expected: false,
	testNumber: 1,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should NOT quarantine because no one is sick",
});

juan.eat(); // Juan tries to eat but has 0 food, so he's now hungry (sick)
actual = wagon.shouldQuarantine();
kenzieAssert({
	actual: actual,
	expected: true,
	testNumber: 2,
	testFunction: "shouldQuarantine",
	failureMessage: "The wagon should quarantine because juan is sick",
});

actual = wagon.totalFood();
kenzieAssert({
	actual: actual,
	expected: 3,
	testNumber: 1,
	testFunction: "totalFood",
	failureMessage: "The wagon should have 3 food",
});
