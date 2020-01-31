import { createStore } from "redux";

const initialState = {
  photos: [],
  currentView: "AllPhotos",
  selectedPhoto: ""
};

export const goHome = () => ({
  type: "GO_HOME"
});

export const selectPhoto = (imgIndex, imgSrc) => ({
  type: "SELECT_PHOTO",
  imgIndex,
  imgSrc
});

export const storePhoto = photos => ({
  type: "STORE_PHOTO",
  photos
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GO_HOME":
      return {
        photos: state.photos,
        currentView: "AllPhotos",
        selectedPhoto: state.selectedPhoto
      };
    case "SELECT_PHOTO":
      return {
        photos: state.photos,
        currentView: "SinglePhoto",
        selectedPhoto: action.imgSrc
      };
    case "STORE_PHOTO":
      return {
        photos: action.photos,
        currentView: state.currentView,
        selectedPhoto: state.selectedPhoto
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
