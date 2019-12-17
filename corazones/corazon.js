function rate(value) {
    clearRates(); 
    addRates(value); 
}

function clearRates() { 
    for(var i=1; i<=5; i++) {
        document.getElementById("heart" +i).classList.remove("active");
    }
}

function addRates(value) { 
    for(var i=1; i<=value; i++) {
        document.getElementById("heart" +i).classList.add("active");
    }
}

window.addEventListener("click", function(e) { 
function clickOut(e){
    if(!document.getElementById("rate").contains(e.target)) { 
        clearRates();
    }
}})
