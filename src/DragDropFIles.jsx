import React, { useState } from "react";
import { ImPlus } from "react-icons/im";
const DragDropFIles = () => {
  const [files, setFiles] = useState(null);
  const [image, setImage] = useState("");

  const convertToBase64 = (e) => {
    var render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0]);
    render.onload = () => {
      console.log(render.result);
      setImage(render.result);
    };
    render.onerror = (error) => {
      console.log("error", error);
    };
  };

  function upLoadImage() {
    fetch(`https://ruby-lucky-dhole.cyclic.cloud/gallery/create`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ base64: image }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  const handleDragOver = () => {};
  const handleDrop = () => {};
  return (
    <>
      {!files && (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h3>Drag and Drop files to Upload</h3>
          <h2>Or</h2>
          <input
            accept="image/*"
            type="file"
            multiple
            onChange={convertToBase64}
          />
          {image ? <img width={50} height={50} src={image} alt="" /> : ""}
        </div>
      )}
      <button onClick={upLoadImage} className="drag-btn">
        Click to Add
      </button>
    </>
  );
};

export default DragDropFIles;
