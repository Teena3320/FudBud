


let slideIndex = 1;
showSlides(slideIndex);

// Call the `autoSlides` function to start automatic slideshow
autoSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Function to automatically change slides
function autoSlides() {
  setInterval(function() {
    plusSlides(1); // Move to the next slide every 3 seconds
  }, 3000); // Change slide every 3 seconds (3000 milliseconds)
}








const recipes = [
  {
    name: "Spaghetti",
    ingredients: ["spaghetti pasta","tomato sauce","onion","garlic","olive oil","salt","pepper","parmesan cheese"]
  },
  {
    name: "Chicken",
    ingredients: ["chicken breast","bell peppers","broccoli","carrots","soy sauce","garlic","ginger","olive oil","rice"]
  },
  {
    name: "Vegetable Soup",
    ingredients: ["carrots","celery","onion","potatoes","vegetable Broth","garlic","olive Oil","salt","pepper","herbs"]
  },
  {
    name: "Pizza",
    ingredients: ["Pizza dough","Tomato sauce","Mozzarella cheese","pepperoni", "mushrooms", "bell peppers", "onions"]
  },
  {
    name: "Ground Taco",
    ingredients: ["ground beef","taco seasoning","tortillas","lettuce","tomato","onion","cheese","sour cream"]
  },
  {
    name: "Smoothie",
    ingredients: ["bananas", "strawberries", "blueberries","mangoes","yogurt","milk","honey"]
  },
  {
    name: "Risotto",
    ingredients: ["rice","mushrooms","onion","garlic","vegetable or chicken broth","white wine","parmesan cheese","butter","olive oil","salt","pepper"]
  },

  {
    name: "Vegetarian Chili",
    ingredients: ["kidney beans","black beans","tomato","onion","bell pepper","corn","garlic","chili powder","cumin","paprika","vegetable broth","salt","pepper","oive oil","avocado","sour cream","greek yogurt","cilantro",]
  },
  






];

function searchRecipes() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const recipesList = document.getElementById("recipesList");
  recipesList.innerHTML = "";

  recipes.forEach(recipe => {
    const matchingIngredients = recipe.ingredients.filter(ingredient => ingredient.includes(searchInput));
    if (matchingIngredients.length > 0) {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      const recipeName = document.createElement("h2");
      recipeName.textContent = recipe.name;
      const ingredientsList = document.createElement("p");
      ingredientsList.textContent = "Ingredients: " + recipe.ingredients.join(", ");
      recipeDiv.appendChild(recipeName);
      recipeDiv.appendChild(ingredientsList);
      recipesList.appendChild(recipeDiv);
      

    }
  });
}


