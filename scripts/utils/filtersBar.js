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
		listenOnFilterBar(filters, recipes);
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
	const index = arrayOfFilters.indexOf(selectedFilter);
	arrayOfFilters.slice(index, 0);
	selectedFilter.remove();
	selectedFilters.splice(0, selectedFilters.length)
	if (!arrayOfFilters.length) {
		recipesSection.innerHTML = "";
		createRecipesCard(recipes);
	} else {
		researchOnFilters(recipes, arrayOfFilters);
	}
};

const searchBarProcessing = (recipes) => {

globalSearchBar.addEventListener("keyup", (e) => {
	if (e.target.value.length >= 3) {
		recipesSection.innerHTML = "";
	
/*
		if (!result.length) {
			return recipesSection.innerHTML +=  `<div class="no__results"> 
			Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.
			</div>`
			}*/
		} else if (e.target.value.length <= 3) {
		recipesSection.innerHTML = "";
		createRecipesCard(recipes);
		}

	});

}

