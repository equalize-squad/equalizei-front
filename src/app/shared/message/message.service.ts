import { Injectable, EventEmitter, Output } from '@angular/core';
import { Message } from './message.model';

@Injectable()
export class MessageService {
  @Output() public messenger = new EventEmitter<Message>();
  constructor() {}
  public show(message: Message): void {
       this.messenger.emit(message);
   }
}