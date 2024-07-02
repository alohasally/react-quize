function NextButton({ index, dispatch, answer, totalQuestionNumber }) {
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
