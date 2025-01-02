"use client";

import React, { useState } from "react";
import Link from "next/link";

const recipes = [
  +{ id: 1, name: "Aglio e Olio", ingredients: ["Pasta", "Olivenöl", "Knoblauch"], status: "vegitarisch" },
 + {id: 2, name: "Sticky sesame soycaulliflower", ingredients: ["Blumenkohl", "Mehl", "Knoblauch", "Sojasauce", "Tomatenmark", "Reisessig", "Sesamöl", "Stärke"], status: "vegan"},
 + {id:3, name: "Dan Dan Nudeln", ingredients: ["Hackfleisch", "Knoblauch", "Ingwer", "Frühlingszwiebeln", "Sojasauce", "Reisessig", "Sesamöl", "Asia-Nudeln"], status: "fleischhaltig"},
  +{id:4, name: "Chilli Knoblauch Nudeln", ingredients: ["Knoblauch", "Ingwer", "Frühlingszwiebeln", "Sojasauce", "Schwarzer Essig", "Chilliflocken", "Sesamsamen", "Hackfleisch", "Asia-Nudeln"], status: "fleischhaltig"},
 + {id:5, name: "Pfannkuchen", ingredients: ["Mehl", "Milch", "Eier", "Zucker", "Salz"], status: "vegitarisch"},
 + {id:6, name: "Asia Garlic Noodles", ingredients: ["Knoblauch", "Asia-Nudeln", "Sojasauce", "Austernsauce"], status: "fleischhaltig"},
 + {id:7, name: "Knoblauchbrot", ingredients: ["Olivenöl", "Knoblauch", "Rosmarin", "Petersilie", "Baguette"], status: "vegitarisch"},
  {id:8, name: "Maisbomben", ingredients: ["Mais", "Stärke", "Mehl", "Ei", "Mozerella"] , status: "vegitarisch"},
 + {id:9, name: "Taco Beef Dorito Crumb", ingredients:["Hackfleisch", "Zwiebeln", "Tomaten", "Tortillas", "Koriander", "Mozerella"], status: "fleischhaltig"},
  {id:10, name: "Patatas Acordeon", ingredients:["Kartoffeln", "olivenöl"] , status: "vegan"},
  {id:11, name: "Chipotle Chicken Wraps", ingredients:["Hänchen", "Chilli", "Knoblauch", "Mozerella", "Zwiebel", "Salat", "yogurt", "mayo", "Petersilie", "Tortillas"], status: "fleischhaltig"},
  {id:12, name: "Bacon Jam Cheese Burger Eggrolls", ingredients:["Bacon", "Zwiebel",  "Rinderbrühe", "Worcestershire Sauce", "Hackfleisch", "Reispapier", "Käse", "EI"], status: "fleischhaltig"},
  ];

const ingredientsList = ["Pasta", "Olivenöl", "Knoblauch", "Blumenkohl", "Mehl", "Sojasauce", "Tomatenmark", "Reisessig", "Sesamöl", "Stärke", "Hackfleisch", "Ingwer", "Frühlingszwiebeln", "Asia-Nudeln", "Schwarzer Essig", "Chilliflocken", "Sesamsamen", "Milch", "Eier", "Zucker", "Salz", "Austernsauce", "Rosmarin", "Petersilie", "Baguette", "Mais", "Mozerella", "Zwiebeln", "Tomaten", "Tortillas", "Koriander", "Kartoffeln", "Hänchen", "Chilli", "yogurt", "mayo", "Bacon", "Rinderbrühe", "Worcestershire Sauce", "Reispapier", "Käse"]
;

export default function ZutatenPage() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleButtonClick = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.ingredients.every((ingredient) => selectedIngredients.includes(ingredient))
  );

  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-center rounded-2xl bg-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-5 text-black p-4">
          Zutaten 
        </h1>
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {ingredientsList.map((ingredient) => (
          <button
            key={ingredient}
            className={`bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded ${
              selectedIngredients.includes(ingredient) ? "bg-green-500" : ""
            }`}
            onClick={() => handleButtonClick(ingredient)}
          >
            {ingredient}
          </button>
        ))}
      </div>

      {/* Move this into a separate div to push it down */}
      <div className="mt-10 w-full">
        <h2 className="text-center text-2xl font-bold">Rezepte</h2>
        <div className="mt-5">
          {filteredRecipes.length > 0 ? (
            <ul className="space-y-4 text-center">
              {filteredRecipes.map((recipe) => (
                <li key={recipe.id} className="bg-white p-4 rounded shadow-md">
                  <Link href={`/zutaten/recipe/${recipe.id}`} className="text-lg font-bold text-blue-600 hover:underline">
                    {recipe.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Keine passenden Rezepte gefunden.</p>
          )}
        </div>
      </div>
    </main>
  );
}
