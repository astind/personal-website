import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'any'
})
export class CommandService {

  private serverUrl = "ws://localhost:8122";
  private connection: WebSocketSubject<any> | null = null;

  constructor() {
    console.log('new instance');
   }


  connect(): Observable<any> {
    if (this.connection !== null) {
      return this.connection;
    } else {
      this.connection = webSocket(this.serverUrl);
      return this.connection;
    }
  }

  send(msg: any){
    if (this.connection) {
      this.connection.next(msg);
    } else {
      console.error('Need to open connection first');
    }
  }
}
