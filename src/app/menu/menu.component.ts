import { Component, OnInit } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dropdown = false;
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost
    data: 'Financement',
    effectAllowed: 'all',
    disable: false,
    handle: false
  };

  dndData = {
    fn: 'Financement',
    sl: 'Achats/Ventes',
    cm: 'Campagne',
  };
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  ManageAccount() {
    this.router.navigateByUrl('/account-management');
  }

  // tslint:disable-next-line:typedef
  ManageWarehouse() {
    this.router.navigateByUrl('/warehouse-management');
  }


  start(event) {
    console.log(event);
    event.dataTransfer.effectAllowed = true;
  }

  onDragStart(event: DragEvent) {

    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {

    console.log('drag ended', JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {

    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {

    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event: DragEvent) {

    console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event: DragEvent) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {

    console.log('dragover', JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {

    console.log('dropped', JSON.stringify(event, null, 2));
  }

}
