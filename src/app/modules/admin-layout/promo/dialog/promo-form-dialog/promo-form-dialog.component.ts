import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-promo-form-dialog',
  templateUrl: './promo-form-dialog.component.html',
  styleUrls: ['./promo-form-dialog.component.scss']
})
export class PromoFormDialogComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<PromoFormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      description: new FormControl(null, []),
      type: new FormControl(null, [])
    });
  }
  get description() {
    return this.form.get('description');
  }
  get type() {
    return this.form.get('type');
  }
  ngOnInit() {
  }
  onSubmit() {
    this.dialogRef.close(this.form.value);
  }

}
