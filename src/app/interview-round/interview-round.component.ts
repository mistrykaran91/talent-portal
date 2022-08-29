import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InterviewRoundIconTextMap } from '../models/interview-round-icon-text.map';
import { InterviewRound } from '../models/interview-round.model';

@Component({
  selector: 'app-interview-round',
  templateUrl: './interview-round.component.html',
  styleUrls: ['./interview-round.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterviewRoundComponent {
  @Input()
  interviewRound: InterviewRound;

  InterviewRoundIconTextMap = InterviewRoundIconTextMap;

  get interViewRoundTextAndIcon() {
    if (this.interviewRound) {
      const data = InterviewRoundIconTextMap.get(this.interviewRound.status);
      return { ...data };
    }
    return null;
  }

  get interviewRoundLabel() {
    return this.interViewRoundTextAndIcon.label;
  }

  get interviewRoundIcon() {
    return this.interViewRoundTextAndIcon.icon;
  }
}
