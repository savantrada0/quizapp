import React from "react";
import { Button } from "antd";
import { StartProps } from "../types/types";

const Start = ({ getQuetions }: StartProps) => {
  return (
    <div className="flex-cl">
      <h2>Click On Start Button To Start Quiz</h2>
      <Button
        className="start-btn"
        onClick={getQuetions}
        type="primary"
        size="large"
      >
        Start
      </Button>
    </div>
  );
};

export default Start;
