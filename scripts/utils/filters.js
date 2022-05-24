const generateFilters = (recipes) => {

	recipes.forEach((recipe) => {
	  ingredients = [
	  ...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient)])].sort();
	  ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u)])].sort();
	  apparatus = [...new Set([...apparatus, ...[recipe.appliance]])].sort();
	});
	return { ingredients, ustensils, apparatus };
  };

  const listenOnInputs = (recipes) => {
		
	let { ingredients, ustensils, apparatus } = generateFilters(recipes);

	/* INGREDIENTS */

	function openCloseIng() {

		if(ingResult.style.display === 'grid') {
			ingResult.style.display = 'none'
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientInput.classList.remove("open");
		} else {
			ingResult.style.display = 'grid'
			ingredientChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingredientInput.classList.add("open");

			apparatusResult.style.display = 'none'
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");

			ustensilsResult.style.display = 'none'
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			
		}

	}

let filteredRecipe;

ingredientChevron.addEventListener("click", () => {

	openCloseIng();
	ingResult.innerHTML = "";

	ingredients.forEach((ingredient) => {

		return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
		
	});

	// "result" = filtered recipes
	// Si il y a un filtre, trier la liste en fonction du filtre séléctionné
	if (result) {

		ingredients = result.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))
		ingredients = [...new Set([].concat(...ingredients))].sort()

		// Enlever l'élément cliqué

		selectedFilters.forEach((selectedFilter) => {
   
			ingredients.splice(ingredients.indexOf(selectedFilter),1)
			
		});


		ingResult.innerHTML = "";


		ingredients.forEach((ingredient) => {
   
			return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
			
		});

	  }
	  // Si il y a 3 caractères ou plus, trier la liste en fonction de la recherche
	  if (globalSearchBar.value.length >= 3) {

		ingredients = results.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))
		ingredients = [...new Set([].concat(...ingredients))].sort()

		ingResult.innerHTML = "";

		ingredients.forEach((ingredient) => {
   
			return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
			
		});

		// Si il y a 3 caractères ou plus et qu'il y a un filtre -> trier les ingrédients en fonction des recettes 
		if (result) {
			
			filteredRecipe = filteredRecipes(recipes, globalSearchBar.value);
	
			ingredients = filteredRecipe.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))
			ingredients = [...new Set([].concat(...ingredients))].sort()

			// Enlever de la liste l'ingrédient sur lequel on a cliqué
			selectedFilters.forEach((selectedFilter) => {
   
				ingredients.splice(ingredients.indexOf(selectedFilter),1)
				
			});
	
	
			ingResult.innerHTML = "";
	
			ingredients.forEach((ingredient) => {
	   
				return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
				
			});
	
	
		}

		// Si il y a 2 caractères (donc plus de recherche) mais qu'il y a un filtre, 
		// afficher la liste en fonction du filtre séléctionné
	  } else if(globalSearchBar.value.length === 2 && result) {
		
		ingredients = result.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))
		ingredients = [...new Set([].concat(...ingredients))].sort()

		ingResult.innerHTML = "";

		ingredients.forEach((ingredient) => {
   
			return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
			
		});
		// Si il y a 2 caractères (donc plus de recherche), mettre la liste originale
	  } else if(globalSearchBar.value.length <= 2) {

		ingredients = recipes.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))
		ingredients = [...new Set([].concat(...ingredients))].sort()

		ingResult.innerHTML = "";

		ingredients.forEach((ingredient) => {
   
			return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
			
		});
	  }

	listenOnIngredientsItems();

})

ingredientInput.addEventListener("keyup", (e) => {

	if (e.target.value.length >= 3) {

		ingResult.innerHTML = '';

		const query = e.target.value;
		
		const results = ingredients.filter((ingredient) => {
			ingResult.style.display = 'none';
			return ingredient.toLowerCase().includes(query.toLowerCase());

		});
		
		results.forEach((result) => {
			ingResult.style.display = 'grid';
			apparatusResult.style.display = 'none';
			ustensilsResult.style.display = 'none';
			return ingResult.innerHTML += `<li class="ingredient__item">${result}</li>`;
		});

	} else {
		ingResult.style.display = 'none';
	}
	listenOnIngredientsItems();
})


const listenOnIngredientsItems = () => {
	const ingredientsItems = document.querySelectorAll(".ingredient__item");

	ingredientsItems.forEach((item) => {
		item.addEventListener("click", () => {
			selectedFilters.push(item.textContent);
			const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
			createFiltersBar(selectedFiltersUnduplicated, recipes);
			ingResult.style.display = "none"
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			ingredientInput.style.width = "100%";

			// On refiltre la barre de recherche pour la prendre en compte
			if (globalSearchBar.value.length >= 3) {
			recipesSection.innerHTML = "";
			resultFiltered = filteredRecipes(recipes, globalSearchBar.value);
			createRecipesCard(resultFiltered);
		
		}	

		});
	});
};


/* APPARATUS */

function openCloseApp() {
	if(apparatusResult.style.display === 'grid') {
		apparatusResult.style.display = 'none'
		apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
	} else {
		apparatusResult.style.display = 'grid'
		apparatusChevron.classList.replace("fa-chevron-down", "fa-chevron-up");

		ingResult.style.display = 'none'
		ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
		ingredientInput.classList.remove("open");

		ustensilsResult.style.display = 'none'
		ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
	}

}

apparatusChevron.addEventListener("click", () => {

	openCloseApp()

	apparatusResult.innerHTML = "";

	apparatus.forEach((apparatus) => {
		
		return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
		
	});

		// "result" = filtered recipes
		// Si il y a un filtre, trier la liste en fonction du filtre séléctionné
		if (result) {
	
			apparatus = result.map(recipe => recipe.appliance)
			apparatus = [...new Set([].concat(...apparatus))].sort()

			// Enlever l'élément cliqué
			selectedFilters.forEach((selectedFilter) => {
   
				apparatus.splice(apparatus.indexOf(selectedFilter),1)
				
			});
	
			apparatusResult.innerHTML = "";
	
			apparatus.forEach((apparatus) => {
		
				return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				
			});
	
		  }

		// Si il y a 3 caractères ou plus, trier la liste en fonction de la recherche
		if (globalSearchBar.value.length >= 3) {

			apparatus = results.map(recipe => recipe.appliance)
			apparatus = [...new Set([].concat(...apparatus))].sort()
	
			apparatusResult.innerHTML = "";
	
			apparatus.forEach((apparatus) => {
	   
				return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				
			});

		// Si il y a 3 caractères ou plus et qu'il y a un filtre -> trier les apparatus en fonction des recettes 
		if (result) {
			
			filteredRecipe = filteredRecipes(recipes, globalSearchBar.value);
	
			apparatus = filteredRecipe.map(recipe => recipe.appliance)
			apparatus = [...new Set([].concat(...apparatus))].sort()

			// Enlever l'élément cliqué
			selectedFilters.forEach((selectedFilter) => {
   
				apparatus.splice(apparatus.indexOf(selectedFilter),1)
							
			});
	
			apparatusResult.innerHTML = "";
	
			apparatus.forEach((apparatus) => {
	   
				return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				
			});
	
	
		}



			// Si il y a 2 caractères (donc plus de recherche) mais qu'il y a un filtre, 
			// afficher la liste en fonction du filtre séléctionné
		  } else if(globalSearchBar.value.length === 2 && result) {

			apparatus = result.map(recipe => recipe.appliance)
			apparatus = [...new Set([].concat(...apparatus))].sort()
	
			apparatusResult.innerHTML = "";
	
			apparatus.forEach((apparatus) => {
	   
				return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				
			});
			// Si il y a 2 caractères (donc plus de recherche), mettre la liste originale
		  } else if(globalSearchBar.value.length <= 2) {
	
			apparatus = recipes.map(recipe => recipe.appliance)
			apparatus = [...new Set([].concat(...apparatus))].sort()
	
			apparatusResult.innerHTML = "";
	
			apparatus.forEach((apparatus) => {
	   
				return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
				
			});
		  }



	listenOnApparatusItems();
})

apparatusInput.addEventListener("keyup", (e) => {

	if (e.target.value.length >= 3) {

		apparatusResult.innerHTML = '';

		const query = e.target.value;
		
		const results = apparatus.filter((apparatus) => {
			apparatusResult.style.display = 'none';
			ingredientInput.classList.remove("open");
			return apparatus.toLowerCase().includes(query.toLowerCase());
		});
		
		results.forEach((result) => {
			apparatusResult.style.display = 'grid';
			ustensilsResult.style.display = 'none';
			ingResult.style.display = 'none';
			return apparatusResult.innerHTML += `<li class="apparatus__item">${result}</li>`;
		});

	} else {
		apparatusResult.style.display = 'none';
	}
	listenOnApparatusItems();
})

const listenOnApparatusItems = () => {
	const apparatusItems = document.querySelectorAll(".apparatus__item");
	apparatusItems.forEach((item) => {
		item.addEventListener("click", () => {
			selectedFilters.push(item.textContent);
			const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
			createFiltersBar(selectedFiltersUnduplicated, recipes);
			apparatusResult.style.display = "none"
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");

			// On refiltre la barre de recherche pour la prendre en compte
			if (globalSearchBar.value.length >= 3) {
				recipesSection.innerHTML = "";
				resultFiltered = filteredRecipes(recipes, globalSearchBar.value);
				createRecipesCard(resultFiltered);
			}	


		});
	});
};

/* USTENSILS */

function openCloseUst() {
	if(ustensilsResult.style.display === 'grid') {
		ustensilsResult.style.display = 'none'
		ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
	} else {
		ustensilsResult.style.display = 'grid'
		ustensilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");

		ingResult.style.display = 'none'
		ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
		ingredientInput.classList.remove("open");

		apparatusResult.style.display = 'none'
		apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
	}

}

ustensilsChevron.addEventListener("click", () => {

	openCloseUst()

	ustensilsResult.innerHTML = "";

	ustensils.forEach((ustensil) => {
		
		return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
		
	});


		// "result" = filtered recipes


		// Si il y a un filtre, trier la liste en fonction du filtre séléctionné
		if (result) {
	
			ustensils = result.map(recipe => recipe.ustensils.map(ustensil => ustensil))
			ustensils = [...new Set([].concat(...ustensils))]

			// Enlever l'élément cliqué
			selectedFilters.forEach((selectedFilter) => {
   
				ustensils.splice(ustensils.indexOf(selectedFilter),1)
				
			});
	
			ustensilsResult.innerHTML = "";
	
			ustensils.forEach((ustensil) => {
		
				return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
				
			});
	
		  }
	
		  	// Si il y a 3 caractères ou plus, trier la liste en fonction de la recherche
			if (globalSearchBar.value.length >= 3) {

				ustensils = results.map(recipe => recipe.ustensils.map(ustensil => ustensil))
				ustensils = [...new Set([].concat(...ustensils))].sort();
		
				ustensilsResult.innerHTML = "";
		
				ustensils.forEach((ustensil) => {
					
					return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
					
				});

			// Si il y a 3 caractères ou plus et qu'il y a un filtre -> trier les ustensils en fonction des recettes 
			if (result) {
			
				filteredRecipe = filteredRecipes(recipes, globalSearchBar.value);
	
				ustensils = filteredRecipe.map(recipe => recipe.ustensils.map(ustensil => ustensil))
				ustensils = [...new Set([].concat(...ustensils))].sort();

				// Enlever l'élément cliqué
				selectedFilters.forEach((selectedFilter) => {
   
				ustensils.splice(ustensils.indexOf(selectedFilter),1)
				
			});
	
				ustensilsResult.innerHTML = "";
	
				ustensils.forEach((ustensil) => {
					
					return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
					
				});
	
	
		}




				// Si il y a 2 caractères (donc plus de recherche) mais qu'il y a un filtre, 
				// afficher la liste en fonction du filtre séléctionné
			  } else if(globalSearchBar.value.length === 2 && result) {
				
				ustensils = result.map(recipe => recipe.ustensils.map(ustensil => ustensil))
				ustensils = [...new Set([].concat(...ustensils))].sort();
		
				ustensilsResult.innerHTML = "";
		
				ustensils.forEach((ustensil) => {
		   
					return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
					
				});
				// Si il y a 2 caractères (donc plus de recherche), mettre la liste originale
			  } else if(globalSearchBar.value.length <= 2) {
		
				ustensils = recipes.map(recipe => recipe.ustensils.map(ustensil => ustensil))
				ustensils = [...new Set([].concat(...ustensils))].sort();
		
				ustensilsResult.innerHTML = "";
		
				ustensils.forEach((ustensil) => {
		   
					return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
					
				});
			  }

	listenOnUstensilsInput();
})

ustensilsInput.addEventListener("keyup", (e) => {

	if (e.target.value.length >= 3) {

		ustensilsResult.innerHTML = '';

		const query = e.target.value;
		
		const results = ustensils.filter((ustensil) => {
			ustensilsResult.style.display = 'none';
			ingredientInput.classList.remove("open");
			return ustensil.toLowerCase().includes(query.toLowerCase());
		});
		
		results.forEach((result) => {
			ustensilsResult.style.display = 'grid';
			apparatusResult.style.display = 'none';
			ingResult.style.display = 'none';
			return ustensilsResult.innerHTML += `<li class="ustensil__item">${result}</li>`;
		});

	} else {
		ustensilsResult.style.display = 'none';
	}
	listenOnUstensilsInput();
})

const listenOnUstensilsInput = () => {
	const ustensilsItems = document.querySelectorAll(".ustensil__item");
	ustensilsItems.forEach((item) => {
		item.addEventListener("click", () => {
			selectedFilters.push(item.textContent);
			const selectedFiltersUnduplicated = [...new Set(selectedFilters)];
			createFiltersBar(selectedFiltersUnduplicated, recipes);
			ustensilsResult.style.display = "none"
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");

			// On refiltre la barre de recherche pour la prendre en compte
			if (globalSearchBar.value.length >= 3) {
				recipesSection.innerHTML = "";
				resultFiltered = filteredRecipes(recipes, globalSearchBar.value);
				createRecipesCard(resultFiltered);
			}				


		});
	});
};

}
