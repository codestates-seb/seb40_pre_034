import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
import styled from "styled-components";

export const Test = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 850px;
  width: 1700px;
`;

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Test>
      <ClipLoader color={"#f48225"} loading={loading} size={100} />
    </Test>
  );
};
export default Loading;
