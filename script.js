const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkValid=()=>{
    if(input.value===""){
        alert("Please provide a phone number");
        return;
    }
    if(isValid(input.value)){
        result.innerHTML = `Valid US number: <solid>${input.value}</solid>`
    }else if(!isValid(input.value)){
        result.innerHTML = `Invalid US number: <solid>${input.value}</solid>`
    }
}
const isValid=()=>{
    let valid = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return valid.test(input.value)
}
clearBtn.addEventListener("click",()=>{
    input.value="";
    result.innerHTML="";
})
checkBtn.addEventListener("click", checkValid);