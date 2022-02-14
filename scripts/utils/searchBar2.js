const filteredRecipes = (recipes, searchBar) => {
	searchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length >= 3) {
			recipesSection.innerHTML = "";
			const query = e.target.value;
            function search() {
                

                for (let i = 0; i < 9; i++) {
                  recipes.ingredient = recipes.ingredient + i;
                }
            }    
       
			createRecipesCard(results);
			if (!results.length) {
                return recipesSection.innerHTML +=  `<div class="no__results"> 
                Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
                </div>`
			}
		} else if (e.target.value.length <= 3) {
			recipesSection.innerHTML = "";
			createRecipesCard(recipes);
		}

	});
};