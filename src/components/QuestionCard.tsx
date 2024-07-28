import { Button, message } from "antd";
import { useEffect, useState } from "react";
import { Quetion, QuetionCardProps } from "../types/types";

const QuestionCard = ({
  quetions,
  setCurrect,
  currentQuetion,
  setCurrentQuetion,
  currect,
  setShowResult,
}: QuetionCardProps) => {
  const [complate, setComplate] = useState(false);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    getOptions();
  }, [currentQuetion]);

  const checkAnswer = () => {
    setComplate(true);
    if (quetions[currentQuetion - 1].correct_answer === selected) {
      messageApi.open({
        type: "success",
        content: "Currect Answer",
      });
      setCurrect(currect + 1);
    } else {
      messageApi.open({
        type: "error",
        content: "InCorrect Answer",
      });
      setError(
        `The correct answer of this quetion is ${
          quetions[currentQuetion - 1].correct_answer
        }`
      );
    }
  };

  const handleNext = () => {
    if (currentQuetion === 10) {
      setShowResult(true);
      return false;
    } else {
      setCurrentQuetion(currentQuetion + 1);
      setComplate(false);
      setError("");
      setSelected("");
    }
  };

  const suffle = (array: string[]) => {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const getOptions = () => {
    const quetion = quetions[currentQuetion - 1];
    let array = quetion.incorrect_answers.concat(quetion.correct_answer);
    array = suffle(array);
    setOptions(array);
  };

  return (
    <>
      {contextHolder}
      <div>
        <div className="que-wrapper">
          <h2 className="num">{currentQuetion}</h2>
          <p className="question">{quetions[currentQuetion - 1]?.question}</p>
        </div>
        <div className="row">
          {options.map((item, index) => (
            <Button
              key={index}
              disabled={complate}
              onClick={() => setSelected(item)}
              className={
                `btn-option ${
                  selected === item && !complate
                    ? "selected"
                    : complate && error.length && selected === item
                    ? "incurrect-option"
                    : complate && selected === item && !error.length
                    ? "currect-option"
                    : ""
                }` +
                `${
                  complate &&
                  item === quetions[currentQuetion - 1].correct_answer
                    ? " currect-option"
                    : ""
                }`
              }
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="description">
          {error && <p style={{ color: "green" }}>Description : {error}</p>}
        </div>
        <div className="btn-group">
          <Button
            className="btn-bottom"
            disabled={complate || !selected}
            onClick={() => checkAnswer()}
            type="primary"
          >
            Submit
          </Button>
          <Button
            className="btn-bottom"
            disabled={!complate || !selected}
            onClick={() => handleNext()}
            type="primary"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
