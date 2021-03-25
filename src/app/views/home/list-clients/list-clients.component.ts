import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/service/user.service';
import { ModalAddClientComponent } from '../modal-add-client/modal-add-client.component';
import { ModalDeleteClientComponent } from '../modal-delete-client/modal-delete-client.component';
import { ModalBalanceClientComponent } from '../modal-balance-client/modal-balance-client.component';
import { ModalDepositClientComponent } from '../modal-deposit-client/modal-deposit-client.component';
import { ModalWithdrawClientComponent } from '../modal-withdraw-client/modal-withdraw-client.component';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
})
export class ListClientsComponent implements OnInit {
  users: Array<any> | undefined;

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => console.log(error)
    );
  }
  openModalAdd() {
    const modalRef = this.modalService.open(ModalAddClientComponent, {
      size: 'lg',
    });
    modalRef.result.then(() => {
      this.getUsers();
    });
  }
  openModalDelete(name:any) {
    const modalRef = this.modalService.open(ModalDeleteClientComponent, {
      size: 'md',
    });
    modalRef.componentInstance.name = name;
    modalRef.result.then(() => {
      this.getUsers();
    });
  }
  openModalBalance(balance:any, name:any) {
    const modalRef = this.modalService.open(ModalBalanceClientComponent, {
      size: 'md',
    });
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.balance = balance;
    modalRef.result.then(() => {
      this.getUsers();
    });
  }
  openDepositClient(balance: number, name: any, email: any) {
    const modalRef = this.modalService.open(ModalDepositClientComponent, {
      size: 'md',
    });
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.email = email;
    modalRef.componentInstance.balance = balance;
    modalRef.result.then(() => {
      this.getUsers();
    });
  }
  openWhithDrawClient(balance: number, name: any, email: any) {
    const modalRef = this.modalService.open(ModalWithdrawClientComponent, {
      size: 'md',
    });
    modalRef.componentInstance.name = name;
    modalRef.componentInstance.email = email;
    modalRef.componentInstance.balance = balance;
    modalRef.result.then(() => {
      this.getUsers();
    });
  }
}
