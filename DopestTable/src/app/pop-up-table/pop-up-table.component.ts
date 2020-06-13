import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-table',
  templateUrl: './pop-up-table.component.html',
  styleUrls: ['./pop-up-table.component.scss']
})
export class PopUpTableComponent implements OnInit {

  public _contactForm: FormGroup;


  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<PopUpTableComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}
