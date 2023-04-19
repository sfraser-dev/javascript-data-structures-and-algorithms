const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let nameExists = false;
    let propExists = false;
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i]["firstName"] === name) {
            nameExists = true;
        }
        if (contacts[i].hasOwnProperty(prop)) {
            propExists = true;
        }
    }
    
    if (nameExists && propExists) {
        for (let i=0; i<contacts.length; i++) {
            if (contacts[i]["firstName"]===name)
                return contacts[i][prop];
        }
    }

    if (nameExists===false) {
        return "No such contact";
    }

    if (nameExists===true && propExists===false) {
        return "No such property";
    }

    // Only change code above this line
}

console.log("retVal is: " + lookUpProfile("Kristian", "lastName") + "\n"); // Vos
console.log("retVal is: " + lookUpProfile("Sherlock", "likes") + "\n"); // ["Intriguing Cases", "Violin"]
console.log("retVal is: " + lookUpProfile("Harry", "likes") + "\n"); // []
console.log("retVal is: " + lookUpProfile("Bob", "number") + "\n"); // No such contact
console.log("retVal is: " + lookUpProfile("Bob", "potato") + "\n"); // No such contact
console.log("retVal is: " + lookUpProfile("Akira", "address") + "\n"); // No such property