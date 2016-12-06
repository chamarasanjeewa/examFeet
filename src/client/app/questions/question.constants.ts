/*
export const QUESTION_TYPE: any = {
  TRUE_OR_FALSE: 'TRUE_FALSE',
  MCQ: 'MCQ',
  TYPE_ANSWER: 'TYPE_THE_ANSWER';
};
*/

// export class QUESTION_TYPE {
//    public static API_ENDPOINT: any = { 
//       a : 1,
//       b : 2
//      };
// }


// 'use strict';
// export const TRUE_OR_FALSE: string = 'TRUE_FALSE';
// export const MCQ: string = 'MCQ';
// export const TYPE_ANSWER: string = 'TYPE_THE_ANSWER';

// export class AppSettings {
//    public static get API_ENDPOINT(): string { return 'http://127.0.0.1:6666/api/'; }
// }

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

