function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string.toUpperCase());

    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    else {
        return "I would love to!"
    }
}