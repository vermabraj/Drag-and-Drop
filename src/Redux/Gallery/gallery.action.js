import {
  ADD_GALLERY_SUCCESS,
  GALLERY_GET_DELETE,
  GALLERY_GET_ERROR,
  GALLERY_GET_LOADING,
  GALLERY_GET_SUCCESS,
} from "./gallery.types";

import { addGalleryApi, deleteGalleryApi, getGalleryApi } from "./galleryApi";

export const getGallery = () => async (dispatch) => {
  dispatch({ type: GALLERY_GET_LOADING });
  try {
    let data = await getGalleryApi();

    dispatch({ type: GALLERY_GET_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GALLERY_GET_ERROR });
  }
};

export const addGallery = (payload) => async (dispatch) => {
  dispatch({ type: GALLERY_GET_LOADING });
  try {
    console.log(payload);
    let data = await addGalleryApi(payload);

    dispatch({ type: ADD_GALLERY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GALLERY_GET_ERROR });
  }
};

export const deleteGallery = (id) => async (dispatch) => {
  try {
    let data = await deleteGalleryApi(id);
    dispatch({
      type: GALLERY_GET_DELETE,
      payload: id,
    });
    dispatch(getGallery());
  } catch (e) {
    dispatch({
      type: GALLERY_GET_ERROR,
      payload: e,
    });
  }
};

