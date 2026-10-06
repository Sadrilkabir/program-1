console.log("Welcome to the Age Checker!");

let age = prompt("Enter your age:");

if (age < 0) {
    console.log("Invalid age.");
} else if (age < 13) {
    console.log("You are a child.");
} else if (age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
