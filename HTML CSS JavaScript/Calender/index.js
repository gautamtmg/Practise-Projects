const monthEl= document.querySelector(".date h1")
const fullDateEl = document.querySelector(".date p");
const daysEl= document.querySelector(".days")
const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex +1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay()-1;
const months = [
    "January",
    "February",
    "March",
    "April",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

monthEl.innerText = months[monthIndex];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for(let i = firstDay; i>0; i--){
    days += `<div class="empty"></div>`
}

for(let i = 1; i<= lastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`
    }
    days += `<div>${i}</div>`
}

daysEl.innerHTML = days;