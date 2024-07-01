function NextButton({ index, dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion", payload: index + 1 })}
    >
      Next
    </button>
  );
}

export default NextButton;
