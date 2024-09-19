function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContainer = document.querySelector('.sidebar-container');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        sidebarContainer.classList.remove('open');
    } else {
        sidebar.style.width = '250px';
        sidebarContainer.classList.add('open');
    }
}
  


  const recipes = [
    { name: "Veggie Delight", imageSrc: "https://media.gettyimages.com/id/691448664/photo/fresh-salad-plate-on-blue-picnic-table.jpg?s=612x612&w=0&k=20&c=xBscp0-6Egk0UpZV_zZTcUOruuMUgF-xIsk9eMadc6k=", time: "30 min", type: "veg", isLiked: false, rating: 4.2 },


    { name: "Chicken Grill", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D", time: "45 min", type: "non-veg", isLiked: false, rating: 4.5 },

    { name: "Cheese Pizza", imageSrc: "https://media.istockphoto.com/id/500121583/photo/bowl-of-salad-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=-G-cZdQt57WH6BIiF_Q2Ly0CB7uY7gK8b9G-Jzym16U=", time: "40 min", type: "veg", isLiked: false, rating: 4.1 },

    { name: "Steak", imageSrc: "https://media.istockphoto.com/id/500121583/photo/bowl-of-salad-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=-G-cZdQt57WH6BIiF_Q2Ly0CB7uY7gK8b9G-Jzym16U=", time: "60 min", type: "non-veg", isLiked: false, rating: 4.7 },

    { name: "Grilled Salmon", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D", time: "50 min", type: "non-veg", isLiked: false, rating: 4.6 },

    { name: "Tomato Pasta", imageSrc: "https://media.gettyimages.com/id/691448664/photo/fresh-salad-plate-on-blue-picnic-table.jpg?s=612x612&w=0&k=20&c=xBscp0-6Egk0UpZV_zZTcUOruuMUgF-xIsk9eMadc6k=", time: "35 min", type: "veg", isLiked: false, rating: 4.0 },

    { name: "Vegan Salad", imageSrc: "https://media.gettyimages.com/id/691448664/photo/fresh-salad-plate-on-blue-picnic-table.jpg?s=612x612&w=0&k=20&c=xBscp0-6Egk0UpZV_zZTcUOruuMUgF-xIsk9eMadc6k=", time: "20 min", type: "veg", isLiked: false, rating: 3.9 },

    { name: "Fried Chicken", imageSrc: "https://media.istockphoto.com/id/500121583/photo/bowl-of-salad-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=-G-cZdQt57WH6BIiF_Q2Ly0CB7uY7gK8b9G-Jzym16U=", time: "55 min", type: "non-veg", isLiked: false, rating: 4.3 },

    { name: "Mushroom Risotto", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D", time: "45 min", type: "veg", isLiked: false, rating: 4.5 },

    { name: "Burger", imageSrc: "https://media.gettyimages.com/id/691448664/photo/fresh-salad-plate-on-blue-picnic-table.jpg?s=612x612&w=0&k=20&c=xBscp0-6Egk0UpZV_zZTcUOruuMUgF-xIsk9eMadc6k=", time: "30 min", type: "non-veg", isLiked: false, rating: 4.2 },
    
    { name: "Paneer Tikka", imageSrc: "https://media.gettyimages.com/id/691448664/photo/fresh-salad-plate-on-blue-picnic-table.jpg?s=612x612&w=0&k=20&c=xBscp0-6Egk0UpZV_zZTcUOruuMUgF-xIsk9eMadc6k=", time: "40 min", type: "veg", isLiked: false, rating: 4.4 },

    { name: "BBQ Ribs", imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D", time: "70 min", type: "non-veg", isLiked: false, rating: 4.6 },

   
];

function displayRecipes(recipesToDisplay) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <p>Type: ${recipe.type}</p>
                <p>Time: ${recipe.time}</p>
                <p>Rating: ${recipe.rating}</p>
                <span class="heart-icon" onclick="toggleLike('${recipe.name}')">${recipe.isLiked ? '❤️' : '🤍'}</span>
            </div>
        `;
        recipeContainer.appendChild(card);
    });
}

function filterRecipes() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
    displayRecipes(filteredRecipes);
}

function toggleType(type) {
    let filteredRecipes = recipes;

    if (type !== 'all') {
        filteredRecipes = recipes.filter(recipe => recipe.type === type);
    }

    displayRecipes(filteredRecipes);
}

function filterByRating(threshold) {
    const filteredRecipes = recipes.filter(recipe => (threshold === 4.5 ? recipe.rating > 4.5 : recipe.rating < 4.0));
    displayRecipes(filteredRecipes);
}

function toggleLike(name) {
    const recipe = recipes.find(recipe => recipe.name === name);
    recipe.isLiked = !recipe.isLiked;
    displayRecipes(recipes);
}

// Initially display all recipes
displayRecipes(recipes);