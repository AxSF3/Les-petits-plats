/* DOM elements */

const selectedFilters = [];
//const results = [];

let ingredients = [];
let apparatus = [];
let ustensils = [];
//let result;


const filtersBar = document.querySelector(".research__filters");
const globalSearchBar = document.querySelector(".research__bar__input");

const recipesSection = document.querySelector(".results");
const ingResult = document.querySelector(".ing-result");
const apparatusResult = document.querySelector(".apparatus-result");
const ustensilsResult = document.querySelector(".ustensils-result");

const ingredientChevron = document.querySelector(".ingredient__chevron");
const ingredientForm = document.querySelector(".ingredient__form");
const ingredientInput = document.querySelector(".ingredient__input");
const ingredientWrapper = document.querySelector(".ingredient__results");

const apparatusChevron = document.querySelector(".apparatus__chevron");
const apparatusForm = document.querySelector(".apparatus__form");
const apparatusInput = document.querySelector(".apparatus__input");
const apparatusWrapper = document.querySelector(".apparatus__results");

const ustensilsChevron = document.querySelector(".ustensils__chevron");
const ustensilsForm = document.querySelector(".ustensils__form");
const ustensilsInput = document.querySelector(".ustensils__input");
const ustensilsWrapper = document.querySelector(".ustensils__results");
