window.onload= init();
function init(){
    var numberRounds = document.getElementById('n-rounds');
    var startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', ()=>{
        console.log(numberRounds.value);
        var n = numberRounds.value;
        while(n !=0 ){
            
            n--;
        }
    })
}   