const filteredRecipes = (recipes, query) => {

			const results = [];

			for (let i = 0; i < recipes.length; i++) {

				const { name, ingredients, description } = recipes[i];

				let find = false;
			
					for (let ii = 0; ii < ingredients.length; ii++) {
						if (ingredients[ii].ingredient.toLowerCase().includes(query)) {
							results.push(recipes[i]);
							find = true;
							break;
						}
					}

					if (find) {
						continue;
					}

					for (let n = 0; n < name.length; n++) {
						if (name.toLowerCase().includes(query)) {
							results.push(recipes[i]);
							find = true;
							break;
						}
					}

					if (find) {
						continue;
					}

					for (let d = 0; d < description.length; d++) {
						if (description.toLowerCase().includes(query)) {
							results.push(recipes[i]);
							find = true;
							break;
						}
					}

			}

			return results
};










































/*
const filteredRecipes = (recipes, searchBar) => {
	searchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length >= 3) {

			const { name, ingredients, appliance, ustensils, description } = recipes;
			
			const filter = (recipes, query) => {
				const results = [];

				let find = false;

				for (const recipe of recipes) {
					
				}

			}
       
			if (results.length) {
				recipesSection.innerHTML = "";
				createRecipesCard(results);
			}
			
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
