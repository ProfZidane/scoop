import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-warehouse-management',
  templateUrl: './warehouse-management.component.html',
  styleUrls: ['./warehouse-management.component.css']
})
export class WarehouseManagementComponent implements OnInit {
wareHouses;
dtTrigger: Subject<any> = new Subject<any>();
wareHouseInfo = {
  ville : '',
  adresse : '',
  telephone : '',
  email : '',
  status : 'Choisir un status...'
};
  constructor(private router: Router, private wareService: WarehouseService) { }

  ngOnInit(): void {
    this.GetWareHouses();
  }

  Back() {
    this.router.navigateByUrl('/home');
  }

  GetWareHouses() {
    this.wareService.GetWarehouse().subscribe(
      (data) => {
        console.log(data);
        this.wareHouses = data.entrepots;
        this.dtTrigger.next();
      }, (err) => {
        console.log(err);
        if (err.error.message === 'Unauthenticated') {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/');
        }
      }
    );
  }

  CreateWarehouse(event) {
    console.log(this.wareHouseInfo);
    this.wareService.SetWarehouse(this.wareHouseInfo).subscribe(
      (success) => {
        console.log(success);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
