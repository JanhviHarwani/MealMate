import React from "react";
import Card from "./Card";
import './RecipeForm.css'

function RecipeForm({ getData }) {
  const onSubmitHandler = (data) => {
    data.preventDefault();

    let finalData = [];
    for (let i = 0; i < 5; i++) {
      finalData.push(data.target[i].value);
    }
    getData(finalData);
  };
  return (
    <Card>
    <React.Fragment>
      <form
        className="customClass"
        onSubmit={(data) => {
          onSubmitHandler(data);
        }}
      > 
      <div className="customDiv">
        <label className="customField" htmlFor="food_items">
          All the Ingredients: 
        </label>
        <input className="customField" type="text" id="food_items" />
        </div>
        <br />
        <br />
        <div className="customDiv">
        <label className="customField" htmlFor="spice_level">
          Please Select Your Spice Level:
        </label>
        <select className="customField" id="spice_level">
            <option value={"Low Heat"}>Low Heat</option>
            <option value={"Medium Heat"}>Medium Heat</option>
            <option value={"Spicy"}>Spicy</option>
          </select>
        </div>
        <br />
        <br />
        <div className="customDiv">
        <label className="customField" htmlFor="cuisine">
          Preferred Cuisine:
        </label>
          <input className="customField" type="text" id="cuisine" />
        </div>
        <br />
        <br />
        <div className="customDiv">
        <label className="customField" htmlFor="is_veg">
          What do you prefer?
        </label>
          <select className="customField" id="is_veg">
            <option value={"is_veg"}>Vegeterian</option>
            <option value={"is_non_veg"}>Non-Vegeterian</option>
          </select>
        </div>
        <br />
        <br />
        <div className="customDiv">
        <label className="customField" htmlFor="allergy">
          Do you have any allergies?
        </label>
          <input className="customField" type="text" id="allergy" />
        </div>
        <br />
        <br />
        <button className="submitButton" type="submit">⭐🌟 GET RECIPE 🌟⭐</button>
      </form>
    </React.Fragment>
    </Card>
  );
}

export default RecipeForm;
