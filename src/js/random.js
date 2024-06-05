
//　get random color
function getRandomColor(){
    return "#" + Math.random().toString(16).slice(2,8);
}
// get random string with number and alphabet.
function getRandomString(){
    return Math.random().toString(36).slice(2);
}

// generate random string with fixed length, the end filled with zero.
function getRandomStringWithFixedLength(len){
    return Math.random().toString(36).slice(2).padEnd(len , '0');
}