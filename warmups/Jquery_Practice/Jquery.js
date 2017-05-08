    var color;
$( document ).ready(function(){

    $('#box').on('click',function(){
        if (color=="blue")
            {color="red";}
        else
           color="blue" ;
      $('#box').css("background-color",color) ;
       $('#box').css("width",$('#box').width()+100) ;  
         $('#box').css("height",$('#box').height()+100) ;  
    });
})