function superbowlWin(array) {
    const thing = array.find(checkForW);
    return thing.year;
}

function checkForW(element) {
    return (element.result === "W");
}
