import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  titulo: string;
  titleSuscription: Subscription; 


  constructor(private _loginService:LoginService) { 
    
    this.titleSuscription= this._loginService.getTitulo().subscribe((titulo)=>{
      this.titulo=titulo; // Cada vez que el título cambia se actualiza por medio del suscribe
    });

  }

  ngOnInit() {
   
  }
  ngOnDestroy(): void {
    this.titleSuscription.unsubscribe(); // Se utiliza el evento OnDestroy para desuscribirse
  }


}
