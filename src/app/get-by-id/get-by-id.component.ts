import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {

  constructor(private api: ContactService, private actRoute: ActivatedRoute, private router: Router){}
  id = 0;
  data: any = [];

  ngOnInit(){
    this.id = this.actRoute.snapshot.params['id'];
    this.api.getById(this.id).subscribe((res: any)=>{
      this.data = res;
    });
  }
}
