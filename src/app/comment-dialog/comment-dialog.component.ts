import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidature } from '../models/candidature.model';
import { CandidatureService } from '../services/candidature.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentDialogComponent {
  commentFormControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    private candidatureService: CandidatureService,
    @Inject(MAT_DIALOG_DATA) public data: { candidature: Candidature }
  ) {
    this.commentFormControl.setValue(this.data.candidature.comment);
  }

  onSaveComment() {
    this.candidatureService.updateComment({ comment: this.commentFormControl.value, id: this.data.candidature.id });
  }
}
