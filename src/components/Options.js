import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { options, dispatch, answer, correct } = useQuiz();
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer ? (index === correct ? "correct" : "wrong") : ""
          } `}
          disabled={hasAnswer}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
