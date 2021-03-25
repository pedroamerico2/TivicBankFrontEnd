import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-modal-balance-client',
  templateUrl: './modal-balance-client.component.html',
  styleUrls: ['./modal-balance-client.component.css']
})
export class ModalBalanceClientComponent implements OnInit {

  @Input() name: any;
  @Input() balance: any;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  closeModalBalance(){
    this.activeModal.close();
  }

}
