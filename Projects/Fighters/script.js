var btnFight1=document.getElementById("btnfight1")
btnFight1.addEventListener('click',function()
                           {
                                  if( Number(document.getElementById("score1").innerHTML)==0)
                               return;
                           document.getElementById("score1").innerHTML=Number(document.getElementById("score1").innerHTML)-1;
                   
                           });
var btnFight1=document.getElementById("btnfight2")
btnFight1.addEventListener('click',function()
                           {
                                if( Number(document.getElementById("score2").innerHTML)==0)
                               return;
                           document.getElementById("score2").innerHTML=Number(document.getElementById("score2").innerHTML)-1;
                           
                           });