import React, { useState } from "react";
import db from "../../firebase"

const AdminProjects = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [newTech, setNewTech] = useState("");

  const addProject = (e) =>{
    e.preventDefault();
    console.log("dodaj projekt")
  }
  const addTechnology = (e) =>{
    e.preventDefault();
    try{
      setTechnologies([...technologies,newTech]);
      setNewTech("");
    }catch{
      alert("Napaka pri povezavi!")
    }
  }

  return <main id="admin-projects">
    <h2>Add new project</h2>
    <p>{technologies.map(item =>(
      <span>{item}, </span>
    ))}</p>
    <form onSubmit={addTechnology} className="form-add-project">
      <input type="text" name="new-tech" id="new-tech" placeholder="Add Technology" onChange={e=>setNewTech(e.target.value)} />
      <button type="submit">Add Technology</button>
    </form>
    <form onSubmit={addProject} className="form-add-project">
      <input type="text" name="title" id="title" placeholder="Title" onChange={e=>setDescription(e.target.value)} />
      <input type="text" name="description" id="description" placeholder="Description" onChange={e=>setDescription(e.target.value)} />
      <input type="text" name="website-link" id="website-link" placeholder="Website link" onChange={e=>setWebsite(e.target.value)} />
      <input type="text" name="github-link" id="github-link" placeholder="Github link" onChange={e=>setGithub(e.target.value)} />
      <button type="submit">Add Project</button>
    </form>
  </main>;
};

export default AdminProjects;
