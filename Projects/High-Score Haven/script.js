var button=document.getElementById("btn");
//alert('first level');
//window.onunload=function()
//                          {
//    alert('');
//            localStorage.removeItem('name');
//                localStorage.removeItem('date');
//                localStorage.removeItem('score');
//                localStorage.removeItem('game');
//}
if (localStorage.getItem("IsValid")=='false')
    {
document.getElementById("name").value=localStorage.getItem("name");
document.getElementById("date").value=localStorage.getItem("date");
document.getElementById("score").value=localStorage.getItem("score");
document.getElementById("game").value=localStorage.getItem("game");
        
    }

button.addEventListener('click',function()
                       {
    
    var form=document.querySelector('#myform');
    var name=form['name'].value;
 var game=form['game'].value;
     var date=form['date'].value;
     var score=form['score'].value;
    

    
    var message='';
    if (name=='')
        {
            message='Name is required';
             }
            else{
                localStorage.setItem("name",name);}
 
       
    if (game=='')
        {
            message=='' ?  message='game is required':message +='/ game is required';
           
        }
     else{  localStorage.setItem("game",game);}
     if (date=='')
        {
message=='' ?  message='date is required':message +='/date is required';
        }
      else{
         localStorage.setItem("date",date);
    }
     if (score=='')
        {
         message=='' ?  message='score is required':message +='/ score is required';
        }
    else{
         localStorage.setItem("score",score);
    }
    if (message !== '')
        {   
          localStorage.setItem("IsValid",false);  
            
            alert (message);
        }
    else{
   
        var table=document.getElementById("mytable");
        var tr=document.createElement("tr");
        
        var tdname=document.createElement("td");
                tdname.innerHTML=name;
        
          var tdgame=document.createElement("td");
                tdgame.innerHTML=game;
        
         var tddate=document.createElement("td");
        
        tddate.innerHTML=date;
        
         var tdscore=document.createElement("td");
        tdscore.innerHTML=score;
        var tdTrash=document.createElement("td");
        if (form['chk'].value==false)
            {  tdTrash.innerHTML=''; }
        else{
        tdTrash.innerHTML=TrashGenerator();}
           tr.appendChild(tdname);
        tr.appendChild(tdgame);
          tr.appendChild(tdscore);
         tr.appendChild(tddate);
       tr.appendChild(tdTrash);
    
        
        table.appendChild(tr);
        
              localStorage.removeItem('name');
                localStorage.removeItem('date');
                localStorage.removeItem('score');
                localStorage.removeItem('game');
        document.getElementById("name").value="";
document.getElementById("date").value="";
document.getElementById("score").value="";
document.getElementById("game").value="";
        document.getElementById("chk").checked =false;
    }

});
function TrashGenerator()
{
    var arr=['hi guys','hello world','i am is the best scorer'];
    var i=Math.floor(Math.random() * arr.length )
    return arr[i];
}
