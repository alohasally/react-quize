function PreviousButton({ index, dispatch }) {
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
