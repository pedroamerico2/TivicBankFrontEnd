import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../shared/service/user.service';

@Component({
  selector: 'app-modal-add-client',
  templateUrl: './modal-add-client.component.html',
  styleUrls: ['./modal-add-client.component.css'],
})
export class ModalAddClientComponent implements OnInit {
  person = {
    name: '',
    email: '',
    balance: 0,
  };

  constructor(
    private userService: UserService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  async saveNewClients() {
    if(this.person.name && this.person.email){
      await this.userService.postUser(this.person);
      this.activeModal.close();
    }else{
      this.activeModal.close();
    }
    
  }
  closeModal(){
    this.activeModal.close();
  }
}
