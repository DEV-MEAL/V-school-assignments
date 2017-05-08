var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    
    if(xhr.readyState==4 && xhr.status==200)
        {
        var JsonData=xhr.responseText;
            var data=JSON.parse(JsonData);
        document.getElementById("name").innerHTML=data.name;
        }

}

xhr.open("GET","http://swapi.co/api/people/3/",true);
xhr.send();


