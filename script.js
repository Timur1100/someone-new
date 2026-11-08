const contactButton = document.getElementById ("button2");
const bbuton = document.getElementById("bbuton");
const zadniF = document.getElementById("zadniFon");


contactButton.addEventListener("click" , function(){
    alert("Спасибо что проявили интерес!");
});

if (bbuton && zadniF) {
    bbuton.onclick = function() {
        zadniF.classList.add("active"); 
    };
}


window.onclick = function(event) {
    if (event.target === zadniF){
        zadniF.classList.remove("active");
    }
};