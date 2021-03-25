import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-modal-deposit-client',
  templateUrl: './modal-deposit-client.component.html',
  styleUrls: ['./modal-deposit-client.component.css']
})
export class ModalDepositClientComponent implements OnInit {

  @Input() name: any;
  @Input() balance: any;
  @Input() email: any;

  deposit = 0
  
  constructor(private activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
  }
  async depositOnClient(name: string, balance:number, email:string, deposit:number){
    let restultDeposit = balance + deposit;
    let person = {
      name: name,
      email: email,
      balance: restultDeposit,
    }
    await this.userService.updateUser(person);
    this.activeModal.close();

  }

  closeModalDeposit(){
    this.activeModal.close();
  }
}
