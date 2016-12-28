export interface QuestionType {
  TRUE_OR_FALSE: string;
  MCQ: string;
  TYPE_ANSWER: string;
}

export const QUESTION_TYPE: QuestionType = {
  TRUE_OR_FALSE: 'TRUE_FALSE',
  MCQ: 'MCQ',
  TYPE_ANSWER: 'TYPE_THE_ANSWER'
}


export interface AnswerType {
  CORRECT: string;
  POSSIBLE: string;
  TRUE: string;
  FALSE: string;
  EXPLANATION: string;
}

export const ANSWER_TYPE: AnswerType = {
  EXPLANATION: 'EXPLANATION',
  CORRECT: 'CORRECT_ANSWER',
  POSSIBLE: 'POSSIBLE_ANSWER',
  TRUE: 'TRUE',
  FALSE: 'FALSE'
}

export interface AnswerEvaluationType {
  NONE: number;
  CORRECT: number;
  WRONG: number;
}

export const ANSWER_EVALUATION_TYPE: AnswerEvaluationType = {
  NONE: 0,
  CORRECT: 1,
  WRONG: 2
}
