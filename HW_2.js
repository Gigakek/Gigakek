//1. Write a script that counts and prints the result from raised 2 to power 10, starting with power 1

// let i = 2;
// let j = 1;
// for(j; j<=10;j++) {
//     let result = i**j
//     console.log(result)


// 1.1 Convert 1 task into a function that accepts the input of power into which the number 2 will be generated
// }
// const power = function(j) {
//     const i = 2;
//     const result = i**j
//     console.log(result)
   
// }

// power(12)

// 2. Write a script that will print 5 lines into the console so that the first line is :), the second line :):) and so on
// Variant 1
// let smile = ':)'
//  for(let i = 1; i <= 5; i++){   
//     console.log(smile.repeat(i))
//  }
 
// Variant 2
// let smile = ':)'
// let result = ''
// for (let i=1; i <=5; i++) {
//    result += smile
//    console.log(result)
// }



// 2.1 Convert the 2 task to a function that accepts the input string, which will be displayed in the console
//  (as the smile in condition), as well as the number of lines to output 
// e.g. function printSmile(word, numberOfRows)

// Variant 1
//  function printSmile(word, NumberOfRows) {
//     for(let i=1; i<=NumberOfRows; i++) {
//        console.log(word.repeat(i))
//     }
//  }

//  printSmile(':3', 5)

 // Variant 2
// function printSmile(word, NumberOfRows) {
//    let result = ''
//    for(let i = 1; i <= NumberOfRows; i++){
//       result += word
//       console.log(result)
//    }
// }

// printSmile(12, 5)

// 3. Write a function that accepts the input word. The function task is to calculate and display 
// in the console how many vowels are in the word, and how many consonant letters.
// e.g. function getWordStructure(word)
// In the console: 
// Word (word) consists of  (number) vowels and (number) consonant letters

// let getWordStructure = function(word) {
//     let numberOfVowels = 0
//     let numberOfConsonants = 0
//     let vowels =['a','A','e','E','i','I','o','O','u','U']
//     let consonants=['b','B','c','C','d','D','f','F','g','G','h','H','j','J','k','K','l','L',
//     'm','M','n','N','p','P','q','Q','r','R','s','S','t','T','v','V','w','W','x','X','y','Y','z','Z']
//     for(let i=0; i < word.length; i++){
//         for(let j=0; j < vowels.length; j++){
//             if(word[i] === vowels[j]){
//                 numberOfVowels++
//                 break;
//             }
//         }
//         for(let l=0; l < consonants.length; l++){
//             if (word[i] === consonants[l]){
//                 numberOfConsonants++
//                 break;
//             }
//         }
//     }
//     console.log('Word ' + word + ' consists of ' + numberOfVowels + ' vowels ' + numberOfConsonants + ' consonants')
// }
// getWordStructure('Yan')


// 4. Write a function that checks if the word is a palindrome
// e.g. function isPalindrom(word)
function Palendrome(word){
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('')
}
console.log(`${Palendrome('Abba') ? 'It is a palendrome' : 'It is not a palendrome'}`)