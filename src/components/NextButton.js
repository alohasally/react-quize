import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { index, dispatch, answer, totalQuestionNumber } = useQuiz();

  if (answer === null) return;

  if (index < totalQuestionNumber - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion", payload: index + 1 })}
      >
        Next
      </button>
    );

  if (index === totalQuestionNumber - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
