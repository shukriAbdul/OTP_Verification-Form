const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")

inputs.forEach((input, index1) =>{
    
   input.addEventListener("keyup" , (e) =>{


    const currentInput = input,
    nextInput =input.nextElementSibling,
    prevInut = input.previousElementSibling;

    if(currentInput.value.length > 1){
        currentInput.value = "";
        return;

    }
    if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
        nextInput.removeAttribute("disabled");
        nextInput.focus();
    }
    if(e.key === "Backspace") {
        input.forEach((input , index2) =>{
            if(index1 <= index1 && prevInut){
                input.setAttribute("disabled", true);
                input.value = "";
                prevInut.focus();
            }
        });

    }
    if(!inputs[3].disabled && inputs[3].value !== ""){
        button.classList.add("active");
        return;
    }
    button.classList.remove("active")
   });

})
window.addEventListener("load", () => inputs[0].focus());