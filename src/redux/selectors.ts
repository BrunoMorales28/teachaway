import { reduxState } from "../types";

export const selectSection = (state: reduxState) => state.currentSection;

export const selectShowViral = (state: reduxState) => state.showViral;
