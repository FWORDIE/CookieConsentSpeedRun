
//Timer		
var ms = 0, s = 0, m = 0;
var timer;
var mainTimer = document.querySelector('#maintime');
var mainTimerMob = document.querySelector('#maintimemobile');
var roundTime = document.querySelector('#roundtime');
var round0Timer = document.querySelector('#time1');
var round1Timer = document.querySelector('#time2');
var round2Timer = document.querySelector('#time3');
var round0Split = document.querySelector('#split1');
var round1Split = document.querySelector('#split2');
var round2Split = document.querySelector('#split3');
var lastTime = document.querySelector('#lasttime');
var personalBest = document.querySelector('#personalbest');
var round1Box = document.querySelector("#Round1Box");
var round = 0;
var split = [Infinity, Infinity, Infinity];
var lastSplit = [];
var lastRoundTime = 0;
var buttons = 12;
var Going = false;
var HighScore = false;




// Check for Local PB Split
for (let i = 0; i < split.length; i++){
    if(sessionStorage.getItem("split" + i +"Local") === null){
        split[i] = Infinity; 
        console.log(split);
    } else{
        split[i] = sessionStorage.getItem("split" + i +"Local");
        console.log(split);
    }
}

//Check for local PB
if(sessionStorage.getItem("pBmsLocal") === null) {
    var pBms = Infinity;
  }
else{
      var pBms = sessionStorage.getItem("pBmsLocal");
      personalBest.textContent = getTimer(pBms);
  }

// Round Start
function start() {
    if(Going == false){
    Going = true;
    lastRoundTime = 0;
    round = 0;
    for(let i = 0; i < 3; i++){
        // cleararea = document.getElementById("round" + i + "Timer");
        // cleararea.textContent = '--:--.--';
        // cleararea = document.getElementById("round" + i + "Split");
        // cleararea.textContent = '--.--';
        eval(cleararea = eval("round" + i + "Timer"));
        cleararea.textContent = '--:--.--';
        eval(cleararea = eval("round" + i + "Split"));
        cleararea.textContent = '--.--';
        eval("round" + i + "Split").classList.remove("goodsplit");
        eval("round" + i + "Split").classList.remove("badsplit");
    }
    ms = 0;
    if(!timer) {
        timer = setInterval(run, 10);
    }
    document.getElementById('Welcome').classList.add("show");
    loadButtons("Round1Box", "Level 1: Open your cookie preferences", "1");

}
}

//Timer Loop
function run() {
    ms++;
    mainTimer.textContent = getTimer(ms);
    mainTimerMob.textContent = getTimer(ms);
    eval(roundarea = eval("round" + (round) + "Timer"));
    roundarea.textContent = getTimer(ms);
    var tt = 50;
    function timeSoFar() {
        for(let i=0;i < round; i++){
            //tt = `("round" + round)`;
            return tt;
    }
    };
    let rtime = (ms - lastRoundTime);
    roundTime.textContent = getTimer(rtime);
}

//MS to Timer format
function getTimer(ms, sp) {
    var s = (ms/100);
    var m = parseInt(s/60, 10);
    s = s%60;
    s = s.toFixed(2);
    if(sp == true){
        let str = (s)
        return str;
        //.replace('.',':');
    } else{
        // return m + ':' + s;
        let str = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        return str; 
        //.replace('.',':');
    }
}

// Split Set
function setsplit(){
    if(split[round] == Infinity){
        eval("round" + round + "Split").textContent = ("N/A");
    } else{
        console.log("I tried");
        if(lastSplit[round] > split[round]){
            eval("round" + round + "Split").textContent = ("+" + getTimer((lastSplit[round] - split[round]), true)); 
            eval("round" + round + "Split").classList.remove("goodsplit");
            eval("round" + round + "Split").classList.add("badsplit");
        } else {
            eval("round" + round + "Split").textContent = (getTimer((lastSplit[round] - split[round]), true));
            eval("round" + round + "Split").classList.remove("badsplit");
            eval("round" + round + "Split").classList.add("goodsplit");
        }
    }
}

// Round 2 Start
function round2() { 
    lastRoundTime = ms;
    lastSplit[round] = ms;
    setsplit();
    round ++;
    Gentoggles();
}

// Round 3 Start
function round3() {
    lastRoundTime = ms;
    lastSplit[round] = ms - lastSplit[round -1];
    setsplit();
    round ++;
    loadButtons("Round3Box", "Level 3: Save your cookie preferences", "3");
}

//Final Split on end
function finalSplit(){
    lastRoundTime = ms;
    lastSplit[round] = ms - lastSplit[round -1]- lastSplit[round -2]
    setsplit();
}

function controls(){
    document.getElementById("Controls").classList.toggle("show");
}

// Finish Call
function end(){
    finalSplit();
    stopTimer();
    Going = false;
    document.getElementById("Finish").classList.remove("show");
    document.getElementById("Round2Box").classList.add("show");
    document.getElementById("Round3Box").classList.add("show");
    document.getElementById("finalTime").textContent = getTimer(ms);
}

//Finish End
function stopTimer() {
    clearInterval(timer);
    timer = false;
    lastTime.textContent = getTimer(ms);
    console.log('ms: ' + ms + '- pBms' + pBms)
    storeHighScore();
}

//Store Score if High Score
function storeHighScore(){
    if(pBms > ms){
        pBms = ms;
        HighScore = true; 
        personalBest.textContent = getTimer(ms);
        sessionStorage.setItem("pBmsLocal", pBms);
        for(let i = 0; i < split.length; i++ ){
            sessionStorage.setItem("split" + (i) + "Local", lastSplit[i]);
            split[i] = lastSplit[i];
        }
    }
}

//Clear Storage
function clearStorage(){
    sessionStorage.clear();
}

//Import Copy
console.log(copy.round1Con[0]);

//Round 1 ----

// Random Array Gen
function randomArr(round , name){
    eval(name +"= [];");
    var arrLength = round.length;
    for(let i =0; i < arrLength; i++){
        eval(name).push(i);
    }
    shuffle(eval(name));
    //console.log(eval(name));
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


// Load Buttons
function loadButtons(box, title, numb){ 
    box.innerHTML = ""; //Clear box
    document.getElementById(box).classList.remove("show");
    eval('var ButtonConArr = copy.round' + numb + 'Con;');
    eval('var ButtonProArr = copy.round' + numb + 'Pro;');
    randomArr(ButtonConArr, "round1Arr");
    randomArr(ButtonProArr, "round1Pro");
    //console.log(round1Pro[0]);
    // if(numb == "1"){
    //     var headnumb = Math.floor((Math.random() * copy.Welcome.length) + 1);
    //     var header = document.createElement("h1");
    //     header.classList.add('header');
    //     var randhead = copy.Welcome[headnumb];
    //     header.innerText = randhead;
    //     document.getElementById(box).appendChild(header).classList.add("roundHeader");  
    // } else{

    // };
    var header = document.createElement("h1");
    header.innerText = title;
    document.getElementById(box).appendChild(header).classList.add("roundHeader");
    let proNum = Math.floor((Math.random() * buttons-1) + 1);
    console.log(proNum);
    for(let i = 0; i < (buttons); i++ ){
        if(i == proNum){
            var btn = document.createElement("a");
            var num2 = round1Pro[0];
            var txt2 = ButtonProArr[num2];
            btn.innerHTML = txt2;
            var classnum = Math.floor((Math.random() * 9) + 1);
            var classname = "type" + classnum;
            if(classnum < 8){
                document.getElementById(box).appendChild(btn).classList.add("round1button", classname, "next", "btn");
            } else{
                document.getElementById(box).appendChild(btn).classList.add("round1button", classname, "next");
            }
            var next = document.getElementsByClassName('next')[0];
            if(numb == "1"){
                next.addEventListener("click", round2);
            } else{
                next.addEventListener("click", end);
            }
        } else {
            var btn = document.createElement("a");
            var num = round1Arr[i];
            var txt = ButtonConArr[num];
            btn.innerHTML = txt;
            var classnum = Math.floor((Math.random() * 9) + 1);
            var classname = "type" + classnum;
            if(classnum < 8){
                document.getElementById(box).appendChild(btn).classList.add("round1button", classname, "wrong", "btn");
            } else{
                document.getElementById(box).appendChild(btn).classList.add("round1button", classname, "wrong");
            }        } 
            for( let p = 0; p < document.getElementsByClassName('wrong').length; p++){
                var next = document.getElementsByClassName('wrong')[p];
                next.addEventListener("click", wrong);
            }
    }
}

function wrong(){
    console.log('wrong');
    var wrongNum = Math.floor((Math.random() * copy.wrong.length -1) + 1);
    this.innerText = copy.wrong[wrongNum];
}


// Round 2 ---

//Generate Toggles
function Gentoggles(){
    round1Box.innerHTML = ""; 
    document.getElementById("Round1Box").classList.add("show");
    document.getElementById("Round2Box").classList.remove("show");
    document.getElementById("rd1").checked = true;
    document.getElementById("rd2").checked = false;
    document.getElementById("rd3").checked = false;

    let alltoggles = document.getElementsByClassName('checkbox');
    for(let q = 0; q < alltoggles.length; q++){
        alltoggles[q].checked = false;
    }
    for(let i = 1; i <= 3; i++){
        eval('var ConArr = copy.tog' + i + 'Con;');
        eval('var ProArr = copy.tog' + i + 'Pro;');
        eval('var Reset = copy.tog' + i + 'Reset[0];');
        let ResetNum = Math.floor((Math.random() * 5) + 1);
        TrickNum = Math.floor((Math.random() * 5) + 1);
        //console.log(Reset);
        randomArr(ConArr, "ConArrNum");
        randomArr(ProArr, "ProArrNum");
        //console.log(TrickNum);
        for(let o = 1; o <= 6; o++){
        let StateNum = Math.random() < 0.3; 
        let txt = document.getElementById("wrd_"+ i +"_"+ o);
        let toggle = document.getElementById("btn_"+ i +"_"+ o);
            if(o == TrickNum){
                txt.innerText = ProArr[ProArrNum[0]];
                toggle.setAttribute("name", "antitoggle");
                toggle.onclick = checkToggles;
                if(StateNum == true){
                    toggle.checked = true;
                }
            }
            else if(o == ResetNum){
                txt.innerText = Reset;
                toggle.setAttribute("name", "reset");
                toggle.setAttribute("onclick", "resetToggles("+i+")");
                //toggle.onclick = resetToggles(i);
                toggle.checked = false;
            }
            else{
                txt.innerText = ConArr[ConArrNum[o-1]];
                toggle.setAttribute("name", "toggle");
                toggle.onclick = checkToggles;
                if(StateNum == true){
                    toggle.checked = true;
                }
            }
        }
    }
    togglepro = document.querySelectorAll("input[name=toggle]");
    togglecon = document.querySelectorAll("input[name=antitoggle]");
    checkToggles();
}

// Counter 
var toggleNum = document.getElementById("Remaining");

function checkToggles(){
    var toggletot = togglepro.length + togglecon.length;
    var toggleproRight = document.querySelectorAll('input[name=toggle]:checked').length;
    var toggleconWrong = togglecon.length - document.querySelectorAll('input[name=antitoggle]:checked').length;
    var toggleCorrect = toggleproRight + toggleconWrong;
    toggleCount = toggletot- toggleCorrect;
    toggleNum.innerHTML = toggleCount;
    console.log(toggleCount);
    if(toggleCount == 0){
        console.log("Round Over");
        document.getElementById("Round2Box").classList.add("show");
        round3();
    }
}

//Reset Other Toggles on Click
function resetToggles(num){
    setTimeout(function(){ 
        for(let i = 1; i <=6; i++){
            let toggle = document.getElementById("btn_"+ num +"_"+ i);
            toggle.checked = false;
            console.log('done');
            checkToggles();
        }
    }, 300);
}

// Round 3
function restart(){
    document.getElementById('Finish').classList.add("show");
    var EndTitle = document.getElementById('EndTitle');
    if(HighScore == true){
        EndTitle.innerText="You did it and got new Highscore!"
        console.log("highscore")
    }
    document.getElementById('Round3Box').innerHTML = "";
    start();
    HighScore = false; 

}


// Test Code
function test(){
    Gentoggles();
}



