let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 7:
    case 8:
    case 9:
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
    }

    if (count > 0) {
        console.log(count);
        return `${count} Bet`;
    }
    else if (count === 0 || count < 0) {
        console.log(count);
        return `${count} Hold`;
    }

    // Only change code above this line
}

cc(2); cc(3); cc(4); cc(5); cc(6);