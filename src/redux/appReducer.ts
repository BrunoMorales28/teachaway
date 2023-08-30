import actions from "../components/SectionPanel/actions";
import CONSTANTS from "../constants";
import { reduxState } from "../types";

const initialState = {
  currentSection: CONSTANTS.SECTIONS.HOT,
  showViral: true,
};

const appReducer = (state = initialState, action: { type: string; payload: string }): reduxState => {
  if (action.type === actions.setCurrentSection) return { ...state, currentSection: action.payload };
  if (action.type === actions.toggleShowViral) return { ...state, showViral: !state.showViral };
  return state;
};

export default appReducer;
