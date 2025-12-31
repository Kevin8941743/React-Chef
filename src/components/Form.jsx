import "../head.css";
import Recipe from "../components/Recipe"
import IngredientsList from "../components/IngredientsList"
import { useState } from "react";

export default function Form(){

    const [item, setItem] = useState([])

    const [recipeShown, setRecipeShown] = useState("")


    async function showFood() {
        const res = await fetch("http://localhost:3001/getRecipe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredients: item }),
        });
        const data = await res.json();
        setRecipeShown(data.recipe);
      }

    function handleSubmit(formData){
        const newIngredient = formData.get("food")
        setItem(prevItem => [
            ...prevItem, 
            newIngredient
        ])
    }
    
    
    return(
        <main>
        <form className="Search" action={handleSubmit}>
            <label htmlFor = "ingredient"></label>
            <input
                type="text"
                id="ingredient" 
                aria-label="Add ingredient"
                name="food" 
                placeholder = "e.g. oregano"
            />

            <div className="add">
                <button type="submit">+ Add ingredient </button>
            </div>

        </form>

        {item.length > 0 && 
            <IngredientsList item={item} showFood={showFood} /> 
        }

        {recipeShown && <Recipe /> }

        </main>
    )
}