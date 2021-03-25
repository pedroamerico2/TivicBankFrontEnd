import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-modal-withdraw-client',
  templateUrl: './modal-withdraw-client.component.html',
  styleUrls: ['./modal-withdraw-client.component.css']
})
export class ModalWithdrawClientComponent implements OnInit {
  @Input() name: any;
  @Input() balance: any;
  @Input() email: any;

  withdraw = 0
  

  constructor(private activeModal: NgbActiveModal, private userService: UserService) { }

  ngOnInit(): void {
  }

  async withDrawOnClient(name: string, balance:number, email:string, withdraw:number){
    if(withdraw > balance){
      alert("Não é possivel realizar o saque pois seu saldo é de: R$" + balance)
    }else{
      let restultDeposit = balance - withdraw;
      let person = {
        name: name,
        email: email,
        balance: restultDeposit,
      }
      await this.userService.updateUser(person);
      this.activeModal.close();
    }
  }

  closeWithDrawOnClient(){
    this.activeModal.close();
  }
}
