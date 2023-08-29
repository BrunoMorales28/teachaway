import actions from "./components/GalleryPanel/actions";
import CONSTANTS from "./constants";

const initialState = {
  currentSection: CONSTANTS.SECTIONS.HOT,
};

const appReducer = (state = initialState, action: any) => {
  if (action.type === actions.setCurrentSection) return { ...state, currentSection: action.payload };
  return state;
};

export default appReducer;
