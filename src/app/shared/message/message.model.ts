import { MessageType } from './message-type.enum';
export class Message {
  constructor(public type?: MessageType, public title?: String, public description?: String) {}
}