
$(document).ready(function()
                  {
    
    $("#btn").on("click",function()
                {
        
        var input=$("#input").val();
        
        
       $("ul").append("<li>"+ input + " <button class='like'>like</button> <span class='count'>0</span></li>");
           
        $(".like").on("click",function()
                 {
            var count=0;
            console.log($(this).siblings().html());
            var count=$(this).siblings().html();
   
        count++;
        $(this).siblings().html(count);
    });
        
    });
 
    
}
                 
                 
                 
                 );
