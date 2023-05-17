let read = document.getElementsByClassName("read");
let cards = document.getElementsByClassName("card");
let i = 1;

const carousel = document.querySelector(".carousel");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cardWidth = 304;
let position = 0;

for (let btn of read) {
  btn.addEventListener("click", function () {
    window.alert("This is a test website!");
  });
}

for (let card of cards) {
  card.id = "card" + i;
  card.querySelector(".card-title").innerHTML = "News " + i;
  i++;
}

next.addEventListener("click", function () {
  if(position>(-cardWidth*3)){
    position-=cardWidth;
    carousel.style.transform = `translateX(${position}px)`;
    console.log(position);
  }

});

prev.addEventListener("click", function () {
  if(position<0){
    position+=cardWidth;
    carousel.style.transform = `translateX(${position}px)`;
    console.log(position);
  }

});