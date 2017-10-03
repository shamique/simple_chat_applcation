import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket:any
  public myUserId: string;
  chats = [];
  chat_input:string;

  constructor(public navCtrl: NavController) {
    if(this.myUserId == null){
        this.myUserId = Date.now().toString();
    }

    this.socket = io('http://localhost:3000');

    this.Receive();
  }

    send(msg) {
        if(msg != ''){
            let saltedMsg = this.myUserId+"#"+msg;
            this.socket.emit('message', saltedMsg);
        }
        this.chat_input = '';
    }

    Receive(){
        this.socket.on('message', (msg) => {

        let saletdMsgArr = msg.split('#'); 
        var item = {};
        
        if(saletdMsgArr[0] == this.myUserId){
            item = {"styleClass": "chat-message right", "msgStr": saletdMsgArr[1]};
        }
        else{
            item = {"styleClass": "chat-message left", "msgStr": saletdMsgArr[1]};
        }

        this.chats.push(item);

        });

    }

}