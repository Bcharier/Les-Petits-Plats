/* import { recipes } from "/Json/recipes.js";
import { Recipe, RecipesList } from "./data.js"

const recipesList = new RecipesList();


function createRecipes(recipe) {
    recipe.recipes.forEach((recipe) => {
    recipesList.addRecipe(new Recipe (
        recipe.id,
        recipe.name,
        recipe.ingredients,
        recipe.time,
        recipe.description,
        recipe.appliance,
        recipe.ustensils
    ))
    })
}

createRecipes();

console.log(recipes);

const recipesSection = document.querySelector(".recipes-container");


function createRecipes(recipe) {
    const recipeCard = document.createElement("div");
    const recipeImg = document.createElement("img");
    const recipeHeader = document.createElement("div");
    const recipeTitle = document.createElement("h2");
    const recipeTime = document.createElement("div");
    const recipeIngredientsContainer = document.createElement("div");
    const recipeInfo = document.createElement("div");

    recipeCard.id = recipe.id;

    const ingredientsListContainer = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
        const ingredientsList = createIngredient(ingredient);
        ingredientsList.appendChild(ingredientsListContainer);
    })

    recipeTitle = recipe.name;
    recipeTime = recipe.time;
    recipeInfo = recipe.description;

    recipeImg.appendChild(recipeCard);
    recipeHeader.appendChild(recipeCard);
    recipeTitle.appendChild(recipeHeader);
    recipeTime.appendChild(recipeHeader);
    recipeIngredientsContainer.appendChild(recipeCard);
    recipeInfo.appendChild(recipeCard);

    return recipeCard;
}

function createIngredient(ingredient) {
    const ingredientsList = document.createElement("li");
    ingredientsList.innerHTML = `<strong>${ingredient.ingredient}`;
    ingredientsList.innerHTML += ingredient.quantity
    ? ` : </strong>${ingredient.quantity}`
    : `</strong>`;
    ingredientsList.innerHTML += ingredient.unit ? `${ingredient.unit}` : ``;

    return ingredientsList;
}

function createAllRecipes() {
    recipesSection.innerHTML = "";
    recipes.forEach((recipe) => {
    const recipeContainer = createRecipes(recipe);
    recipeContainer.style.display = "block";
    recipeContainer.appendChild(recipesSection);
    console.log(recipeContainer)
    })
}












createAllRecipes();



 */


/* import { recipes } from "../Json/recipes.js"


const recipesContainer = document.querySelector('.recipes-container');

export function allRecipes(recipes) {

    recipes.forEach(recipes => {

        let newDivElt = document.createElement('div');
        newDivElt.classList.add('recipes-box');
        newDivElt.innerHTML = `
        <div class="recipes-informations">
            <div class="recipes-header">
                <h2> ${recipes.name} </h2>
                <span><i class="fas fa-clock" ></i> ${recipes.time} min</span>
            </div>
            <div class="ingredients-instructions">
                <div class="ingredients">
                    ${recipes.ingredients.map(element => `<div><span><b>${element.ingredient}: </b></span><span>${ "quantity" in element ? element.quantity : ""} </span><span>${ "unit" in element? element.unit.substring(0,2) : ""}</span></div>`).join(" ")}
                </div>
                <div class="instructions">
                    <span>${recipes.description}</span>
                </div>        
            </div>
        </div>
        `
        recipesContainer.appendChild(newDivElt)
    })
}

allRecipes(recipes); */












/* 
import { recipes } from "../Json/recipes.js";
import { allRecipes } from "./recipeCreation.js";


const searchBar = document.querySelector(".search-bar");
const recipesContainer = document.querySelector(".recipes-container");

const suggestMessage = document.querySelector(".message-not-found");


searchBar.addEventListener("keyup", (key) => {

   const inputValue = key.target.value.toLowerCase();
   
   if (inputValue.length >= 3) {

        const filteredrecipes = recipes.filter((recipe) => {
            return (
                recipe.name.toLowerCase().includes(inputValue) ||                                  
                recipe.ingredients.some(i => i.ingredient.toLowerCase().includes(inputValue)) ||    
                recipe.ustensils.some(u => u.toLowerCase().includes(inputValue)) ||                 
                recipe.appliance.toLowerCase().includes(inputValue) ||                              
                recipe.description.toLowerCase().includes(inputValue)                                     
            )
        })

            recipesContainer.innerHTML = "";
            allRecipes(filteredrecipes);

            showSuggestionMessage (filteredrecipes)

   }else {
        recipesContainer.innerHTML = ""; 
        allRecipes(recipes);   
   }
});


function showSuggestionMessage (filteredrecipes) {

    if (filteredrecipes.length <= 0) {
                
        const pElement = document.createElement("p");

        suggestMessage.innerHTML = "";

        pElement.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."

        suggestMessage.append(pElement);

    }else {

        suggestMessage.innerHTML = "";
        recipesContainer.innerHTML = "";
        allRecipes(filteredrecipes);
    }
}
 */