import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { totalQuestionNumber, index, answer, points, totalPoints } = useQuiz;

  return (
    <header className="progress">
      <progress
        max={totalQuestionNumber}
        value={answer ? index + 1 : index}
      ></progress>
      <p>
        Question : {index + 1} / {totalQuestionNumber}
      </p>
      <p>
        {points} / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
