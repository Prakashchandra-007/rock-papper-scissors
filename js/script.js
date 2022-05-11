window.onload = init();

var n = 0;
var i = 0;
let scoreComp = 0;
let scoreUser = 0;
function init() {
    var numberRounds = document.getElementById('n-rounds');
    var startBtn = document.getElementById('startBtn');
    var rockBtn = document.getElementById('rockBtn');
    var papperBtn = document.getElementById('papperBtn');
    var scissorBtn = document.getElementById('scissorBtn');
    var counter = document.getElementById('leftRound');
    
    var userInput;
    var compInput;
    var result;
    
    startBtn.addEventListener('click', () => {
        
        n = numberRounds.value;
        rockBtn.addEventListener('click', () => {
            userInput = rockBtn.getAttribute('value');            
            compInput = getComputerInput();
            console.log(compInput+'<<>>>>' + userInput);
            var result = getWinner(userInput, compInput);
            console.log('winner is >>' + result);
            console.log(scoreComp);
            scoreCount(result);
            i++;
            counterChk(i);
            

            counter.innerHTML = n - i;
        });
        papperBtn.addEventListener('click', () => {
            userInput = papperBtn.getAttribute('value');
            compInput = getComputerInput();
            console.log(compInput+'<<>>>>' + userInput);
            result = getWinner(userInput, compInput);
            console.log('winner is >>' + result);
            console.log(scoreComp);
            scoreCount(result);
            i++
            counterChk(i);
            counter.innerHTML = n - i;
        });
        scissorBtn.addEventListener('click', () => {
            userInput = scissorBtn.getAttribute('value');
            compInput = getComputerInput();
            console.log(compInput+'<<>>>>' + userInput);
            result = getWinner(userInput, compInput);
            console.log('winner is >>' + result);
            console.log(scoreComp);
            scoreCount(result);
            i++
            counterChk(i);
            counter.innerHTML = n - i;
        });
       
        if (n - i <= 0) {
                counter.innerHTML = 'over';
                return;
            }

            counter.innerHTML = n - i;


    })

}


///////////////////game logic and return winner ///////////////// ok
function getWinner(userInput, computerInput) {
    document.getElementById('compChoose').innerHTML = computerInput;
    document.getElementById('userChoose').innerHTML = userInput;
    
    var res ='';
    if(computerInput==userInput){
        res ='draw';
    }
    if(userInput == 'papper' && computerInput == 'scissor' 
        || userInput == 'rock' && computerInput == 'papper'
        || userInput == 'scissor' && computerInput == 'rock'){
        res = 'comp';
    }
   else if( computerInput == 'papper' && userInput == 'scissor' 
        || computerInput == 'rock' && userInput == 'papper'
        || computerInput == 'scissor' && userInput == 'rock'){
        res = 'user';
    }
    return res;
}
//////////////////////// take computer input////////////////////////////
function getComputerInput() {
    var rand = Math.floor(Math.random() * 3);
    var arr = ['rock', 'papper', 'scissor'];
    return arr[rand];
}
/////////////////////////////count score and changge in score //////////////////////////////
function scoreCount(result) {

    
    if(result=='draw'){
        
        console.log(result);
    }
    else if(result=='user'){
        scoreUser++;
        console.log("user increased score to 1+>>"+scoreUser);
        document.getElementById('score2').innerHTML = scoreUser;
    }
    else{
        scoreComp++
        document.getElementById('score1').innerHTML = scoreComp;
    }
}

function counterChk(i){
    var win='Match Draw' ;
    if(scoreComp > scoreUser){
        win =`Winner is Computer`
    }
    else if(scoreComp <scoreUser){
        win =`Winner is Player`
    }
    if(n-i == 0){
        console.log('game over');
        setTimeout(function(){
            document.getElementById('wapperId').innerHTML = `<div class="modal"><div class="modalBox"><h1>${win}</h1><a href="index.html">Restart</a></div></div>`
        },2000);
        
        

    }
}