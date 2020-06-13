import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-table',
  templateUrl: './principal-table.component.html',
  styleUrls: ['./principal-table.component.scss']
})
export class PrincipalTableComponent implements OnInit {

  

  prueba = [{'id': 117650424, 'name': 'kevin', 'brand': 'gay.com', 'category': 'gay', 'description': 'gay'}];

  constructor() { }

  ngOnInit(): void {
  }

}
