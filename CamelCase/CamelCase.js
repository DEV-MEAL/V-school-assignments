function camelCase( str)
{
    var res;
    
    var arr=[];
    
    
    
    
    
    
    
    if (str.includes("_") ==true) 
    {
      arr= str.split("_");
    }
    else 
    if(str.includes("-") ==true)
    {
      arr= str.split("-");
    }
    else
      if(str.includes(" ") ==true)
    {
      arr= str.split(" ");
    }
    else
        {
            console.log("sorry we found no spaces,dashes,or underscores");
            break;
        }
        res=arr[0];
       for (var i=1;i<arr.length;i++) 
           {
               var s1=arr[i];
        var s2= s1.replace(s1.charAt(0),s1.charAt(0).toUpperCase());
               res+=s2;
           }
        //we can use join("") function to join array items in a string

    return res;
}


camelCase('hello-World New');