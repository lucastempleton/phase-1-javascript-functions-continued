// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = (job = "go to the office") => {
    return `This Monday, I will ${job}.`
}
function wrapAdjective(value = "*"){
    return function (innerFunction= "Special"){
            return `You are ${value}${innerFunction}${value}!`
    }

}




// const innerFunction = (someValue = "special") => {
//     return `You are ${someValue}.`
// }
// const wrapAdjective = (value = "*",someValue) => {
//     innerFunction(someValue)
// }