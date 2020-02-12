import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {
  closeResult: string;
  name: string;
  statusModalSend: boolean = true;
  islog: boolean = true;
  constructor(

  ) { }

  isLogin(){
    this.islog = !this.islog;
    console.log(this.islog)
  }
  modalSendClose() {
    console.log(this.statusModalSend)
    this.statusModalSend = !this.statusModalSend;
  }
  
  ngOnInit() {
  }

}
