import { LoadingService } from './loading.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-loading-spinner-rxjs-material';

  loading$ = this.loader.loading$;

  constructor(public loader : LoadingService, private http : HttpClient){}
  fetchUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
      console.log(res);
    });
  }
}
