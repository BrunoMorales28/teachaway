import actions from "../components/SectionPanel/actions";
import CONSTANTS from "../constants";
import { gallerySection, reduxState } from "../types";



const initialState: reduxState = {
  currentSection: CONSTANTS.SECTIONS.HOT as gallerySection,
  showViral: true,
};

const appReducer = (state = initialState, action: { type: string; payload: boolean | gallerySection }): reduxState => {
  if (action.type === actions.setCurrentSection) return { ...state, currentSection: action.payload as gallerySection };
  if (action.type === actions.toggleShowViral) return { ...state, showViral: !state.showViral };
  return state;
};

export default appReducer;
