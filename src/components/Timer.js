import { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = Math.floor(secondsRemaining % 60);

  useEffect(() => {
    const timer = function () {
      setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    };
    timer();
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {min} : {sec}
    </div>
  );
}

export default Timer;
