function Options({ options, dispatch }) {
  return (
    <li className="options">
      {options.map((option, index) => (
        <button
          className="btn btn-option"
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </li>
  );
}

export default Options;
