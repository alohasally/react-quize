function Options({ options, dispatch, answer, correct }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer ? (index === correct ? "correct" : "wrong") : ""
          } `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {index}
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
