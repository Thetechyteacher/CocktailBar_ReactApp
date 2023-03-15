function Cocktail() {
  function getFetch(){


    //let choice = document.querySelector("input").value
    
     
   
     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
         .then(res => res.json()) // parse response as JSON
         .then(data => {
           console.log(data)
          
           document.querySelector('.name').innerText = data.drinks[0].strDrink
           document.querySelector('.instructions').innerText = data.drinks[0].strInstructions
   
         })
         .catch(err => {
             console.log(`error ${err}`)
         })};
  return (
    <div class="apiContainer">
        <h3 class="paragraphApi">Want to try our cocktails <span class="atHome"> at home? </span> </h3>
        <input type="text" placeholder="Introduce name"></input>
        <button onClick={getFetch}>Show me how</button>
        <h5 class="name"></h5>
        <p class="instructions"></p>
        
    </div>
  );
}
export default Cocktail;



//document.querySelector("button").addEventListener("click", getFetch);

