function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}  
 
const mondayWork = function(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}  

function wrapAdjective(adjective = "*"){
    const inner = function(msg = "special") {
        return `You are ${adjective}${msg}${adjective}!`
    }
    return inner;
} 
