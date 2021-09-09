import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  public LogingLoading = false;
  loading = false;
  master: any;
  public nombre: string = ""


  constructor(private http: HttpClient, private router: Router, private notifier: NotifierService) {
    this.cargarStorage();
  }
  cargarStorage() {
    if (localStorage.joyeria) {
      this.master = JSON.parse(localStorage.joyeria);
      this.nombre = this.master.email;
    }
  }
  guardarStorage(data: any) {
    this.master = data;
    localStorage.setItem("joyeria", JSON.stringify(data));
  }
  showAlert(message: string, type: any) {
    this.notifier.notify(type, message);
  }
  cerrarSesion() {
    this.master = null;
    localStorage.removeItem("joyeria");
    this.router.navigateByUrl("/login");
  }
  tokenIsValid(status: number) {
    if (status === 401) {
      this.cerrarSesion();
      return false;
    }
    return true;
  }
  async login(data: any) {
    this.loading = true;
    return new Promise((resolve) => {
      this.http
        .post(`${environment.apiUrl}/auth/login`, data)
        .subscribe(
          (response: any) => {
            console.log(response);
            this.loading = false;
            const user = {
              ...response.data,
              token: response.data.api_token,
            };
            this.guardarStorage(user);
            setTimeout(() => (this.LogingLoading = false), 1500);
            resolve([true, null]);
          },
          (error: any) => {
            this.loading = false;
            this.showAlert("Error en las credenciales", "error");
            resolve([false, "Error en las credenciales"]);
          }
        );
    });
  }
  async getProductos() {
    this.loading = true;
    if (!this.master.token) {
      this.loading = false;
      this.router.navigateByUrl("/login");
    } else {
      this.loading = true;
      const headers = new HttpHeaders({ token: this.master.token });
      return new Promise((resolve) => {
        this.http
          .get(`${environment.apiUrl}/producto`, { headers })
          .subscribe(
            (response: any) => {
              this.loading = false;
              resolve([true, response.data]);
            },
            (error: any) => {
              this.loading = false;
              if (!this.tokenIsValid(error.status)) {
                this.showAlert("Error al cargar productos", "error");
              }
              resolve([false]);
            }
          );
      });
    }
  }
  async createProducto(data: any) {
    this.loading = true;
    const headers = new HttpHeaders({
      'Authorization': "Bearer " + this.master.token
    });
    return new Promise(resolve => {
      this.http.post(`${environment.apiUrl}/producto`, data, { headers }).subscribe((response: any) => {
        this.showAlert(response.data, 'success');
        resolve(true);
        this.loading = false;
      }, (error: any) => {
        this.loading = false;
        if (this.tokenIsValid(error.status)) {
          this.showAlert(error.error.data, 'error');
        }
        resolve(false);
      });
    });
  }
  async editProducto(id: any, body: any) {
    this.loading = true;
    const headers = new HttpHeaders({
      'Authorization': "Bearer " + this.master.token
    });
    return new Promise(resolve => {
      this.http.put(`${environment.apiUrl}/producto/${id}`, body, { headers }).subscribe((response: any) => {
        this.showAlert("Producto editado con exito", 'success');
        resolve(true);
        this.loading = false;
      }, (error: any) => {
        this.loading = false;
        if (!this.tokenIsValid(error.status)) {
          this.showAlert("Error al cargar productos", "error");
        }
        resolve([false]);
      });
    });
  }
  async deleteProducto(id: string) {
    this.loading = true;
    const headers = new HttpHeaders({ 'access-token': this.master.apiKey });
    return new Promise(resolve => {
      this.http.delete(`${environment.apiUrl}/producto/${id}`,).subscribe((response: any) => {
        this.loading = false;
        this.showAlert(response.data, 'success');
        resolve([true, response.data]);
      }, (error: any) => {
        this.loading = false;
        if (!this.tokenIsValid(error.status)) {
          this.showAlert(error.error.data, 'eror');
        }
        resolve([false])
      });
    })
  }
}
