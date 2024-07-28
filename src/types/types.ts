export interface ResultProps {
  currect: number;
  setCurrect: any;
  setShowResult: any;
  setCurrentQuetion: any;
}

export interface StartProps {
  getQuetions: () => void;
}

export interface Quetion {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export interface QuetionCardProps {
  quetions: Quetion[];
  setCurrect: any;
  currentQuetion: number;
  setCurrentQuetion: any;
  currect: number;
  setShowResult: any;
}
