var Arr;
    $(document).ready(function() 
         {  
        
       /* $.get("https://swapi.co/api/people/",function(data)
             {Arr=data.results;
             console.log(data.results)
             for(var i=0;i<10;i++) 
         $("#characters").append("<p>"+ String(i+1) + "." + Arr[i].name +
                       "</p>"); }
            );*/
   for(var i=0;i<10;i++) 
           
           $.get("https://swapi.co/api/people/" +i,function(data)
             {
     
             
         $("#characters").append("<p>"+ String(i+1) + "." + data.name +
                       "</p>"); }
            );
          
          

        
    


}
                 
                 
                 
                ) ;