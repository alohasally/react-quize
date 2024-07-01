import Options from "./Options";

function Question({ questions, dispatch, index, answer }) {
  const question = questions[index];
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        <Options
          options={question.options}
          dispatch={dispatch}
          correct={question.correctOption}
          answer={answer}
        />
      </ul>
    </div>
  );
}

export default Question;
