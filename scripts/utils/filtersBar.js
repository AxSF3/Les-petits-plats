const createFiltersBar = (selectedFiltersUnduplicated, recipes) => {
	filtersBar.innerHTML = "";
	selectedFiltersUnduplicated.forEach((filter) => {

		return filtersBar.innerHTML += `<div class="filter__query">${filter}<i class="fal fa-times-circle filter__query__icon"></i></div>`

	});
	researchOnFilters(recipes, selectedFiltersUnduplicated);
};

const researchOnFilters = (recipes) => {
	const filterQuery = document.querySelectorAll(".filter__query");
	const filters = Array.from(filterQuery);
	const result = recipes.filter((recipe) => {
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
		console.log(result)
		listenOnFilterBar(filters, recipes);

		  result.forEach((result) => {
		 
			ingredients = [...new Set(result.ingredients.map((i) => i.ingredient))].sort();
			ustensils = [...new Set(result.ustensils.map((u) => u))].sort();
			apparatus = [...new Set([result.appliance])].sort();
		
			console.log(ingredients)
			console.log(ustensils)
			console.log(apparatus)
			ingredientChevron.addEventListener("click", () => {
			
			ingResult.innerHTML = "";
			
			ingredients.forEach((ingredient) => {

				return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
				
			});

		})

		ustensilsChevron.addEventListener("click", () => {
			
			ustensilsResult.innerHTML = "";
			
			ustensils.forEach((ustensil) => {

				return ustensilsResult.innerHTML += `<li class="ingredient__item">${ustensil}</li>`;
				
			});

		})

		apparatusChevron.addEventListener("click", () => {
			
			apparatusResult.innerHTML = "";
			
			apparatus.forEach((apparatus) => {

				return apparatusResult.innerHTML += `<li class="ingredient__item">${apparatus}</li>`;
				
			});

		})

		

		

		});
		

	} else if (!result.length) {
		listenOnFilterBar(filters, recipes);
		recipesSection.innerHTML = "";
		return recipesSection.innerHTML += `<div class="no__results">Aucune recette ne correspond à votre critères, merci de réessayer avec d'autres critères.</div>`;
	}
};


const listenOnFilterBar = (filters, recipes) => {
	filters.forEach((filter) => {
		filter.addEventListener("click", () => {
			removeFilter(filter, filters, recipes);
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

/*
const searchBarProcessing = (recipes) => {

globalSearchBar.addEventListener("keyup", (e) => {
	if (e.target.value.length >= 3) {
		recipesSection.innerHTML = "";
	
		const result = filteredRecipes(recipes, e.target.value)

		if (result.length === 0) {
			return recipesSection.innerHTML +=  `<div class="no__results"> 
			Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
			</div>`
		} else {
		recipesSection.innerHTML = "";
		createRecipesCard(result);
		}
	} else {
		recipesSection.innerHTML = "";
		createRecipesCard(recipes);
	}
	});

}
*/

const searchBarProcessing = (recipes) => {

	

	globalSearchBar.addEventListener("keyup", (e) => {
		if (e.target.value.length >= 3) {
			
			recipesSection.innerHTML = "";
			const results = filteredRecipes(recipes, e.target.value);
			//console.log(ingredients)

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
}
