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


export interface McqQuestionAnswerType {
  CORRECT: string;
  POSSIBLE: string;
}

export const MCQ_QUESTION_ANSWER_TYPE: McqQuestionAnswerType = {
  CORRECT: 'CORRECT_ANSWER',
  POSSIBLE: 'POSSIBLE_ANSWER'
}

export interface TrueFalseQuestionAnswerType {
  TRUE: string;
  FALSE: string;
}

export const TRUE_FALSE_QUESTION_ANSWER_TYPE: TrueFalseQuestionAnswerType = {
  TRUE: 'TRUE',
  FALSE: 'FALSE'
}