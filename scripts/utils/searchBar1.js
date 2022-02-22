/*const filteredRecipes = (recipes, searchBar) => {
	searchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length >= 3) {
			recipesSection.innerHTML = "";
			const query = e.target.value;
			const results = recipes.filter((recipe) => {
				return (
					recipe.description.includes(query) || 
					recipe.ingredients.some((ingredient) => ingredient.ingredient.includes(query)) ||
					recipe.appliance.toLowerCase().includes(query) ||
					recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(query)) ||
					recipe.name.toLowerCase().includes(query)
				);
			});
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
};*/





const filteredRecipes = (recipes) => {
	
		globalSearchBar.addEventListener("keyup", (e) => {
			

			const query = e.target.value;
			const results = recipes.filter((recipe) => {
				return (
					recipe.description.includes(query) || 
					recipe.ingredients.some((ingredient) => ingredient.ingredient.includes(query)) ||
					recipe.appliance.toLowerCase().includes(query) ||
					recipe.ustensils.some((ustensil) => ustensil.toLowerCase().includes(query)) ||
					recipe.name.toLowerCase().includes(query)
				);
				
			});
			createRecipesCard(results);
			if (!results.length) {
				return recipesSection.innerHTML +=  `<div class="no__results"> 
				Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
				</div>`
			}
			
		})
	};




