import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <ClipLoader color={"#f48225"} loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
      ) : (
        <div>
          <h1> react spinners </h1>
          <p>test!!!test!!!test!!!test!!!test!!!test!!!test!!!test!!!test!!!</p>
        </div>
      )}
    </div>
  );
};
export default Loading;
