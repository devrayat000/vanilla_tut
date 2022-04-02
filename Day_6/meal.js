const rootEl = document.getElementById('root')

async function main() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await response.json()
    
    const meal = data.meals[0]
    console.log(meal);

    const idEl = document.createElement('i')
    idEl.innerHTML = meal.idMeal;

    rootEl.append(idEl)

    const mealData = `
        <div>Name: <b>${meal.strMeal}</b></div>
        <div>Area: <b>${meal.strArea}</b></div>
        <div>Category: <b>${meal.strCategory}</b></div>
    `

    rootEl.innerHTML += mealData;
}

main()