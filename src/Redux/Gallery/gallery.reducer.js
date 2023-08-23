import {
  ADD_GALLERY_SUCCESS,
  GALLERY_GET_DELETE,
  GALLERY_GET_ERROR,
  GALLERY_GET_LOADING,
  GALLERY_GET_SUCCESS,
} from "./gallery.types";

let initState = {
  loading: false,
  error: false,
  data: [],
};

const GalleryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GALLERY_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GALLERY_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GALLERY_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case ADD_GALLERY_SUCCESS: {
      return {
        ...state,
        payload,
      };
    }
    case GALLERY_GET_DELETE: {
      return {
        ...state,
        data: state.data.filter((product) => product._id !== payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default GalleryReducer;
