import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function AddRecipes() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [preptime, setPreptime] = useState("");
  const [cooktime, setCooktime] = useState("");
  const [totaltime, setTotaltime] = useState("");

  function handleFileInputChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("title", title);
    data.append("description", description);
    data.append("author", author);
    data.append("ingredients", ingredients);
    data.append("instructions", instructions);
    data.append("preptime", preptime);
    data.append("cooktime", cooktime);
    data.append("totaltime", totaltime);

    fetch("http://localhost:8000/addrecipes", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    alert("Congratulations! Your recipe has been added!");
    window.location.reload();
  }
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
        </div>
        <section className="col add-form">
          <h1 className="title">
            <FontAwesomeIcon icon={faUtensils} style={{ color: "var(--primary-color)" }} size="sm" />
            recipe card
          </h1>
          <form onSubmit={handleSubmit} id="from-add-id" className="form-add-content" encType="multipart/form-data">
            <div className="add-form-group">
              <label htmlFor="title">Recipe Title</label>
              <input type="text" id="title" name="title" placeholder="Enter your title" value={title} onChange={(event) => setTitle(event.target.value)} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="desciption">Description</label>
              <textarea id="description" name="description" placeholder="Enter your desciption" form="from-add-id" rows="5" cols="55" value={description} onChange={(event) => setDescription(event.target.value)} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" name="author" placeholder="Enter your name" value={author} onChange={(event) => setAuthor(event.target.value)} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea id="ingredients" name="ingredients" placeholder="Enter your ingredients" form="from-add-id" rows="5" cols="55" value={ingredients} onChange={(event) => setIngredients(event.target.value)} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="directions">Instructions</label>
              <textarea id="directions" name="directions" placeholder="Enter your directions" form="from-add-id" rows="5" cols="55" value={instructions} onChange={(event) => setInstructions(event.target.value)} required />
            </div>

            <div className="add-form-group">
              <label htmlFor="preptime" style={{ fontSize: "15px" }}>
                Prep-Time
              </label>
              <input type="number" id="preptime" name="preptime" placeholder="mins" value={preptime} onChange={(event) => setPreptime(event.target.value)} required />
              <label htmlFor="cooktime" style={{ fontSize: "15px" }}>
                Cook-Time
              </label>
              <input type="number" id="cooktime" name="cooktime" placeholder="mins" value={cooktime} onChange={(event) => setCooktime(event.target.value)} required />
              <label htmlFor="totaltime" style={{ fontSize: "15px" }}>
                Total-Time
              </label>
              <input type="number" id="totaltime" name="totaltime" placeholder="mins" value={totaltime} onChange={(event) => setTotaltime(event.target.value)} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="image">Add Image</label>
              <input type="file" name="image" onChange={handleFileInputChange} />
            </div>

            <button className="add-recipe-button" type="submit">
              Add
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
