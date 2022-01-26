function friend(friends) {
    let art = []
    let m = friends.map(friend => {
        if (friend.length == 4) return friend
    })
    for (let tyn of m) {
        if (tyn != undefined) {
            art.push(tyn)
        }
    }
    return art
}

console.log(friend(["Ryan", "Kieran", "Mark"]))