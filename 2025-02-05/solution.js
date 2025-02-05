import { test } from "../test.js"

function doesRhyme(a, b) {
    const vowels = 'aeiou'
    const lastWordA = a.split(' ')[a.split(' ').length - 1].toLowerCase()
    const lastWordB = b.split(' ')[b.split(' ').length - 1].toLowerCase()

    const usedVowelsA = {}
    const usedVowelsB = {}

    for (const char of lastWordA.split('')) {
        if (vowels.includes(char)) {
            if (usedVowelsA[char]) usedVowelsA[char]++
            else usedVowelsA[char] = 1
        }
    }

    for (const char of lastWordB.split('')) {
        if (vowels.includes(char)) {
            if (usedVowelsB[char]) usedVowelsB[char]++
            else usedVowelsB[char] = 1
        }
    }

    return JSON.stringify(usedVowelsA) === JSON.stringify(usedVowelsB)
}

test(doesRhyme, true, "Sam I am!", "Green eggs and ham.")
test(doesRhyme, true, "Sam I am!", "Green eggs and HAM.")
test(doesRhyme, true, "You're built like a seat", "I bet you like to eat")
test(doesRhyme, false, "You are off to the races", "a splendid day.")
test(doesRhyme, false, "and frequently do?", "you gotta move.")
