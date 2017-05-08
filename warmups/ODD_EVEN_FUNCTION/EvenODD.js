function even_or_odd(number)
{
   if ((number % 2) ===0)
       return "even";
       return "odd";
    
    
}

even_or_odd(92);
function IsAllNumbers(arr)
{
  for (i=0;i<arr.length;i++)
  {
   if (!Number.isInteger(arr[i]))
   return false;
   return true;
  }
}


function firstNonConsecutive(arr)
{
    var consec;
    
    //if (arr.length>=2 && IsAllNumbers(arr))
    //{
      consec=arr[0];
      for(i=1;i<arr.length;i++)
      {
        if (consec===arr[i]-1)
        consec=arr[i];
        else
        return arr[i];
      }
      return null;
    //}
    //else
   // return "error";
}

firstNonConsecutive([1,2,3,4,9])

