import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
export default function AddRecipes() {
  const [form, setForm] = useState({});
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/addrecipes", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <div className="section">
        <div className="col add-img">
          <div className="image-container">
            <img src="/images/addrecipe/1.jpg" alt="no image"></img>
            <div className="overlay">
              <div className="text">Homemade Gondi</div>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/addrecipe/2.jpg" alt="no image"></img>
            <div className="overlay">
              <div className="text">Homemade Cookies</div>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/addrecipe/3.jpg" alt="no image"></img>
            <div className="overlay">
              <div className="text">Homemade Manchurian</div>
            </div>
          </div>
          {/* <img src="/images/addrecipe/2.jpg" alt="no image" />
          <img src="/images/addrecipe/3.jpg" alt="no image" /> */}
        </div>
        <section className="col add-form">
          <h1 className="title">
            <FontAwesomeIcon icon={faUtensils} style={{ color: "var(--primary-color)" }} size="sm" />
            recipe card
          </h1>
          <form onSubmit={handleSubmit} id="from-add-id" className="form-add-content">
            <div className="add-form-group">
              <label htmlFor="title">Recipe Title</label>
              <input type="text" id="title" name="title" placeholder="Enter your title" onChange={handleForm} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="desciption">Description</label>
              <textarea id="description" name="description" placeholder="Enter your desciption" form="from-add-id" rows="5" cols="55" onChange={handleForm} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" name="author" placeholder="Enter your name" onChange={handleForm} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea id="ingredients" name="ingredients" placeholder="Enter your ingredients" form="from-add-id" rows="5" cols="55" onChange={handleForm} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="directions">Instructions</label>
              <textarea id="directions" name="directions" placeholder="Enter your directions" form="from-add-id" rows="5" cols="55" onChange={handleForm} required />
            </div>

            <div className="add-form-group">
              <label htmlFor="preptime" style={{ fontSize: "15px" }}>
                Prep-Time
              </label>
              <input type="number" id="preptime" name="preptime" placeholder="mins" onChange={handleForm} required />
              <label htmlFor="cooktime" style={{ fontSize: "15px" }}>
                Cook-Time
              </label>
              <input type="number" id="cooktime" name="cooktime" placeholder="mins" onChange={handleForm} required />
              <label htmlFor="totaltime" style={{ fontSize: "15px" }}>
                Total-Time
              </label>
              <input type="number" id="totaltime" name="totaltime" placeholder="mins" onChange={handleForm} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="image">Add Image</label>
              <input type="file" id="image" name="image" onChange={handleForm} required />
            </div>

            <button className="add-recipe-button" type="submit">
              Add
            </button>
          </form>
        </section>
      </div>
      <div className="or-text">--OR-- </div>
      <div className="link-section">
        <label htmlFor="or-text">Adapt Link:</label>
        <form action="">
          <input type="text" id="author" name="or-text" placeholder="Paste your link" onChange={handleForm} required />
          <button className="add-recipe-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
