
import React, { useState, useEffect } from "react";
import "../App.css";
import "../public/index.html";


function Cocktail({choice}) {
  
  // 
     
      useEffect (function() {
        if (choice){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
            .then(function (response) {
              return response.json()
          })
        }
      });
    
  
    
    
  return (
    <div class="apiContainer">
        <h3 class="paragraphApi">Want to try our cocktails <span class="atHome"> at home? </span> </h3>
        <input type="text" placeholder="Introduce name"></input>
        <button>Show me how</button>
        <h5 class="name"></h5>
        <p class="instructions"></p>
        
    </div>
  );
}
export default Cocktail;

// return (I though this one would work but it doesn't)

//     GetFetch
//     ?
//     <div class="apiContainer">
//       <h3 class="paragraphApi">Want to try our cocktails <span class="atHome"> at home? </span> </h3>
//      <input type="text" placeholder="Introduce name"/>
//       <button>Show me how</button>
//       <h5 class="name"> {data.drinks[0].strDrink}</h5>
//       <p class="instructions"> {data.drinks[0].strInstructions} </p>
//       </div>
// :

// <h3>Data will appear here</h3>