import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = Math.floor(secondsRemaining % 60);
  const minSet = String(min).padStart(2, "0");
  const secSet = String(sec).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {minSet} : {secSet}
    </div>
  );
}

export default Timer;
