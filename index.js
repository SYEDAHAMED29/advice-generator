let btn = document.querySelector("button");
let adviceId = document.querySelector(".advice-id");
let advice = document.querySelector(".advice");

const baseUrl = "https://api.adviceslip.com/advice";

function getData() {
   fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
         console.log(data.slip.advice);
         adviceId.innerText = `ADVICE #${data.slip.id}`;
         advice.innerText = data.slip.advice;
      })
      .catch((err) => console.log(err));
}

btn.addEventListener("click", getData);

document.addEventListener("DOMContentLoaded", getData);
