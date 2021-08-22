import { useState } from "react";
import "./write.css";
import axios from "axios";
import firebaseConfig from "../initFirebase";
export default function Write() {
  const [category, setCategory] = useState("Health");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const user = firebaseConfig.auth().currentUser;
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newPost = {
      username: user.displayName,
      title,
      desc,
      category,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <div className="image">
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        </div>
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
      <div className="writeFormGroup">
          <label id="category-label" for="category">Choose a Category : </label>
          <select name="category" id="category" onChange={(e)=> setCategory(e.target.value)}>
            <option value="Health">Health</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="writeFormGroup">
          <span id="category-label">Upload Image : </span>
          <label id="upload-icon" htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
