import React from "react";

const SECS_PER_QUESTION = 30;

export default function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return;
    case "dataFailed":
      return;
    case "start":
      return;
    case "newAnswer":
      return;
    case "nextQuestion":
      return;
    case "finish":
      return;
    case "restart":
      return;
    case "tick":
      return;

    default:
      throw new Error("Action unkonwn");
  }
}
