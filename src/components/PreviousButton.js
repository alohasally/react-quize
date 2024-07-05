import { useQuiz } from "../contexts/QuizContext";

function PreviousButton() {
  const { index, dispatch } = useQuiz();
  return (
    <button
      className="btn"
      onClick={() => dispatch({ type: "previousQuestion", payload: index - 1 })}
    >
      Previous
    </button>
  );
}

export default PreviousButton;
