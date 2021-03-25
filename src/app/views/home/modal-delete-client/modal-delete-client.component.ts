import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../shared/service/user.service';

@Component({
  selector: 'app-modal-delete-client',
  templateUrl: './modal-delete-client.component.html',
  styleUrls: ['./modal-delete-client.component.css']
})
export class ModalDeleteClientComponent implements OnInit {

  @Input() name: any;

  constructor(private userService: UserService,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  async deleteClient(name:string) {
    await this.userService.deleteUser(name).subscribe((data:any)=>this.userService=data);
    this.activeModal.close();
  }
  closeModal(){
    this.activeModal.close();
  }
}
