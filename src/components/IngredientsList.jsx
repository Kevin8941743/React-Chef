export default function IngredientsList(props){
    
    const ingredientsListItems = props.item.map((ing, index) => (
        <li key={index}>{ing}</li>
    ))

    return (
    
    <section>
        <h2>Ingredients on hand: </h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

        {item.length >= 4 && <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div> 
        <button onClick={props.showFood}>Get a recipe</button>
        </div>}
    </section>





    )
}