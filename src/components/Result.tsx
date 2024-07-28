import { Button, Result } from "antd";
import { useEffect } from "react";
import { ResultProps } from "../types/types";
import { SmileOutlined } from "@ant-design/icons";

const ResultCom = ({
  currect,
  setCurrect,
  setCurrentQuetion,
  setShowResult,
}: ResultProps) => {
  const onRestart = () => {
    setCurrect(0);
    setCurrentQuetion(0);
    setShowResult(false);
  };

  return (
    <Result
      icon={<SmileOutlined />}
      title="Quiz is complated here is result."
      extra={
        <div className="result">
          <div className="result-txt">
            <p>Total Quetions : 10</p>
            <p>Currect Answer : {currect}</p>
            <p>Wrong Answer : {10 - currect}</p>
          </div>
          <Button type="primary" onClick={() => onRestart()}>
            Start Again
          </Button>
        </div>
      }
    />
  );
};

export default ResultCom;
