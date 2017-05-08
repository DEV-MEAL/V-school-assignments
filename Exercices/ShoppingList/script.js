//if(localStorage.getItem("MyDiv")!==null)
//    {
// 
//     document.getElementById("MyDiv").innerHTML=localStorage.getItem("MyDiv");   
//    }



//document.getElementById('btn').addEventListener('click', function(){
//  var inputVal = document.getElementById('input').value;
   


       
  //create a text node which will contain the inputVal
  var txtNode = document.createTextNode(inputVal)
    if(inputVal=="")
        {  
        document.getElementById('Validation').innerHTML="Fill Text Box with Item name";
            
            return; }
    else
           document.getElementById('Validation').innerHTML="";
  //create a li element
    var li = document.createElement('li');
    
   var button=document.createElement("button");
    button.innerHTML="X";
    li.appendChild(button);

  //attach textNode to li element
  li.appendChild(txtNode);
   
  //select ul element and append li to it
  var ul = document.getElementById('list');
      
  ul.appendChild(li);
  
    document.getElementById('input').value="";
    button.addEventListener('click',function()
                            {
        ul.removeChild(li);
    }
                           );
      //localStorage.setItem("MyDiv",document.getElementById("MyDiv"));
})






//document.getElementById('btn').addEventListener('click', function(){
//  var inputVal = document.getElementById('input').value;
//   
//
//
//       
//  //create a text node which will contain the inputVal
//  var txtNode = document.createTextNode(inputVal)
//    if(inputVal=="")
//        {  
//        document.getElementById('Validation').innerHTML="Fill Text Box with Item name";
//            
//            return; }
//    else
//           document.getElementById('Validation').innerHTML="";
//  //create a li element
//    var li = document.createElement('li');
//    
//   var button=document.createElement("button");
//    button.innerHTML="X";
//   
//    li.appendChild(button);
//
//  //attach textNode to li element
//  li.appendChild(txtNode);
//   
//  //select ul element and append li to it
//  var ul = document.getElementById('list');
//      
//  ul.appendChild(li);
//   button.setAttribute("onclick",'btnClick()');
//    document.getElementById('input').value="";
// 
//      localStorage.setItem("MyDiv",document.getElementById("MyDiv").innerHTML);
//});
//
//
//
//   function btnClick()
//                            {
//   this.parentNode.parentNode.removeChild(this.parentNode);
//    }
//                          






