import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private router: Router, private notifier: NotifierService) { }
  showAlert(message: string, type: any) {
    this.notifier.notify(type, message);

  }
}
