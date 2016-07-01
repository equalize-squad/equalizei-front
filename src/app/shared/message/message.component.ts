import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() title: String;
  @Input() message: String;

  constructor() {}

  ngOnInit() {}
}
