import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, dispatch, index, answer } = useQuiz();
  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>
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
