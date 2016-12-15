export interface QuestionType {
  TRUE_OR_FALSE: string;
  MCQ: string;
  TYPE_ANSWER: string;
}

export const QUESTION_TYPE: QuestionType = {
  TRUE_OR_FALSE: 'TRUE_FALSE',
  MCQ: 'MCQ',
  TYPE_ANSWER: 'TYPE_THE_ANSWER'
};
