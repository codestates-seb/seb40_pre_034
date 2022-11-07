const ADD_ANSWER = "ADD_ANSWER";
const REMOVE_ANSWER = "REMOVE_ANSWER";

export const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  answer: answer,
});

export const removeAnswer = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId: answerId,
});
