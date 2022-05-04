let item_1 = 5;
//console.log(item_1)
let item_2 = 3;
//console.log(item_2)
let item_3 = item_1 + item_2;
//console.log(item_3)
let item_4 = ' evergreen'
//console.log(item_3 + item_4) - concatination 
//console.log(item_1 * item_2) // result NaN - not number
let item_5 = item_3
let item_6 = 15
let item_6_type = typeof item_6
//console.log('item_6_type =' + ' ' + item_6_type)
//console.log('item_6 ==' + ' ' + typeof item_6) 
//console.log(item_6_type)
let item_7 = String(item_6)
let item_7_type = typeof item_7
//console.log('item_7 =' + ' ' + item_7_type)
//console.log('item_7 ==' + ' ' + typeof item_7)
//console.log(item_7_type)

const age_2 = 18
const age_3 = 60
const checkAge = function(age){
    age = Number(age)
    //if(+age)
    
if (!isNaN(age)) {
    if (age < age_2 && age >= 0) {
        alert ('You dont have access cause your age is ' + age + '. ' + 'It is less then ' + age_2)
    } else if (age < 0) {
        alert ('You are not exist yet, try again')
    } else if (age >= age_2 && age < age_3) {
        alert ('Welcome!')
    } else if (age >= age_3 && age <= 120) {
        alert ('Keep calm and look Culture channel')
    } else if (age > 120) {
        alert ('This is not valid age')
    } else {
        alert ('Techical work')
    }
} else {
    alert ('Error')
    }
}


let agePrompt = prompt ('Enter age')
 checkAge(agePrompt)