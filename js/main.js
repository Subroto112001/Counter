const Dsiplay = document.getElementById("CounterDisplay");


const ButtonHold = document.querySelectorAll(".btn");

let Counter = 0;
ButtonHold.forEach((ButtonHold) => {
    ButtonHold.addEventListener('click', (e) => {
        let Hold = e.target.className;
        
       
        if (Hold.includes("Increase")) {
          Counter++;
        } else if (Hold.includes("Decrease")) {
          Counter--;
        } else {
          Counter = 0;
        }
          Dsiplay.innerHTML = Counter;
        
 })
});
