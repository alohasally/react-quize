import React from "react";

const SECS_PER_QUESTION = 30;

export default function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        status: "error",
      };
    case "start":
      return {
        ...state,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        status: "active",
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    case "nextQuestion":
      return {
        ...state,
        index: action.payload,
      };
    case "finish":
      return;
    case "restart":
      return;
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
      };

    default:
      throw new Error("Action unkonwn");
  }
}
