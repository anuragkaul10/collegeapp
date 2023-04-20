import { useState } from "react";
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
      <div className="main-add">
        <section className="add-form">
          <form onSubmit={handleSubmit} id="from-add-id">
            <h2>Add Your Recipe</h2>
            <div className="add-form-group">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" placeholder="Enter your title" onChange={handleForm} required />
            </div>
            <div className="add-form-group">
              <label htmlFor="desciption">Description</label>
              <textarea id="description" name="description" placeholder="Enter your desciption" form="from-add-id" rows="5" cols="55" onChange={handleForm} required />
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
    </>
  );
}
