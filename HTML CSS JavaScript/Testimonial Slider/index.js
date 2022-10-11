const testimonials = [
    {
        name:"Fredia Z.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text:"I can't say enough about apple. I don't always clop, but when I do, it's because of apple. I will let my mum know about this, she could really make use of apple!"
    },
    {
        name:"Jennifer U.",
        photoUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text:"Man, this thing is getting better and better as I learn more about it. Buy this now. Apple is awesome!"
    },
    {
        name:"Agna L.",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        text:"Best. Product. Ever! Apple is worth much more than I paid. Apple is the most valuable business resource we have EVER purchased."
    },
    {
        name:"Dannie W.",
        photoUrl:"https://media.istockphoto.com/id/1170286344/photo/positive-human-facial-expressions-and-emotions-portrait-of-handsome-young-male-in-his-20s.webp?s=612x612&w=is&k=20&c=53Mi5vuvyJusJNA4OPrJGtNatdQ4Kk0k6AUmCnskKZM=",
        text:"Very easy to use. Man, this thing is getting better and better as I learn more about it. Great job, I will definitely be ordering again! I made back the purchase price in just 48 hours!"
    },
    {
        name:"Johnnie T.",
        photoUrl:"https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text:"We've used apple for the last five years. It's incredible. It's just amazing. Apple is exactly what our business has been lacking."
    },
    {
        name:"Jilli O.",
        photoUrl:"https://images.unsplash.com/photo-1623157071775-e8b4ce3c4081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        text:"I use apple often. Since I invested in apple I made over 100,000 dollars profits. I'd be lost without apple. I love your system"
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx=0;

updateTestimonial();
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }

    setTimeout(()=>{
        updateTestimonial();
    },2000);

}