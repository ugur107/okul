const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widtRadio = Math.floor(window.innerWidth / 300);
    console.log(Math.floor(window.innerHeight / 300));
   let clickCounter =0;
   const imageItem = movieLists[i].querySelectorAll("img").length;
   console.log(imageItem);

   arrow.addEventListener("click", function (){
    clickCounter++;
    if(imageItem - (2 + clickCounter) + (2 - widtRadio) >= 0) {
        movieLists[i].style.trasform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value -300
        }px)`;
    }else{
        movieLists[i].style.trasform = "translateX(0)";
        clickCounter = 0;
    }
   });
});

/* dark mode */

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});