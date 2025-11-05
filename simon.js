let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
//keypress keyboard trigger if we press any key in document//
document.addEventListener("keypress",function()
{
    if(start==false)
    {
        console.log("game started");
        start=true;
        levelUp();
    }
})
function gameflash(btn)
{
btn.classList.add("flash");
setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}
function userflash(btn)
{
btn.classList.add("userflash");
setTimeout(function()
{
    btn.classList.remove("userflash");
},250);
}
function levelUp()
{
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose//
    let randInd=Math.floor(Math.random()*3);
    let randcolor=btns[randInd];
    gameseq.push(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
}
function checkans(ind)
{
if(userseq[ind]==gameseq[ind])
{
    //now we have two cases ie we check for some middle value or last value//
    //if last value then update level//
    //if some middle value then wait for button to press then check//
    if(userseq.length==gameseq.length)
    {
        setTimeout(levelUp,1000);
    }
}
else
{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
}
}
function btnpress()
{
//now detect which button is pressed//
let btn=this;
userflash(btn);
usercolor=btn.getAttribute("id");
userseq.push(usercolor);
checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
function reset()
{
    start=false;
    gameseq=[];
    userseq=[];
    level=0; 
}