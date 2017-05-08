var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  
for(var i=0;i<names.length;i++)
    {
        attemptCall(name,dontCall,call,sendText)
        
    }
function attemptCall(name,dontCall,call,sendText)
{
  if (name.length%2==0 )
      {
        dontCall();  
          
      }
    if (name.length%2!=0 )
      {
        call();  
          
      }
}
function call()
{console.log("");}
function dontCall()
{console.log("");}
function sendText()
{console.log("");}