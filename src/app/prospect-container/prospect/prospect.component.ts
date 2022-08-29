import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from 'src/app/comment-dialog/comment-dialog.component';
import { Candidature } from 'src/app/models/candidature.model';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProspectComponent {
  @Input()
  candidature: Candidature;

  constructor(public dialog: MatDialog) {}

  OnEditComment() {
    this.dialog.open(CommentDialogComponent, {
      width: '50%',
      height: '50%',
      data: {
        candidature: this.candidature
      }
    });
  }
}
