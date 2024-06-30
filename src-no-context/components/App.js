import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import reducer from "./Reducer";

const SECS_PER_QUESTION = 30;

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

export default function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    //  fetch("http://localhost:9000/questions")
    //   .then((res) => res.json())
    //   .then((data) => dispatch({ type: "dataReceived", payload: data }))
    //   .catch((err) => dispatch({ type: "dataFailed" }));
    try {
      async function fetchQuestion() {
        const res = await fetch("http://localhost:9000/questions");
        const data = await res.json();
      }
    } catch (error) {}
    fetchQuestion();
  }, []);

  return <div className="app"></div>;
}
