
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
function Cocktail() {

  const [cocktailSearch, setCocktailSearch] = useState ('')
  const [cocktailName, setCocktailName] = useState ('')
  const [cocktailInstructions, setCocktailInstructions] = useState ('')
  const [cocktailImageUrl, setCocktailImageUrl] = useState ('')
  
  function updateCocktailSearch(event){
    setCocktailSearch (event.target.value) 
  }

  function getFetch(){

     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailSearch}`)
         .then(res => res.json()) // parse response as JSON
         .then(data => {
           console.log(data)
          
           setCocktailName(data.drinks[0].strDrink)  
           setCocktailInstructions(data.drinks[0].strInstructions)
           setCocktailImageUrl (data.drinks[0].strDrinkThumb)

   
         })
         .catch(err => {
             console.log(`error ${err}`)
         })};

  return (
    <div class="apiContainer">
        <h3 class="paragraphApi">Want to try our cocktails at home?</h3>
        <input type="text" placeholder="Introduce name" onChange= {updateCocktailSearch}></input>
        <button onClick={getFetch}>Show me how</button>
        <h5 class='name'>{cocktailName}</h5>
        <p class= 'instructions'>{cocktailInstructions}</p>
        <img src={cocktailImageUrl} style={{ "width" : "200px", "margin-bottom": "50px"}}/>
        
    </div>
  );
}
export default Cocktail;


