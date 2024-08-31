import React, { useState, useEffect, Component } from "react";
import "./App.css";
import axios from "axios";
import cogWheel from "./images/settings.png";
import logo from "./images/mealmate.png";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm";
import Card from "./components/Card";
function App() {
  const [entries, setEntries] = useState([]);

  function addEntry(newEntry) {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  }
  const dataHandler = async (data) => {
    console.log(data);
    let modifiedData = {
      food_items: data[0].split(","),
      spice_level: data[1],
      cuisine: data[2],
      is_veg: data[3],
      allergy: data[4],
    };
    console.log(modifiedData);
    await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/",
      data: modifiedData,
    }).then((response) => {
      // Assuming response.data contains the new entry
      addEntry(response.data);
    });
  };
  return (
    <div className="App">
      <NavBar cogWheel={cogWheel} logo={logo}></NavBar>
      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "50%" }}>
          <RecipeForm getData={dataHandler} />
        </div>
        {entries && (
          <div style={{ flexBasis: "50%" }}>
            <Card>
              <div className="customDivApp">
                <h1 className="cardTitle">Recipe🍛</h1>
                {entries.map((entry, index) => (
                  <>
                    <div key={index}>{entry}</div>
                    <div>
                      <ul>
                        <h3>
                          Ingredients for Mushroom-Spinach Scrambled Eggs:
                        </h3>

                        <li>2 eggs</li>
                        <li>1/4 cup mushrooms (sliced)</li>
                        <li>1/4 cup spinach (chopped)</li>
                        <li>1 tbsp butter</li>
                        <li>Salt and pepper to taste</li>
                      </ul>
                      <h3>Instructions:</h3>
                      <p>
                        In a pan, melt butter over medium heat. Add sliced
                        mushrooms and sauté until tender. Stir in chopped
                        spinach and cook until wilted. Beat eggs in a bowl, then
                        pour them into the pan. Cook, stirring gently, until
                        eggs are just set. Season with salt and pepper to taste,
                        and serve hot.
                      </p>
                      <ul>
                        <h3>
                          Ingredients for Colombian Scrambled Eggs (Huevos
                          Pericos):
                        </h3>

                        <li>2 eggs 1/4 cup tomatoes (chopped)</li>
                        <li>1/4 cup green onions (chopped)</li>
                        <li>1 tbsp butter Salt and pepper to taste</li>
                        <h3>Instructions:</h3>
                        <p>
                          Melt butter in a pan over medium heat. Add chopped
                          tomatoes and green onions, sauté until soft. Beat eggs
                          in a bowl and pour into the pan. Stir continuously
                          until eggs are fully cooked. Season with salt and
                          pepper, and serve with arepas or toast.
                        </p>
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>

      <></>
    </div>
  );
}

export default App;
