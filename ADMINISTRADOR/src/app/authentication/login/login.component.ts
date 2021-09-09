import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { FullComponent } from "../../layouts/full/full.component";
import { RequestService } from "../../services/request.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  login = {
    email: "",
    password: "",
    recuerdame: true,
    isAdmin: 1
  };
  constructor(public router: Router, private requestServ: RequestService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    /*$(function() {
            $(".preloader").fadeOut();
        });
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });*/
  }

  async onLoggedin() {
    this.requestServ.LogingLoading = true
    const response = await this.requestServ.login(this.login)
    if (response[0]) {
      this.router.navigateByUrl('/dashboard');
    }

  }
  async recuperarcontra() {
    this.router.navigateByUrl("/restaurar");

  }
}
