const generateFilters = (recipes) => {
	let ingredients = [];
	let apparatus = [];
	let ustensils = [];
	recipes.forEach((recipe) => {
	  ingredients = [
	  ...new Set([...ingredients, ...recipe.ingredients.map((i) => i.ingredient)])].sort();
	  ustensils = [...new Set([...ustensils, ...recipe.ustensils.map((u) => u)])].sort();
	  apparatus = [...new Set([...apparatus, ...[recipe.appliance]])].sort();
	});
	return { ingredients, ustensils, apparatus };
  };

	const listenOnInputs = (recipes) => {
		
	const { ingredients, ustensils, apparatus } = generateFilters(recipes);

	/* INGREDIENTS */

	function openCloseIng() {

		if(ingResult.style.display === 'grid') {
			ingResult.style.display = 'none'
			ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
		} else {
			ingResult.style.display = 'grid'
			ingredientChevron.classList.replace("fa-chevron-down", "fa-chevron-up");
			ingResult.innerHTML = "";

			apparatusResult.style.display = 'none'
			apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");

			ustensilsResult.style.display = 'none'
			ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
			
		}

	}

ingredientChevron.addEventListener("click", () => {

	openCloseIng();

	ingredients.forEach((ingredient) => {

		return ingResult.innerHTML += `<li class="ingredient__item">${ingredient}</li>`;
		
	});
	listenOnIngredientsItems();
})

ingredientInput.addEventListener("keyup", (e) => {

	if (e.target.value.length >= 3) {

		ingResult.innerHTML = '';

		const query = e.target.value;
		
		const results = ingredients.filter((ingredient) => {
			ingResult.style.display = 'none';
			return ingredient.toLowerCase().includes(query);
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
		apparatusResult.innerHTML = "";

		ingResult.style.display = 'none'
		ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");

		ustensilsResult.style.display = 'none'
		ustensilsChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
	}

}

apparatusChevron.addEventListener("click", () => {

	openCloseApp()

	apparatus.forEach((apparatus) => {
		
		return apparatusResult.innerHTML += `<li class="apparatus__item">${apparatus}</li>`;
		
	});
	listenOnApparatusItems();
})

apparatusInput.addEventListener("keyup", (e) => {

	if (e.target.value.length >= 3) {

		apparatusResult.innerHTML = '';

		const query = e.target.value;
		
		const results = apparatus.filter((apparatus) => {
			apparatusResult.style.display = 'none';
			return apparatus.toLowerCase().includes(query);
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
		ustensilsResult.innerHTML = "";
		ustensilsChevron.classList.replace("fa-chevron-down", "fa-chevron-up");

		ingResult.style.display = 'none'
		ingredientChevron.classList.replace("fa-chevron-up", "fa-chevron-down");

		apparatusResult.style.display = 'none'
		apparatusChevron.classList.replace("fa-chevron-up", "fa-chevron-down");
	}
}

ustensilsChevron.addEventListener("click", () => {

	openCloseUst()

	ustensils.forEach((ustensil) => {
		
		return ustensilsResult.innerHTML += `<li class="ustensil__item">${ustensil}</li>`;
		
	});
	listenOnUstensilsInput();
})

ustensilsInput.addEventListener("keyup", (e) => {

	if (e.target.value.length >= 3) {

		ustensilsResult.innerHTML = '';

		const query = e.target.value;
		
		const results = ustensils.filter((ustensil) => {
			ustensilsResult.style.display = 'none';
			return ustensil.toLowerCase().includes(query);
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
		});
	});
};

}
