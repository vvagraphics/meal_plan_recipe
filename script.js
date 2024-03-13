const mealDisplay = document.getElementById('meal-display');
const days = [
    
    // Day 1
    { 
        Breakfast: {
            Name: "Scrambled Eggs with Hot Dog Slices and Kale",
            Instructions: "Heat a pan... (add your instructions)", 
            PrepTime: "5 mins",
            Serves: 1,
            Tags: ["Easy", "High-protein"],
            Nutrition: { 
                kcal: 300,
                fat: "20g",
                saturates: "6g",
                carbs: "5g",
                sugars: "2g",
                fibre: "2g",
                protein: "25g",
                salt: "1g"
            }
        },
        Lunch: {
            Name: "Chicken Salad over Lettuce",
            Instructions: "Combine chicken... (add your instructions)",
            PrepTime: "10 mins",
            Serves: 1,
            Tags: ["Easy", "Low-carb", "High-protein"],
            Nutrition: { 
                kcal: 250,
                fat: "12g",
                saturates: "3g",
                carbs: "5g",
                sugars: "3g",
                fibre: "3g",
                protein: "30g",
                salt: "0.8g"
            }
        },
        Dinner: {
            Name: "Air Fryer Swai with Roasted Bell Peppers",
            Instructions: "Preheat air fryer... (add your instructions)",
            PrepTime: "10 mins",
            Serves: 1,
            Tags: ["Easy", "Low-carb", "Healthy"], 
            Nutrition: { 
                kcal: 350,
                fat: "10g",
                saturates: "2g",
                carbs: "15g",
                sugars: "5g",
                fibre: "5g",
                protein: "35g",
                salt: "0.5g"
            }
        },
        Snacks: {
            Name: "Handful of almonds, string cheese",
            Instructions: "None",
            PrepTime: "1 min",
            Serves: 1,
            Tags: ["Easy", "Healthy"], 
            Nutrition: { 
                kcal: 200,
                fat: "15g",
                saturates: "3g",
                carbs: "8g",
                sugars: "3g",
                fibre: "3g",
                protein: "10g",
                salt: "0.3g"
            }
        }
    },
    
    // Day 2
    { 
         Breakfast: {
            Name: "Plain Greek Yogurt with Berries",
            Instructions: "Combine 1 cup plain Greek yogurt with 1/2 cup mixed berries (blueberries, raspberries, etc.). Drizzle with honey if desired.",
            PrepTime: "5 mins",
            Serves: 1,
            Tags: ["Easy", "Healthy", "Low-carb", "High-protein"],
            Nutrition: {
                kcal: 250,
                fat: "5g",
                saturates: "3g",
                carbs: "30g",
                sugars: "20g", 
                fibre: "6g",
                protein: "18g",
                salt: "0.1g"
            }
        },
        Lunch: {
            Name: "Tuna Salad Lettuce Wraps",
            Instructions: "Mix a can of tuna with light mayo or plain Greek yogurt, chopped celery, onion, salt, and pepper. Serve on large lettuce leaves.",
            PrepTime: "10 mins",
            Serves: 1,
            Tags: ["Easy", "Low-carb", "High-protein"], 
            Nutrition: { 
                kcal: 280,
                fat: "15g",
                saturates: "3g",
                carbs: "5g",
                sugars: "2g", 
                fibre: "2g",
                protein: "25g",
                salt: "0.8g"
            }
        },
        Dinner: {
            Name: "Grilled Chicken Breast with Sautéed Bell Peppers",
            Instructions: "Season chicken breast and grill or pan-fry until cooked through. In a separate pan, sauté sliced bell peppers with olive oil, salt, and pepper.",
            PrepTime: "15 mins",
            Serves: 1,
            Tags: ["Easy", "Healthy", "High-protein"], 
            Nutrition: { 
                kcal: 350,
                fat: "12g",
                saturates: "2g",
                carbs: "10g",
                sugars: "4g", 
                fibre: "4g",
                protein: "40g",
                salt: "0.5g"
            }
        },
        Snacks: {
            Name: "Celery sticks with sugar-free peanut butter",
            Instructions: "None",
            PrepTime: "2 mins",
            Serves: 1,
            Tags: ["Easy", "Healthy", "Vegan"], 
            Nutrition: { 
                kcal: 200,
                fat: "14g",
                saturates: "2g",
                carbs: "10g",
                sugars: "3g", 
                fibre: "5g",
                protein: "8g",
                salt: "0.2g"
            }
        }
    },
    
    // Day 3
    { 
        Breakfast: {
        Name: "Keto Egg Muffins",
        Instructions: "Many recipes online. <p>Common ingredients include eggs, cheese, vegetables (spinach, mushrooms, bell peppers), sausage or bacon (optional). <p>Bake in greased muffin tins.",
        PrepTime: "15 mins", // Excluding baking time
        Serves: 2, // Recipes often make a batch
        Tags: ["Easy", "Freezable", "Keto", "Low-carb", "High-protein"],
        Nutrition: { 
            kcal: 200, // Per muffin, will vary with recipe
            fat: "15g",
            saturates: "5g",
            carbs: "3g",
            sugars: "1g", 
            fibre: "1g",
            protein: "15g",
            salt: "0.5g"
        } 
    },
    Lunch: {
        Name: "Leftover Grilled Chicken Salad",
        Instructions: "Use leftover chicken from Day 2.  <p>Combine with chopped greens, leftover bell peppers, and your favorite light dressing.",
        PrepTime: "10 mins",
        Serves: 1,
        Tags: ["Easy", "Healthy"],
        Nutrition: { // Approximate, depends on amounts
            kcal: 300,
            fat: "12g",
            saturates: "2g",
            carbs: "10g",
            sugars: "3g", 
            fibre: "5g",
            protein: "35g",
            salt: "0.6g"
        }
    },
    Dinner: {
        Name: "Bunless Hot Dog with Mustard and Cabbage",
        Instructions: "Grill or pan-fry your favorite hot dogs. <p>Serve on a bed of sautéed or air-fried cabbage. ",
        PrepTime: "15 mins",
        Serves: 1,
        Tags: ["Easy", "Low-carb"],
        Nutrition: { // Estimates, depends on dog type
            kcal: 350,
            fat: "25g",
            saturates: "8g",
            carbs: "12g",
            sugars: "6g", 
            fibre: "4g",
            protein: "15g",
            salt: "1.5g" // Hot dogs can be high in sodium
        } 
    },
    Snacks: {
        Name: "Hard-boiled eggs",
        Instructions: "None",
        PrepTime: "N/A", // Assuming pre-boiled
        Serves: 1, 
        Tags: ["Easy", "High-protein"], 
        Nutrition: { 
            kcal: 150, // For 2 eggs
            fat: "10g",
            saturates: "3g",
            carbs: "1g",
            sugars: "1g", 
            fibre: "0g",
            protein: "12g",
            salt: "0.3g"
        } 
    }
    },
    
    // Day 4
    { 
        Breakfast: {
        Name: "Low-carb Protein Smoothie",
        Instructions: "Blend together unsweetened almond milk, protein powder (flavor of your choice), a handful of spinach, and a bit of frozen fruit (optional).",
        PrepTime: "5 mins",
        Serves: 1,
        Tags: ["Easy", "Quick", "Low-carb", "High-protein", "Vegan"], // If using plant-based protein
        Nutrition: { 
            kcal: 250, // Varies greatly depending on ingredients
            fat: "8g",
            saturates: "1g",
            carbs: "15g",
            sugars: "8g",  
            fibre: "5g",
            protein: "30g",
            salt: "0.2g"
        }
    },
    Lunch: {
        Name: "Chicken Stir-fry with Low-carb Veggies",
        Instructions: "Stir-fry chopped chicken with broccoli, bell peppers, mushrooms, and a low-carb stir-fry sauce (many store-bought options or make your own). Serve over cauliflower rice if desired.",
        PrepTime: "15 mins",
        Serves: 1,
        Tags: ["Easy", "Healthy", "Low-carb"], 
        Nutrition: { 
            kcal: 380, 
            fat: "10g",
            saturates: "2g",
            carbs: "15g",
            sugars: "5g",  
            fibre: "6g",
            protein: "45g",
            salt: "0.8g" 
        }
    },
    Dinner: {
        Name: "Baked Tuna with a Side of Kale",
        Instructions: "Season a tuna steak and bake. Sauté or air fry kale with a drizzle of olive oil, garlic, salt, and pepper.",
        PrepTime: "15 mins", // Excluding baking time
        Serves: 1,
        Tags: ["Easy", "Healthy", "High-protein"], 
        Nutrition: { 
            kcal: 320,
            fat: "15g",
            saturates: "3g",
            carbs: "5g",
            sugars: "2g", 
            fibre: "3g",
            protein: "35g",
            salt: "0.4g" 
        }
    },
    Snacks: {
        Name: "Cucumber Slices and Plain Greek Yogurt Dip",
        Instructions: "Mix a bit of dill, lemon juice, salt, and pepper into plain Greek yogurt.",
        PrepTime: "5 mins",
        Serves: 1,
        Tags: ["Easy", "Healthy", "Low-carb"], 
        Nutrition: { 
            kcal: 150,
            fat: "5g",
            saturates: "3g",
            carbs: "8g",
            sugars: "5g",
            fibre: "2g",
            protein: "12g",
            salt: "0.2g" 
        }
    }
    },
    
    // Day 5
    { 
        Breakfast: {
        Name: "Omelet with Cheese and Vegetables",
        Instructions: "Whisk eggs and season. Cook in a pan with a bit of oil. Fill with your favorite cheese and vegetables (such as spinach, mushrooms, onions, bell peppers).",
        PrepTime: "15 mins", 
        Serves: 1,
        Tags: ["Easy", "High-protein"], 
        Nutrition: { 
            kcal: 350, // Will vary depending on fillings
            fat: "25g",
            saturates: "10g",
            carbs: "5g",
            sugars: "3g", 
            fibre: "2g",
            protein: "25g",
            salt: "0.8g" 
        }
    },
    Lunch: {
        Name: "Salad with Grilled Chicken",
        Instructions: "Use leftover grilled chicken from Day 2 (or grill a fresh piece).  Toss mixed greens with your favorite vegetables and a light dressing.",
        PrepTime: "10 mins",
        Serves: 1,
        Tags: ["Easy", "Healthy", "High-protein"], 
        Nutrition: { 
            kcal: 350, // Depends on dressing and toppings
            fat: "15g",
            saturates: "2g",
            carbs: "15g",
            sugars: "5g", 
            fibre: "6g",
            protein: "35g",
            salt: "0.5g" 
        }
    },
    Dinner: {
        Name: "Swai Fish Tacos on Low-carb Tortillas",
        Instructions: "Season swai fillets and bake, grill, or air fry. Serve on warmed low-carb tortillas with your favorite toppings (shredded cabbage, salsa, avocado, etc.).",
        PrepTime: "20 mins", 
        Serves: 1,
        Tags: ["Easy", "Healthy", "Low-carb"], 
        Nutrition: { 
            kcal: 400,  // Varies depending on toppings
            fat: "15g",
            saturates: "2g",
            carbs: "25g",
            sugars: "5g", 
            fibre: "8g",
            protein: "35g",
            salt: "0.6g" 
        }
    },
    Snacks: {
        Name: "Plain Greek Yogurt",
        Instructions: "None",
        PrepTime: "1 min",
        Serves: 1, 
        Tags: ["Easy", "High-protein"], 
        Nutrition: { 
            kcal: 150,
            fat: "5g",
            saturates: "3g",
            carbs: "10g",
            sugars: "8g", 
            fibre: "0g",
            protein: "15g",
            salt: "0.1g" 
        }
    }
    }, 
    
    // Day 6
    { 
         Breakfast: {
        Name: "2 Hard-boiled Eggs and a Slice of Low-carb Bread",
        Instructions: "Hard boil eggs. Toast low-carb bread and spread with a bit of avocado or butter (if your plan allows).",
        PrepTime: "10 mins", 
        Serves: 1,
        Tags: ["Easy", "High-protein"],
        Nutrition: { 
            kcal: 350, // Will vary depending on bread/spreads
            fat: "25g",
            saturates: "7g",
            carbs: "20g",
            sugars: "3g", 
            fibre: "6g",
            protein: "20g",
            salt: "0.6g" 
        }
    },
    Lunch: {
        Name: "Leftover Swai Fish Tacos",
        Instructions: "Use leftover Swai from Day 5 and assemble fresh tacos.",
        PrepTime: "5 mins",
        Serves: 1,
        Tags: ["Easy", "Healthy", "Low-carb"], 
        Nutrition: { 
            kcal: 400,  // Varies depending on toppings 
            fat: "15g",
            saturates: "2g",
            carbs: "25g",
            sugars: "5g", 
            fibre: "8g",
            protein: "35g",
            salt: "0.6g" 
        }
    },
    Dinner: {
        Name: "Bunless Hot Dog with Your Favorite Low-carb Toppings",
        Instructions: "Grill or pan-fry your favorite hot dog.  Top with sauerkraut, sugar-free relish, mustard, etc.",
        PrepTime: "15 mins",
        Serves: 1,
        Tags: ["Easy", "Low-carb"], 
        Nutrition: { 
            kcal: 300, // Will vary depending on toppings/dog
            fat: "20g",
            saturates: "6g",
            carbs: "10g",
            sugars: "3g", 
            fibre: "3g",
            protein: "15g",
            salt: "1g" 
        }
    },
    Snacks: {
        Name: "Sliced Bell Peppers and Guacamole",
        Instructions: "Store-bought guacamole or slice an avocado and season with salt, pepper, and a touch of lime juice.",
        PrepTime: "5 mins",
        Serves: 1, 
        Tags: ["Easy", "Healthy", "Low-carb"], 
        Nutrition: { 
            kcal: 200, 
            fat: "18g",
            saturates: "3g",
            carbs: "10g",
            sugars: "2g", 
            fibre: "6g",
            protein: "3g",
            salt: "0.3g" 
        }
    }
    }, 
    
    // Day 7
    { 
        Breakfast: {
        Name: "Protein Pancakes",
        Instructions: "Many recipes online using protein powder, almond flour, eggs, etc.  Top with berries or a bit of sugar-free syrup if desired.",
        PrepTime: "15 mins", 
        Serves: 1,
        Tags: ["Easy", "High-protein"], 
        Nutrition: { 
            kcal: 300, // Varies greatly depending on recipe
            fat: "10g",
            saturates: "2g",
            carbs: "25g",
            sugars: "5g", 
            fibre: "5g",
            protein: "30g",
            salt: "0.5g" 
        }
    },
    Lunch: {
        Name: "Tuna Salad Sandwich on Low-carb Bread",
        Instructions: "Mix a can of tuna with light mayo or plain Greek yogurt, chopped celery, onion, salt, and pepper. Layer on low-carb bread with lettuce or other desired additions.",
        PrepTime: "10 mins",
        Serves: 1,
        Tags: ["Easy", "Low-carb", "High-protein"], 
        Nutrition: { 
            kcal: 350, // Will vary depending on bread/mayo 
            fat: "18g",
            saturates: "4g",
            carbs: "25g",
            sugars: "3g", 
            fibre: "6g",
            protein: "28g",
            salt: "1g" 
        }
    },
    Dinner: {
        Name: "Grilled Chicken Breast with Steamed Green Beans",
        Instructions: "Season and grill or pan-fry a chicken breast. Steam green beans with a bit of butter and slivered almonds for added flavor.",
        PrepTime: "20 mins",
        Serves: 1,
        Tags: ["Easy", "Healthy", "High-protein"],
        Nutrition: { 
            kcal: 380,
            fat: "15g",
            saturates: "3g",
            carbs: "10g",
            sugars: "3g", 
            fibre: "6g",
            protein: "40g",
            salt: "0.5g" 
        }
    },
    Snacks: {
        Name: "Beef Jerky",
        Instructions: "None",
        PrepTime: "N/A",
        Serves: 1, 
        Tags: ["Easy", "High-protein"], 
        Nutrition: { 
            kcal: 80, // Per typical serving
            fat: "2g",
            saturates: "1g",
            carbs: "5g",
            sugars: "3g",  
            fibre: "0g",
            protein: "12g",
            salt: "0.5g"
        }
    }
    } 
];


const today = new Date().getDay(); 

function showMealOfTheDay() {
    const dayIndex = (new Date().getDay()+ 1) % 7; 
    const dayData = days[dayIndex];
// console.log(dayIndex);
    mealDisplay.innerHTML = `
    <div class="meal">
    <div class="meal-collage">
    <h1>Meal Plan</h1>
    <h2>Day ${dayIndex}</h2>
    
      <img src="collage${dayIndex}.jpg" alt="Day ${dayIndex} Meals">
      
      </div>
      <div class="meal-info">
        
        <div class="meal-meta">

          ${Object.keys(dayData).map(mealType => ` 
            <div class="meal-section">
            <h2>${mealType} </h2>
              <img src="${mealType.toLowerCase()}day${dayIndex}.jpg" alt="${dayData[mealType].Name}">
              <p><h3>${dayData[mealType].Name}</h3></p>
              <p><strong>Prep Time:</strong> <i class="fa-solid fa-clock"></i> <span class="prep-time">${dayData[mealType].PrepTime}</span></p>
              <p><strong>Serves:</strong> <i class="fa-solid fa-user-group"></i> <span class="serves">${dayData[mealType].Serves}</span></p>
              
            
            <p><strong>Tags:</strong> 
              ${dayData[mealType].Tags.map(tag => {
                 let tagIcon = '';
                 switch (tag.toLowerCase()) {
                    case "easy": tagIcon = '<i class="fa-solid fa-check"></i>Easy '; break;        
                    case "freezable": tagIcon = '<i class="fa-solid fa-snowflake"></i>Freezable  '; break;      
                    case "high-protein": tagIcon = '<i class="fa-solid fa-dumbbell"></i>High-protein  '; break;
                    case "low-carb": tagIcon = '<i class="fa-solid fa-bowl-rice"></i> Low-carb'; break;
                    case "healthy": tagIcon = '<i class="fa-solid fa-heart-pulse"></i> Healthy'; break;  
                    case "quick": tagIcon = '<i class="fa-solid fa-stopwatch"></i> Quick'; break;
                    case "vegetarian": tagIcon = '<i class="fa-solid fa-leaf"></i> Vegetarian'; break;
                    case "vegan": tagIcon = '<i class="fa-solid fa-seedling"></i> Vegan'; break;
                    case "gluten-free": tagIcon = '<i class="fa-solid fa-wheat-awn-slash"></i> Gluten-free'; break; 
                    case "dairy-free": tagIcon = '<i class="fa-solid fa-ban"></i> Dairy-free'; break;
                    case "keto": tagIcon = '<i class="fa-solid fa-burger"></i> Keto'; break;
                    default: tagIcon = tag; // Default: Display tag without icon
                 }
                 return `<span class="meal-tag">${tagIcon}</span>`; 
              }).join('')} 
            </p> 

              <div class="instructions" style="display: none;"> 
                <h3>Instructions</h3>
                ${dayData[mealType].Instructions}
              </div>
              <button class="expand-button">Expand Instructions</button>
              <div class="nutrition" style="display: none;">
                <h3>Nutrition (per serving)</h3>
                ${Object.entries(dayData[mealType].Nutrition).map(([nutrient, value]) => `
                  <p>${nutrient}: ${value}</p>
                `).join('')} 
              </div>
              <button class="expand-nutrition">Show Nutrition</button>
            </div>
          `).join('')}

        </div> 
      </div> 
    </div>
  `;



  mealDisplay.querySelectorAll('.expand-button, .expand-nutrition').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.previousElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });

  
}


showMealOfTheDay(); 