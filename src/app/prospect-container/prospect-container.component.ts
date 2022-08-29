import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Candidature } from '../models/candidature.model';

@Component({
  selector: 'app-prospect-container',
  templateUrl: './prospect-container.component.html',
  styleUrls: ['./prospect-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProspectContainerComponent {
  @Input()
  candidatures: Candidature[];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.candidatures, event.previousIndex, event.currentIndex);
  }
}
