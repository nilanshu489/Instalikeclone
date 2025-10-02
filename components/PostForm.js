import React, { useState } from "react";
import "./PostForm.css";

function PostForm({ addPost }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  function handleImageChange(e) {
    setImage(e.target.value);
    setPreview(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (caption && image) {
      addPost({ image, caption, id: Date.now() });
      setCaption("");
      setImage("");
      setPreview("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      {preview && (
        <img
          className="preview-img"
          src={preview}
          alt="Preview"
          width={60}
          height={60}
        />
      )}
      <input
        type="text"
        value={image}
        onChange={handleImageChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        value={caption}
        onChange={e => setCaption(e.target.value)}
        placeholder="Caption"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
}
export default PostForm;
