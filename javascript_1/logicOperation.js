// AND (&&) operation: Check if both conditions are true
if (isAdult && hasTicket) {
    console.log("You can enter the event.");
} else {
    console.log("You cannot enter the event.");
}

// OR (||) operation: Check if at least one condition is true
if (isAdult || hasTicket) {
    console.log("You can proceed to the event area.");
} else {
    console.log("You cannot proceed to the event area.");
}

// NOT (!) operation: Negate the condition
if (!hasTicket) {
    console.log("You need a ticket to enter.");
} else {
    console.log("You already have a ticket.");
} 