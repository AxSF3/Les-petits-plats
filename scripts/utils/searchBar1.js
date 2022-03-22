



const filteredRecipes = (recipes, query) => {
	
		
			return recipes.filter((recipe) => {
				return (
					recipe.name.toLowerCase().includes(query) ||
					recipe.description.includes(query) ||
					recipe.ingredients.some((ingredient) => ingredient.ingredient.includes(query))
				);
				
			});
				
		
	};







