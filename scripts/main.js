const getData = () =>
	fetch('./scripts/data/recipes.json') /* Appeler l'API Fetch */
    .then(response => response.json()) /*  Convertir res en données JSON */
    .then(data => { /* Traiter les données JSON */
      return data;
    })

const createRecipesCard = (recipes) => {
    recipes.forEach((recipe) => {
      recipesSection.innerHTML += new RecipeCard(recipe).recipeCard;
    });
   
  };

  const init = async () => {
    
  const { recipes } = await getData();
    
  createRecipesCard(recipes)
  listenOnInputs(recipes);
  filteredRecipes(recipes, globalSearchBar)

};
  
init();

  
