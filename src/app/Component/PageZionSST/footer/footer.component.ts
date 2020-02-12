import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SSOService } from 'src/app/service/sso.service';
import { Router} from '@angular/router';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  closeResult: string;
  year: string;
  date = new Date();


  constructor(
    private ssoService: SSOService,
    private router: Router,
    private modalBootstrapService : NgbModal
  ) { 
    this.year = formatDate(this.date, 'yyyy', 'en-US');
  }

  ngOnInit() {
  }



  OnLogin(){
    localStorage.removeItem("CONFIRMPAYMENT");
    this.ssoService.LogOut();
    this.router.navigate(['']);
  }

  isLogin() {
    let nickname: string = this.ssoService.getValue('LOGIN_NICKNAME');
    if (nickname === undefined || nickname === '' || nickname === null) {
      return false;
    } else {
      return true;
    }
  }

  private getDismissReason(reason: any): string{
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
