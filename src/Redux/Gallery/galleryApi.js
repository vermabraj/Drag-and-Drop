import axios from "axios";

export const getGalleryApi = async () => {
  let res = await axios.get("https://ruby-lucky-dhole.cyclic.cloud/gallery");
  return res.data;
};

export const deleteGalleryApi = async (id) => {
  let res = await axios.delete(
    `https://ruby-lucky-dhole.cyclic.cloud/gallery/delete/${id}`
  );
  return res.data;
};

export const addGalleryApi = async (payload) => {
  let res = await axios.post(
    "https://ruby-lucky-dhole.cyclic.cloud/gallery/create",
    payload,

  );
  return res.data;
};