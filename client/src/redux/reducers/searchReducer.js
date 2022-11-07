const initialState = "";

const search = (state = initialState, action) => {
  switch (action.type) {
    case "SET_KEYWORD":
      return action.keyword;
    default:
      return state;
  }
};

export default search;
