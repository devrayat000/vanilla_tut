import { getMealById, getMealsBySearch, getRandomMeal } from "./services.js";

const mealsEl = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");
const popupCloseBtn = document.getElementById("close-popup");

const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");

const MEAL_KEY = "mealIds";

getRandomMeal().then((meal) => addMeal(meal, true));
getFavMeals();

function addMeal(mealData, random = false) {
  console.log(mealData);

  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal");

  mealDiv.innerHTML = `
        <div class="meal-header">
            ${
              random
                ? `
            <span class="random"> Random Recipe </span>`
                : ""
            }
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

  const btn = mealDiv.querySelector(".meal-body .fav-btn");

  btn.addEventListener(
    "click",
    () => {
      if (btn.classList.contains("active")) {
        removeMealLS(mealData.idMeal);
        btn.classList.remove("active");
      } else {
        addMealLS(mealData.idMeal);
        btn.classList.add("active");
      }

      favoriteContainer.innerHTML = "";

      getFavMeals();
    },
    false
  );

  mealDiv.addEventListener("click", () => {
    showMealInfo(mealData);
  });

  mealsEl.appendChild(mealDiv);
}

function showMealInfo(mealData) {
  // clean it up
  mealInfoEl.innerHTML = "";

  // update the Meal info
  const mealEl = document.createElement("div");

  const ingredients = [];

  // get ingredients and measures
  for (let i = 1; i <= 20; i++) {
    if (mealData["strIngredient" + i]) {
      ingredients.push(
        `${mealData["strIngredient" + i]} - ${mealData["strMeasure" + i]}`
      );
    } else {
      break;
    }
  }

  mealEl.innerHTML = `
        <h1>${mealData.strMeal}</h1>
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        />
        <p>
        ${mealData.strInstructions}
        </p>
        <h3>Ingredients:</h3>
        <ul>
            ${ingredients
              .map(
                (ing) => `
            <li>${ing}</li>
            `
              )
              .join("")}
        </ul>
    `;

  mealInfoEl.appendChild(mealEl);

  // show the popup
  mealPopup.classList.remove("hidden");
}

async function getFavMeals() {
  const mealIds = getMealsLS();

  for (const mealId of mealIds) {
    const meal = await getMealById(mealId);

    addMealFav(meal);
  }
}

function addMealLS(mealId) {
  const mealIds = getMealsLS();

  const newMealIds = [...mealIds, mealId];

  localStorage.setItem(MEAL_KEY, JSON.stringify(newMealIds));
}

function removeMealLS(mealId) {
  const mealIds = getMealsLS();

  const fiteredMeals = mealIds.filter((id) => id !== mealId);

  localStorage.setItem(MEAL_KEY, JSON.stringify(fiteredMeals));
}

function getMealsLS() {
  const mealIds = JSON.parse(localStorage.getItem(MEAL_KEY));

  return mealIds === null ? [] : mealIds;
}

function addMealFav(mealData) {
  const favMeal = document.createElement("li");

  favMeal.innerHTML = `
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        /><span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    `;

  const btn = favMeal.querySelector(".clear");

  btn.addEventListener("click", () => {
    removeMealLS(mealData.idMeal);

    getFavMeals();
  });

  favMeal.addEventListener("click", () => {
    showMealInfo(mealData);
  });

  favoriteContainer.appendChild(favMeal);
}

searchBtn.addEventListener("click", async () => {
  // clean container
  mealsEl.innerHTML = "";

  const search = searchTerm.value;
  const meals = await getMealsBySearch(search);

  if (meals) {
    meals.forEach((meal) => {
      addMeal(meal);
    });
  }
});

popupCloseBtn.addEventListener("click", () => {
  mealPopup.classList.add("hidden");
});
