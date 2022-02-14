class RecipeCard {
	constructor(data) {
		this._id = data.id;
		this._name = data.name;
		this._description = data.description;
		this._time = data.time;
		this._servings = data.servings;
		this._ustensils = data.ustensils;
		this._ingredients = data.ingredients;
		this._appliance = data.appliance;
	}

	get recipeCard() {

	const card =  `
		<article class="recipe__card">
		
			<div class="recipe__card__placeholder"></div>
			
			<section class="recipe__card__section">
			
			<header class="recipe__card__header"> 
			
			<h2 class="recipe__card__header__title">${this._name}</h2>
			<h2 class="recipe__card__header__time">
			${this._time}min <i class="fal fa-clock recipe__card__header__icon"></i>
			</h2>
			
			</header>

			<aside class="recipe__card__aside"> 

			<ul class="recipe__card__list">

			${						
				/*...*/this._ingredients.map((ingredient) => {
				return `<li class="recipe__card__list__item"><strong>${ingredient.ingredient}</strong>
				${ingredient.quantity ? ingredient.quantity : ""}
				${ingredient.unit ? ingredient.unit : ""}
				</li>`
			}).join('')
		}
			</ul>

			<p class="recipe__card__description">${this._description}</p>

			</aside>
			
			</section>

		</article>

		`
		return card;
		
	}
	
}