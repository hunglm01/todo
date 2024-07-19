// Action Types
export const SET_THEME_COLOR = 'SET_THEME_COLOR';

// Action Creators
export const setThemeColor = (color) => ({
  type: SET_THEME_COLOR,
  payload: color,
});