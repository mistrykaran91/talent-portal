import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Candidature } from '../models/candidature.model';

@Component({
  selector: 'app-rejected-prospect-container',
  templateUrl: './rejected-prospect.component.html',
  styleUrls: ['./rejected-prospect.component.scss']
})
export class RejectedProspectComponent {
  @Input()
  candidatures: Candidature[];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.candidatures, event.previousIndex, event.currentIndex);
  }
}
