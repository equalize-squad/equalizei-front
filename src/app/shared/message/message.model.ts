import { MessageType } from './message-type.type';
export class Message {
  constructor(public type?: MessageType, public title?: String, public description?: String) {}
}
