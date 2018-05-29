import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  orderId:string;

  constructor(private router:Router,private route:ActivatedRoute) { 
    this.orderId=route.snapshot.paramMap.get('id');
  }

  continueShopping(){
    this.router.navigate(['/']);
  }

 
}
