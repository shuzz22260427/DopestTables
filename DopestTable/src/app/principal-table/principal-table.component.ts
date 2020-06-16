import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {PopUpTableComponent} from '../pop-up-table/pop-up-table.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-principal-table',
  templateUrl: './principal-table.component.html',
  styleUrls: ['./principal-table.component.scss']
})
export class PrincipalTableComponent implements OnInit {

  

  prueba = [{'id': 117650424, 'name': 'kevin', 'brand': 'gay.com', 'category': 'gay', 'description': 'gay'}];
  isPopupOpened: boolean;

  constructor(private dialog?: MatDialog) { }

  ngOnInit(): void {
  }

  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(PopUpTableComponent, {
      data: {}
    });
    // Variables que recojen los datos directamente del entry
    const patiendID = (document.getElementById('1') as HTMLInputElement).value;
    const patientName = (document.getElementById('2') as HTMLInputElement).value;
    const patiendBrand = (document.getElementById('3') as HTMLInputElement).value;
    const patiendCategory = (document.getElementById('4') as HTMLInputElement).value;
    const patiendDesccription = (document.getElementById('5') as HTMLInputElement).value;


    // Este segmento vacia los entries
    (document.getElementById('1') as HTMLInputElement).value = '';
    (document.getElementById('2') as HTMLInputElement).value = '';
    (document.getElementById('3') as HTMLInputElement).value = '';
    (document.getElementById('4') as HTMLInputElement).value = '';
    (document.getElementById('5') as HTMLInputElement).value = '';

    

    // axios.post('linkToAdd', {
    //   idNumber: patiendID,
    //   fullName: patientName,
    //   brand: patiendBrand,
    //   category: patiendCategory,
    //   description: patiendDesccription,
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json; charset=UTF-8'
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error.response);
    //   });
    // window.location.reload();
    // dialogRef.afterClosed().subscribe(result => {
    //   this.isPopupOpened = false;
    // });
  }
  editContact(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(PopUpTableComponent, {
      
    });
    // Variables que recojen los datos directamente del entry
    const patiendID = (document.getElementById('1') as HTMLInputElement).value;
    const patientName = (document.getElementById('2') as HTMLInputElement).value;
    const patiendBrand = (document.getElementById('3') as HTMLInputElement).value;
    const patiendCategory = (document.getElementById('4') as HTMLInputElement).value;
    const patiendDesccription = (document.getElementById('5') as HTMLInputElement).value;


    // Este segmento vacia los entries
    (document.getElementById('w1') as HTMLInputElement).value = '';
    (document.getElementById('w2') as HTMLInputElement).value = '';
    (document.getElementById('w3') as HTMLInputElement).value = '';
    (document.getElementById('w4') as HTMLInputElement).value = '';
    (document.getElementById('w5') as HTMLInputElement).value = '';

    axios.post('linkToAdd', {
      idNumber: patiendID,
      fullName: patientName,
      brand: patiendBrand,
      category: patiendCategory,
      description: patiendDesccription,
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    window.location.reload();
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  deleteContact(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(PopUpTableComponent, {
      data: {}
    });
    // Variables que recojen los datos directamente del entry
    const patiendID = (document.getElementById('1') as HTMLInputElement).value;
    const patientName = (document.getElementById('2') as HTMLInputElement).value;
    const patiendBrand = (document.getElementById('3') as HTMLInputElement).value;
    const patiendCategory = (document.getElementById('4') as HTMLInputElement).value;
    const patiendDesccription = (document.getElementById('5') as HTMLInputElement).value;


    // Este segmento vacia los entries
    (document.getElementById('w1') as HTMLInputElement).value = '';
    (document.getElementById('w2') as HTMLInputElement).value = '';
    (document.getElementById('w3') as HTMLInputElement).value = '';
    (document.getElementById('w4') as HTMLInputElement).value = '';
    (document.getElementById('w5') as HTMLInputElement).value = '';

    axios.post('linkToAdd', {
      idNumber: patiendID,
      fullName: patientName,
      brand: patiendBrand,
      category: patiendCategory,
      description: patiendDesccription,
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    window.location.reload();
    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  }


