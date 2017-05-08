$.get('http://pokeapi.co/api/v2/pokedex/1/',function(data)
     {
    var pokeArr=data.pokemon_entries;
   // for(var i=0;i<pokeArr.length;i++)
         for(var i=0;i<10;i++)//10 pokemon only
//    $("#pokemon-entries").append("<div class='floating-box'>"+  pokeArr[i].pokemon_species.name +"</div>");
        $("#pokedex").append(" <div class='col-sm-6 col-md-4'><div  class='thumbnail'> <img src='"+  pokeArr[i].pokemon_species.url +"'><div class='caption'><a href='http://www.google.com/search?q="+  pokeArr[i].pokemon_species.name +"'><h3>" + pokeArr[i].pokemon_species.name + "</h3></a></div></div></div>");
    
}
     
     );