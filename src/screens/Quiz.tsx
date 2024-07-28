import axios from "axios";
import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import ResultCom from "../components/Result";
import Start from "../components/Start";
import { Spin } from "antd";

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuetion, setCurrentQuetion] = useState(0);
  const [currect, setCurrect] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const getQuetions = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://opentdb.com/api.php?amount=10");
      setQuestions(res.data.results);
      setCurrect(0);
      setLoading(false);
      setCurrentQuetion(1);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="content">
      <h1 className="heading">Quiz Application</h1>
      <div className="form_container flex-cl">
        <div style={{ width: "100%" }}>
          {currentQuetion === 0 && !loading && (
            <Start getQuetions={getQuetions} />
          )}
          {!showResult && currentQuetion > 0 && currentQuetion <= 10 && (
            <QuestionCard
              quetions={questions}
              setCurrect={setCurrect}
              currentQuetion={currentQuetion}
              currect={currect}
              setCurrentQuetion={setCurrentQuetion}
              setShowResult={setShowResult}
            />
          )}
          {showResult && (
            <ResultCom
              setCurrect={setCurrect}
              setCurrentQuetion={setCurrentQuetion}
              currect={currect}
              setShowResult={setShowResult}
            />
          )}
          {loading && (
            <div className="flex-cl">
              <Spin size="large" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
