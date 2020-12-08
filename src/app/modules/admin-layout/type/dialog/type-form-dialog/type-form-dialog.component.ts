import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-type-form-dialog',
  templateUrl: './type-form-dialog.component.html',
  styleUrls: ['./type-form-dialog.component.scss']
})
export class TypeFormDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<TypeFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.form = new FormGroup(
      {
        description: new FormControl(null, [])
      }
    );
  }
  get description() {
    return this.form.get('description');
  }

  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
