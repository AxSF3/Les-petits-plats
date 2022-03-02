const filteredRecipes = (recipes, searchBar) => {
	searchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length >= 3) {
			const results = [];
			recipesSection.innerHTML = "";
			const query = e.target.value;

			for (let i = 0; i < recipes.length; i++) {

				const { name, ingredients, appliance, ustensils, description } = recipes[i];
				const includesInName = name.toLowerCase().includes(query);
				const includesInDescription = description.toLowerCase().includes(query);
			
					for (let ii = 0; ii < ingredients.length; ii++) {
						if (ingredients[ii].ingredient.toLowerCase().includes(query)) {
							results.push(recipes[i]);
							continue;
						}
					}
			
					for (let a = 0; a < appliance.length; a++) {
						if (appliance[a].toLowerCase().includes(query)) {
							results.push(recipes[i]);
							continue;
						}
					}
			
					for (let u = 0; u < ustensils.length; u++) {
						if (ustensils[u].toLowerCase().includes(query)) {
							results.push(recipes[i]);
							continue;
						}
					}

					for (let n = 0; n < name.length; n++) {
						if (name[n].toLowerCase().includes(query)) {
							results.push(recipes[i]);
							continue;
						}
					}

					let il = 0;
					
					while (il < 0) {
						il++;
  						
						if (includesInName || includesInDescription) {
							results.push(recipes[i]);
    						continue;
  						}

					}

					console.log(results)
					
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
};
