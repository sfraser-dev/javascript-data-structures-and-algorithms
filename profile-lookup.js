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
    for (let i=0; i<contacts.length; i++){
        if (contacts[i]["firstName"]===name) {
            console.log("firstName " + name + " exists");
            // return "No such contact.";
            if (contacts[i].hasOwnProperty(prop)) {
                console.log(prop + " is " + contacts[i][prop]);
                return contacts[i][prop];
            }
        }
        // else if (contacts[i].hasOwnProperty(prop)===false) {
        //     return "No such property.";
        // }
        // else if ( (contacts[i]["firstName"]===name) && (contacts[i].hasOwnProperty(prop))) {
        //     console.log(contacts[i]["firstName"] + " " + contacts[i][prop]);
        //     return contacts[i][prop];
        // }
    }

    // Only change code above this line
}

console.log("retVal is " + lookUpProfile("Kristian", "lastName"));
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Harry", "likes");
// lookUpProfile("Bob", "number");
// lookUpProfile("Bob", "potato");
// lookUpProfile("Akira", "address");