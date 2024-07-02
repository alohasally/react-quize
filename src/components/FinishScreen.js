function FinishScreen({ highscore, points, totalPoints }) {
  const percentage = (points / totalPoints) * 100;

  let emoji;
  if (percentage === 0) emoji = "🥹";
  if (percentage >= 0 && percentage < 50) emoji = "😂";
  if (percentage >= 50 && percentage < 80) emoji = "🙂";
  if (percentage >= 80 && percentage < 100) emoji = "😉";
  if (percentage === 100) emoji = "🤗";

  return (
    <>
      <div className="result">
        <p>
          {emoji}
          you scored <strong>{points}</strong> out of {totalPoints} (
          {Math.ceil(percentage)}%)
        </p>
        <p>your highscore is {highscore}</p>
      </div>
    </>
  );
}

export default FinishScreen;
