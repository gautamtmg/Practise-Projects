// function buyPhone(model){
//     console.log('at mobile shop');
//     console.log('shop keeper insist me to wait till evening')

//     //delay
//     setTimeout(function(){
//         console.log('phone arrived at shop')
//     },4000)
//     return model;   
// }



// console.log('start execution');
// console.log(' I want to take a photo');
// console.log(' i dont have phone');
// console.log('I need a phone');
// var resul = buyPhone('s10');
// console.log('I have phone now', resul);
// console.log('now take photo')


// solution call back function
// callback is a function which is passes as an argument in another funtion
// usage ==> To handle result of asynchronous call 

//Example
// function test (arg){//HOF --> Higher Order Function

// }

// test (function(){//callback function

// })



function buyPhone(model, cbplaceholder){

    // console.log('what comes in >>>', cbplaceholder)
    console.log('it takes time to find phone');
    setTimeout(function(){
        console.log('phone found');
        cbplaceholder();
    },3000);
}


console.log('I want to get phone');

buyPhone('s10', function(){
    // callback block
    console.log("I am callback block");
    console.log(' restult of buyphone');
    console.log('now take a photo');
})



console.log('have a coffee');
console.log('buy an umbrella')