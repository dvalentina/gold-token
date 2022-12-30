import { useState, useEffect } from "react";

const useEllipsis = () => {
  const [ellipsis, setEllipsis] = useState("...");

  useEffect(() => {
    function nextState() {
      if (ellipsis.length < 3) {
        setEllipsis((previous) => previous + ".");
      } else {
        setEllipsis("");
      }
    }

    const interval = setInterval(() => nextState(), 1000);

    return () => clearInterval(interval);
  });

  return { ellipsis };
};

export default useEllipsis;
