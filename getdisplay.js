function PrintForm()
{
var fname=document.getElementById("fname").value;
 var lname=document.getElementById("lname").value;   
   var age=document.getElementById("age").value;     
    var form=document.querySelector("#myform");//get element by name
var gender1=form.gender.value;
    var loc=form.location.value;
    
 var checkedValue="" ; 
var inputElements = document.getElementsByClassName('chk');
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue += " "+inputElements[i].value;
         
      }
}
    alert("First Name:" + fname +"\n Last Name :"+ lname +"\nAge:"+ age +"\nGender:" + gender1 +"\nLocation:"+ loc + "\nDietary restrictions:"+ checkedValue)

}