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
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "previousQuestion":
      return {
        ...state,
        index: action.payload,
        answer: state.answer,
        status: state.index === 0 ? "ready" : "active",
      };
    case "nextQuestion":
      return {
        ...state,
        index: action.payload,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return;
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining <= 0 ? "finised" : "active",
      };

    default:
      throw new Error("Action unkonwn");
  }
}
