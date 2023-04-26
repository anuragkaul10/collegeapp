import CustomImage from "./CustomImage";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function RecipeCard({ recipe }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const MyPopup = () => {
    return ReactDOM.createPortal(
      <div className="popup">
        <div className="popup-inner">
          <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
              <img className="auther-img" src={recipe.authorImg} alt="" />
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-desc">{recipe.desc}</p>
              <label>Author:</label>
              <p className="recipe-desc">{recipe.authorName}</p>
              <label>Ingredients:</label>
              <p className="recipe-desc">{recipe.ingredients}</p>
              <label>Instructions:</label>
              <p className="recipe-desc">{recipe.directions}</p>
              <label>Prep Time:</label>
              <p className="recipe-desc">{recipe.preptime}</p>
              <label>Cook Time:</label>
              <p className="recipe-desc">{recipe.cooktime}</p>
              <label>Total Time:</label> <p className="recipe-desc">{recipe.totaltime}</p>
              <label>Servings:</label>
              <p className="recipe-desc">{recipe.servings}</p>
              <label>Calories:</label>
              <p className="recipe-desc">{recipe.calories}</p>
            </div>
          </div>
          <button className="close-btn" onClick={() => setButtonPopup(false)}>
            <b>X</b>
          </button>
        </div>
      </div>,
      document.getElementById("portal")
    );
  };
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="auther-img" src={recipe.authorImg} alt="" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-desc">{recipe.desc}</p>
        <button className="view-btn" onClick={() => setButtonPopup(true)}>
          VIEW RECIPE
        </button>
      </div>
      {buttonPopup && <MyPopup></MyPopup>}
    </div>
  );
}
