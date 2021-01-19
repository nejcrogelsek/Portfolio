import React, { useState } from "react";
import { toast } from "react-toastify";
import db, { storage } from "../../firebase";
import firebase from "firebase";

const AdminProjects = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [newTech, setNewTech] = useState("");

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImage = (e) => {
    e.preventDefault();
    if (image) {
      const uploadImage = storage.ref(`projects/${image.name}`).put(image);
      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage
            .ref("projects")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              toast.success("Image successfully added.");
            });
          setImage(null);
          setProgress(0);
        }
      );
    }
  };

  const addProject = (e) => {
    e.preventDefault();
    db.collection("projects")
      .add({
        title: title,
        description: description,
        website: website,
        github: github,
        technologies: technologies,
        url: url,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        toast.success("New project added.");
        setTitle("");
        setDescription("");
        setWebsite("");
        setGithub("");
        setTechnologies([]);
        setNewTech("");
        setUrl("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const addTechnology = (e) => {
    e.preventDefault();
    try {
      setTechnologies([...technologies, newTech]);
      setNewTech("");
    } catch {
      alert("Napaka pri povezavi!");
    }
  };

  return (
    <main id='admin-projects'>
      <h2>Add new project</h2>
      <p>
        {technologies.map((item) => (
          <span key={item}>{item}, </span>
        ))}
      </p>
      <form onSubmit={addTechnology} className='form-admin-project'>
        <input
          type='text'
          name='new-tech'
          id='new-tech'
          placeholder='Add Technology'
          onChange={(e) => setNewTech(e.target.value)}
        />
        <button type='submit'>Add Technology</button>
      </form>
      <h3>Add project image</h3>
      <form onSubmit={handleImage} className='form-admin-project'>
        <input
          type='file'
          name='image'
          id='image'
          onChange={handleFileChange}
        />
        <button type='submit'>Add Image</button>
      </form>
      <span>Image upload progess:</span> <progress max='100' value={progress} />
      <form onSubmit={addProject} className='form-admin-project'>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          name='description'
          id='description'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='text'
          name='website-link'
          id='website-link'
          placeholder='Website link'
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type='text'
          name='github-link'
          id='github-link'
          placeholder='Github link'
          onChange={(e) => setGithub(e.target.value)}
        />
        <button type='submit'>Add Project</button>
      </form>
    </main>
  );
};

export default AdminProjects;
