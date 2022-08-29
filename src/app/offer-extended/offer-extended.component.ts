import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { Candidature } from '../models/candidature.model';

@Component({
  selector: 'app-offer-extended',
  templateUrl: './offer-extended.component.html',
  styleUrls: ['./offer-extended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferExtendedComponent {
  @Input()
  candidatures: Candidature[];

  constructor(public dialog: MatDialog) {}

  OnEditComment(candidature: Candidature) {
    this.dialog.open(CommentDialogComponent, {
      width: '50%',
      height: '50%',
      data: {
        candidature
      }
    });
  }
}
