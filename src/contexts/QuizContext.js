import React, { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const SECS_PER_QUESTION = 30;

function reducer(state, action) {
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

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalQuestionNumber = questions.length;
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(function () {
    async function fetchQuestion() {
      try {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestion();
  }, []);

  //   useEffect(function () {
  //     fetch("http://localhost:9000/questions")
  //       .then((res) => res.json())
  //       .then((data) => dispatch({ type: "dataReceived", payload: data }))
  //       .catch((err) => dispatch({ type: "dataFailed" }));
  //   }, []);

  return (
    <QuizContext.Provider
      value={
        ({
          questions,
          status,
          index,
          answer,
          points,
          highscore,
          secondsRemaining,
          totalQuestionNumber,
          totalPoints,
        },
        dispatch)
      }
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
