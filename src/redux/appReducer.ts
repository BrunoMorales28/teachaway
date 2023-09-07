import actions from "../components/GalleryPanel/actions";
import CONSTANTS from "../constants";
import { gallerySection, gallerySort, galleryWindow, reduxState } from "../types";

const initialState: reduxState = {
  currentSection: CONSTANTS.SECTIONS.HOT as gallerySection,
  currentWindow: CONSTANTS.TIME_WINDOWS.DAY as galleryWindow,
  sortedBy: CONSTANTS.SORT_OPTIONS.VIRAL as gallerySort,
  showViral: true,
};

const appReducer = (state = initialState, action: { type: string; payload: boolean | gallerySection | gallerySort | galleryWindow }): reduxState => {
  if (action.type === actions.setCurrentSection) return { ...state, currentSection: action.payload as gallerySection };
  if (action.type === actions.sort) return { ...state, sortedBy: action.payload as gallerySort };
  if (action.type === actions.setTimeWindow) return { ...state, currentWindow: action.payload as galleryWindow };
  if (action.type === actions.toggleShowViral) return { ...state, showViral: !state.showViral };
  return state;
};

export default appReducer;
