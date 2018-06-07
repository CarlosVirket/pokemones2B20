function showPokemon(query) {
    var result = "";
    var pokeFiltrados = [];
    
    if(query == null){
      console.log("Voy a mostrar todos");
      for(var i=0; i<pokemones.length; i++){
        result += "<div class='monesitem'>";
        result += "<img class= 'tipo' src=" + pokemones[i].ThumbnailImage + ">";
        result += "<h2 clas='nombre'>" + pokemones[i].name + "</h2>";
        result += "<div class='mamada'>"
        result+= "<h2 class='codigo'>" + pokemones[i].id + "</h2>";
        result += "<h2 class= 'poder'>" + pokemones[i].abilities + "</h2>";
        result += "</div>"
        result += "</div>"
        
      }
      document.getElementById("result").innerHTML = result;
    } else {
      console.log(query);
      for(var i=0; i<pokemones.length; i++){
        if(pokemones[i].name.toLowerCase().search(query) >= 0){

          pokeFiltrados.push(pokemones[i])

          result += pokemones[i].name + "<br>";
          result += result += "<div class='monesitem'>";
          result += "<img class= 'tipo' src=" + pokemones[i].ThumbnailImage + ">";
          result += "<h2 clas='nombre'>" + pokemones[i].name + "</h2>";
          result += "<div class='mamada'>"
          result+= "<h2 class='codigo'>" + pokemones[i].id + "</h2>";
          result += "<h2 class= 'poder'>" + pokemones[i].abilities + "</h2>";
          result += "</div>"
          result += "</div>"
       
          
        }
      }
      document.getElementById("result").innerHTML = result;
    }
  }
  
  function searchPokemon() {
    var query = document.getElementById("query").value;
    
    showPokemon(query);
  }

  