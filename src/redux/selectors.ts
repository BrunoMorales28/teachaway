import { reduxState } from "../types";

export const selectSection = (state: reduxState) => state.currentSection;

export const selectTimeWindow = (state: reduxState) => state.currentWindow;

export const selectSorting = (state: reduxState) => state.sortedBy;

export const selectShowViral = (state: reduxState) => state.showViral;
