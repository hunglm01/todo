import { SET_THEME_COLOR } from './themeActions';

const initialState = {
  color: '#678c89', // Giá trị mặc định
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME_COLOR:
      return {
        color: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;