// Challenge 2
function occurrence_counter(sentence) {
    let words = sentence.toLowerCase().split(" ")
    let occ = {}
    for (let word of words) {
        occ[word] = (occ[word] || 0) + 1
    }
    return occ
}
let challenge2 = "The cat and the Dog and the mouse"
console.log(occurrence_counter(challenge2))