const createFiltersBar = (selectedFiltersUnduplicated, recipes) => {
	

	filtersBar.innerHTML = "";
	selectedFiltersUnduplicated.forEach((filter) => {

		return filtersBar.innerHTML += `<div class="filter__query">${filter}<i class="fal fa-times-circle filter__query__icon"></i></div>`

	});
	researchOnFilters(recipes, selectedFiltersUnduplicated);
};

let result;

const researchOnFilters = (recipes) => {
	const filterQuery = document.querySelectorAll(".filter__query");
	const filters = Array.from(filterQuery);
	result = recipes.filter((recipe) => {
		return filters.every((item) => {
			const formatedItem = item.textContent.toLowerCase();
			return (
				recipe.ingredients.some((i) => {
					return i.ingredient.toLowerCase().includes(formatedItem);
				}) ||
				recipe.appliance.toLowerCase().includes(formatedItem) ||
				recipe.ustensils.some((ustensil) => {
					return ustensil.toLowerCase() === formatedItem;				
				})
			);
		});
	});

	if (result.length) {
		recipesSection.innerHTML = "";
		createRecipesCard(result);
		listenOnFilterBar(filters, recipes);
		
	} else if (!result.length) {
		listenOnFilterBar(filters, recipes);
		recipesSection.innerHTML = "";
		return recipesSection.innerHTML += `<div class="no__results">Aucune recette ne correspond à votre critères, merci de réessayer avec d'autres critères.</div>`;
	}
};

let filtredRecipes1;

const listenOnFilterBar = (filters, recipes) => {
	filters.forEach((filter) => {
		filter.addEventListener("click", () => {
		removeFilter(filter, filters, recipes);

		//Quand on enlève un filtre, on affiche les resultats de la barre de recherche si il y en a une
		if (globalSearchBar.value.length >= 3) {
		
			filtredRecipes1 = filteredRecipes(recipes, globalSearchBar.value);
			recipesSection.innerHTML = "";
			createRecipesCard(filtredRecipes1);

			}
		});
	});
};

const removeFilter = (selectedFilter, arrayOfFilters, recipes) => {
	
	selectedFilter.remove();
	selectedFilters.splice(selectedFilters.indexOf(selectedFilter.textContent),1)

	if (!arrayOfFilters.length) {
		recipesSection.innerHTML = "";
		createRecipesCard(recipes);
	} else {
		researchOnFilters(recipes, arrayOfFilters);
	}
};

let results;

const searchBarProcessing = (recipes) => {

	globalSearchBar.addEventListener("keyup", (e) => {

		if (e.target.value.length >= 3) {

			recipesSection.innerHTML = "";
			results = filteredRecipes(recipes, e.target.value);
			console.log(results)

		if (results.length === 0) {
				return recipesSection.innerHTML +=  `<div class="no__results"> 
				Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
				</div>`
			} else {	
			recipesSection.innerHTML = "";
			createRecipesCard(results);
		}
	} else if (result) {
		recipesSection.innerHTML = "";
		createRecipesCard(result);
	} else {
		recipesSection.innerHTML = "";
		createRecipesCard(recipes);
	}

	
})

}



/*const searchBarProcessing = (recipes) => {

	globalSearchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length >= 3) {
			
			recipesSection.innerHTML = "";
			const results = filteredRecipes(recipes, e.target.value);

			if (results.length === 0) {
				return recipesSection.innerHTML +=  `<div class="no__results"> 
				Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
				</div>`
			} else {
			recipesSection.innerHTML = "";
			createRecipesCard(results);
			}
		} else {
			recipesSection.innerHTML = "";
			createRecipesCard(recipes);
		}

		})
}*/
