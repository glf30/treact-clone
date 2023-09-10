const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const test1 = {
    img: "./assets/test-1.avif",
    title: "Amazing User Experience",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in sit dolores consequatur, voluptate ipsum officia magnam saepe ducimus temporibus corrupti esse repellat repellendus deserunt, culpa, molestias doloribus. Atque accusantium ad cum nobis debitis molestias nostrum dolores ullam saepe maiores!",
    name: "Charlotte Hale",
    position: "Director, Delos Inc"
}
const test2 = {
    img: "./assets/test-2.avif",
    title: "Love the Developer Experience and Design Principles !",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in sit dolores consequatur, voluptate ipsum officia magnam saepe ducimus temporibus corrupti esse repellat repellendus deserunt, culpa, molestias doloribus. Atque accusantium ad cum nobis debitis molestias nostrum dolores ullam saepe maiores!",
    name: "Adam Cuppy",
    position: "Founder, EventsNYC"
}
const testimonialsArray = [test1,test2];

let value = 0;
let img = document.querySelector('#test-img');
let title = document.querySelector('.test__header--title');
let para = document.querySelector('.test__para');
let testName = document.querySelector(".test__name");
let position = document.querySelector(".test__position");

/* ACCORDIAN */
const accordianArray = document.querySelectorAll(".accordians .accordian");

accordianArray.forEach((e) => {
    e.addEventListener("click", () => {
        let faqDisplay = e.querySelector('.faq__para');
        let faqArrowDisplay = e.querySelector('img');

        if(faqDisplay.style.display === "block"){
            faqDisplay.style.display = "none";
            faqArrowDisplay.src = "./assets/faq-arrow.svg"
        } else {
            faqDisplay.style.display = "block";
            faqArrowDisplay.src = "./assets/faq-arrow-open.svg"
        }
    })
})

let changeImage = () => {
    if (value+1 === testimonialsArray.length){
        value = 0;
    } else {
        value++;
    }
    img.src = testimonialsArray[value].img;
    title.innerText = testimonialsArray[value].title; 
    para.innerText = testimonialsArray[value].para;
    testName.innerText = testimonialsArray[value].name;
    position.innerText = testimonialsArray[value].position;
}

rightArrow.addEventListener("click", changeImage);
leftArrow.addEventListener("click", changeImage);