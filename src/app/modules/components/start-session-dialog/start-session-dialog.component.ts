import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-start-session-dialog',
  templateUrl: './start-session-dialog.component.html',
  styleUrls: ['./start-session-dialog.component.scss']
})
export class StartSessionDialogComponent {
  description: string;
  constructor(
    public dialogRef: MatDialogRef<StartSessionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  startSession(value) {
    this.dialogRef.close(value);
  }

}
