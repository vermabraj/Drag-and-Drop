import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./Redux/store";

import { deleteGallery, getGallery } from "./Redux/Gallery/gallery.action";
import { saveAs } from "file-saver";
function List() {
  const { loading, data } = useSelector((store) => store.gallery);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteGallery(id));
  };
  const downloadImg=(image)=>{
    saveAs(image,"image.png")
  }
  useEffect(() => {
    dispatch(getGallery());
  }, []);
  console.log("data", data);
  return (
    <div style={{ margin: "50px" }}>
      <div className="listItem">
        {data.map((item, i) => (
          <div key={i}>
            <img height={100} width={100} src={item.image} alt="image" />
            <div>
              <button onClick={()=>downloadImg(item.image)}>Download</button>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
