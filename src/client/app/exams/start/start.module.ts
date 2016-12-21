import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModule } from '../question/question.module';
//import { PipeModule } from '../../core/pipes/pipe.module';
import { DurationPipe } from '../../core/pipes/durationPipe';
import { TryComponent, StartComponent,BeforeStartComponent  } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, QuestionModule],
    declarations: [TryComponent, StartComponent, DurationPipe,BeforeStartComponent],
    exports: [TryComponent, StartComponent, DurationPipe,BeforeStartComponent]
})

export class StartModule {}
