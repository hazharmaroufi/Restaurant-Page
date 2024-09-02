import "./styles.css";

const home = document.getElementById("home");
const menus = document.getElementById("menus");
const contact = document.getElementById("contact");



import restaurentimg from "./restaurent.jpg";
const image = document.createElement("img");
image.src = restaurentimg;
image.width = 300;

const content = document.getElementById("content");
let div = document.createElement("div");
content.appendChild(div);
div.style.display = "flex";

// home
let homeDiv1 = document.createElement("div");
homeDiv1.appendChild(image);
homeDiv1.className = " ";
div.appendChild(homeDiv1);
let homeDiv2 = document.createElement("div");
homeDiv2.appendChild(document.createTextNode("London's Best Restaurants:"));
homeDiv2.appendChild(document.createElement("br"));
homeDiv2.appendChild(document.createTextNode("Damn-tasty, the London restaurant scene is internationally renowned. With anything from Michelin spots to quirky pop-up restaurants; the city's restaurants really do cater. So whether you're looking for a birthday restaurant, a unique place to eat or London's best restaurants; discover them here. The best part? Book on DesignMyNight and earn rewards to spend against experiences on DesignMyNight."));
homeDiv2.appendChild(document.createElement("br"));
let btn = document.createElement("button");
btn.className = "btn";
btn.innerText = "Book Now";
homeDiv2.appendChild(btn);
homeDiv2.className = "homeDiv2  ";
div.appendChild(homeDiv2);

// menus



home.addEventListener("click", () => {
  homeDiv1.classList.remove("hidden");
  homeDiv2.classList.remove("hidden");
});
menus.addEventListener("click", () => {
  homeDiv1.classList.add("hidden");
  homeDiv2.classList.add("hidden");
});
contact.addEventListener("click", () => {
  homeDiv1.classList.add("hidden");
  homeDiv2.classList.add("hidden");
});