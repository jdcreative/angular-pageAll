import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { SSOService } from 'src/app/service/sso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZionSST';
  closeResult: string;

  constructor(
    private ssoService: SSOService,
    private router: Router,
    private modalBootstrapService: NgbModal
  ) { }

  isLogin() {
    let nickname: string = this.ssoService.getValue('LOGIN_NICKNAME');
    if (nickname === undefined || nickname === '' || nickname === null) {
      return false;
    } else {
      return true;
    }
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
