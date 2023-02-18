// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const lettersFreq = {};
    const messageFreq = {};

    // build frequency of letters
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    // build frequency counter for message
    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    // final comparison of message frequency with letter frequency
    for (let char in messageFreq) {
        // returns false if message char not in letters chars
        if(!lettersFreq[char]) return false;
        // returns false if there are not enough message characters.
        if(messageFreq[char] > lettersFreq[char]) return false;
    }
    return true;
}

module.exports = constructNote;