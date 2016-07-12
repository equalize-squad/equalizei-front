import { Component, OnInit, Input } from '@angular/core';

import { Message, MessageType } from './index';

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message = null;
  @Input() type: MessageType = null;
  @Input() title: String = null;
  @Input() description: String = null;

  constructor() {}

  ngOnInit() {
    if(!this.message && this.type && this.title && this.description) {
      this.message = new Message(this.type, this.title, this.description);
    }
    if(this.message && (!this.message.type || !this.message.title || !this.message.description)) {
        this.message = null;
    }
  }
}