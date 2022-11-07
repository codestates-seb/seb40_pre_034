const initialState = [];

const answers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANSWER":
      return Object.assign([], state, action.answer);
    case "REMOVE_ANSWER":
      return state.filter((answer) => answer.answerId !== action.answerId);
    default:
      return state;
  }
};

export default answers;
