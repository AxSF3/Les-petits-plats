const filteredRecipes = (recipes, query) => {

	const results = [];

	console.log(result)
	if (result) {
		
		for (let i = 0; i < result.length; i++) {

			const { name, description, ingredients } = result[i];
			console.log(result)
			if (name.toLowerCase().includes(query) || description.toLowerCase().includes(query) ) {
				results.push(result[i]);
				continue;
			}

			for (let ii = 0; ii < ingredients.length; ii++) {
				if (ingredients[ii].ingredient.toLowerCase().includes(query)) {
					results.push(result[i]);
					break;
				}
			}

		}

		console.log(result)
		return results

	} else if(results) {

			for (let i = 0; i < recipes.length; i++) {

				const { name, description, ingredients } = recipes[i];

				if (name.toLowerCase().includes(query) || description.toLowerCase().includes(query) ) {
					results.push(recipes[i]);
					continue;
				}

				for (let ii = 0; ii < ingredients.length; ii++) {
					if (ingredients[ii].ingredient.toLowerCase().includes(query)) {
						results.push(recipes[i]);
						break;
					}
				}

			}

			console.log(results)
			return results

		}
		
};










































