import actions from "./components/SectionPanel/actions";
import CONSTANTS from "./constants";
import { reduxState } from "./types";

const initialState = {
  currentSection: CONSTANTS.SECTIONS.HOT,
};

const appReducer = (state = initialState, action: { type: string; payload: string }): reduxState => {
  if (action.type === actions.setCurrentSection) return { ...state, currentSection: action.payload };
  return state;
};

export default appReducer;
