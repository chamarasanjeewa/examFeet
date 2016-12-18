import { Observable } from 'rxjs/Rx';

export abstract class QuestionAnswerComponent {

   abstract getAnswer(): Observable<any>;
}
